<template>
  <div class="fluid mt-3">
    <v-row>
      <v-col cols="12">
        <div id="month-heat-map1" style="height: 300px; width: 3000px"></div>
      </v-col>
      <v-col cols="12">
        <div id="main" style="height: 300px; width: 100%"></div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import * as echarts from 'echarts'
export default {
  name: 'HistoricalMonitoringPage',
  mounted() {
    this.mount()
  },
  methods: {
    mount() {
      const chartDom = document.getElementById('month-heat-map1')
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
        console.log(data)
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
            // yearLabel: { show: false },
            orient: 'vertical',
            range: '2018/1',
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
            data: getVirtulData('2018'),
            itemStyle: {
              borderColor: '#fff',
            },
          },
        ],
      }

      // -------------------------------------------------------------
      myChart.setOption(option)
      myChart.on('click', function (params) {
        console.log(params.data)
        var data = {
          categories: ['比例尺(假)','點擊的數據','比例尺(假)'],
          values: [150,params.data[1],300],
        }
        myChart01.setOption({
          xAxis: {
            data: data.categories,
          },
          series: [
            {
              name: 'data',
              data: data.values,
            },
          ],
        })
      })
      option && myChart.setOption(option)

      //   ______
      const myChart01 = echarts.init(document.getElementById('main'))
      myChart01.setOption({
        tooltip: {},
        legend: {
          data: ['data'],
        },
        xAxis: {
          data: [],
        },
        yAxis: {},
        series: [
          {
            name: 'data',
            type: 'bar',
            data: [],
          },
        ],
      })
    },
  },
}
</script>
<style scoped></style>