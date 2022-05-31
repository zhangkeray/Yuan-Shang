<template>
  <div ref="lineBarChart" style="height: 670px; width: 1250px"></div>
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

      // 指定图表的配置项和数据
      var oneSecond = 50
      var date = []
      var queueLength = 3 // 队列长度
      var refreshTimeNormal = 50 // 正常刷新时间
      // ------------------------------------------------------------------
      // 各曲線
      var arr = []
      var arr2 = []
      var arr3 = []
      var arr4 = []
      var arr5 = []
      var arr6 = []
      var arr7 = []
      // 曲線1--------------
      for (var i = 0; i <= 1000; i++) {
        var t = i // t為秒數
        var lambda = 0.09 // lambda為線性代數
        var amp = 42 // amp為振幅
        // var amp = Math.random() * 3;
        var Ftemp = (1 - Math.pow(Math.E, -lambda * t)) * amp // 公式;Ftemp為溫度
        Ftemp = Ftemp + generateRandomInt(0.3, 0.5)
        console.log(generateRandomInt(0.3, 0.7))
        arr.push(Ftemp)
      }
      function generateRandomInt(min, max) {
        return Math.random() * (max - min) + min
      }
      // 曲線2--------------
      for (var i2 = 0; i2 <= 1000; i2++) {
        var t2 = i2 // t為秒數
        var lambda2 = 0.005 // lambda為線性代數
        var amp2 = 34 // amp為振幅
        // var amp = Math.random() * 3;
        var Ftemp2 = (1 - Math.pow(Math.E, -lambda2 * t2)) * amp2 // 公式;Ftemp為溫度
        Ftemp2 = Ftemp2 + generateRandomInt2(0.3, 0.7)
        arr2.push(Ftemp2)
      }
      function generateRandomInt2(min, max) {
        return Math.random() * (max - min) + min
      }
      // 曲線3--------------
      for (var i3 = 0; i3 <= 1000; i3++) {
        var t3 = i3 // t為秒數
        var lambda3 = 0.05 // lambda為線性代數
        var amp3 = 20 // amp為振幅
        // var amp = Math.random() * 3;
        var Ftemp3 = (1 - Math.pow(Math.E, -lambda3 * t3)) * amp3 // 公式;Ftemp為溫度
        Ftemp3 = Ftemp3 + generateRandomInt3(0.3, 0.7)
        arr3.push(Ftemp3)
      }
      function generateRandomInt3(min, max) {
        return Math.random() * (max - min) + min
      }
      // 曲線4--------------
      for (var i4 = 0; i4 <= 1000; i4++) {
        var t4 = i4 // t為秒數
        var lambda4 = 0.5 // lambda為線性代數
        var amp4 = 30 // amp為振幅
        // var amp = Math.random() * 3;
        var Ftemp4 = (1 - Math.pow(Math.E, -lambda4 * t4)) * amp4 // 公式;Ftemp為溫度
        Ftemp4 = Ftemp4 + generateRandomInt4(0.3, 0.7)
        arr4.push(Ftemp4)
      }
      function generateRandomInt4(min, max) {
        return Math.random() * (max - min) + min
      }
      // 曲線5--------------
      for (var i5 = 0; i5 <= 1000; i5++) {
        var t5 = i5 // t為秒數
        var lambda5 = 0.05 // lambda為線性代數
        var amp5 = 26 // amp為振幅
        // var amp = Math.random() * 3;
        var Ftemp5 = (1 - Math.pow(Math.E, -lambda5 * t5)) * amp5 // 公式;Ftemp為溫度
        Ftemp5 = Ftemp5 + generateRandomInt5(0.3, 0.7)
        arr5.push(Ftemp5)
      }
      function generateRandomInt5(min, max) {
        return Math.random() * (max - min) + min
      }
      // 曲線6--------------
      for (var i6 = 0; i6 <= 1000; i6++) {
        var t6 = i6 // t為秒數
        var lambda6 = 0.02 // lambda為線性代數
        var amp6 = 20 // amp為振幅
        // var amp = Math.random() * 3;
        var Ftemp6 = (1 - Math.pow(Math.E, -lambda6 * t6)) * amp6 // 公式;Ftemp為溫度
        Ftemp6 = Ftemp6 + generateRandomInt6(0.03, 0.07)
        console.log(generateRandomInt6(0.03, 0.07))
        arr6.push(Ftemp6)
      }
      function generateRandomInt6(min, max) {
        return Math.random() * (max - min) + min
      }
      // 曲線7--------------
      for (var i7 = 0; i7 <= 1000; i7++) {
        var t7 = i7 // t為秒數
        var lambda7 = 0.5 // lambda為線性代數
        var amp7 = 38 // amp為振幅
        // var amp = Math.random() * 3;
        var Ftemp7 = (1 - Math.pow(Math.E, -lambda7 * t7)) * amp7 // 公式;Ftemp為溫度
        Ftemp7 = Ftemp7 + generateRandomInt6(0.3, 0.7)
        console.log(generateRandomInt7(0.03, 0.07))
        arr7.push(Ftemp7)
      }
      function generateRandomInt7(min, max) {
        return Math.random() * (max - min) + min
      }
      // ------------------------------------------------------------------

      var data = []
      // 设置初试时间
      var initTime = new Date() // 获得当前时间
      // 此处是将时间戳改为正常Date格式时间
      var now = new Date(initTime.getTime() - queueLength * refreshTimeNormal) // 当前时间减去前几分钟，以填充数据
      function addData(shift) {
        now =
          now.toLocaleDateString() +
          '\n' +
          now.getHours() +
          now.toLocaleTimeString().substr(-6, 6)
        date.push(now) // 填充横坐标数组 时间
        // data.push((Math.random() - 0.4) * 10 + data[data.length - 1]); // 填充纵坐标

        if (shift) {
          data.push((Math.random() - 0.4) * 10 + data[data.length - 1]) // 填充纵坐标
          // date.shift();
          // data.shift();
          // 删除第一项
        } else {
          data.push((Math.random() - 0.4) * 10 + data[data.length - 1]) // 填充纵坐标
          // data.push(0); // 初始化填充纵坐标
        }
        // 控制每次加多少一段时间
        now = new Date(+new Date(now) + oneSecond)
      }

      // 先赋值10个，同时数组上限为20
      for (var iv = 1; iv < queueLength; iv++) {
        addData()
      }

      // 選擇圖表樣式------------------------------------------

      option = {
        grid: {
          top: 40, // 距离容器上边界40像素
          bottom: 80, // 距离容器下边界30像素
        },
        xAxis: {
          // x轴设置
          type: 'category',
          boundaryGap: false,
          splitLine: { show: true }, // 去除网格线
          data: date,
          splitNumber: 24, // 横坐标设置24个间隔
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
        color: colorPalette,
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
            name: 'spot1',
            type: 'line',
            symbol: 'none',
            lineStyle: {
              color: '#B84519',
              width: 3,
            },
            data: arr,
          },
          {
            name: 'spot1',
            type: 'line',
            symbol: 'none',
            lineStyle: {
              color: '#E16432',
              width: 3,
            },
            data: arr2,
          },
          {
            name: 'spot1',
            type: 'line',
            symbol: 'none',
            lineStyle: {
              color: '#E26A3A',
              width: 3,
            },
            data: arr3,
          },
          {
            name: 'spot1',
            type: 'line',
            symbol: 'none',
            lineStyle: {
              color: '#EA936F',
              width: 3,
            },
            data: arr4,
          },
          {
            name: 'spot1',
            type: 'line',
            symbol: 'none',
            lineStyle: {
              color: '#ECA080',
              width: 3,
            },
            data: arr5,
          },
          {
            name: 'spot1',
            type: 'line',
            symbol: 'none',
            lineStyle: {
              color: '#F1B9A2',
              width: 3,
            },
            data: arr6,
          },
          {
            name: 'spot1',
            type: 'line',
            symbol: 'none',
            lineStyle: {
              color: '#F6D2C4',
              width: 3,
            },
            data: arr7,
          },
        ],
      }

      // -------------------------------------------------------------

      setInterval(function () {
        addData(true)
        myChart.setOption({
          xAxis: {
            data: date,
          },
          series: [
            // {
            //   name: '溫度',
            //   data: arr,
            // },
            // {
            //   name: '溫度',
            //   data: arr2,
            // },
            // {
            //   name: '溫度',
            //   data: arr3,
            // },
            // {
            //   name: '溫度',
            //   data: arr4,
            // },
            // {
            //   name: '溫度',
            //   data: arr5,
            // },
            // {
            //   name: '溫度',
            //   data: arr6,
            // },
            // {
            //   name: '溫度',
            //   data: arr7,
            // },
          ],
        })
      }, refreshTimeNormal)
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
