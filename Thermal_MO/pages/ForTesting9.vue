<template>
  <div>
    <!-- <div id="my" style="width: 80%; height: 600px"></div> -->
    <!-- <v-btn id="start" @click="test3()">開始</v-btn> -->
    <div ref="lineChart" style="width: 80%; height: 600px"></div>
  </div>
</template>
<script>
import * as echarts from 'echarts'
import axios from 'axios'
export default {
  name: 'HistoricalMonitoringPage',
  data: () => ({
    // 定義
    // 時間
    time: [],
    // Curve
    arr: {
      F1: [],
      F2: [],
      F3: [],
      F4: [],
      F5: [],
    },
  }),
  mounted() {
    // 初始化
    this.test3()

    // 計時載入新資料(5sec/5value)
    var init = 0
    var tmp = 5
    var start = setInterval(() => {
      this.getData(init, tmp)
      init = tmp + 1
      tmp = tmp + 5
    }, 5000)
    console.log(start)
  },
  methods: {
    // axios
    getData(DataStartTime, DataEndTime) {
      // console.log(start, stop)

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
        .then((events) => {
          var arr = events.data
          // var time = arr[0].time
          delete arr[0].time
          var data = arr[0]
          var seriesData = []
          Object.keys(data).forEach((key) => {
            var arr = {
              type: 'line',
              name: key,
              yAxisIndex: 0,
              data: data[key],
              symbolSize: 1,
            }
            seriesData.push(arr)
          })
        })
        .catch((err) => {
          console.log(err)
        })
      // axios({
      //   method: 'get',
      //   url: 'http://127.0.0.1:5000/api/alarm/max',

      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   params: {
      //     start,
      //     stop,
      //   },
      // }).then((params) => {
      //   var F1 = params.data[0].spot1
      //   var F2 = params.data[0].spot2
      //   var F3 = params.data[0].spot3
      //   var F4 = params.data[0].spot4
      //   var F5 = params.data[0].spot5
      //   var time = params.data[0].time
      //   F1.forEach((index) => {
      //     var arr = this.arr.F1
      //     arr.push(index)
      //     // console.log(index)
      //   })
      //   F2.forEach((index) => {
      //     var arr = this.arr.F2
      //     arr.push(index)
      //     // console.log(index)
      //   })
      //   F3.forEach((index) => {
      //     var arr = this.arr.F3
      //     arr.push(index)
      //     // console.log(index)
      //   })
      //   F4.forEach((index) => {
      //     var arr = this.arr.F4
      //     arr.push(index)
      //     // console.log(index)
      //   })
      //   F5.forEach((index) => {
      //     var arr = this.arr.F5
      //     arr.push(index)
      //     // console.log(index)
      //   })
      //   time.forEach((index) => {
      //     var time = this.time
      //     time.push(index)
      //     // console.log(index)
      //   })
      //   this.test4()
      // })
    },
    //
    test4() {
      // var start = setInterval(() => {
      // var init = 0
      // var tmp = 5
      //   this.getData(init, tmp)
      //   init = tmp + 1
      //   tmp = tmp + 5
      // }, 5000)
      // console.log(start)
      // ECHART初始化
      // var chartDom = document.getElementById('my')
      // var myChart = echarts.init(chartDom)
      // 可重複使用之ECHART初始化
      const chartDom = this.$refs.lineChart
      const myChart = echarts.init(chartDom)

      myChart.setOption({
        xAxis: [
          {
            data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          },
        ],
        series: this.seriesData,
      })
    },

    // 初始化
    test3() {
      const DataStartTime = '2022-06-01 00:00:00'
      const DataEndTime = '2022-06-01 00:59:59'
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

      // ECHART初始化
      // var chartDom = document.getElementById('my')
      // var myChart = echarts.init(chartDom)
      // var option

      // 可重複使用之ECHART初始化
      const chartDom = this.$refs.lineChart
      const myChart = echarts.init(chartDom)
      var option

      option = {
        tooltip: {
          trigger: 'axis',
        },
        dataZoom: [
          // 数据滑块设置
          {
            type: 'slider', // 数据滑块
            start: 0, // 起始0
            end: 100, // 终止100
            minSpan: 8,
            bottom: '0%',
            dataBackground: {
              lineStyle: {
                color: '#F0F2F5',
              },
              areaStyle: {
                color: '#F0F2F5',
                opacity: 1,
              },
            },
            fillerColor: 'rgba(255,255,255,.6)',
          },
          {
            type: 'inside', // 使鼠标在图表中时滚轮可用
          },
        ],
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '30%'],
        },
        series: [this.seriesData],
      }
      option && myChart.setOption(option)
    },
  },
}
</script>
<style scoped>
#asdferg {
  width: 300px;
  height: 300px;
}
</style>
