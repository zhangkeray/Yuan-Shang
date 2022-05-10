<template>
  <!-- <div id="month-heat-map1" style="height: 200px; width: 220px"></div> -->
  <div ref="monthHeatMap2" style="height: 500px; width: 800px"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'HeatMap',

  data() {
    return {}
  },
  mounted() {
    this.drawBar()
  },
  methods: {
    drawBar() {
      const chartDom = this.$refs.monthHeatMap2
      const myChart = echarts.init(chartDom) // echarts初始化
      // const myChart = echarts.init(this.$refs.month-heat-map1); // echarts初始化

      var option

      // 選擇圖表樣式------------------------------------------
      option = {
        title: {
          // text: 'Temperature Change in the Coming Week',
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {},
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none',
            },
            dataView: { readOnly: false },
            magicType: { type: ['line', 'bar'] },
            restore: {},
            saveAsImage: {},
          },
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value} °C',
          },
        },
        series: [
          {
            name: 'Highest',
            type: 'line',
            data: [10, 11, 13, 11, 12, 12, 9],
            markPoint: {
              data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' },
              ],
            },
            markLine: {
              data: [{ type: 'average', name: 'Avg' }],
            },
          },
          {
            name: 'Lowest',
            type: 'line',
            data: [1, -2, 2, 5, 3, 2, 0],
            markPoint: {
              data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }],
            },
            markLine: {
              data: [
                { type: 'average', name: 'Avg' },
                [
                  {
                    symbol: 'none',
                    x: '90%',
                    yAxis: 'max',
                  },
                  {
                    symbol: 'circle',
                    label: {
                      position: 'start',
                      formatter: 'Max',
                    },
                    type: 'max',
                    name: '最高点',
                  },
                ],
              ],
            },
          },
        ],
      }

      // -------------------------------------------------------------

      option && myChart.setOption(option)
    },
  },
}
// let myChart = echarts.init(document.getElementById('charts'));
</script>

<style></style>
