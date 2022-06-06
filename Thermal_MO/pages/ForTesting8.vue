<template>
  <div>
    <div id="my" style="width: 80%; height: 600px"></div>
  </div>
</template>
<script>
import * as echarts from 'echarts'
import axios from 'axios'
export default {
  name: 'HistoricalMonitoringPage',
  data: () => ({
    // 定義
    arr: {
      spot1: [],
      spot2: [],
      spot3: [],
      spot4: [],
      spot5: [],
    },
    data: [],
  }),
  mounted() {
    // 初始化
    this.test3()
    // 計時載入新資料
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
    getData(start, stop) {
      // console.log(start, stop)
      axios({
        method: 'get',
        url: 'http://localhost:8080/finalchartgo',
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          start,
          stop,
        },
      }).then((params) => {
        var spot1 = params.data[0].spot1
        var spot2 = params.data[0].spot2
        var spot3 = params.data[0].spot3
        var spot4 = params.data[0].spot4
        var spot5 = params.data[0].spot5
        var time = params.data[0].time
        spot1.forEach((index) => {
          var arr = this.arr.spot1
          arr.push(index)
          console.log(index)
        })
        spot2.forEach((index) => {
          var arr = this.arr.spot2
          arr.push(index)
          console.log(index)
        })
        spot3.forEach((index) => {
          var arr = this.arr.spot3
          arr.push(index)
          console.log(index)
        })
        spot4.forEach((index) => {
          var arr = this.arr.spot4
          arr.push(index)
          console.log(index)
        })
        spot5.forEach((index) => {
          var arr = this.arr.spot5
          arr.push(index)
          console.log(index)
        })
        time.forEach((index) => {
          var data = this.data
          data.push(index)
          console.log(index)
        })
        this.test4()
      })
    },
    //
    test4() {
      var chartDom = document.getElementById('my')
      var myChart = echarts.init(chartDom)

      myChart.setOption({
        xAxis: {
          data: this.data,
        },
        series: [
          {
            name: 'spot1',
            data: this.arr.spot1,
          },
          {
            name: 'spot2',
            data: this.arr.spot2,
          },
          {
            name: 'spot3',
            data: this.arr.spot3,
          },
          {
            name: 'spot4',
            data: this.arr.spot4,
          },
          {
            name: 'spot5',
            data: this.arr.spot5,
          },
        ],
      })
    },

    // 初始化
    test3() {
      var chartDom = document.getElementById('my')
      var myChart = echarts.init(chartDom)
      var option

      option = {
        xAxis: {
          type: 'category',
          boundaryGap: false,
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '30%'],
        },
        series: [
          {
            name: 'spot1',
            type: 'line',
            symbol: 'none',
          },
          {
            name: 'spot2',
            type: 'line',
            symbol: 'none',
          },
          {
            name: 'spot3',
            type: 'line',
            symbol: 'none',
          },
          {
            name: 'spot4',
            type: 'line',
            symbol: 'none',
          },
          {
            name: 'spot5',
            type: 'line',
            symbol: 'none',
          },
        ],
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
