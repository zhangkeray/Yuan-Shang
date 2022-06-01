<template>
  <div ref="lineBarChart" style="height: 670px; width: 1250px"></div>
</template>

<script>
import * as echarts from 'echarts'
import axios from 'axios'

export default {
  data() {
    return {}
  },
  mounted() {
        this.initial()

  },

  methods: {
    initial() {
      const url = 'http://localhost:8080/CHART4' // 宣告取得警報list網址
      // 取得選取日期
  

          axios({
            method: 'get',
            url,
            params: {
              // table_timeselectStart: "2022-05-02",
              // table_timeselectStop: "2022-08-02",
            },
          })
            .then((events) => {
              console.log(events.data)
              // var data = events.data
              // var output = []
              // data.forEach((index, value) => {
              //   output.push({
              //     index: value + 1,
              //     object_name: this.objectName[index.table_itemName],
              //     object_date: '2022/05/17',
              //     object_time_start: '01:32:14',
              //     object_tiem_stop: '01:35:41',
              //     object_time_totle: '3分',
              //     object_setting_temperature: '45°C',
              //     object_temperature_max: '47°C',
              //   })
              // })
              // this.fakeTemps = output
            })
            .catch((e) => {
              console.log(e)
            })
        
      
      const heat = document.getElementById('heatMap2_for_this')
      const myChart = echarts.getInstanceByDom(heat)
      myChart.on('click', (params) => {
        var dates = this.dates
        // 控制台打印数据的名称
        var startTime =
          dates + ' ' + params.data[0] + ':' + params.data[1] * 10 + ':00'
        var stopTime =
          dates + ' ' + params.data[0] + ':' + (params.data[1] * 10 + 9) + ':59'
        console.log(startTime, stopTime)
        axios({
          method: 'get',
          url,
        })
          .then((events) => {
            console.log(events.data)
            var data = events.data
            var output = []
            data.forEach((index, value) => {
              output.push({
                index: value + 1,
                object_name: this.objectName[index.table_itemName],
                object_date: '2022/05/17',
                object_time_start: '01:32:14',
                object_tiem_stop: '01:35:41',
                object_time_totle: '3分',
                object_setting_temperature: '45°C',
                object_temperature_max: '47°C',
              })
            })
            this.fakeTemps = output
          })
          .catch((e) => {
            console.log(e)
          })
      })
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
