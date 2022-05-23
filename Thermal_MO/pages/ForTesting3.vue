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
      axios.get('http://localhost:8888/DEMO4_3').then(
        (response) => {
          console.log(response.data)
          this.opinionData = response.data
          this.drawLine('main')
        },
        (response) => {
          console.log('error')
        }
      )
    },
    drawLine(id) {
      this.charts = echarts.init(document.getElementById(id))
      this.charts.setOption({
        title: {
          text: '最高溫度與區間比較',
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
            startValue: '2022-05-01 00:00:00',
          },
          {
            type: 'inside',
          },
        ],
        xAxis: {
          type: 'time',
          axisPointer: {
            value: '2016-10-7',
            snap: true,
            lineStyle: {
              color: '#7581BD',
              width: 2,
            },
            label: {
              show: true,
              formatter (params) {
                return echarts.format.formatTime('yyyy-MM-dd', params.value)
              },
              backgroundColor: '#7581BD',
            },
            handle: {
              show: true,
              color: '#fff',
            },
          },
          splitLine: {
            show: false,
          },
        },
        // xAxis: {
        //   data: this.opinionData.map(function (item) {
        //     return item[0]
        //   }),

        //   // ---------------------------------------------------

        //   // type: 'category',
        //   // data: this.opinionData.table_alarm_start

        //   // ---------------------------------------------------
        //   // data: [
        //   //   '2009/6/12 2:00',
        //   //   '2009/6/12 3:00',
        //   //   '2009/6/12 4:00',
        //   //   '2009/6/12 5:00',
        //   //   '2009/6/12 6:00',
        //   //   '2009/6/12 7:00',
        //   //   '2009/6/12 8:00',
        //   //   '2009/6/12 9:00',
        //   //   '2009/6/12 10:00',
        //   //   '2009/6/12 11:00',
        //   // ].map(function (str) {
        //   //   return str.replace(' ', '\n')
        //   // }),
        //   // ---------------------------------------------------
        // },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: '',
            type: 'line',
            data: this.opinionData.table_max,
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
