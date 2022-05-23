<template>
  <div
    ref="heatMap2"
    id="heatMap2_for_this"
    style="height: 185px; width: 880px"
  ></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'HeatMap2',

  data() {
    return {}
  },
  mounted() {
    this.drawBar()
  },
  methods: {
    drawBar() {
      const chartDom = this.$refs.heatMap2
      const myChart = echarts.init(chartDom) // echarts初始化
      // const colorPalette = ['#37484C', '#E6E8E9']
      var option

      // 選擇圖表樣式------------------------------------------

      // prettier-ignore
      const hours = [
    '0', '1', '2', '3', '4', '5', '6',
    '7', '8', '9', '10', '11',
    '12', '13', '14', '15', '16', '17',
    '18', '19', '20', '21', '22', '23'
];
      // prettier-ignore
      const mins = [
    '0','10', '20', '30',
    '40', '50', 
];
      // for (var i = 0; i < 6; i++) {
      //   for (var j = 0; j < 23; j++) {
      //     console.log('123')
      //   }
      // }
      // prettier-ignore
      option = {
        // color: colorPalette,
        tooltip: {
          position: 'top',
          // trigger: 'item',
        },
        grid: {
          height: '75%',
          // right: 'center',
          bottom: '50px',
          left: '30px',
          top: '28px',
          width: '750px',
        },
        xAxis: {
          type: 'category',
          name: '(hr)',
          data: hours,
          splitArea: {
            show: true,
          },
        },
        yAxis: {
          name: '(min)',
          type: 'category',
          data: mins,
          splitArea: {
            show: true,
            position: 'absoiute',
          },
        },
        mytextStyle: {
          fontSize: 9,
        },
        visualMap: {
          min: 0,
          max: 2,
          calculable: true,
          orient: 'vertical',
          left: '1500',
          top: 'center',
          inRange: {
            color: ['#f1f3f4', '#E6E8E9', '#9aa2a4', '#37484C'],
          },
          itemStyle: {
            borderColor: '#808b8e',
          },
          show: false,
        },

        series: [
          {
            name: '',
            type: 'heatmap',
            label: {
              show: true,
              textStyle: {
                // fontFamily: 'Arial, Verdana, sans...',
                fontFamily: 'Arial',
                fontSize: '9',
                // fontStyle: 'normal',
                // color: '#505f62',
              },
              
            },
            itemStyle: {
              borderWidth: 0.1,
              borderColor: '#808b8e',
            },
            
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                // shadowColor: 'rgba(0, 0, 0, 0.5)',
                borderColor: '#fff',
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
