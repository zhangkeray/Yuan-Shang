<template>
  <div>
    <div id="main" style="width: 1000px; height: 700px"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import axios from 'axios'
export default {
  data() {
    return {
      charts: '',
      /* opinionData: ["3", "2", "4", "4", "5"] */
      opinionData: [],
    }
  },
  methods: {
    getData() {
      axios
        .get('http://localhost:8888/DEMO4_2')
        .then((response) => {
          console.log(response.data)
          this.opinionData = response.data
          this.drawLine('main')
        })
        .catch((error) => {
          console.log(error)
          // alert("請求失敗")
        })
    },
    drawLine(id) {
      this.charts = echarts.init(document.getElementById(id))
      this.charts.setOption({
        title: {
          text: 'Beijing AQI',
          left: '1%',
        },
        tooltip: {
          trigger: 'axis',
        },
        grid: {
          left: '5%',
          right: '15%',
          bottom: '10%',
        },
        toolbox: {
          right: 10,
          feature: {
            dataZoom: {
              yAxisIndex: 'none',
            },
            restore: {},
            saveAsImage: {},
          },
        },
        dataZoom: [
          {
            startValue: '2014-06-01',
          },
          {
            type: 'inside',
          },
        ],
        xAxis: {
          data: this.opinionData.map(function (item) {
            return item[0]
          }),
        },
        yAxis: {
          type: 'value',
        },
        visualMap: {
          top: 50,
          right: 10,
          pieces: [
            {
              gt: 0,
              lte: 50,
              color: '#93CE07',
            },
            {
              gt: 50,
              lte: 100,
              color: '#FBDB0F',
            },
            {
              gt: 100,
              lte: 150,
              color: '#FC7D02',
            },
            {
              gt: 150,
              lte: 200,
              color: '#FD0100',
            },
            {
              gt: 200,
              lte: 300,
              color: '#AA069F',
            },
            {
              gt: 300,
              color: '#AC3B2A',
            },
          ],
          outOfRange: {
            color: '#999',
          },
        },
        series: [
          {
            name: '近七日收益',
            type: 'line',
            stack: '總量',
            data: this.opinionData,
          },
        ],
      })
    },
  },
  // 調用
  mounted() {
    this.getData()
  },
}
</script>
