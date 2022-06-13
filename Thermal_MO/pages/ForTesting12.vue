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
    // this.drawBar()

    // 計時載入新資料(1sec/1value)
    // var init = 0
    var tmp = 5
    var start = setInterval(() => {
      this.drawBar(tmp)
      tmp++
    }, 1000)
    console.log(start)

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
    drawBar(tmp) {
      const DataStartTime = '2022-06-01 00:00:00'
      const DataEndTime = '2022-06-01 00:00:01'
      var DataStartDay = new Date(DataStartTime)
      DataStartDay =
        DataStartDay.getFullYear() +
        '-' +
        (DataStartDay.getMonth() + 1) +
        '-' +
        DataStartDay.getDate() +
        ' ' +
        DataStartDay.getHours() +
        ':' +
        DataStartDay.getMinutes() +
        ':' +
        DataStartDay.getSeconds()

      var DataEndDay = new Date(DataEndTime)
      DataEndDay.setSeconds(DataEndDay.getSeconds() + tmp)
      DataEndDay =
        DataEndDay.getFullYear() +
        '-' +
        (DataEndDay.getMonth() + 1) +
        '-' +
        DataEndDay.getDate() +
        ' ' +
        DataEndDay.getHours() +
        ':' +
        DataEndDay.getMinutes() +
        ':' +
        DataEndDay.getSeconds()
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
          var F1 = params.data[0].line1
          var F2 = params.data[0].line2
          var F3 = params.data[0].scope1
          var F4 = params.data[0].scope2
          var F5 = params.data[0].scope3
          var time = params.data[0].time
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
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>
