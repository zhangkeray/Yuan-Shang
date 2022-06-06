<template>
  <div>
    <div id="my" style="width: 80%; height: 600px"></div>
  </div>
  <!-- <v-row class="ml-5">
    <v-col cols="5">
      <div>
        <VueSlickCarousel v-bind="slickOptions">
          <div
            ref="main"
            id="asdferg"
            style="width: 200px; height: 200px"
          ></div>
          <div style="width: 200px; height: 200px">2</div>
          <div style="width: 200px; height: 200px">3</div>
          <div style="width: 200px; height: 200px">4</div>
        </VueSlickCarousel>
      </div>
    </v-col>
  </v-row> -->
</template>
<script>
import * as echarts from 'echarts'
// import axios from 'axios'
// optional style for arrows & dots
export default {
  name: 'HistoricalMonitoringPage',
  data: () => ({
    slickOptions: {
      slidesToShow: 3,
      loop: false,
      arrows: true,
      adaptiveHeight: true,
      infinite: false,
      // slidesToScroll: 3,
      // centerMode: true,
      // dots: true,
      // focusOnSelect: true,
      // touchThreshold: 3,
    },
    // 定義
    arr: [],
  }),
  mounted() {
    // this.mount()
    // this.echarts()
    // 初始化
    this.test3()
    // 計時載入新資料
    var start = setInterval(() => {
      var arr = this.arr
      this.test4(arr)
    }, 1000)
    console.log(start)
  },
  methods: {
    test4(arr) {
      var chartDom = document.getElementById('my')
      var myChart = echarts.init(chartDom)
      // 把新資料放入arr陣列中
      arr.push([arr.length + 1, getRandomInt(100)])
      this.arr = arr
      function getRandomInt(max) {
        return Math.floor(Math.random() * max)
      }
      myChart.setOption({
        series: [
          {
            name: 'spot1',
            data: this.arr,
          },
        ],
      })
    },
    test3() {
      var chartDom = document.getElementById('my')
      var myChart = echarts.init(chartDom)
      var option

      option = {
        xAxis: {
          type: 'category',
          boundaryGap: false,
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '30%'],
        },
        series: [
          {
            name: 'spot1',
            type: 'line',
            symbol: 'none',
          },
        ],
      }
      option && myChart.setOption(option)
    },
    test2() {
      var chartDom = document.getElementById('my')
      var myChart = echarts.init(chartDom)
      var option

      option = {
        xAxis: {
          type: 'category',
          boundaryGap: false,
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '30%'],
        },
        series: [
          {
            name: 'spot1',
            type: 'line',
            symbol: 'none',
            lineStyle: {
              color: '#5470C6',
              width: 5,
            },
            markLine: {
              symbol: ['none', 'none'],
              label: { show: false },
              data: [{ xAxis: 5 }, { xAxis: 7 }],
            },
            data: [
              ['2019-10-10', 200],
              ['2019-10-11', 560],
              ['2019-10-12', 750],
              ['2019-10-13', 580],
              ['2019-10-14', 250],
              ['2019-10-15', 300],
              ['2019-10-16', ''],
              ['2019-10-17', 300],
              ['2019-10-18', 100],
            ],
          },
          {
            name: 'spot2',
            type: 'line',
            symbol: 'none',
            lineStyle: {
              color: 'rgb(233 65 65)',
              width: 5,
            },
            markLine: {
              symbol: ['none', 'none'],
              label: { show: false },
              data: [{ xAxis: 1 }],
            },
            data: [
              ['2019-10-10', ''],
              ['2019-10-11', 360],
              ['2019-10-12', 450],
              ['2019-10-13', 280],
              ['2019-10-14', 150],
              ['2019-10-15', 600],
              ['2019-10-16', 550],
              ['2019-10-17', 400],
              ['2019-10-18', 500],
            ],
          },
        ],
      }

      option && myChart.setOption(option)
    },
    // test() {
    //   setTimeout(() => {
    //     console.log(this.$refs)
    //     var chartDom = this.$refs.main
    //     var myChart = echarts.init(chartDom)
    //     var option
    //     const dateList = [
    //       ['2017-1-1', '初四'],
    //       ['2017-1-2', '初五'],
    //       ['2017-1-3', '初六'],
    //       ['2017-1-4', '初七'],
    //       ['2017-1-5', '初八', '小寒'],
    //       ['2017-1-6', '初九'],
    //       ['2017-1-7', '初十'],
    //       ['2017-1-8', '十一'],
    //       ['2017-1-9', '十二'],
    //       ['2017-1-10', '十三'],
    //       ['2017-1-11', '十四'],
    //       ['2017-1-12', '十五'],
    //       ['2017-1-13', '十六'],
    //       ['2017-1-14', '十七'],
    //       ['2017-1-15', '十八'],
    //       ['2017-1-16', '十九'],
    //       ['2017-1-17', '二十'],
    //       ['2017-1-18', '廿一'],
    //       ['2017-1-19', '廿二'],
    //       ['2017-1-20', '廿三', '大寒'],
    //       ['2017-1-21', '廿四'],
    //       ['2017-1-22', '廿五'],
    //       ['2017-1-23', '廿六'],
    //       ['2017-1-24', '廿七'],
    //       ['2017-1-25', '廿八'],
    //       ['2017-1-26', '廿九'],
    //       ['2017-1-27', '三十'],
    //       ['2017-1-28', '正月'],
    //       ['2017-1-29', '初二'],
    //       ['2017-1-30', '初三'],
    //       ['2017-1-31', '初四'],
    //       ['2017-2-1', '初五'],
    //       ['2017-2-2', '初六'],
    //       ['2017-2-3', '初七', '立春'],
    //       ['2017-2-4', '初八'],
    //       ['2017-2-5', '初九'],
    //       ['2017-2-6', '初十'],
    //       ['2017-2-7', '十一'],
    //       ['2017-2-8', '十二'],
    //       ['2017-2-9', '十三'],
    //       ['2017-2-10', '十四'],
    //       ['2017-2-11', '十五'],
    //       ['2017-2-12', '十六'],
    //       ['2017-2-13', '十七'],
    //       ['2017-2-14', '十八'],
    //       ['2017-2-15', '十九'],
    //       ['2017-2-16', '二十'],
    //       ['2017-2-17', '廿一'],
    //       ['2017-2-18', '廿二', '雨水'],
    //       ['2017-2-19', '廿三'],
    //       ['2017-2-20', '廿四'],
    //       ['2017-2-21', '廿五'],
    //       ['2017-2-22', '廿六'],
    //       ['2017-2-23', '廿七'],
    //       ['2017-2-24', '廿八'],
    //       ['2017-2-25', '廿九'],
    //       ['2017-2-26', '二月'],
    //       ['2017-2-27', '初二'],
    //       ['2017-2-28', '初三'],
    //       ['2017-3-1', '初四'],
    //       ['2017-3-2', '初五'],
    //       ['2017-3-3', '初六'],
    //       ['2017-3-4', '初七'],
    //       ['2017-3-5', '初八', '驚蟄'],
    //       ['2017-3-6', '初九'],
    //       ['2017-3-7', '初十'],
    //       ['2017-3-8', '十一'],
    //       ['2017-3-9', '十二'],
    //       ['2017-3-10', '十三'],
    //       ['2017-3-11', '十四'],
    //       ['2017-3-12', '十五'],
    //       ['2017-3-13', '十六'],
    //       ['2017-3-14', '十七'],
    //       ['2017-3-15', '十八'],
    //       ['2017-3-16', '十九'],
    //       ['2017-3-17', '二十'],
    //       ['2017-3-18', '廿一'],
    //       ['2017-3-19', '廿二'],
    //       ['2017-3-20', '廿三', '春分'],
    //       ['2017-3-21', '廿四'],
    //       ['2017-3-22', '廿五'],
    //       ['2017-3-23', '廿六'],
    //       ['2017-3-24', '廿七'],
    //       ['2017-3-25', '廿八'],
    //       ['2017-3-26', '廿九'],
    //       ['2017-3-27', '三十'],
    //       ['2017-3-28', '三月'],
    //       ['2017-3-29', '初二'],
    //       ['2017-3-30', '初三'],
    //       ['2017-3-31', '初四'],
    //       ['2017-4-1', '初五'],
    //       ['2017-4-2', '初六'],
    //       ['2017-4-3', '初七'],
    //       ['2017-4-4', '初八', '清明'],
    //       ['2017-4-5', '初九'],
    //       ['2017-4-6', '初十'],
    //       ['2017-4-7', '十一'],
    //       ['2017-4-8', '十二'],
    //       ['2017-4-9', '十三'],
    //       ['2017-4-10', '十四'],
    //       ['2017-4-11', '十五'],
    //       ['2017-4-12', '十六'],
    //       ['2017-4-13', '十七'],
    //       ['2017-4-14', '十八'],
    //       ['2017-4-15', '十九'],
    //       ['2017-4-16', '二十'],
    //       ['2017-4-17', '廿一'],
    //       ['2017-4-18', '廿二'],
    //       ['2017-4-19', '廿三'],
    //       ['2017-4-20', '廿四', '穀雨'],
    //       ['2017-4-21', '廿五'],
    //       ['2017-4-22', '廿六'],
    //       ['2017-4-23', '廿七'],
    //       ['2017-4-24', '廿八'],
    //       ['2017-4-25', '廿九'],
    //       ['2017-4-26', '四月'],
    //       ['2017-4-27', '初二'],
    //       ['2017-4-28', '初三'],
    //       ['2017-4-29', '初四'],
    //       ['2017-4-30', '初五'],
    //       ['2017-5-1', '初六'],
    //       ['2017-5-2', '初七'],
    //       ['2017-5-3', '初八'],
    //       ['2017-5-4', '初九'],
    //       ['2017-5-5', '初十', '立夏'],
    //       ['2017-5-6', '十一'],
    //       ['2017-5-7', '十二'],
    //       ['2017-5-8', '十三'],
    //       ['2017-5-9', '十四'],
    //       ['2017-5-10', '十五'],
    //       ['2017-5-11', '十六'],
    //       ['2017-5-12', '十七'],
    //       ['2017-5-13', '十八'],
    //       ['2017-5-14', '十九'],
    //       ['2017-5-15', '二十'],
    //       ['2017-5-16', '廿一'],
    //       ['2017-5-17', '廿二'],
    //       ['2017-5-18', '廿三'],
    //       ['2017-5-19', '廿四'],
    //       ['2017-5-20', '廿五'],
    //       ['2017-5-21', '廿六', '小滿'],
    //       ['2017-5-22', '廿七'],
    //       ['2017-5-23', '廿八'],
    //       ['2017-5-24', '廿九'],
    //       ['2017-5-25', '三十'],
    //       ['2017-5-26', '五月'],
    //       ['2017-5-27', '初二'],
    //       ['2017-5-28', '初三'],
    //       ['2017-5-29', '初四'],
    //       ['2017-5-30', '初五'],
    //       ['2017-5-31', '初六'],
    //       ['2017-6-1', '初七'],
    //       ['2017-6-2', '初八'],
    //       ['2017-6-3', '初九'],
    //       ['2017-6-4', '初十'],
    //       ['2017-6-5', '十一', '芒種'],
    //       ['2017-6-6', '十二'],
    //       ['2017-6-7', '十三'],
    //       ['2017-6-8', '十四'],
    //       ['2017-6-9', '十五'],
    //       ['2017-6-10', '十六'],
    //       ['2017-6-11', '十七'],
    //       ['2017-6-12', '十八'],
    //       ['2017-6-13', '十九'],
    //       ['2017-6-14', '二十'],
    //       ['2017-6-15', '廿一'],
    //       ['2017-6-16', '廿二'],
    //       ['2017-6-17', '廿三'],
    //       ['2017-6-18', '廿四'],
    //       ['2017-6-19', '廿五'],
    //       ['2017-6-20', '廿六'],
    //       ['2017-6-21', '廿七', '夏至'],
    //       ['2017-6-22', '廿八'],
    //       ['2017-6-23', '廿九'],
    //       ['2017-6-24', '六月'],
    //       ['2017-6-25', '初二'],
    //       ['2017-6-26', '初三'],
    //       ['2017-6-27', '初四'],
    //       ['2017-6-28', '初五'],
    //       ['2017-6-29', '初六'],
    //       ['2017-6-30', '初七'],
    //       ['2017-7-1', '初八'],
    //       ['2017-7-2', '初九'],
    //       ['2017-7-3', '初十'],
    //       ['2017-7-4', '十一'],
    //       ['2017-7-5', '十二'],
    //       ['2017-7-6', '十三'],
    //       ['2017-7-7', '十四', '小暑'],
    //       ['2017-7-8', '十五'],
    //       ['2017-7-9', '十六'],
    //       ['2017-7-10', '十七'],
    //       ['2017-7-11', '十八'],
    //       ['2017-7-12', '十九'],
    //       ['2017-7-13', '二十'],
    //       ['2017-7-14', '廿一'],
    //       ['2017-7-15', '廿二'],
    //       ['2017-7-16', '廿三'],
    //       ['2017-7-17', '廿四'],
    //       ['2017-7-18', '廿五'],
    //       ['2017-7-19', '廿六'],
    //       ['2017-7-20', '廿七'],
    //       ['2017-7-21', '廿八'],
    //       ['2017-7-22', '廿九', '大暑'],
    //       ['2017-7-23', '閏六'],
    //       ['2017-7-24', '初二'],
    //       ['2017-7-25', '初三'],
    //       ['2017-7-26', '初四'],
    //       ['2017-7-27', '初五'],
    //       ['2017-7-28', '初六'],
    //       ['2017-7-29', '初七'],
    //       ['2017-7-30', '初八'],
    //       ['2017-7-31', '初九'],
    //       ['2017-8-1', '初十'],
    //       ['2017-8-2', '十一'],
    //       ['2017-8-3', '十二'],
    //       ['2017-8-4', '十三'],
    //       ['2017-8-5', '十四'],
    //       ['2017-8-6', '十五'],
    //       ['2017-8-7', '十六', '立秋'],
    //       ['2017-8-8', '十七'],
    //       ['2017-8-9', '十八'],
    //       ['2017-8-10', '十九'],
    //       ['2017-8-11', '二十'],
    //       ['2017-8-12', '廿一'],
    //       ['2017-8-13', '廿二'],
    //       ['2017-8-14', '廿三'],
    //       ['2017-8-15', '廿四'],
    //       ['2017-8-16', '廿五'],
    //       ['2017-8-17', '廿六'],
    //       ['2017-8-18', '廿七'],
    //       ['2017-8-19', '廿八'],
    //       ['2017-8-20', '廿九'],
    //       ['2017-8-21', '三十'],
    //       ['2017-8-22', '七月'],
    //       ['2017-8-23', '初二', '處暑'],
    //       ['2017-8-24', '初三'],
    //       ['2017-8-25', '初四'],
    //       ['2017-8-26', '初五'],
    //       ['2017-8-27', '初六'],
    //       ['2017-8-28', '初七'],
    //       ['2017-8-29', '初八'],
    //       ['2017-8-30', '初九'],
    //       ['2017-8-31', '初十'],
    //       ['2017-9-1', '十一'],
    //       ['2017-9-2', '十二'],
    //       ['2017-9-3', '十三'],
    //       ['2017-9-4', '十四'],
    //       ['2017-9-5', '十五'],
    //       ['2017-9-6', '十六'],
    //       ['2017-9-7', '十七', '白露'],
    //       ['2017-9-8', '十八'],
    //       ['2017-9-9', '十九'],
    //       ['2017-9-10', '二十'],
    //       ['2017-9-11', '廿一'],
    //       ['2017-9-12', '廿二'],
    //       ['2017-9-13', '廿三'],
    //       ['2017-9-14', '廿四'],
    //       ['2017-9-15', '廿五'],
    //       ['2017-9-16', '廿六'],
    //       ['2017-9-17', '廿七'],
    //       ['2017-9-18', '廿八'],
    //       ['2017-9-19', '廿九'],
    //       ['2017-9-20', '八月'],
    //       ['2017-9-21', '初二'],
    //       ['2017-9-22', '初三'],
    //       ['2017-9-23', '初四', '秋分'],
    //       ['2017-9-24', '初五'],
    //       ['2017-9-25', '初六'],
    //       ['2017-9-26', '初七'],
    //       ['2017-9-27', '初八'],
    //       ['2017-9-28', '初九'],
    //       ['2017-9-29', '初十'],
    //       ['2017-9-30', '十一'],
    //       ['2017-10-1', '十二'],
    //       ['2017-10-2', '十三'],
    //       ['2017-10-3', '十四'],
    //       ['2017-10-4', '十五'],
    //       ['2017-10-5', '十六'],
    //       ['2017-10-6', '十七'],
    //       ['2017-10-7', '十八'],
    //       ['2017-10-8', '十九', '寒露'],
    //       ['2017-10-9', '二十'],
    //       ['2017-10-10', '廿一'],
    //       ['2017-10-11', '廿二'],
    //       ['2017-10-12', '廿三'],
    //       ['2017-10-13', '廿四'],
    //       ['2017-10-14', '廿五'],
    //       ['2017-10-15', '廿六'],
    //       ['2017-10-16', '廿七'],
    //       ['2017-10-17', '廿八'],
    //       ['2017-10-18', '廿九'],
    //       ['2017-10-19', '三十'],
    //       ['2017-10-20', '九月'],
    //       ['2017-10-21', '初二'],
    //       ['2017-10-22', '初三'],
    //       ['2017-10-23', '初四', '霜降'],
    //       ['2017-10-24', '初五'],
    //       ['2017-10-25', '初六'],
    //       ['2017-10-26', '初七'],
    //       ['2017-10-27', '初八'],
    //       ['2017-10-28', '初九'],
    //       ['2017-10-29', '初十'],
    //       ['2017-10-30', '十一'],
    //       ['2017-10-31', '十二'],
    //       ['2017-11-1', '十三'],
    //       ['2017-11-2', '十四'],
    //       ['2017-11-3', '十五'],
    //       ['2017-11-4', '十六'],
    //       ['2017-11-5', '十七'],
    //       ['2017-11-6', '十八'],
    //       ['2017-11-7', '十九', '立冬'],
    //       ['2017-11-8', '二十'],
    //       ['2017-11-9', '廿一'],
    //       ['2017-11-10', '廿二'],
    //       ['2017-11-11', '廿三'],
    //       ['2017-11-12', '廿四'],
    //       ['2017-11-13', '廿五'],
    //       ['2017-11-14', '廿六'],
    //       ['2017-11-15', '廿七'],
    //       ['2017-11-16', '廿八'],
    //       ['2017-11-17', '廿九'],
    //       ['2017-11-18', '十月'],
    //       ['2017-11-19', '初二'],
    //       ['2017-11-20', '初三'],
    //       ['2017-11-21', '初四'],
    //       ['2017-11-22', '初五', '小雪'],
    //       ['2017-11-23', '初六'],
    //       ['2017-11-24', '初七'],
    //       ['2017-11-25', '初八'],
    //       ['2017-11-26', '初九'],
    //       ['2017-11-27', '初十'],
    //       ['2017-11-28', '十一'],
    //       ['2017-11-29', '十二'],
    //       ['2017-11-30', '十三'],
    //       ['2017-12-1', '十四'],
    //       ['2017-12-2', '十五'],
    //       ['2017-12-3', '十六'],
    //       ['2017-12-4', '十七'],
    //       ['2017-12-5', '十八'],
    //       ['2017-12-6', '十九'],
    //       ['2017-12-7', '二十', '大雪'],
    //       ['2017-12-8', '廿一'],
    //       ['2017-12-9', '廿二'],
    //       ['2017-12-10', '廿三'],
    //       ['2017-12-11', '廿四'],
    //       ['2017-12-12', '廿五'],
    //       ['2017-12-13', '廿六'],
    //       ['2017-12-14', '廿七'],
    //       ['2017-12-15', '廿八'],
    //       ['2017-12-16', '廿九'],
    //       ['2017-12-17', '三十'],
    //       ['2017-12-18', '十一月'],
    //       ['2017-12-19', '初二'],
    //       ['2017-12-20', '初三'],
    //       ['2017-12-21', '初四'],
    //       ['2017-12-22', '初五', '冬至'],
    //       ['2017-12-23', '初六'],
    //       ['2017-12-24', '初七'],
    //       ['2017-12-25', '初八'],
    //       ['2017-12-26', '初九'],
    //       ['2017-12-27', '初十'],
    //       ['2017-12-28', '十一'],
    //       ['2017-12-29', '十二'],
    //       ['2017-12-30', '十三'],
    //       ['2017-12-31', '十四'],
    //     ]
    //     const heatmapData = []
    //     const lunarData = []
    //     for (let i = 0; i < dateList.length; i++) {
    //       heatmapData.push([dateList[i][0], Math.random() * 300])
    //       lunarData.push([dateList[i][0], 1, dateList[i][1], dateList[i][2]])
    //     }
    //     option = {
    //       tooltip: {
    //         formatter: (params) => '降雨量: ' + params.value[1].toFixed(2),
    //       },
    //       visualMap: {
    //         show: false,
    //         min: 0,
    //         max: 300,
    //         calculable: true,
    //         seriesIndex: [2],
    //         orient: 'horizontal',
    //         left: 'center',
    //         bottom: 20,
    //         inRange: {
    //           color: ['#e0ffff', '#006edd'],
    //           opacity: 0.3,
    //         },
    //         controller: {
    //           inRange: {
    //             opacity: 0.5,
    //           },
    //         },
    //       },
    //       calendar: [
    //         {
    //           left: 'center',
    //           top: 'middle',
    //           cellSize: [70, 70],
    //           yearLabel: { show: false },
    //           orient: 'vertical',
    //           dayLabel: {
    //             firstDay: 1,
    //             nameMap: 'cn',
    //           },
    //           monthLabel: {
    //             show: false,
    //           },
    //           range: '2017-03',
    //         },
    //       ],
    //       series: [
    //         {
    //           type: 'scatter',
    //           coordinateSystem: 'calendar',
    //           symbolSize: 1,
    //           label: {
    //             show: true,
    //             formatter: (params) => {
    //               var d = echarts.number.parseDate(params.value[0])
    //               return d.getDate() + '\n\n' + params.value[2] + '\n\n'
    //             },
    //             color: '#000',
    //           },
    //           data: lunarData,
    //         },
    //         {
    //           type: 'scatter',
    //           coordinateSystem: 'calendar',
    //           symbolSize: 1,
    //           label: {
    //             show: true,
    //             formatter: (params) => '\n\n\n' + (params.value[3] || ''),
    //             fontSize: 14,
    //             fontWeight: 700,
    //             color: '#a00',
    //           },
    //           data: lunarData,
    //         },
    //         {
    //           name: '降雨量',
    //           type: 'heatmap',
    //           coordinateSystem: 'calendar',
    //           data: heatmapData,
    //         },
    //       ],
    //     }

    //     option && myChart.setOption(option)
    //   }, 3000)
    // },
    // echarts() {
    //   // String.prototype.trim = function () {
    //   //   // alert(this)
    //   //   return this.replace(/(^[\s]*)|([\s]*$)/g, '')
    //   // }

    //   var chartDom = document.getElementById('month-heat-map1')
    //   var myChart = echarts.init(chartDom)
    //   var option

    //   option = {
    //     legend: {},
    //     tooltip: {
    //       trigger: 'axis',
    //     },
    //     dataZoom: [
    //       {
    //         type: 'inside',
    //         realtime: true,
    //       },
    //     ],
    //     xAxis: {
    //       type: 'category',
    //     },
    //     yAxis: {
    //       type: 'value',
    //       min: 20,
    //       max: 70,
    //     },
    //     series: [
    //       {
    //         name: 'spot01',
    //         type: 'line',
    //         smooth: true,
    //       },
    //       {
    //         name: 'spot02',
    //         type: 'line',
    //         smooth: true,
    //       },
    //       {
    //         name: 'spot03',
    //         type: 'line',
    //         smooth: true,
    //       },
    //     ],
    //   }

    //   option && myChart.setOption(option)
    //   // var sum = 0
    //   // var totle = 0
    //   // var interval = setInterval(() => {
    //   //   axios({
    //   //     method: 'get',
    //   //     url: '/test.csv',
    //   //     responseType: 'blob',
    //   //   }).then((response) => {
    //   //     const file = response.data
    //   //     file.text().then((csvStr) => {
    //   //       const lineArray = csvJSON(csvStr)
    //   //       var array = JSON.parse(lineArray)
    //   //       var timexAxis = []
    //   //       var xAxisContent = []
    //   //       // var dataKey = []
    //   //       var output = []
    //   //       array.forEach((series) => {
    //   //         timexAxis.push(series.time[0])
    //   //         delete series.time
    //   //         xAxisContent.push(series)
    //   //       })
    //   //       Object.keys(xAxisContent[0]).forEach((key) => {
    //   //         var content = []
    //   //         array.forEach((series) => {
    //   //           content.push(series[key][0])
    //   //         })
    //   //         // dataKey.push(dataKey)
    //   //         var data = {
    //   //           name: key,
    //   //           type: 'line',
    //   //           smooth: true,
    //   //           data: content,
    //   //         }
    //   //         output.push(data)
    //   //       })
    //   //       if(totle !== output.length){
    //   //       myChart.setOption(option, true)
    //   //       }
    //   //       totle = output.length

    //   //       myChart.setOption({
    //   //         xAxis: {
    //   //           type: 'category',
    //   //           data: timexAxis,
    //   //         },
    //   //         series: output,
    //   //       })
    //   //     })
    //   //   })
    //   //   // if(sum > 10000){
    //   //   //   clearInterval(interval)
    //   //   // }
    //   //   // sum++
    //   // }, 1000)
    //   // console.log(interval)

    //   // function csvJSON(csv) {
    //   //   var lines = csv.split('\n')
    //   //   var result = []
    //   //   var headers = lines[0].split(',')
    //   //   for (var i = 1; i < lines.length - 1; i++) {
    //   //     var obj = {}
    //   //     var currentline = lines[i].split(',')
    //   //     for (var j = 0; j < headers.length; j++) {
    //   //       obj[headers[j]] = currentline[j].split('|')
    //   //     }
    //   //     result.push(obj)
    //   //   }
    //   //   return JSON.stringify(result).replace(/\\r/g, '')
    //   // }

    //   var usersetdate = '2022-05-11'
    //   var xaxis = []
    //   var spot1 = []
    //   var spot2 = []
    //   var spot3 = []
    //   var sum = 0
    //   var totle = 0
    //   var startV = 0
    //   var interval = setInterval(() => {
    //     axios({
    //       method: 'get',
    //       url: 'http://localhost:8080/api/monitor/test?date=' + usersetdate,
    //     })
    //       .then((params) => {
    //         var array = params.data
    //         // var xAxis =

    //         Object.keys(array).forEach((key) => {
    //           xaxis.push(key)
    //           spot1.push(array[key][0])
    //           spot2.push(array[key][1])
    //           spot3.push(array[key][2])
    //           // console.log(key)
    //           // console.log(array[key])
    //           totle++
    //         })
    //         console.log(totle)
    //         startV = totle - 200
    //         myChart.setOption({
    //           xAxis: {
    //             type: 'category',
    //             data: xaxis,
    //           },
    //           dataZoom: [
    //             {
    //               startValue: startV,
    //               endValue: totle,
    //             },
    //           ],
    //           series: [
    //             {
    //               name: 'spot01',
    //               data: spot1,
    //             },
    //             {
    //               name: 'spot02',
    //               data: spot2,
    //             },
    //             {
    //               name: 'spot03',
    //               data: spot3,
    //             },
    //           ],
    //         })
    //         sum++
    //         if (sum === 7) {
    //           clearInterval(interval)
    //         }
    //       })
    //       .catch((error) => console.log('error from axios', error))
    //   }, 1000)
    // },
    // mount() {
    //   const chartDom = document.getElementById('month-heat-map1')
    //   const myChart = echarts.init(chartDom) // echarts初始化
    //   const colorPalette = ['#37484C', '#9aa2a4', '#d8dddd', '#E6E8E9']
    //   var option

    //   // 選擇圖表樣式------------------------------------------
    //   function getVirtulData(year) {
    //     year = year || '2017'
    //     var date = +echarts.number.parseDate(year + '-01-01')
    //     var end = +echarts.number.parseDate(+year + 1 + '-01-01')
    //     var dayTime = 3600 * 24 * 1000
    //     var data = []
    //     for (var time = date; time < end; time += dayTime) {
    //       data.push([
    //         echarts.format.formatTime('yyyy-MM-dd', time),
    //         Math.floor(Math.random() * 1000),
    //       ])
    //     }
    //     console.log(data)
    //     return data
    //   }

    //   option = {
    //     color: colorPalette,
    //     tooltip: {
    //       position: 'top',
    //       formatter(p) {
    //         var format = echarts.format.formatTime('yyyy-MM-dd', p.data[0])
    //         return format + ': ' + p.data[1]
    //       },
    //     },
    //     visualMap: {
    //       top: '30px',
    //       min: 0,
    //       max: 1000,
    //       calculable: true,
    //       orient: 'vertical',
    //       left: '2660',
    //       inRange: {
    //         color: ['#37484C', '#9aa2a4', '#d8dddd', '#E6E8E9'],
    //       },
    //     },
    //     calendar: [
    //       {
    //         // yearLabel: { show: false },
    //         orient: 'vertical',
    //         range: '2018/1',
    //         splitLine: {
    //           lineStyle: {
    //             color: '#fff',
    //           },
    //         },
    //       },
    //     ],
    //     series: [
    //       {
    //         type: 'heatmap',
    //         coordinateSystem: 'calendar',
    //         calendarIndex: 0,
    //         data: getVirtulData('2018'),
    //         itemStyle: {
    //           borderColor: '#fff',
    //         },
    //       },
    //     ],
    //   }

    //   // -------------------------------------------------------------
    //   myChart.setOption(option)
    //   myChart.on('click', function (params) {
    //     console.log(params.data)
    //     var data = {
    //       categories: ['比例尺(假)', '點擊的數據', '比例尺(假)'],
    //       values: [150, params.data[1], 300],
    //     }
    //     myChart01.setOption({
    //       xAxis: {
    //         data: data.categories,
    //       },
    //       series: [
    //         {
    //           name: 'data',
    //           data: data.values,
    //         },
    //       ],
    //     })
    //   })
    //   option && myChart.setOption(option)

    //   //   ______
    //   const myChart01 = echarts.init(document.getElementById('main'))
    //   myChart01.setOption({
    //     tooltip: {},
    //     legend: {
    //       data: ['data'],
    //     },
    //     xAxis: {
    //       data: [],
    //     },
    //     yAxis: {},
    //     series: [
    //       {
    //         name: 'data',
    //         type: 'bar',
    //         data: [],
    //       },
    //     ],
    //   })
    // },
  },
}
</script>
<style scoped>
#asdferg {
  width: 300px;
  height: 300px;
}
</style>