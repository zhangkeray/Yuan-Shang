<template>
  <div ref="lineBarChart" style="height: 285px; width: 1030px"></div>
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
      const colorPalette = ['#37484C', '#9aa2a4', '#d8dddd', '#E6E8E9']
      var option

      // 選擇圖表樣式------------------------------------------

      option = {
        title: {
          left: 'left',
          text: '超溫時段統計圖',
          textStyle: {
            fontFamily: 'Arial',
            fontSize: '14',
            fontWeight: '700',
            color: '#505f62',
          },
        },

        tooltip: {
          axisPointer: {
            type: 'cross',
          },
          // alwaysShowContent:true,   // 鼠标离开区域不消失
          trigger: 'axis',
        },

        grid: {
          show: false,
          top: '90',
          bottom: '20',
          right: '115',
          left: '60',
        },
        legend: {
          show: true,
          selectedMode: 'multiple', // 設定顯示單一圖例的圖形，點選可切換
          right: 80,
          textStyle: {
            color: '#666',
            fontSize: 9,
          },
          itemGap: 10,
          data: ['矩形1', '矩形2', '矩形3'],
          inactiveColor: '#ccc',
        },
        xAxis: [
          {
            type: 'category',
            name: '(hr)',
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
              '13',
              '14',
              '15',
              '16',
              '17',
              '18',
              '19',
              '20',
              '21',
              '22',
              '23',
              '24',
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
            name: '(次)',
            min: 0,
            max: 6,
            show: true,
            interval: 10,
            //             axisLabel: {
            //   formatter: '{value} %',
            // },
          },
        ],

        // 每個裝置分數量、概率2個指標，只要讓他們的name一致，即可通過，legeng進行統一的切換
        color: colorPalette,

        series: [
          // 2022-2021
          {
            name: '矩形1',
            type: 'bar',
            data: [
              0, 2, 0, 3, 0, 3, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 3, 0, 1, 0, 0, 0,
              2, 1,
            ],
            // barWidth: '50%',],
            // barWidth: '50%',
          },

          {
            name: '矩形2',
            type: 'bar',
            data: [
              0, 1, 2, 0, 4, 0, 0, 3, 5, 3, 0, 4, 5, 5, 4, 0, 5, 3, 5, 5, 5, 0,
              4, 3,
            ],
            // barWidth: '50%',
          },

          {
            name: '矩形3',
            type: 'bar',
            data: [
              0, 0, 0, 0, 3, 0, 1, 0, 0, 0, 0, 0, 2, 3, 0, 6, 0, 0, 1, 0, 0, 0,
              2, 3,
            ],
            // barWidth: '50%',
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
