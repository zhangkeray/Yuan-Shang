<template>
  <v-row :column="$vuetify.breakpoint.mdAndDown">
    <date-picker
      v-model="dates"
      type="date"
      :disabled="disabled"
      range
      placeholder="請選擇日期"
      value-type="format"
      format="YYYY-MM-DD"
      style="
        font-size: 12px;
        margin-left: 145px;
        margin-top: 10px;
        position: absolute;
        z-index: 4;
        width: 202px;
      "
      :disabled-date="notBeforeTodayTwelveOClock"
      @change="dateRange"
    ></date-picker>
    <!-- <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="auto"
      ><template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="dateRangeText"
          label=""
          readonly
          dense
          v-bind="attrs"
          v-on="on"
          style="
            font-size: 12px;
            margin-left: 160px;
            margin-top: 10px;

            position: absolute;
            z-index: 999999;
          "
        >
          <v-icon
            slot="prepend"
            small
            dense
            style="line-height: 22px"
            v-model="date"
          >
            mdi-calendar
          </v-icon>
        </v-text-field>
      </template>
      <v-date-picker
        no-title
        :disabled="disabled"
        v-model="dates"
        range
        :active-picker.sync="activePicker"
        locale="zh-tw"
        :max="
          new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
            .toISOString()
            .substr(0, 10)
        "
        min="2010-01-01"
      >
        <v-btn text color="primary" @click="dateRange" :disabled="disabled">
          確定 </v-btn
        ><sanp class="error-date">{{ errorM }}</sanp></v-date-picker
      >
    </v-menu> -->

    <v-col cols="12" lg="12" style="border: 1px solid rgba(0, 0, 0, 0)">
      <div>
        <div
          ref="lineBarChart"
          id="lineBarChart001"
          style="height: 335px; width: 1050px"
        ></div>
        <v-progress-linear
          v-model="valueDeterminate"
          :active="show"
          color="indigo darken-2"
          style="width: 975px"
        ></v-progress-linear>
        <v-row>
          <v-col cols="11"
            ><div style="margin: 12px 0px 0px 0px">
              {{ loadingname }}{{ messageDate }}{{ percentage }}{{ timeleft }}
            </div></v-col
          >
          <v-col cols="1" class=""
            ><v-btn
              @click="stopRes"
              color="error"
              :loading="loading"
              :disabled="loading"
              :class="btushow"
              style="margin: 5px 0px 0px 12px"
              >中斷</v-btn
            ></v-col
          >
        </v-row>
        <div id="echart-loading-cover" class="d-none"></div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import * as echarts from 'echarts'
import axios from 'axios'
export default {
  data: () => ({
    url: 'http://127.0.0.1:5000/api/normal',
    url1: 'http://127.0.0.1:5000/api/change/roi',
    loadingname: '',
    loading: false,
    disabled: true,
    // dates: ['2022-06-01', '2022-06-01'],
    dates: ['', ''],
    controller: null, // axios 辨識ID
    output: [],
    date: [],
    menu: false,
    outputLast: {},
    loadingnumber: 0,
    activePicker: null,
    Currently: 0, // 紀錄目前進度
    datalist: null,
    downloadTime: null,
    timeleft: null,
    intervalTime: null,
    // 進度計算
    valueDeterminate: 0,
    show: true,
    totledata: 0,
    finish: 0,
    percentage: 0,
    sum: 0,
    errorM: '',
    // 最低溫度
    minOutput: [],
    minoutputLast: [],
    // 平均溫度
    avgOutput: [],
    avgoutputLast: [],
    messageDate: null,
    btushow: 'btudis',
  }),
  computed: {
    dateRangeText() {
      var datess = this.dates
      datess = datess.sort()
      return datess.join(' ~ ')
    },
  },
  mounted() {
    // 上線要解除這邊的註解
    this.dates = [
      new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
    ]
    this.myChartinit()
    this.drawBar(this.dates)
    this.getAPI(this.dates[0])
  },
  watch: {
    finish(data) {
      var sum = (this.finish / this.totledata) * 100 * 0.8
      this.valueDeterminate = sum
      if (sum >= 80) {
        if (this.loading) {
          this.loadingname = '中斷作業中，請稍後...'
        } else {
          this.loadingname = '資料下載完成，正在處理標記資料....'
        }
        this.messageDate = null
        setTimeout(() => {
          if (this.loading) {
            this.loadingname = '中斷作業執行完成，可重新選擇日期'
          } else {
            this.loadingname = '資料處理完成!'
          }
          clearInterval(this.intervalTime)
          this.timeleft = null
          this.percentage = '(' + 100.0 + '%)'
          this.valueDeterminate = 100
          setTimeout(() => {
            this.Currently = null
            this.loading = false
            this.btushow = 'btudis'
            this.show = false
            this.loadingname = ''
            this.percentage = null
            this.disabled = false
          }, 3000)
        }, 2000)
      }
      this.sum = sum
      if (this.intervalTime !== null) {
        clearInterval(this.intervalTime)
      }

      var now = new Date()
      var lefttime = this.downloadTime
      // this.timeleft = `${this.downloadTime}:${now}`
      var timeleft1 =
        ((this.totledata - this.finish) *
          (now.getTime() - lefttime.getTime())) /
        1000
      this.intervalTime = setInterval(() => {
        // console.log('oks')
        timeleft1 = timeleft1 - 1
        var timeleft2 = this.getDuration(timeleft1.toFixed(0))
        if (this.finish > 2) {
          if (timeleft1 < 4) {
            this.timeleft = ` (少於3秒)`
          } else {
            this.timeleft = ` (預計剩餘:${timeleft2})`
          }
        }
        this.downloadTime = now
      }, 1000)
      this.percentage = `[${this.finish}/${this.totledata}](${sum.toFixed(1)}%)`
      this.percentage = `[${this.finish}/${this.totledata}]`
    },
    output(data1) {
      // console.log(data1.length)
      if (data1.length > 0) {
        var data = data1
        var arr = {}
        // 處理time key
        data.forEach((index) => {
          Object.keys(index).forEach((key) => {
            arr[key] = []
          })
        })
        // 處理max key
        data.forEach((index) => {
          Object.keys(index.max).forEach((key) => {
            arr.max[key] = []
          })
        })
        // 處理資料
        data.forEach((index) => {
          index.time.forEach((time) => {
            arr.time.push(time)
          })
        })
        // 在指定時間中塞入value
        Object.keys(arr.max).forEach((key) => {
          data.forEach((index) => {
            var ae = index.max[key]
            if (ae !== undefined) {
              ae.forEach((value) => {
                arr.max[key].push(value)
              })
            } else {
              var nulltime = index.time
              nulltime.forEach(() => {
                arr.max[key].push(null)
              })
            }
          })
        })
        this.outputLast = arr
      }
    },
    outputLast(data) {
      // console.log(data)
      // 將處理好的數據丟給echarts
      if (JSON.parse(JSON.stringify(data)).time.length > 0) {
        this.echartsCrr(data)
      }
      if (this.sum >= 80) {
        this.changPoint(data)
      }
      // console.log(JSON.parse(JSON.stringify(data)).time.length)
    },
    minOutput(data1) {
      if (data1.length > 0) {
        // 處理time key
        var data = data1
        var arr = {}
        data.forEach((index) => {
          Object.keys(index).forEach((key) => {
            arr[key] = []
          })
        })
        // 處理max key
        data.forEach((index) => {
          Object.keys(index.min).forEach((key) => {
            arr.min[key] = []
          })
        })
        // 處理資料
        data.forEach((index) => {
          index.time.forEach((time) => {
            arr.time.push(time)
          })
        })
        // 在指定時間中塞入value
        Object.keys(arr.min).forEach((key) => {
          data.forEach((index) => {
            var ae = index.min[key]
            if (ae !== undefined) {
              ae.forEach((value) => {
                arr.min[key].push(value)
              })
            } else {
              var nulltime = index.time
              nulltime.forEach(() => {
                arr.min[key].push(null)
              })
            }
          })
        })
        this.minoutputLast = arr
      }
    },
    minoutputLast(data) {
      if (JSON.parse(JSON.stringify(data)).time.length > 0) {
        const calendar = document.getElementById('lineLowChart')
        const myChart = echarts.getInstanceByDom(calendar)
        var data1 = JSON.parse(JSON.stringify(data))
        var time = data1.time
        var min = data.min
        var arr = []
        Object.keys(min).forEach((key) => {
          arr.push({
            name: key,
            data: min[key],
            type: 'line',
            yAxisIndex: 0,
            symbolSize: 1,
          })
        })
        var displaytotle = time.length - 50
        myChart.setOption({
          dataZoom: [
            {
              startValue: displaytotle,
              endValue: time.length,
            },
          ],
          xAxis: {
            data: time,
          },
          series: arr,
        })
      }
    },
    avgOutput(data1) {
      if (data1.length > 0) {
        // 處理time key
        var data = data1
        var arr = {}
        data.forEach((index) => {
          Object.keys(index).forEach((key) => {
            arr[key] = []
          })
        })
        // 處理max key
        data.forEach((index) => {
          Object.keys(index.avg).forEach((key) => {
            arr.avg[key] = []
          })
        })
        // 處理資料
        data.forEach((index) => {
          index.time.forEach((time) => {
            arr.time.push(time)
          })
        })
        // 在指定時間中塞入value
        Object.keys(arr.avg).forEach((key) => {
          data.forEach((index) => {
            var ae = index.avg[key]
            if (ae !== undefined) {
              ae.forEach((value) => {
                arr.avg[key].push(value)
              })
            } else {
              var nulltime = index.time
              nulltime.forEach(() => {
                arr.avg[key].push(null)
              })
            }
          })
        })
        this.avgoutputLast = arr
      }
    },
    avgoutputLast(data) {
      if (JSON.parse(JSON.stringify(data)).time.length > 0) {
        const calendar = document.getElementById('lineAvgChart')
        const myChart = echarts.getInstanceByDom(calendar)
        var data1 = JSON.parse(JSON.stringify(data))
        var time = data1.time
        var avg = data.avg
        var arr = []
        Object.keys(avg).forEach((key) => {
          arr.push({
            name: key,
            data: avg[key],
            type: 'line',
            yAxisIndex: 0,
            symbolSize: 1,
          })
        })
        var displaytotle = time.length - 50
        myChart.setOption({
          dataZoom: [
            {
              startValue: displaytotle,
              endValue: time.length,
            },
          ],
          xAxis: {
            data: time,
          },
          series: arr,
        })
      }
      // console.log(data)
    },
    Currently(data) {
      // 如果資料異動，則執行API請求
      // console.log(data)
      if (data < this.totledata && data !== null) {
        this.getAPI(this.datalist[data])
      }
    },
  },
  methods: {
    stopRes() {
      this.finish = this.totledata
      this.Currently = null
      this.loading = true
      this.controller.abort()
    },
    changPoint(data) {
      var time = data.time
      var timeKey = []
      var max = data.max
      // 列出全部物件

      time.forEach((index, value) => {
        timeKey.push(index)
      })
      var output = []
      Object.keys(max).forEach((key) => {
        var data1 = []
        max[key].forEach((value) => {
          var value1 = 'N/A'
          if (value != null) {
            value1 = value.toFixed(1)
          }
          var data2 = {
            value: value1,
            point: 0,
          }
          data1.push(data2)
          // console.log(value)
        })
        // avgKey.push(key)
        output.push({
          name: key,
          type: 'line',
          yAxisIndex: 0,
          data: data1,
          symbolSize: 1,
          markLine: {
            symbol: ['none', 'none'],
            label: {
              show: false,
            },
            lineStyle: {
              width: 3,
            },
            data: [],
          },
        })
      })
      const chartDom = this.$refs.lineBarChart
      const myChart = echarts.init(chartDom) // echarts初始化
      var DataStartDay1 = new Date(this.dates[0])
      var DataStartDay = DataStartDay1.getFullYear()
      // DataStartDay =
      //   DataStartDay.getFullYear() +
      //   '-' +
      //   (DataStartDay.getMonth() + 1) +
      //   '-' +
      //   DataStartDay.getDate()
      // var DataEndDay = new Date(this.dates[1])
      // DataEndDay.setDate(DataEndDay.getDate() + 1)
      // DataEndDay =
      //   DataEndDay.getFullYear() +
      //   '-' +
      //   (DataEndDay.getMonth() + 1) +
      //   '-' +
      //   DataEndDay.getDate()
      // console.log(DataStartDay, DataEndDay)
      // 標記修改
      axios({
        method: 'post',
        url: this.url1,
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify([
          {
            // table_timeselectStart: DataStartDay,
            // table_timeselectStop: DataEndDay,
            table_timeselectStart: DataStartDay + '-01-01',
            table_timeselectStop: DataStartDay + '-12-31',
          },
        ]),
      })
        .then((params) => {
          var data = params.data
          var res = []
          data.forEach((re) => {
            res.push(re.table_change_start)
          })
          var uniqueArr = [...new Set(res)]
          uniqueArr.sort(function (a, b) {
            if (a < b) {
              return -1
            } else {
              return 1
            }
          })
          // console.log(uniqueArr)
          var time = []
          data.forEach((index, value) => {
            var dt = new Date(index.table_change_start)
            var su = 0
            timeKey.forEach((indexe, value) => {
              var nw = new Date(indexe)
              if (dt.getTime() > nw.getTime()) {
                su = su + 1
              }
            })
            time.push({
              object: index.table_itemName,
              time: index.table_change_start,
              correspond: su,
              table_change_status: index.table_change_status,
            })
          })
          var ar = []
          time.forEach((index, value) => {
            ar[index.object] = []
          })
          time.forEach((index, value) => {
            ar[index.object].push({
              xAxis: index.correspond,
              data: index.time,
            })
          })
          var output1 = []
          Object.keys(ar).forEach((key) => {
            var are = {
              name: key,
              markLine: {
                symbol: ['none', 'none'],
                label: {
                  show: false,
                },
                lineStyle: {
                  width: 3,
                },
                data: ar[key],
              },
            }
            output1.push(are)
          })

          output1.forEach((index) => {
            var result = $.map(output, function (item, index) {
              return item.name
            }).indexOf(index.name)
            var data = index.markLine.data
            data.forEach((el) => {
              if (result >= 0) {
                if (output[result].data[el.xAxis] !== undefined) {
                  // 塞入上一個修改日期
                  var result01 = uniqueArr.indexOf(el.data)
                  if (result01 !== 0) {
                    result01 = result01 - 1
                  } else if (result01 === 0) {
                    // 如果為第一個日期，則在呼叫前一年的資料，最大呼叫到前三年
                    // 這邊因為axios無法同步請求，所以改用ajax要往前的資料
                    var lastReqStatus = true
                    // var lastReqMax = 0
                    for (var i = 1; i <= 3; i++) {
                      if (lastReqStatus) {
                        var lastyear = new Date(DataStartDay1)
                        lastyear.setFullYear(lastyear.getFullYear() - i)
                        lastyear = lastyear.getFullYear()
                        const lastdata = $.ajax({
                          method: 'post',
                          url: this.url1,
                          async: false, // 關閉異步處理(主要是要這個功能才用ajax)
                          dataType: 'json',
                          contentType: 'application/json; charset=UTF-8',
                          data: JSON.stringify([
                            {
                              // table_timeselectStart: DataStartDay,
                              // table_timeselectStop: DataEndDay,
                              table_timeselectStart: `${lastyear}-01-01`,
                              table_timeselectStop: `${lastyear}-12-31`,
                            },
                          ]),
                        })
                        var resultdata = lastdata.responseJSON
                        if (resultdata.length > 0) {
                          result01 =
                            resultdata[resultdata.length - 1].table_change_start
                          lastReqStatus = false
                        }
                      }
                    }
                  }
                  var lasttime = null
                  if (typeof result01 === 'string') {
                    lasttime = result01
                  } else {
                    lasttime = uniqueArr[result01]
                  }

                  // console.log("last:"+lasttime,"now:"+el.data)
                  //
                  output[result].data[el.xAxis].point = {
                    now: el.data,
                    last: lasttime,
                  }
                }
              }
            })
          })
          // console.log(output)
          myChart.setOption({
            series: output,
          })
          myChart.setOption({
            series: output1,
          })
        })
        .catch((err) => {
          console.log(err)
        })
      // end
    },
    dateRange() {
      if (this.dates[0] !== null) {
        if (this.dates.length <= 1) {
          var arr = this.dates
          arr.push(this.dates[0])
          this.dates = arr
        }
        // console.log(this.dates)
        this.errorM = ''
        this.totledata = 0
        this.finish = 0
        this.show = true
        this.percentage = 0
        this.output = []
        this.minOutput = []
        this.avgOutput = []
        this.outputLast = { time: [] }
        this.menu = false
        this.disabled = true
        var input = this.dates
        this.drawBar(input)
      }
    },
    myChartinit() {
      const chartDom = this.$refs.lineBarChart
      const myChart = echarts.init(chartDom) // echarts初始化
      const colorPalette = ['#37484C', '#9aa2a4', '#d8dddd', '#E6E8E9']
      var option
      // 選擇圖表樣式------------------------------------------
      option = {
        title: {
          left: '-6',
          text: '最高溫度與區間比較',
          textStyle: {
            fontFamily: 'Arial',
            fontSize: '14',
            fontWeight: '700',
            color: '#505f62',
          },
        },
        // tooltip: {
        //   trigger: 'axis',

        //   triggerOn: 'click',
        //   enterable:true,

        //   formatter: '{a}:{c}',
        //   axisPointer: {
        //     type: 'cross',
        //     crossStyle: {
        //       color: '#999',
        //     },
        //   },
        // },

        tooltip: {
          axisPointer: {
            type: 'cross',
          },
          className: 'echarts-tooltip-vivew',
          // triggerOn: 'click', // 触发方式
          // alwaysShowContent:true,   // 鼠标离开区域不消失
          trigger: 'axis',
          position(pos, params, el, elRect, size) {
            var obj = []
            if (pos[0] < size.viewSize[0] / 2) {
              obj[0] = pos[0] + 20
            } else {
              obj[0] = pos[0] - (size.contentSize[0] + 20)
            }
            if (pos[1] < size.viewSize[1] * 0.7) {
              obj[1] = pos[1] - size.contentSize[1] / 6
            } else {
              obj[1] = pos[1] - size.contentSize[1] / 1.5
            }

            return obj
          },
          formatter(params) {
            var arr = params
            var status = false
            var record = []
            var changeTime = null
            var changeTimelast = null
            // var report = false
            arr.forEach((index, value) => {
              if (index.data.point !== 0) {
                changeTime = index.data.point.now
                changeTimelast = index.data.point.last
                record.push(index.seriesName)
                status = true
              }
            })
            var res = ''
            if (status) {
              res += '<div class="echarts-tooltip-Monitoring">'
              for (var h = 0; h < params.length; h++) {
                var po = false
                var changea = ''
                res += `<div class='tooltip-point' style="`
                record.forEach((index) => {
                  if (index === params[h].seriesName) {
                    po = true
                    res += `background-color: #b5666687;`
                  }
                })
                if (po) {
                  changea = '(變動)'
                }
                res += `"><span
										style="background-color:${[params[h].color]};"></span>${params[h].seriesName}:${
                  params[h].data.value
                }°C${changea}</div>
								`
              }

              res += `</div><hr />`
              res += '<div class="echarts-tooltip-Monitoring-point">'
              res += `
              <div class="echarts-tooltip-Monitoring-content-title">Before</div>
              <div class="echarts-tooltip-Monitoring-content-title">After</div>
              <div class="echarts-tooltip-Monitoring-content-img"><img id="history-before" src="${GetImageUrli(
                changeTimelast
              )}" />
              <div class="echarts-tooltip-Monitoring-content-img-txt">${changeTimelast}</div>
              </div>
              <div class="echarts-tooltip-Monitoring-content-img"><img id="history-after" src="${GetImageUrli(
                changeTime
              )}" />
              <div class="echarts-tooltip-Monitoring-content-img-txt">${changeTime}</div></div>`
              res += '</div>'
              res += '<div class="echarts-footer">此時段被修改的物件:'
              record.forEach((index) => {
                res += `<span>[${index}]</span> `
              })
              res += `</div>`
            } else {
              res += '<div class="echarts-tooltip-Monitoring">'
              for (var i = 0; i < params.length; i++) {
                res += `<div class='tooltip-point' style=""><span
										style="background-color:${[params[i].color]};"></span>${params[i].seriesName}:${
                  params[i].data.value
                }°C</div>
								`
              }
              res += `</div>`
            }
            // function ImageExist(url) {
            //   var img = new Image()
            //   img.src = url
            //   return img.height !== 0
            // }
            function GetImageUrli(url) {
              var nowtime = new Date(url)
              var imgUrl =
                'http://127.0.0.1:5000/api/database/share/setting%5Croisettinghistory%5Croi_setting_history_' +
                nowtime.getFullYear() +
                ('0' + (nowtime.getMonth() + 1)).slice(-2) +
                ('0' + nowtime.getDate()).slice(-2) +
                '_T' +
                ('0' + nowtime.getHours()).slice(-2) +
                ('0' + nowtime.getMinutes()).slice(-2) +
                ('0' + nowtime.getSeconds()).slice(-2) +
                '.jpg'
              return imgUrl
            }
            return res
          },
        },

        grid: {
          show: false,
          // top: '50',
          top: '70',
          bottom: '25',
          right: '130',
          left: '60',
        },
        legend: {
          show: true,
          selectedMode: 'multiple', // 設定顯示單一圖例的圖形，點選可切換
          right: 80,
          width: '650px',
          textStyle: {
            color: '#666',
            fontSize: 9,
          },
          itemGap: 10,
          inactiveColor: '#ccc',
        },
        xAxis: [
          {
            type: 'category',

            // axisPointer: {
            //   type: 'shadow',
            // },

            // axisTick: {
            //   show: false,
            //   interval: 0,
            // },
          },
        ],
        dataZoom: [
          {
            type: 'inside',
            realtime: true,
          },
        ],
        // 設定兩個y軸，左邊顯示數量，右邊顯示概率

        yAxis: [
          {
            type: 'value',
            name: '(°C)',
            min: 0,
            // max: 60,
            show: true,
            interval: 10,
            //             axisLabel: {
            //   formatter: '{value} %',
            // },
          },
          {
            type: 'value',
            name: '(%)',
            min: 0,
            max: 400,
            // interval: 0.5,
            // axisLabel: {
            //   formatter: '{value} %',
            // },
          },
        ],

        // 每個裝置分數量、概率2個指標，只要讓他們的name一致，即可通過，legeng進行統一的切換
        color: colorPalette,

        series: [],
      }
      // -------------------------------------------------------------
      option && myChart.setOption(option)
    },
    echartsCrr(data) {
      var time = data.time
      var timeKey = []
      var max = data.max
      // 列出全部物件

      time.forEach((index, value) => {
        timeKey.push(index)
      })
      var output = []
      Object.keys(max).forEach((key) => {
        var data1 = []
        max[key].forEach((value) => {
          var value1 = 'N/A'
          if (value != null) {
            value1 = value.toFixed(1)
          }
          var data2 = {
            value: value1,
            point: 0,
          }
          data1.push(data2)
          // console.log(value)
        })
        // avgKey.push(key)
        output.push({
          name: key,
          type: 'line',
          yAxisIndex: 0,
          data: data1,
          symbolSize: 1,
          markLine: {
            symbol: ['none', 'none'],
            label: {
              show: false,
            },
            lineStyle: {
              width: 3,
            },
            data: [],
          },
        })
      })
      var totledisplay = timeKey.length - 50
      // 輸出資料給cheats
      this.dataProcessing(timeKey, totledisplay, output)
      // 輸出資料給cheats
    },
    drawBar(date) {
      this.downloadTime = new Date()
      this.btushow = ''
      // const chartDom = this.$refs.lineBarChart
      // const myChart = echarts.init(chartDom) // echarts初始化
      // var loadid = null
      // -------loading data-------
      const loadinname = document.getElementById('echart-loading-cover')
      // 把選取的時間一一列出來
      var datalist = []
      var initday = new Date(this.dates[0])
      var endday = new Date(this.dates[1])
      // console.log(initday,endday)
      while (initday.getTime() < endday.getTime()) {
        var dd = `${initday.getFullYear()}-${(
          '0' +
          (initday.getMonth() + 1)
        ).slice(-2)}-${('0' + initday.getDate()).slice(-2)}`
        datalist.push(dd)
        initday.setDate(initday.getDate() + 1)
        const div = document.createElement('div')
        div.classList.add('my-' + dd)
        div.innerHTML = '[' + dd + ']'
        loadinname.prepend(div)
        this.totledata = this.totledata + 1
      }
      dd = `${endday.getFullYear()}-${('0' + (endday.getMonth() + 1)).slice(
        -2
      )}-${`0${endday.getDate()}`.slice(-2)}`
      this.totledata = this.totledata + 1
      // var thisdatatotle = this.totledata
      // this.loadingname = `總共${thisdatatotle}天分析資料:`
      const div1 = document.createElement('div')
      div1.classList.add(`my-${dd}`)
      div1.innerHTML = `[${dd}]`
      loadinname.prepend(div1)
      datalist.push(dd)
      datalist.sort(function (a, b) {
        if (a > b) {
          return -1
        } else {
          return 1
        }
      })
      this.datalist = datalist
      this.controller = new AbortController()
      this.Currently = 0
      // console.log(this.totledata)
    },
    getAPI(day) {
      this.messageDate = `正在下載:"${day}"資料`
      // datalist.forEach((day) => {
      // console.log(day)
      // 計算時間
      // const DataStartTime = `${day} 15:00:00`
      // const DataEndTime = `${day} 22:00:00`
      var DataStartTime = day + ' 00:00:00'
      var DataEndTime = day + ' 23:59:59'
      // GET DATA
      axios({
        method: 'post',
        url: this.url,
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify([
          {
            table_alarm_start: DataStartTime,
            table_alarm_stop: DataEndTime,
          },
        ]),
        signal: this.controller.signal,
      })
        .then((params) => {
          var output = this.output
          var minOutput = this.minOutput
          var avgOutput = this.avgOutput
          var data = params.data[0]
          data = getdata(data)
          output.push(data.max)
          minOutput.push(data.min)
          avgOutput.push(data.avg)
          output.sort(function (a, b) {
            if (a.time[0] > b.time[0]) {
              return 1 // 正數時，後面的數放在前面
            } else {
              return -1 // 負數時，前面的數放在前面
            }
          })
          minOutput.sort(function (a, b) {
            if (a.time[0] > b.time[0]) {
              return 1 // 正數時，後面的數放在前面
            } else {
              return -1 // 負數時，前面的數放在前面
            }
          })
          avgOutput.sort(function (a, b) {
            if (a.time[0] > b.time[0]) {
              return 1 // 正數時，後面的數放在前面
            } else {
              return -1 // 負數時，前面的數放在前面
            }
          })
          this.output = output
          this.minOutput = minOutput
          this.avgOutput = avgOutput
          // console.log(this.Currently)
          this.Currently = this.Currently + 1

          // -------loading data-------
          const parentNode1 = document.querySelector('.my-' + day)
          parentNode1.style.display = 'none'
          this.finish = this.finish + 1
        })
        .catch((err) => {
          console.log(err)
        })
      // 去除單一時間所有物件空值
      function getdata(params) {
        var time = params.time
        var max = params.max
        var min = params.min
        var avg = params.avg
        var dataMax = currentData(time, max)
        var dataMin = currentData(time, min)
        var dataAvg = currentData(time, avg)
        var arr = {
          max: {
            time: dataMax.time,
            max: dataMax.data,
          },
          min: {
            time: dataMin.time,
            min: dataMin.data,
          },
          avg: {
            time: dataAvg.time,
            avg: dataAvg.data,
          },
        }
        // var avgKey = []
        // 列出time的時間
        return arr
      }
      function currentData(time, data) {
        var timeKey = []
        time.forEach((index, value) => {
          timeKey.push(index)
        })
        var arr = {
          time: [],
          data: [],
        }
        Object.keys(data).forEach((key) => {
          arr.data[key] = []
        })
        for (const i in timeKey) {
          var st = false
          // 判斷物件全部皆為空
          Object.keys(data).forEach((keys) => {
            var tp = data[keys][i]
            if (tp != null) {
              st = true
            }
          })
          // 將數值塞入物件
          Object.keys(data).forEach((keys) => {
            var tp = data[keys][i]
            if (st) {
              arr.data[keys].push(tp)
            }
          })
          if (st) {
            arr.time.push(timeKey[i])
          }
        }
        return arr
      }
      // })
    },
    dataProcessing(timeKey, totledisplay, output) {
      const chartDom = this.$refs.lineBarChart
      const myChart = echarts.init(chartDom) // echarts初始化
      myChart.setOption({
        dataZoom: [
          {
            startValue: totledisplay,
            endValue: timeKey.length,
          },
        ],
        xAxis: {
          data: timeKey,
        },
        series: output,
      })
    },
    notBeforeTodayTwelveOClock(date) {
      var today = new Date()
      var minday = new Date('2010-01-01')
      return date > today || date < minday
    },
    // 秒 轉 分、時、天，並且隱藏時間未到的單位
    getDuration(second) {
      var days = Math.floor(second / 86400)
      var hours = Math.floor((second % 86400) / 3600)
      var minutes = Math.floor(((second % 86400) % 3600) / 60)
      var seconds = Math.floor(((second % 86400) % 3600) % 60)
      var duration = null
      if (second < 60) {
        duration = seconds + '秒'
      } else if (second >= 60 && second < 3600) {
        duration = minutes + '分' + seconds + '秒'
      } else if (second >= 3600 && second < 86400) {
        duration = hours + '時<br />' + minutes + '分' + seconds + '秒'
      } else if (second >= 86400) {
        duration =
          days + '天' + hours + '時<br />' + minutes + '分' + seconds + '秒'
      }
      return duration
    },
  },
}
// let myChart = echarts.init(document.getElementById('charts'));
</script>

<style>
.btudis {
  display: none;
}
#specialLook {
  pointer-events: all;

  border: 0;
  background-color: #37484c;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
}
.echarts-tooltip-Monitoring-content-img {
  position: relative;
}
.echarts-tooltip-Monitoring-content-img-txt {
  position: absolute;
  bottom: 9px;
  color: white;
  background-color: #00000047;
  right: 5px;
}
#specialLook:hover {
  color: #37484c;
  background-color: #fff;
  border: 2px #37484c solid;
}
.echarts-tooltip-vivew {
  width: min-content;
}
.echarts-tooltip-Monitoring-point {
  /* grid-template-columns: 250px 250px; */
  grid-template-columns: 50% 50%;
  display: grid !important;
  /* max-width: 100%; */
}
.echarts-tooltip-Monitoring-content-title {
  background-color: #efefef;
  margin: 0.4em 4px 0px 4px;
  border-radius: 2px;
}
.echarts-tooltip-Monitoring-point > div {
  padding: 0em 0.3em 0.3em 0.3em;
}
.echarts-tooltip-Monitoring-point > div img {
  max-width: 100%;
  width: 100%;
}
.echarts-tooltip-Monitoring {
  /* max-height: 300px; */
  /* max-width: 500px; */
  /* grid-template-columns: 130px 130px 130px 130px; */
  grid-template-columns: repeat(4, auto);
  display: grid !important;
}
.echarts-footer {
  margin: 0em 0.3em 0.3em 0.3em;
  padding: 0.3em;
  background-color: #efefef;
}
.tooltip-value {
  margin-bottom: 5px;
  padding: 0 12px;
  width: 100%;
  height: 24px;
  line-height: 24px;
  background: rgba(255, 255, 255, 0.425);
  border-radius: 3px;
}
.tooltip-point {
  color: #000;
  font-size: 12px;
  padding: 0 12px;
  line-height: 30px;
}

.tooltip-point > span {
  display: inline-block;
  margin-right: 3px;
  border-radius: 2px;
  width: 10px;
  height: 10px;
}
#echart-loading-cover {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 26px;
  overflow: hidden;
}
.error-date {
  color: rgb(187, 0, 0);
}
</style>
