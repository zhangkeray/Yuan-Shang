<template>
  <v-Main>
    <v-App>
      <v-row>
        <v-col cols="8">
          <div ref="lineBarChart" style="height: 600px; width: 1480px"></div>
        </v-col>
        <v-col cols="2">
          <v-row class="mt-16">
            <v-col cols="6">
              <v-text-field
                v-model="refreshTimeNormal"
                label="刷新率"
              ></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-btn id="start" class="mt-3" color="primary">開始繪圖</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-App>
  </v-Main>
</template>

<script>
import * as echarts from 'echarts'
import axios from 'axios'

export default {
  data() {
    return {
      opinionData: [],
      refreshTimeNormal: 1000, // 正常刷新时间
      timeArr: [],
    }
  },
  mounted() {
    // this.drawBar()
    this.getData(0, 4)
  },

  methods: {
    
    // 取得api
    getData(start, stop) {
      axios({
        method: 'get',
        url: 'http://localhost:8080/finalchartgo',
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          start,
          stop,
        },
      }).then((params) => {
        console.log(params.data[0])
        this.opinionData = params.data[0]
        this.drawBar()
      })
    },

    // 圖表
    drawBar() {
      const chartDom = this.$refs.lineBarChart
      const myChart = echarts.init(chartDom) // echarts初始化
      var option

      // 指定图表的配置项和数据
      var oneSecond = 1000
      var date = []
      var queueLength = 2 // 队列长度
      // var refreshTimeNormal = 1000 // 正常刷新时间

      // 设置初试时间
      var initTime = new Date() // 获得当前时间
      // 此处是将时间戳改为正常Date格式时间
      var now = new Date(initTime.getTime()) // 当前时间
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
          top: 100, // 距离容器上边界40像素
          bottom: 80, // 距离容器下边界30像素
        },
        xAxis: {
          // x轴设置
          // type: 'category',
          boundaryGap: false,
          splitLine: { show: true }, // 去除网格线
          data: date,
          // data: this.opinionData.time,
          splitNumber: 12, // 横坐标设置24个间隔
        },
        yAxis: {
          // y轴设置
          boundaryGap: [0, '50%'],
          splitLine: { show: true }, // 去除网格线
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
            fillerColor: 'rgba(255,255,255,.6)',
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
            smooth: true,
            lineStyle: {
              // color: '#8F2400',
              width: 3,
            },
            data: this.opinionData.spot1,
          },
          {
            name: '區塊2',
            type: 'line',
            symbol: 'none',
            smooth: true,
            lineStyle: {
              // color: '#C23607',
              width: 3,
            },
            data: this.opinionData.spot2,
          },
          {
            name: '區塊3',
            type: 'line',
            symbol: 'none',
            smooth: true,
            lineStyle: {
              // color: '#E9430C',
              width: 3,
            },
            data: this.opinionData.spot3,
          },
          {
            name: '區塊4',
            type: 'line',
            symbol: 'none',
            smooth: true,
            lineStyle: {
              // color: '#F56B3D',
              width: 3,
            },
            data: this.opinionData.spot4,
          },
          {
            name: '區塊5',
            type: 'line',
            symbol: 'none',
            smooth: true,
            lineStyle: {
              // color: '#E7957A',
              width: 3,
            },
            data: this.opinionData.spot5,
          },
        ],
      }

      // -------------------------------------------------------------

      setInterval(function () {
        addData(true)
        myChart.setOption({
          xAxis: {
            data: date,
            // data: this.opinionData.time,
          },
        })
      }, this.refreshTimeNormal)
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
      
    },
  },
}
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
