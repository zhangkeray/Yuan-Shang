<template>
  <div ref="lineBarChart" style="height: 670px; width: 1250px"></div>
</template>

<script>
import * as echarts from 'echarts'
import axios from 'axios'

export default {
  data() {
    return {
      opinionData: [],
    }
  },
  mounted() {
    this.getData()
    // this.drawBar()
  },

  methods: {
    // axios
    getData() {
      axios
        .get('http://localhost:8080/CHART5')
        .then((response) => {
          console.log(response.data)
          this.opinionData = response.data
          this.drawBar('main')
        })
        .catch((error) => {
          console.log(error)
        })
    },
    drawBar() {
      const chartDom = this.$refs.lineBarChart
      const myChart = echarts.init(chartDom) // echarts初始化
      var option

      // 指定图表的配置项和数据
      var oneSecond = 5000
      var date = []
      var queueLength = 5 // 队列长度
      var refreshTimeNormal = 5000 // 正常刷新时间
      // ------------------------------------------------------------------

      // ------------------------------------------------------------------

      // var data = []
      // 设置初试时间
      var initTime = new Date() // 获得当前时间
      // 此处是将时间戳改为正常Date格式时间
      var now = new Date(initTime.getTime() - queueLength * refreshTimeNormal) // 当前时间减去前几分钟，以填充数据
      function addData() {
        now =
          now.toLocaleDateString() +
          '\n' +
          now.getHours() +
          now.toLocaleTimeString().substr(-6, 6)
        date.push(now) // 填充横坐标数组 时间
        // data.push((Math.random() - 0.4) * 10 + data[data.length - 1]); // 填充纵坐标

        // if (shift) {
        //   data.push((Math.random() - 0.4) * 10 + data[data.length - 1]) // 填充纵坐标
        //   // date.shift();
        //   // data.shift();
        //   // 删除第一项
        // } else {
        //   data.push((Math.random() - 0.4) * 10 + data[data.length - 1]) // 填充纵坐标
        //   // data.push(0); // 初始化填充纵坐标
        // }
        // 控制每次加多少一段时间
        now = new Date(+new Date(now) + oneSecond)
      }

      // 先赋值10个，同时数组上限为20
      for (var iv = 1; iv < queueLength; iv++) {
        addData()
      }

      // 選擇圖表樣式------------------------------------------

      option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            animation: false,
          },
        },
        grid: {
          top: 40, // 距离容器上边界40像素
          bottom: 80, // 距离容器下边界30像素
        },
        xAxis: {
          // x轴设置
          // type: 'category',
          boundaryGap: false,
          splitLine: { show: false }, // 去除网格线
          data: date,
          splitNumber: 12, // 横坐标设置24个间隔
        },
        yAxis: {
          // y轴设置
          boundaryGap: [0, '50%'],
          splitLine: { show: false }, // 去除网格线
          type: 'value',
          axisLabel: {
            formatter: '{value} (°C)', // 给Y轴上的刻度加上单位
          },
        },
        dataZoom: [
          // 数据滑块设置
          {
            type: 'slider', // 数据滑块
            start: 0, // 起始0
            end: 100, // 终止100
            minSpan: 8,
            bottom: '0%',
            dataBackground: {
              lineStyle: {
                color: '#F0F2F5',
              },
              areaStyle: {
                color: '#F0F2F5',
                opacity: 1,
              },
            },
            // fillerColor:'rgba(255,255,255,.6)'
          },
          {
            type: 'inside', // 使鼠标在图表中时滚轮可用
          },
        ],
        series: [
          // 曲线设置
          {
            name: '區塊1',
            type: 'line',
            symbol: 'none',
            lineStyle: {
              // color: '#8F2400',
              width: 3,
            },
            data: this.opinionData.arr,
          },
          {
            name: '區塊2',
            type: 'line',
            symbol: 'none',
            lineStyle: {
              // color: '#C23607',
              width: 3,
            },
            data: this.opinionData.arr2,
          },
          {
            name: '區塊3',
            type: 'line',
            symbol: 'none',
            lineStyle: {
              // color: '#E9430C',
              width: 3,
            },
            data: this.opinionData.arr3,
          },
          {
            name: '區塊4',
            type: 'line',
            symbol: 'none',
            lineStyle: {
              // color: '#F56B3D',
              width: 3,
            },
            data: this.opinionData.arr4,
          },
          {
            name: '區塊5',
            type: 'line',
            symbol: 'none',
            lineStyle: {
              // color: '#E7957A',
              width: 3,
            },
            data: this.opinionData.arr5,
          },
          {
            name: '區塊6',
            type: 'line',
            symbol: 'none',
            lineStyle: {
              // color: '#E9AD99',
              width: 3,
            },
            data: this.opinionData.arr6,
          },
          {
            name: '區塊7',
            type: 'line',
            symbol: 'none',
            lineStyle: {
              // color: '#EAC4B7',
              width: 3,
            },
            data: this.opinionData.arr7,
          },
        ],
      }

      // -------------------------------------------------------------
      // setInterval(function () {

      setInterval(function () {
        addData(true)
        myChart.setOption({
          xAxis: {
            data: date,
          },
        })
      }, refreshTimeNormal)
      // }, refreshTimeNormal)
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
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
