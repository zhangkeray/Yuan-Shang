<template>
  <div ref="lineBarChart" style="height: 220px; width: 970px"></div>
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
          text: '監測項目時段超溫紀錄圖',
          textStyle: {
            fontFamily: 'Arial, Verdana, sans...',
            fontSize: 12,
            fontStyle: 'normal',
  color: '#505f62',
          },
        },
        // tooltip: {
        //   trigger: 'axis',

        //   triggerOn: 'click',
        //   enterable:true,

        //   formatter: '{a}:{c}',
        //   axisPointer: {
        //     type: 'cross',
        //     crossStyle: {
        //       color: '#999',
        //     },
        //   },
        // },

        tooltip: {
          axisPointer: {
            type: 'cross',
          },
          // triggerOn: 'click', // 触发方式
          // alwaysShowContent:true,   // 鼠标离开区域不消失
          trigger: 'axis',


        },

        grid: {
          show: false,
          top: '90',
          bottom: '20',
          right: '110',
          left: '60',
        },
        legend: {
          show: true,
          selectedMode: 'multiple', // 設定顯示單一圖例的圖形，點選可切換
          right: 80,
          textStyle: {
            color: '#666',
            fontSize: 12,
          },
          itemGap: 20,
          data: ['矩形1vs矩形2', '矩形2vs矩形3', '矩形1', '矩形2', '矩形3', '參考點'],
          inactiveColor: '#ccc',
        },
        xAxis: [
          {
                        name: '(sec)',

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

            ],
            // axisPointer: {
            //   type: 'shadow',
            // },

            // axisTick: {
            //   show: false,
            //   interval: 0,
            // },
          },
        ],

        // 設定兩個y軸，左邊顯示數量，右邊顯示概率

        yAxis: [
          {
            type: 'value',
            name: '(°C)',
            min: 0,
            max: 60,
            show: true,
            interval: 10,
            //             axisLabel: {
            //   formatter: '{value} %',
            // },
          },
          // {
          //   type: 'value',
          //   name: '(%)',
          //   min: 0,
          //   max: 3.5,
          //   interval: 0.5,
          //   // axisLabel: {
          //   //   formatter: '{value} %',
          //   // },
          // },
        ],

        // 每個裝置分數量、概率2個指標，只要讓他們的name一致，即可通過，legeng進行統一的切換
        color: colorPalette,

        series: [
          // 2022-2021
          // {
          //   name: '矩形1vs矩形2',
          //   type: 'bar',
          //   data: [
          //     12, 15, 17, 16, 10, 13, 18, 17, 14, 18, 12, 16, 12, 11, 17, 12,
          //     14, 15, 16, 13, 15, 10, 11, 19,
          //   ],
          //   // barWidth: '50%',
          // },

          // {
          //   name: '矩形2vs矩形3',
          //   type: 'bar',
          //   data: [
          //     12, 11, 17, 12, 14, 15, 16, 13, 15, 10, 11, 9, 12, 15, 17, 6, 10,
          //     13, 18, 7, 14, 18, 12, 6,
          //   ],
          //   // barWidth: '50%',
          // },

          {
            name: '參考點',
            type: 'line',
            yAxisIndex: 0, // 這裡要設定哪個y軸，預設是最左邊的是0，然後1，2順序來。
            data: [
              22, 22, 22, 22, 22, 22, 22, 23, 24, 24, 24, 24, 24, 23, 23, 23,
              23, 22, 22, 22,22, 22, 22, 22,
            ],
            symbolSize: 1,
            itemStyle: {
              normal: {
                color: '#90c4a4',
              },
            },
          },

          {
            name: '矩形1',
            type: 'line',
            yAxisIndex: 0, // 這裡要設定哪個y軸，預設是最左邊的是0，然後1，2順序來。
            data: [
              33, 32, 30, 30, 31, 35, 33, 45, 32, 44, 33, 37, 27, 40, 49, 43,
              42, 40, 40, 31, 30, 39, 34, 43,
            ],
            symbolSize: 1,
            itemStyle: {
              normal: {
                color: '#505F62',
              },
            },
          },

          {
            name: '矩形2',
            type: 'line',
            yAxisIndex: 0, // 這裡要設定哪個y軸，預設是最左邊的是0，然後1，2順序來。
            data: [
              45, 32, 44, 33, 37, 31, 35, 33, 40, 31, 30, 39, 34, 27, 40, 49,
              43, 42, 40, 33, 32, 30, 30, 47,
            ],
            symbolSize: 1,
            itemStyle: {
              normal: {
                color: '#828C8F',
              },
            },
          },

          {
            name: '矩形3',
            type: 'line',
            yAxisIndex: 0, // 這裡要設定哪個y軸，預設是最左邊的是0，然後1，2順序來。
            data: [
              33, 40, 31, 30, 39, 34, 45, 32, 44, 33, 37, 31, 35, 27, 40, 49,
              43, 43, 42, 40, 33, 32, 30, 30
            ],
            symbolSize: 1,
            itemStyle: {
              normal: {
                // color: '#37484C',
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
