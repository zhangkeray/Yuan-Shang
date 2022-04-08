<template>
  <div id="heat-map1" style="height: 300px; width: 3000px"></div>
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
          // top: '300px',
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
            // yearLabel: { show: false },
            top: '90px',
            orient: 'vertical',
            range: '2021/5',
            splitLine: {
              lineStyle: {
                color: '#fff',
              },
            },
            monthLabel: {},
          },

          {
            // yearLabel: { show: false },
            top: '90px',
            left: 300,
            orient: 'vertical',
            range: '2021/6',
            splitLine: {
              lineStyle: {
                color: '#fff',
              },
            },
          },

          {
            // yearLabel: { show: false },
            top: '90px',
            left: 520,
            orient: 'vertical',
            range: '2021/7',
            splitLine: {
              lineStyle: {
                color: '#fff',
              },
            },
          },
          {
            // yearLabel: { show: false },
            top: '90px',
            left: 740,
            orient: 'vertical',
            range: '2021/8',
            splitLine: {
              lineStyle: {
                color: '#fff',
              },
            },
          },
          {
            // yearLabel: { show: false },
            top: '90px',
            left: 960,
            orient: 'vertical',
            range: '2021/9',
            splitLine: {
              lineStyle: {
                color: '#fff',
              },
            },
          },
          {
            // yearLabel: { show: false },
            top: '90px',
            left: 1180,
            orient: 'vertical',
            range: '2021/10',
            splitLine: {
              lineStyle: {
                color: '#fff',
              },
            },
          },

          {
            // yearLabel: { show: false },
            top: '90px',
            left: 1400,
            orient: 'vertical',
            range: '2021/11',
            splitLine: {
              lineStyle: {
                color: '#fff',
              },
            },
          },
          {
            // yearLabel: { show: false },
            top: '90px',
            left: 1620,
            orient: 'vertical',
            range: '2021/12',
            splitLine: {
              lineStyle: {
                color: '#fff',
              },
            },
          },

          {
            // yearLabel: { show: false },
            top: '90px',
            left: 1840,
            orient: 'vertical',
            range: '2022/1',
            splitLine: {
              lineStyle: {
                color: '#fff',
              },
            },
          },
          {
            // yearLabel: { show: false },
            top: '90px',
            left: 2060,
            orient: 'vertical',
            range: '2022/2',
            splitLine: {
              lineStyle: {
                color: '#fff',
              },
            },
          },
          {
            // yearLabel: { show: false },
            top: '90px',
            left: 2280,
            orient: 'vertical',
            range: '2022/3',
            splitLine: {
              lineStyle: {
                color: '#fff',
              },
            },
          },
          {
            // yearLabel: { show: false },
            top: '90px',
            left: 2500,
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
            data: getVirtulData('2021'),
            itemStyle: {
              borderColor: '#fff',
            },
          },
          {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            calendarIndex: 1,
            data: getVirtulData('2021'),
            itemStyle: {
              borderColor: '#fff',
            },
          },
          {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            calendarIndex: 2,
            data: getVirtulData('2021'),
            itemStyle: {
              borderColor: '#fff',
            },
          },
          {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            calendarIndex: 3,
            data: getVirtulData('2021'),
            itemStyle: {
              borderColor: '#fff',
            },
          },
          {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            calendarIndex: 4,
            data: getVirtulData('2021'),
            itemStyle: {
              borderColor: '#fff',
            },
          },
          {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            calendarIndex: 5,
            data: getVirtulData('2021'),
            itemStyle: {
              borderColor: '#fff',
            },
          },

          {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            calendarIndex: 6,
            data: getVirtulData('2021'),
            itemStyle: {
              borderColor: '#fff',
            },
          },
          {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            calendarIndex: 7,
            data: getVirtulData('2021'),
            itemStyle: {
              borderColor: '#fff',
            },
          },
          {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            calendarIndex: 8,
            data: getVirtulData('2022'),
            itemStyle: {
              borderColor: '#fff',
            },
          },
          {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            calendarIndex: 9,
            data: getVirtulData('2022'),
            itemStyle: {
              borderColor: '#fff',
            },
          },
          {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            calendarIndex: 10,
            data: getVirtulData('2022'),
            itemStyle: {
              borderColor: '#fff',
            },
          },
          {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            calendarIndex: 11,
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
