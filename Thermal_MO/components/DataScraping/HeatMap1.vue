<template>
  <div id="heat-map1" style="height: 200px; width: 1500px"></div>
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
      const chartDom = document.getElementById('heat-map1')
      const myChart = echarts.init(chartDom) // echarts初始化
      const colorPalette = ['#37484C', '#E6E8E9']
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
          min: 0,
          max: 1000,
          calculable: true,
          orient: 'vertical',
          left: '1340',
          top: 'center',
        },
        calendar: [
          {
            top: 'center',
            orient: 'vertical',
            range: '2016/1',
            yearLabel: { show: false },
          },
          {
            top: 'center',
            left: 300,
            orient: 'vertical',
            range: '2022/2',
            yearLabel: { show: false },
          },

          {
            top: 'center',
            left: 520,
            orient: 'vertical',
            range: '2022/3',
            yearLabel: { show: false },
          },
          {
            top: 'center',
            left: 740,
            orient: 'vertical',
            range: '2022/4',
            yearLabel: { show: false },
          },
          {
            top: 'center',
            left: 960,
            orient: 'vertical',
            range: '2022/5',
            yearLabel: { show: false },
          },
          {
            top: 'center',
            left: 1180,
            orient: 'vertical',
            range: '2022/6',
            yearLabel: { show: false },
          },
        ],

        series: [
          {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            calendarIndex: 0,
            data: getVirtulData('2016/1'),
          },
          {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            calendarIndex: 1,
            data: getVirtulData('2022/2'),
          },
          {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            calendarIndex: 2,
            data: getVirtulData('2022/3'),
          },
          {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            calendarIndex: 4,
            data: getVirtulData('2022/4'),
          },
                    {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            calendarIndex: 4,
            data: getVirtulData('2022/5'),
          },
                    {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            calendarIndex: 4,
            data: getVirtulData('2022/6'),
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
