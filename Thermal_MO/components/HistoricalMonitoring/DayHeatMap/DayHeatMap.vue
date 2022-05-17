<template>
  <div ref="heatMap2" style="height: 185px; width: 880px"></div>
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
      for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 23; j++) {
          console.log('123')
        }
      }
      // prettier-ignore
      const data = [
        [0, 0, 0], [0, 1, 0], [0, 2, 0], [0, 3, 0], [0, 4, 0],
        [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 0],
        [0, 10, 0], [0, 11, 0], [0, 12, 0], [0, 13, 0], [0, 14, 0],
        [0, 15, 0], [0, 16, 0], 

        [1, 0, 0], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], 
        [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], 
        [1, 10, 0], [1, 11, 0], [1, 12,0], [1, 13, 1], [1, 14, 0], 
        [1, 15, 0], [1, 16, 0], 

        [2, 0, 0], [2, 1, 1],[2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0],
        [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 0], [2, 11, 0],
        [2, 12, 0], [2, 13, 0], [2, 14, 0], [2, 15, 0], [2, 16, 0],
        

        [3, 0, 0], [3, 1, 0], [3, 2, 0], [3, 3, 2], [3, 4, 0], [3, 5, 0], 
        [3, 6, 0], [3, 7, 0], [3, 8, 0], [3, 9, 0], [3, 10, 0], [3, 11, 0],
        [3, 12, 0], [3, 13, 0], [3, 14, 0], [3, 15, 0], 
        
        
        [4, 0, 0], [4, 1, 1], [4, 2, 0], [4, 3, 0], [4, 4, 0],
        [4, 5, 0], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 0], [4, 10, 0],
        [4, 11, 0], [4, 12, 0], [4, 13, 0], [4, 14, 0], [4, 15, 0],
       
        
        [5, 0, 0], [5, 1,0], [5, 2, 0], [5, 3, 0], [5, 4, 0], [5, 5, 0], 
        [5, 6, 0], [5, 7, 0], [5, 8, 0], [5, 9, 0], [5, 10, 0], [5, 11, 0],
        [5, 12, 0], [5, 13, 0], [5, 14, 0], [5, 15, 0],
       

        // [6, 0, 5], [6, 1, 5], [6, 2, 5], [6, 3, 5], [6, 4, 5], [6, 5, 5], 
        // [6, 6, 5], [6, 7, 5], [6, 8, 5], [6, 9, 5], [6, 10, 5], [6, 11, 5], 
        // [6, 12, 5], [6, 13, 5], [6, 14, 3], [6, 15, 4], [6, 16, 5], 
   
        ]
    .map(function (item) {
    return [item[1], item[0], item[2] ];
});
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
            data,
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
