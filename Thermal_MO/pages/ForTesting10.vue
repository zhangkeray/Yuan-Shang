<template>
  <div>
    <div
      ref="lineBarChart"
      id="lineBarChart001"
      style="height: 600px; width: 1800px"
    ></div>
    <div id="echart-loading-cover">{{ loadingname }}</div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import axios from 'axios'
export default {
  data: () => ({
    url: 'http://127.0.0.1:5000/api/alarm/max',

    loadingname: '',
  }),
  mounted() {
    this.drawBar()
  },

  methods: {
    drawBar() {
      const DataStartTime = '2022-06-01 00:00:00'
      const DataEndTime = '2022-06-01 00:59:59'
      var DataStartDay = new Date(DataStartTime)
      DataStartDay =
        DataStartDay.getFullYear() +
        '-' +
        (DataStartDay.getMonth() + 1) +
        '-' +
        DataStartDay.getDate()
      var DataEndDay = new Date(DataEndTime)
      DataEndDay.setDate(DataEndDay.getDate() + 1)
      DataEndDay =
        DataEndDay.getFullYear() +
        '-' +
        (DataEndDay.getMonth() + 1) +
        '-' +
        DataEndDay.getDate()
      console.log(DataStartDay, DataEndDay)

      const chartDom = this.$refs.lineBarChart
      const myChart = echarts.init(chartDom) // echarts初始化
      var option
      // 選擇圖表樣式------------------------------------------
      option = {

        tooltip: {
          axisPointer: {
            type: 'cross',
          },
          className: 'echarts-tooltip-vivew',
          // triggerOn: 'click', // 触发方式
          // alwaysShowContent:true,   // 鼠标离开区域不消失
          trigger: 'axis',
          position(pos, params, el, elRect, size) {
            var obj = []
            if (pos[0] < size.viewSize[0] / 2) {
              obj[0] = pos[0] + 20
            } else {
              obj[0] = pos[0] - (size.contentSize[0] + 20)
            }
            if (pos[1] < size.viewSize[1] * 0.7) {
              obj[1] = pos[1] - size.contentSize[1] / 6
            } else {
              obj[1] = pos[1] - size.contentSize[1] / 1.5
            }

            return obj
          },
        },

        grid: {
          show: false,
          top: '70',
          bottom: '55',
          right: '130',
          left: '60',
        },
        legend: {
          show: true,
          selectedMode: 'multiple', // 設定顯示單一圖例的圖形，點選可切換
          right: 80,
          width: '650px',
          textStyle: {
            color: '#666',
            fontSize: 9,
          },
          itemGap: 10,
        },
        xAxis: [
          {
            type: 'category',
          },
        ],
        dataZoom: [
          // 数据滑块设置
          {
            type: 'slider', // 数据滑块
            //     type: 'inside',

            start: 0, // 起始0
            end: 100, // 终止100
            realtime: true,
            bottom: '0%',

            fillerColor: 'rgba(255,255,255,.6)',
          },
          {
            type: 'inside', // 使鼠标在图表中时滚轮可用
          },
        ],

        yAxis: [
          {
            type: 'value',
            name: '(°C)',
            min: 0,
            max: 60,
            show: true,
            interval: 10,
          },
        ],
        series: [],
      }
      // -------------------------------------------------------------
      option && myChart.setOption(option)

      // GET DATA
      const loadinname = document.getElementById('echart-loading-cover')
      loadinname.style.display = 'unset'
      this.loadingname =
        '資料下載(' + DataStartTime + '~' + DataEndTime + ')中...'

      axios({
        method: 'post',
        url: this.url,
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify([
          {
            table_alarm_start: DataStartTime,
            table_alarm_stop: DataEndTime,
          },
        ]),
      })
        .then((events) => {
          var arr = events.data
          var time = arr[0].time
          delete arr[0].time
          var data = arr[0]
          var seriesData = []
          Object.keys(data).forEach((key) => {
            var arr = {
              type: 'line',
              name: key,
              yAxisIndex: 0,
              data: data[key],
              symbolSize: 1,
            }
            seriesData.push(arr)
          })
          myChart.setOption({
            xAxis: [
              {
                data: time,
              },
            ],
            series: seriesData,
          })
        })
        .catch((err) => {
          console.log(err)
        })
      // console.log(params.data)
      // function generateRandomInt(min, max) {
      //   return Math.floor(Math.random() * (max - min) + min)
      // }
    },
  },
}
</script>
