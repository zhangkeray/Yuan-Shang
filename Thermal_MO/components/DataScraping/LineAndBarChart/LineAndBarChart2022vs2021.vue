<template>
  <div ref="donutChart1" style="height: 687px; width: 1250px"></div>
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
      const chartDom = this.$refs.donutChart1
      const myChart = echarts.init(chartDom) // echarts初始化
      // const colorPalette = ['#37484C', '#9aa2a4', '#d8dddd', '#E6E8E9']
      var option

      // 選擇圖表樣式------------------------------------------

      option = {
        title: {
          left: 'left',
          text: '概率',
          show: false,
        },
        tooltip: {
          trigger: 'axis',
          formatter: '{a}:{c}',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999',
            },
          },
        },
        grid: {
          show: false,
          top: '30',
          bottom: '60',
          right: '60',
          left: '60',
        },
        legend: {
          show: true,
          selectedMode: 'single', // 設定顯示單一圖例的圖形，點選可切換
          bottom: 10,
          left: 50,
          textStyle: {
            color: '#666',
            fontSize: 12,
          },
          itemGap: 20,
          data: ['2022', '2021', '2020', '2019'],
          inactiveColor: '#ccc',
        },
        xAxis: [
          {
            type: 'category',
            data: [
              '1',
              '2',
              '3',
              '4',
              '5',
              '6',
              '7',
              '8',
              '9',
              '10',
              '11',
              '12',
            ],
            axisPointer: {
              type: 'shadow',
            },

            axisTick: {
              show: true,
              interval: 0,
            },
          },
        ],

        // 設定兩個y軸，左邊顯示數量，右邊顯示概率

        yAxis: [
          {
            type: 'value',
            name: '(%)',
            min: 30,
            max: 100,
            show: true,
            interval: 10,
            //             axisLabel: {
            //   formatter: '{value} %',
            // },
          },
          {
            type: 'value',
            name: '(%)',
            min: 0,
            max: 3.5,
            interval: 0.5,
            // axisLabel: {
            //   formatter: '{value} %',
            // },
          },
        ],

        // 每個裝置分數量、概率2個指標，只要讓他們的name一致，即可通過，legeng進行統一的切換

        series: [
          {
            name: '2022',
            type: 'bar',
            data: [56, 42, 57, 45, 54, 32, 49, 34, 48, 46, 55, 50],
            // barWidth: '50%',
          },
          {
            name: '2022',
            type: 'bar',
            data: [46, 44, 39, 48, 40, 60, 55, 59, 37, 49, 52, 53],
            // barWidth: '50%',
          },
          {
            name: '2022',
            type: 'bar',
            data: [32, 55, 37, 46, 50, 33, 38, 57, 54, 48, 42, 36],
            // barWidth: '50%',
          },
          {
            name: '2022',
            type: 'line',
            yAxisIndex: 0, // 這裡要設定哪個y軸，預設是最左邊的是0，然後1，2順序來。
            data: [85, 92, 74, 63, 97, 100, 99, 73, 72, 70, 60, 71],
            symbolSize: 10,
            itemStyle: {
              normal: {
                color: '#DDA0DD',
              },
            },
          },
          {
            name: '2021',
            type: 'bar',
            data: [56, 42, 57, 45, 54, 32, 49, 34, 48, 46, 55, 50],
            // barWidth: '50%',
          },
          {
            name: '2021',
            type: 'bar',
            data: [46, 44, 39, 48, 40, 60, 55, 59, 37, 49, 52, 53],
            // barWidth: '50%',
          },
          {
            name: '2021',
            type: 'bar',
            data: [32, 55, 37, 46, 50, 33, 38, 57, 54, 48, 42, 36],
            // barWidth: '50%',
          },
          {
            name: '2021',
            type: 'line',
            yAxisIndex: 0, // 這裡要設定哪個y軸，預設是最左邊的是0，然後1，2順序來。
            data: [85, 92, 74, 63, 97, 100, 99, 73, 72, 70, 60, 71],
            symbolSize: 10,
            itemStyle: {
              normal: {
                color: '#87CEFA',
              },
            },
          },
           {
            name: '2020',
            type: 'bar',
            data: [56, 42, 57, 45, 54, 32, 49, 34, 48, 46, 55, 50],
            // barWidth: '50%',
          },
          {
            name: '2020',
            type: 'bar',
            data: [46, 44, 39, 48, 40, 60, 55, 59, 37, 49, 52, 53],
            // barWidth: '50%',
          },
          {
            name: '2020',
            type: 'bar',
            data: [32, 55, 37, 46, 50, 33, 38, 57, 54, 48, 42, 36],
            // barWidth: '50%',
          },
          {
            name: '2020',
            type: 'line',
            yAxisIndex: 0, // 這裡要設定哪個y軸，預設是最左邊的是0，然後1，2順序來。
            data: [85, 92, 74, 63, 97, 100, 99, 73, 72, 70, 60, 71],
            symbolSize: 10,
            itemStyle: {
              normal: {
                color: '#CD5C5C',
              },
            },
          },
           {
            name: '2019',
            type: 'bar',
            data: [56, 42, 57, 45, 54, 32, 49, 34, 48, 46, 55, 50],
            // barWidth: '50%',
          },
          {
            name: '2019',
            type: 'bar',
            data: [46, 44, 39, 48, 40, 60, 55, 59, 37, 49, 52, 53],
            // barWidth: '50%',
          },
          {
            name: '2019',
            type: 'bar',
            data: [32, 55, 37, 46, 50, 33, 38, 57, 54, 48, 42, 36],
            // barWidth: '50%',
          },
          {
            name: '2019',
            type: 'line',
            yAxisIndex: 0, // 這裡要設定哪個y軸，預設是最左邊的是0，然後1，2順序來。
            data: [85, 92, 74, 63, 97, 100, 99, 73, 72, 70, 60, 71],
            symbolSize: 10,
            itemStyle: {
              normal: {
                color: '#CD5C5C',
              },
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
