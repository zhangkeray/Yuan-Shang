<template>
  <div>
    <div
      ref="lineBarChart"
      id="lineBarChart001"
      style="height: 335px; width: 1050px"
    ></div>
    <div id="echart-loading-cover">{{ loadingname }}</div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import axios from 'axios'
export default {
  data: () => ({
    url: 'http://127.0.0.1:5000/api/normal',
    url1: 'http://127.0.0.1:5000/api/change/roi',
    loadingname: '',
  }),
  mounted() {
    this.drawBar()
  },

  methods: {
    drawBar() {
      // const DataStartTime = '2022-06-01 16:00:00'
      // const DataEndTime = '2022-06-01 18:59:59'
      const DataStartTime = '2022-06-01 00:00:00'
      const DataEndTime = '2022-06-01 23:59:59'
      var DataStartDay = new Date(DataStartTime)
      DataStartDay =
        DataStartDay.getFullYear() +
        '-' +
        (DataStartDay.getMonth() + 1) +
        '-' +
        DataStartDay.getDate()
      var DataEndDay = new Date(DataEndTime)
      DataEndDay.setDate(DataEndDay.getDate() + 1)
      DataEndDay =
        DataEndDay.getFullYear() +
        '-' +
        (DataEndDay.getMonth() + 1) +
        '-' +
        DataEndDay.getDate()
      console.log(DataStartDay, DataEndDay)
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
            arr.forEach((index, value) => {
              if (index.data.point === 1) {
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
              <div><img src="/xzoom/images/20220510_v1.jpg" /></div>
              <div><img src="/xzoom/images/20220510_v1.jpg" /></div>`
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
            max: 60,
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

        series: [
          // // 2022-2021
          // {
          //   name: '矩形1vs矩形2',
          //   type: 'bar',
          //   data: [
          //     12, 15, 17, 16, 10, 13, 18, 17, 14, 18, 12, 16, 12, 11, 17, 12,
          //     14, 15, 16, 13, 15, 10, 11, 19,
          //   ],
          //   // barWidth: '50%',
          // },
          // {
          //   name: '矩形2vs矩形3',
          //   type: 'bar',
          //   data: [
          //     12, 11, 17, 12, 14, 15, 16, 13, 15, 10, 11, 9, 12, 15, 17, 6, 10,
          //     13, 18, 7, 14, 18, 12, 6,
          //   ],
          //   // barWidth: '50%',
          // },
          // {
          //   name: '參考點',
          //   type: 'line',
          //   yAxisIndex: 0, // 這裡要設定哪個y軸，預設是最左邊的是0，然後1，2順序來。
          //   data: [
          //     22, 22, 22, 22, 22, 22, 22, 23, 24, 24, 24, 24, 24, 23, 23, 23,
          //     23, 22, 22, 22, 22, 22, 22, 22,
          //   ],
          //   symbolSize: 1,
          //   itemStyle: {
          //     normal: {
          //       color: '#90c4a4',
          //     },
          //   },
          // },
          // {
          //   name: '矩形1',
          //   type: 'line',
          //   yAxisIndex: 0, // 這裡要設定哪個y軸，預設是最左邊的是0，然後1，2順序來。
          //   data: [
          //     33, 32, 30, 30, 31, 35, 33, 45, 32, 44, 33, 37, 27, 40, 49, 43,
          //     42, 40, 40, 31, 30, 39, 34, 43,
          //   ],
          //   symbolSize: 1,
          //   itemStyle: {
          //     normal: {
          //       color: '#505F62',
          //     },
          //   },
          // },
          // {
          //   name: '矩形2',
          //   type: 'line',
          //   yAxisIndex: 0, // 這裡要設定哪個y軸，預設是最左邊的是0，然後1，2順序來。
          //   data: [
          //     45, 32, 44, 33, 37, 31, 35, 33, 40, 31, 30, 39, 34, 27, 40, 49,
          //     43, 42, 40, 33, 32, 30, 30, 47,
          //   ],
          //   symbolSize: 1,
          //   itemStyle: {
          //     normal: {
          //       color: '#828C8F',
          //     },
          //   },
          // },
          // {
          //   name: '矩形3',
          //   type: 'line',
          //   yAxisIndex: 0, // 這裡要設定哪個y軸，預設是最左邊的是0，然後1，2順序來。
          //   data: [
          //     33, 40, 31, 30, 39, 34, 45, 32, 44, 33, 37, 31, 35, 27, 40, 49,
          //     43, 43, 42, 40, 33, 32, 30, 30,
          //   ],
          //   symbolSize: 1,
          //   itemStyle: {
          //     normal: {
          //       // color: '#37484C',
          //     },
          //   },
          // },
        ],
      }
      // -------------------------------------------------------------
      option && myChart.setOption(option)

      // GET DATA
      const loadinname = document.getElementById('echart-loading-cover')
      loadinname.style.display = 'unset'
      this.loadingname =
        '資料下載(' + DataStartTime + '~' + DataEndTime + ')中...'

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
      })
        .then((params) => {
          this.loadingname = '資料處理中'
          var data = params.data[0]
          data = getdata(data)
          console.log(data)

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
          this.loadingname = '資料處理完成'

          setTimeout(() => {
            loadinname.style.display = 'none'
          }, 3000)

          // 標記修改
          axios({
            method: 'post',
            url: this.url1,
            headers: {
              'Content-Type': 'application/json',
            },
            data: JSON.stringify([
              {
                table_timeselectStart: DataStartDay,
                table_timeselectStop: DataEndDay,
              },
            ]),
          })
            .then((params) => {
              // console.log(timeKey)
              const data = params.data
              var time = []
              console.log(data)
              data.forEach((index, value) => {
                var dt = new Date(index.table_change_start)
                console.log(dt)
                var su = 0
                timeKey.forEach((indexe, value) => {
                  var nw = new Date(indexe)
                  // console.log(dt, nw)
                  if (dt.getTime() > nw.getTime()) {
                    console.log(su,dt.getTime() , nw.getTime())
                    // console.log(indexe)
                    su = su + 1
                  }
                })
                time.push({
                  object: index.table_itemName,
                  time: index.table_change_start,
                  correspond: su,
                })
              })
              var ar = []
              time.forEach((index, value) => {
                ar[index.object] = []
              })
              time.forEach((index, value) => {
                ar[index.object].push({ xAxis: index.correspond })
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
              console.log(output1)
              myChart.setOption({
                series: output1,
              })
              // console.log(ar)
            })
            .catch((err) => {
              console.log(err)
            })
          // end

          // 去除單一時間所有物件空值
          function getdata(params) {
            var time = params.time
            var timeKey = []
            var max = params.max
            // var avgKey = []
            // 列出time的時間
            time.forEach((index, value) => {
              timeKey.push(index)
            })
            var arr = {
              time: [],
              max: [],
            }
            Object.keys(max).forEach((key) => {
              arr.max[key] = []
            })
            for (const i in timeKey) {
              var st = false
              // 判斷物件全部皆為空
              Object.keys(max).forEach((keys) => {
                var tp = max[keys][i]
                if (tp != null) {
                  st = true
                }
              })
              // 將數值塞入物件
              Object.keys(max).forEach((keys) => {
                var tp = max[keys][i]
                if (st) {
                  arr.max[keys].push(tp)
                }
              })
              if (st) {
                arr.time.push(timeKey[i])
              }
            }
            return arr
          }
        })
        .catch((err) => {
          console.log(err)
        })
      // console.log(params.data)
      // function generateRandomInt(min, max) {
      //   return Math.floor(Math.random() * (max - min) + min)
      // }
    },
  },
}
// let myChart = echarts.init(document.getElementById('charts'));
</script>

<style>
#specialLook {
  pointer-events: all;

  border: 0;
  background-color: #37484c;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
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
.echart-loading-cover {
  display: none;
}
</style>
