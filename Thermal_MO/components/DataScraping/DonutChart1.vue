<template>
  <div id="donut-chart1" style="height: 300px; width: 250px"></div>
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
      const chartDom = document.getElementById('donut-chart1')
      const myChart = echarts.init(chartDom) // echarts初始化
      const colorPalette = ['#37484C','#9aa2a4', '#d8dddd', '#E6E8E9']
      var option

      // 選擇圖表樣式------------------------------------------

 option = {
        tooltip: {
          trigger: 'item',
        },
        legend: {

          bottom: '-7px',
          left: 'center',
        },

        series: [
          {
            name: '',
            // bottom:'100%',

            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {

              borderRadius: 5,
              borderColor: '#fff',
              borderWidth: 5,
            },

            color: colorPalette,

            label: {
              show: true,
              position: 'center',
              // formatter(d) {
              // return d.value;
              formatter: '{c}'
            },
            
            emphasis: {
              label: {
                show: true,
                fontSize: '15',
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: true,
            },
            data: [
              { name: '異常筆數', value: 60  },
              { name: '些微異常筆數', value: 20  },
              { name: '良好總筆數', value: 15  },
              { name: '資料總筆數', value: 15  },
            ],
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

