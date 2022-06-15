<template>
  <div>
    <div ref="lineBarChart" style="height: 600px; width: 1800px"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import axios from 'axios'
export default {
  data: () => ({
    url: 'http://127.0.0.1:5000/api/alarm/max',

    time: [],
    // Curve
    arr: {
      F1: [],
      F2: [],
      F3: [],
      F4: [],
      F5: [],
    },

    output: [],
  }),
  mounted() {
    this.drawBar()

    // 計時載入新資料(1sec/1value)
    // var init = 0
    // var tmp = 1
    // var start = setInterval(() => {
    //   this.drawBar(tmp)
    //   tmp++
    // }, 1000)
    // console.log(start)

    //   const DataStartTime = '2022-06-01 00:00:00'
    //   const DataEndTime = '2022-06-01 00:00:05'
    // var start = setInterval(() => {
    //   this.drawBar(0, 5)
    //   this.DataStartTime = this.DataStartTime + 1
    //   this.DataEndTime = this.DataEndTime + 1
    // }, 1000)
    // console.log(start)
  },

  methods: {
    drawBar() {
      const DataStartTime = '2022-06-01 00:00:00:000'
      const DataEndTime = '2022-06-01 00:00:00:100'
      var DataStartDay = new Date(DataStartTime)
      var month = DataStartDay.getMonth() + 1
      if (month.toString().length === 1) {
        month = '0' + month
      }
      var day = DataStartDay.getDate()
      if (day.toString().length === 1) {
        day = '0' + day
      }
      var hour = DataStartDay.getHours()
      if (hour.toString().length === 1) {
        hour = '0' + hour
      }
      var min = DataStartDay.getMinutes()
      if (min.toString().length === 1) {
        min = '0' + min
      }
      var sec = DataStartDay.getSeconds()
      if (sec.toString().length === 1) {
        sec = '0' + sec
      }

      DataStartDay =
        DataStartDay.getFullYear() +
        '-' +
        month +
        '-' +
        day +
        ' ' +
        hour +
        ':' +
        min +
        ':' +
        sec

      var DataEndDay = new Date(DataEndTime)
      var month2 = DataEndDay.getMonth() + 1
      if (month2.toString().length === 1) {
        month2 = '0' + month2
      }
      var day2 = DataEndDay.getDate()
      if (day2.toString().length === 1) {
        day2 = '0' + day2
      }
      var hour2 = DataEndDay.getHours()
      if (hour2.toString().length === 1) {
        hour2 = '0' + hour2
      }
      var min2 = DataEndDay.getMinutes()
      if (min2.toString().length === 1) {
        min2 = '0' + min2
      }
      var sec2 = DataEndDay.getSeconds()
      if (sec2.toString().length === 1) {
        sec2 = '0' + sec2
      }

      DataEndDay =
        DataEndDay.getFullYear() +
        '-' +
        month2 +
        '-' +
        day2 +
        ' ' +
        hour2 +
        ':' +
        min2 +
        ':' +
        sec2
      console.log(DataStartDay, DataEndDay)

      const chartDom = this.$refs.lineBarChart
      const myChart = echarts.init(chartDom) // echarts初始化
      var option
      // 選擇圖表樣式------------------------------------------
      option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            animation: false,
          },
        },
        grid: {
          show: false,
          top: '70',
          bottom: '55',
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
        },
        dataZoom: [
          // 数据滑块设置
          {
            type: 'slider', // 数据滑块
            // realtime: true,
            bottom: '0%',
          },
          {
            type: 'inside', // 使鼠标在图表中时滚轮可用
          },
        ],
        xAxis: [
          {
            name: '(time)',
            type: 'category',
          },
        ],
        yAxis: [
          {
            type: 'value',
            name: '(°C)',
          },
        ],
        series: [
          {
            type: 'line',
            // symbol: 'none',
          },
          {
            type: 'line',
            // symbol: 'none',
          },
          {
            type: 'line',
            // symbol: 'none',
          },
          {
            type: 'line',
            // symbol: 'none',
          },
          {
            type: 'line',
            // symbol: 'none',
          },
        ],
      }
      // -------------------------------------------------------------
      option && myChart.setOption(option)
      // },
      // GET DATA
      // getData() {
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
          var F1 = params.data.F1
          var F2 = params.data.F2
          var F3 = params.data.F3
          var F4 = params.data.F4
          var F5 = params.data.F5
          var time = params.data.time
          F1.forEach((index) => {
            var arr = this.arr.F1
            arr.push(index)
            // console.log(index)
          })
          F2.forEach((index) => {
            var arr = this.arr.F2
            arr.push(index)
            // console.log(index)
          })
          F3.forEach((index) => {
            var arr = this.arr.F3
            arr.push(index)
            // console.log(index)
          })
          F4.forEach((index) => {
            var arr = this.arr.F4
            arr.push(index)
            // console.log(index)
          })
          F5.forEach((index) => {
            var arr = this.arr.F5
            arr.push(index)
            // console.log(index)
          })
          time.forEach((index) => {
            var time = this.time
            time.push(index)
            // console.log(index)
          })
            myChart.setOption({
              xAxis: [
                {
                  data: this.time,
                },
              ],
              series: [
                {
                  name: 'F1',
                  data: this.arr.F1,
                },
                {
                  name: 'F2',
                  data: this.arr.F2,
                },
                {
                  name: 'F3',
                  data: this.arr.F3,
                },
                {
                  name: 'F4',
                  data: this.arr.F4,
                },
                {
                  name: 'F5',
                  data: this.arr.F5,
                },
              ],
            })
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>
