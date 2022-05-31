<template>
  <div>
    <div id="my" style="width: 80%; height: 600px"></div>
  </div>
</template>
<script>
import * as echarts from 'echarts'

export default {
  name: 'HistoricalMonitoringPage',
  // import axios from 'axios'

  mounted() {
    this.test2()
  },
  methods: {
    // getData() {
    //   axios
    //     .get('http://localhost:8888/CHART')
    //     .then((response) => {
    //       console.log(response)
    //       // this.opinionData = response.data
    //       // this.drawLine('main')
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //     })
    // },
    test2() {
  
      var arr = []
      for (var i = 0; i <= 100; i++) {
        var t = i // t為秒數
        var lambda = 0.05 // lambda為線性代數
        var amp = 1 // amp為振幅
        // var amp = Math.random() * 3;
        var Ftemp = (1 - Math.pow(Math.E, -lambda * t)) * amp // 公式;Ftemp為溫度
        Ftemp = Ftemp + generateRandomInt(0.03, 0.07)
        console.log(generateRandomInt(0.03, 0.07))
        arr.push(Ftemp)
      }
      function generateRandomInt(min, max) {
        return Math.random() * (max - min) + min
      }


      
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
            lineStyle: {
              color: '#5470C6',
              width: 5,
            },
            data: arr,
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
