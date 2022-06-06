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

      // 選擇圖表樣式------------------------------------------

      option = {
        title: {
          text: '异步数据加载示例',
        },
        tooltip: {},
        legend: {
          data: ['销量'],
        },
        xAxis: {
          data: [],
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [],
          },
        ],
      }

      // -------------------------------------------------------------

      option && myChart.setOption(option)
    },
  },
}
</script>

