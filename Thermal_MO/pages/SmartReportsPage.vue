<template>
  <div class="fluid mt-3">
    <v-row>
      <!-- <v-col cols="12">
        <div id="month-heat-map1" style="height: 300px; width: 3000px"></div>
      </v-col>
      <v-col cols="12">
        <div id="main" style="height: 300px; width: 100%"></div>
      </v-col> -->
      <v-col cols="12">
        <div id="month-heat-map1" style="height: 460px; width: 1150px"></div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import * as echarts from 'echarts'
import axios from 'axios'
export default {
  name: 'HistoricalMonitoringPage',
  mounted() {
    // this.mount()
    this.echarts()
  },
  methods: {
    echarts() {
      // String.prototype.trim = function () {
      //   // alert(this)
      //   return this.replace(/(^[\s]*)|([\s]*$)/g, '')
      // }

      var chartDom = document.getElementById('month-heat-map1')
      var myChart = echarts.init(chartDom)
      var option

      option = {
        legend: {},
        tooltip: {
          trigger: 'axis',
        },
        dataZoom: [
          {
            type: 'inside',
            realtime: true,
          },
        ],
        xAxis: {
          type: 'category',
        },
        yAxis: {
          type: 'value',
          min: 20,
          max: 70,
        },
        series: [
          {
            name: 'spot01',
            type: 'line',
            smooth: true,
          },
          {
            name: 'spot02',
            type: 'line',
            smooth: true,
          },
          {
            name: 'spot03',
            type: 'line',
            smooth: true,
          },
        ],
      }

      option && myChart.setOption(option)
      // var sum = 0
      // var totle = 0
      // var interval = setInterval(() => {
      //   axios({
      //     method: 'get',
      //     url: '/test.csv',
      //     responseType: 'blob',
      //   }).then((response) => {
      //     const file = response.data
      //     file.text().then((csvStr) => {
      //       const lineArray = csvJSON(csvStr)
      //       var array = JSON.parse(lineArray)
      //       var timexAxis = []
      //       var xAxisContent = []
      //       // var dataKey = []
      //       var output = []
      //       array.forEach((series) => {
      //         timexAxis.push(series.time[0])
      //         delete series.time
      //         xAxisContent.push(series)
      //       })
      //       Object.keys(xAxisContent[0]).forEach((key) => {
      //         var content = []
      //         array.forEach((series) => {
      //           content.push(series[key][0])
      //         })
      //         // dataKey.push(dataKey)
      //         var data = {
      //           name: key,
      //           type: 'line',
      //           smooth: true,
      //           data: content,
      //         }
      //         output.push(data)
      //       })
      //       if(totle !== output.length){
      //       myChart.setOption(option, true)
      //       }
      //       totle = output.length

      //       myChart.setOption({
      //         xAxis: {
      //           type: 'category',
      //           data: timexAxis,
      //         },
      //         series: output,
      //       })
      //     })
      //   })
      //   // if(sum > 10000){
      //   //   clearInterval(interval)
      //   // }
      //   // sum++
      // }, 1000)
      // console.log(interval)

      // function csvJSON(csv) {
      //   var lines = csv.split('\n')
      //   var result = []
      //   var headers = lines[0].split(',')
      //   for (var i = 1; i < lines.length - 1; i++) {
      //     var obj = {}
      //     var currentline = lines[i].split(',')
      //     for (var j = 0; j < headers.length; j++) {
      //       obj[headers[j]] = currentline[j].split('|')
      //     }
      //     result.push(obj)
      //   }
      //   return JSON.stringify(result).replace(/\\r/g, '')
      // }

      var usersetdate = '2022-05-11'
      var xaxis = []
      var spot1 = []
      var spot2 = []
      var spot3 = []
      var sum = 0
      var totle = 0
      var startV = 0
      var interval = setInterval(() => {
        axios({
          method: 'get',
          url: 'http://localhost:8080/api/monitor/test?date=' + usersetdate,
        })
          .then((params) => {
            var array = params.data
            // var xAxis =

            Object.keys(array).forEach((key) => {
              xaxis.push(key)
              spot1.push(array[key][0])
              spot2.push(array[key][1])
              spot3.push(array[key][2])
              // console.log(key)
              // console.log(array[key])
              totle++
            })
            console.log(totle)
            startV = totle - 200
            myChart.setOption({
              xAxis: {
                type: 'category',
                data: xaxis,
              },
              dataZoom: [
                {
                  startValue: startV,
                  endValue: totle,
                },
              ],
              series: [
                {
                  name: 'spot01',
                  data: spot1,
                },
                {
                  name: 'spot02',
                  data: spot2,
                },
                {
                  name: 'spot03',
                  data: spot3,
                },
              ],
            })
            sum++
            if (sum === 7) {
              clearInterval(interval)
            }
          })
          .catch((error) => console.log('error from axios', error))
      }, 1000)
    },
    mount() {
      const chartDom = document.getElementById('month-heat-map1')
      const myChart = echarts.init(chartDom) // echarts初始化
      const colorPalette = ['#37484C', '#9aa2a4', '#d8dddd', '#E6E8E9']
      var option

      // 選擇圖表樣式------------------------------------------
      function getVirtulData(year) {
        year = year || '2017'
        var date = +echarts.number.parseDate(year + '-01-01')
        var end = +echarts.number.parseDate(+year + 1 + '-01-01')
        var dayTime = 3600 * 24 * 1000
        var data = []
        for (var time = date; time < end; time += dayTime) {
          data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 1000),
          ])
        }
        console.log(data)
        return data
      }

      option = {
        color: colorPalette,
        tooltip: {
          position: 'top',
          formatter(p) {
            var format = echarts.format.formatTime('yyyy-MM-dd', p.data[0])
            return format + ': ' + p.data[1]
          },
        },
        visualMap: {
          top: '30px',
          min: 0,
          max: 1000,
          calculable: true,
          orient: 'vertical',
          left: '2660',
          inRange: {
            color: ['#37484C', '#9aa2a4', '#d8dddd', '#E6E8E9'],
          },
        },
        calendar: [
          {
            // yearLabel: { show: false },
            orient: 'vertical',
            range: '2018/1',
            splitLine: {
              lineStyle: {
                color: '#fff',
              },
            },
          },
        ],
        series: [
          {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            calendarIndex: 0,
            data: getVirtulData('2018'),
            itemStyle: {
              borderColor: '#fff',
            },
          },
        ],
      }

      // -------------------------------------------------------------
      myChart.setOption(option)
      myChart.on('click', function (params) {
        console.log(params.data)
        var data = {
          categories: ['比例尺(假)', '點擊的數據', '比例尺(假)'],
          values: [150, params.data[1], 300],
        }
        myChart01.setOption({
          xAxis: {
            data: data.categories,
          },
          series: [
            {
              name: 'data',
              data: data.values,
            },
          ],
        })
      })
      option && myChart.setOption(option)

      //   ______
      const myChart01 = echarts.init(document.getElementById('main'))
      myChart01.setOption({
        tooltip: {},
        legend: {
          data: ['data'],
        },
        xAxis: {
          data: [],
        },
        yAxis: {},
        series: [
          {
            name: 'data',
            type: 'bar',
            data: [],
          },
        ],
      })
    },
  },
}
</script>
<style scoped></style>