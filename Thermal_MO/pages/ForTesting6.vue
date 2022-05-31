<template>
  <div ref="lineBarChart" style="height: 670px; width: 1250px"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  data() {
    return {}
  },
  mounted() {
    this.drawBar()
  },

  methods: {
    drawBar() {
      const chartDom = this.$refs.lineBarChart
      const myChart = echarts.init(chartDom) // echarts初始化
      var option
      var arr = []

      for (var i = 0; i <= 100; i++) {
        var t = i // t為秒數
        var lambda = 0.09 // lambda為線性代數
        var amp = 42 // amp為振幅
        // var amp = Math.random() * 3;
        var Ftemp = (1 - Math.pow(Math.E, -lambda * t)) * amp // 公式;Ftemp為溫度
        Ftemp = Ftemp + generateRandomInt(-1, 1)
        console.log(generateRandomInt(-1, 1))
        arr.push(Ftemp)
      }
      function generateRandomInt(min, max) {
        return Math.random() * (max - min) + min
      }

      // 選擇圖表樣式------------------------------------------

      option = {
        title: [], //
        legend: {},
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            animation: false,
          },
        },
        // xAxis: {
        //   type: 'time',
        //   splitLine: {
        //     show: false,
        //   },
        //   splitNumber: 8,
        //   axisLine: {
        //     lineStyle: {
        //       color: '#1B2232',
        //     },
        //   },
        //   axisLabel: {
        //     formatter(value, index) {
        //       var date = new Date(value)
        //       var hour = date.getHours()
        //       var minutes = date.getMinutes()
        //       if (hour < 10) {
        //         hour = '0' + hour
        //       }
        //       if (minutes < 10) {
        //         minutes = '0' + minutes
        //       }
        //       return hour + ':' + minutes
        //     },
        //     color: '#1B2232',
            
        //   },
        // },
        xAxis: {
          // x轴设置
          type: 'category',
          boundaryGap: false,
          splitLine: { show: false }, // 去除网格线
          // data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
          // splitNumber: 12, // 横坐标设置24个间隔
        },
        yAxis: {
          // y轴设置
          boundaryGap: [0, '50%'],
          splitLine: { show: false }, // 去除网格线
          type: 'value',
          axisLabel: {
            formatter: '{value} (°C)', // 给Y轴上的刻度加上单位
          },
        },
        series: [
          {
            name: '',
            type: 'line',
            hoverAnimation: false,
            smooth: true,
            // symbolSize: 3,
            data: arr,
          },
        ],
      }

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
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
</style>
