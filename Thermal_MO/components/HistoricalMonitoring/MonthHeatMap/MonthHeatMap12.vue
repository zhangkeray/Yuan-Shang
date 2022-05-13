<template>
  <!-- <div id="month-heat-map1" style="height: 200px; width: 220px"></div> -->
  <div ref="monthHeatMap12" style="height: 200px; width: 220px"></div>
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
      const chartDom = this.$refs.monthHeatMap12
      const myChart = echarts.init(chartDom) // echarts初始化
      // const myChart = echarts.init(this.$refs.month-heat-map1); // echarts初始化

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
            top: '50px',
            // yearLabel: { show: false },
                        monthLabel: {
              nameMap: [
                '一月',
                '二月',
                '三月',
                '四月',
                '五月',
                '六月',
                '七月',
                '八月',
                '九月',
                '十月',
                '十一月',
                '十二月',
              ],
            },
            dayLabel: {
              // nameMap: ['日', '一', '二', '三', '四', '五', '六'],
            },
            orient: 'vertical',
            range: '2022/4',
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
            data: getVirtulData('2022'),
            itemStyle: {
              borderColor: '#fff',
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
