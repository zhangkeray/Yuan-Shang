<template>
  <v-row class="pa-0">
    <v-col cols="2" class="pa-0 ma-0">
      <h4 class="cardtitle ml-3 pa-0" style="position: absolute">
        當月超溫次數統計
      </h4>
    </v-col>
    <v-col cols="2" class="pa-0 ma-0">
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label=""
            readonly
            v-bind="attrs"
            v-on="on"
            dense
            style="font-size: 12px; position: absolute"
          >
            <v-icon
              slot="prepend"
              small
              dense
              style="line-height: 22px"
              v-model="date"
            >
              mdi-calendar
            </v-icon>
          </v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          type="month"
          no-title
          scrollable
          locale="zh-tw"
        >
          <v-spacer></v-spacer>
          <!-- <v-btn text color="primary" @click="menu = false"> 關閉 </v-btn> -->
          <v-btn text color="primary" @click="$refs.menu.save(date)">
            確定
          </v-btn>
        </v-date-picker>
      </v-menu>
    </v-col>
    <v-col cols="12" class="mt-8">
      <v-row :column="$vuetify.breakpoint.mdAndDown">
        <v-col
          cols="12"
          lg="12"
          style="border: 1px solid rgba(0, 0, 0, 0)"
          class="pt-0 py-0"
        >
          <div class="carousel-wrapper px-16 py-0">
            <VueSlickCarousel
              v-bind="slickOptions"
              class="px-3 py-0"
              ref="carousel"
              @init="onInitCarousel"
              @afterChange="onChangeCarousel"
            >
              <div
                class="img-wrapper"
                v-for="(item, index) in month"
                :key="'H' + index"
              >
                <div class="block4HidingBug"></div>
                <div :ref="item" :id="item" class="monthHeat"></div>
              </div>
              <div></div>
              <div></div>
            </VueSlickCarousel>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import * as echarts from 'echarts'
import axios from 'axios'
export default {
  name: 'HeatMap',

  data: () => ({
    // 左上日期選單
    listyear: null,
    date: new Date().toISOString().substr(0, 7),
    menu: false,
    // 對話框
    month: [
      'jan',
      'feb',
      'mar',
      'apr',
      'may',
      'jun',
      'jul',
      'aug',
      'sep',
      'oct',
      'nov',
      'dec',
    ],
    slickOptions: {
      slidesToShow: 3,
      arrows: true,
      infinite: false,
      centerMode: true,
      centerPadding: '0px',
      // slidesToScroll: 3,
      // centerMode: true,
      // dots: true,
      // focusOnSelect: true,
      // touchThreshold: 3,
      swipeToSlide: true,
    },
  }),
  watch: {
    date(val) {
      if (this.menu === true) {
        var arr = {
          status: 'update',
          date: val,
        }
        this.drawBar(arr)
      }
      // const chartDom = this.$refs.jan
      // const myChart = echarts.getInstanceByDom(chartDom)
      // console.log(myChart)
    },
  },
  mounted() {
    this.drawBar('initial')
  },
  methods: {
    onChangeCarousel(event) {
      var date = this.date
      var selectedDate = new Date(date)
      var year = selectedDate.getFullYear()
      var month = ('0' + (event + 1)).slice(-2)
      this.date = year + '-' + month
      // console.log(this.date)
    },
    onInitCarousel(event) {
      // var date = this.date
      // var selectedDate = new Date(date)
      // var month = selectedDate.getMonth()
      // this.$refs.carousel.goTo(month)
    },
    drawBar(index) {
      // 選擇圖表樣式------------------------------------------
      // fakeData
<<<<<<< HEAD
      var rowData = [
        // 2021June
        ['2021-06-01', 2021, 0],
        ['2021-06-02', 2021, 0],
        ['2021-06-03', 2021, 0],
        ['2021-06-04', 2021, 0],
        ['2021-06-05', 2021, 0],
        ['2021-06-06', 2021, 0],
        ['2021-06-07', 2021, 0],
        ['2021-06-08', 2021, 0],
        ['2021-06-09', 2021, 1],
        ['2021-06-10', 2021, 0],
        ['2021-06-11', 2021, 0],
        ['2021-06-12', 2021, 0],
        ['2021-06-13', 2021, 0],
        ['2021-06-14', 2021, 0],
        ['2021-06-15', 2021, 2],
        ['2021-06-16', 2021, 0],
        ['2021-06-17', 2021, 0],
        ['2021-06-18', 2021, 0],
        ['2021-06-19', 2021, 0],
        ['2021-06-20', 2021, 0],
        ['2021-06-21', 2021, 0],
        ['2021-06-22', 2021, 0],
        ['2021-06-23', 2021, 0],
        ['2021-06-24', 2021, 0],
        ['2021-06-25', 2021, 0],
        ['2021-06-26', 2021, 0],
        ['2021-06-27', 2021, 0],
        ['2021-06-28', 2021, 0],
        ['2021-06-29', 2021, 0],
        ['2021-06-30', 2021, 0],
        // 2021July
        ['2021-07-01', 2021, 0],
        ['2021-07-02', 2021, 0],
        ['2021-07-03', 2021, 0],
        ['2021-07-04', 2021, 0],
        ['2021-07-05', 2021, 0],
        ['2021-07-06', 2021, 0],
        ['2021-07-07', 2021, 0],
        ['2021-07-08', 2021, 0],
        ['2021-07-09', 2021, 0],
        ['2021-07-10', 2021, 0],
        ['2021-07-11', 2021, 0],
        ['2021-07-12', 2021, 0],
        ['2021-07-13', 2021, 0],
        ['2021-07-14', 2021, 0],
        ['2021-07-15', 2021, 0],
        ['2021-07-16', 2021, 0],
        ['2021-07-17', 2021, 0],
        ['2021-07-18', 2021, 0],
        ['2021-07-19', 2021, 0],
        ['2021-07-20', 2021, 0],
        ['2021-07-21', 2021, 0],
        ['2021-07-22', 2021, 0],
        ['2021-07-23', 2021, 0],
        ['2021-07-24', 2021, 0],
        ['2021-07-25', 2021, 0],
        ['2021-07-26', 2021, 0],
        ['2021-07-27', 2021, 0],
        ['2021-07-28', 2021, 0],
        ['2021-07-29', 2021, 0],
        ['2021-07-30', 2021, 0],
        ['2021-07-31', 2021, 0],
        // 2021August
        ['2021-08-01', 2021, 0],
        ['2021-08-02', 2021, 0],
        ['2021-08-03', 2021, 0],
        ['2021-08-04', 2021, 0],
        ['2021-08-05', 2021, 0],
        ['2021-08-06', 2021, 0],
        ['2021-08-07', 2021, 0],
        ['2021-08-08', 2021, 0],
        ['2021-08-09', 2021, 0],
        ['2021-08-10', 2021, 0],
        ['2021-08-11', 2021, 0],
        ['2021-08-12', 2021, 0],
        ['2021-08-13', 2021, 0],
        ['2021-08-14', 2021, 0],
        ['2021-08-15', 2021, 0],
        ['2021-08-16', 2021, 0],
        ['2021-08-17', 2021, 0],
        ['2021-08-18', 2021, 0],
        ['2021-08-19', 2021, 0],
        ['2021-08-20', 2021, 0],
        ['2021-08-21', 2021, 0],
        ['2021-08-22', 2021, 0],
        ['2021-08-23', 2021, 0],
        ['2021-08-24', 2021, 0],
        ['2021-08-25', 2021, 0],
        ['2021-08-26', 2021, 0],
        ['2021-08-27', 2021, 0],
        ['2021-08-28', 2021, 0],
        ['2021-08-29', 2021, 0],
        ['2021-08-30', 2021, 0],
        ['2021-08-31', 2021, 0],
        // 2021September
        ['2021-09-01', 2021, 0],
        ['2021-09-02', 2021, 0],
        ['2021-09-03', 2021, 0],
        ['2021-09-04', 2021, 0],
        ['2021-09-05', 2021, 0],
        ['2021-09-06', 2021, 0],
        ['2021-09-07', 2021, 0],
        ['2021-09-08', 2021, 0],
        ['2021-09-09', 2021, 2],
        ['2021-09-10', 2021, 0],
        ['2021-09-11', 2021, 0],
        ['2021-09-12', 2021, 0],
        ['2021-09-13', 2021, 0],
        ['2021-09-14', 2021, 0],
        ['2021-09-15', 2021, 0],
        ['2021-09-16', 2021, 0],
        ['2021-09-17', 2021, 0],
        ['2021-09-18', 2021, 0],
        ['2021-09-19', 2021, 0],
        ['2021-09-20', 2021, 0],
        ['2021-09-21', 2021, 0],
        ['2021-09-22', 2021, 0],
        ['2021-09-23', 2021, 0],
        ['2021-09-24', 2021, 0],
        ['2021-09-25', 2021, 0],
        ['2021-09-26', 2021, 0],
        ['2021-09-27', 2021, 0],
        ['2021-09-28', 2021, 0],
        ['2021-09-29', 2021, 0],
        ['2021-09-30', 2021, 0],
        // 2021October
        ['2021-10-01', 2021, 0],
        ['2021-10-02', 2021, 0],
        ['2021-10-03', 2021, 0],
        ['2021-10-04', 2021, 0],
        ['2021-10-05', 2021, 0],
        ['2021-10-06', 2021, 0],
        ['2021-10-07', 2021, 0],
        ['2021-10-08', 2021, 0],
        ['2021-10-09', 2021, 0],
        ['2021-10-10', 2021, 0],
        ['2021-10-11', 2021, 0],
        ['2021-10-12', 2021, 0],
        ['2021-10-13', 2021, 0],
        ['2021-10-14', 2021, 0],
        ['2021-10-15', 2021, 0],
        ['2021-10-16', 2021, 0],
        ['2021-10-17', 2021, 0],
        ['2021-10-18', 2021, 1],
        ['2021-10-19', 2021, 0],
        ['2021-10-20', 2021, 0],
        ['2021-10-21', 2021, 0],
        ['2021-10-22', 2021, 0],
        ['2021-10-23', 2021, 0],
        ['2021-10-24', 2021, 0],
        ['2021-10-25', 2021, 0],
        ['2021-10-26', 2021, 0],
        ['2021-10-27', 2021, 0],
        ['2021-10-28', 2021, 0],
        ['2021-10-29', 2021, 0],
        ['2021-10-30', 2021, 0],
        ['2021-10-31', 2021, 0],
        // 2021November
        ['2021-11-01', 2021, 0],
        ['2021-11-02', 2021, 0],
        ['2021-11-03', 2021, 0],
        ['2021-11-04', 2021, 0],
        ['2021-11-05', 2021, 0],
        ['2021-11-06', 2021, 0],
        ['2021-11-07', 2021, 0],
        ['2021-11-08', 2021, 0],
        ['2021-11-09', 2021, 0],
        ['2021-11-10', 2021, 0],
        ['2021-11-11', 2021, 0],
        ['2021-11-12', 2021, 0],
        ['2021-11-13', 2021, 0],
        ['2021-11-14', 2021, 0],
        ['2021-11-15', 2021, 0],
        ['2021-11-16', 2021, 0],
        ['2021-11-17', 2021, 0],
        ['2021-11-18', 2021, 0],
        ['2021-11-19', 2021, 0],
        ['2021-11-20', 2021, 0],
        ['2021-11-21', 2021, 0],
        ['2021-11-22', 2021, 0],
        ['2021-11-23', 2021, 0],
        ['2021-11-24', 2021, 0],
        ['2021-11-25', 2021, 0],
        ['2021-11-26', 2021, 0],
        ['2021-11-27', 2021, 0],
        ['2021-11-28', 2021, 0],
        ['2021-11-29', 2021, 0],
        ['2021-11-30', 2021, 0],
        // 2021December
        ['2021-12-01', 2021, 0],
        ['2021-12-02', 2021, 0],
        ['2021-12-03', 2021, 2],
        ['2021-12-04', 2021, 0],
        ['2021-12-05', 2021, 0],
        ['2021-12-06', 2021, 0],
        ['2021-12-07', 2021, 0],
        ['2021-12-08', 2021, 0],
        ['2021-12-09', 2021, 0],
        ['2021-12-10', 2021, 0],
        ['2021-12-11', 2021, 0],
        ['2021-12-12', 2021, 0],
        ['2021-12-13', 2021, 0],
        ['2021-12-14', 2021, 0],
        ['2021-12-15', 2021, 0],
        ['2021-12-16', 2021, 0],
        ['2021-12-17', 2021, 0],
        ['2021-12-18', 2021, 0],
        ['2021-12-19', 2021, 0],
        ['2021-12-20', 2021, 0],
        ['2021-12-21', 2021, 0],
        ['2021-12-22', 2021, 0],
        ['2021-12-23', 2021, 0],
        ['2021-12-24', 2021, 0],
        ['2021-12-25', 2021, 0],
        ['2021-12-26', 2021, 0],
        ['2021-12-27', 2021, 0],
        ['2021-12-28', 2021, 0],
        ['2021-12-29', 2021, 0],
        ['2021-12-30', 2021, 0],
        ['2021-12-31', 2021, 0],
        // 2021January
        ['2021-01-01', 2021, 0],
        ['2021-01-02', 2021, 0],
        ['2021-01-03', 2021, 0],
        ['2021-01-04', 2021, 0],
        ['2021-01-05', 2021, 0],
        ['2021-01-06', 2021, 0],
        ['2021-01-07', 2021, 0],
        ['2021-01-08', 2021, 0],
        ['2021-01-09', 2021, 0],
        ['2021-01-10', 2021, 0],
        ['2021-01-11', 2021, 0],
        ['2021-01-12', 2021, 0],
        ['2021-01-13', 2021, 0],
        ['2021-01-14', 2021, 1],
        ['2021-01-15', 2021, 0],
        ['2021-01-16', 2021, 0],
        ['2021-01-17', 2021, 0],
        ['2021-01-18', 2021, 0],
        ['2021-01-19', 2021, 0],
        ['2021-01-20', 2021, 0],
        ['2021-01-21', 2021, 0],
        ['2021-01-22', 2021, 0],
        ['2021-01-23', 2021, 0],
        ['2021-01-24', 2021, 0],
        ['2021-01-25', 2021, 0],
        ['2021-01-26', 2021, 0],
        ['2021-01-27', 2021, 0],
        ['2021-01-28', 2021, 0],
        ['2021-01-29', 2021, 0],
        ['2021-01-30', 2021, 0],
        ['2021-01-31', 2021, 0],
        // 2021February
        ['2021-02-01', 2021, 0],
        ['2021-02-02', 2021, 0],
        ['2021-02-03', 2021, 0],
        ['2021-02-04', 2021, 0],
        ['2021-02-05', 2021, 0],
        ['2021-02-06', 2021, 0],
        ['2021-02-07', 2021, 0],
        ['2021-02-08', 2021, 0],
        ['2021-02-09', 2021, 0],
        ['2021-02-10', 2021, 0],
        ['2021-02-11', 2021, 0],
        ['2021-02-12', 2021, 0],
        ['2021-02-13', 2021, 0],
        ['2021-02-14', 2021, 1],
        ['2021-02-15', 2021, 0],
        ['2021-02-16', 2021, 0],
        ['2021-02-17', 2021, 0],
        ['2021-02-18', 2021, 0],
        ['2021-02-19', 2021, 0],
        ['2021-02-20', 2021, 0],
        ['2021-02-21', 2021, 0],
        ['2021-02-22', 2021, 0],
        ['2021-02-23', 2021, 0],
        ['2021-02-24', 2021, 0],
        ['2021-02-25', 2021, 0],
        ['2021-02-26', 2021, 0],
        ['2021-02-27', 2021, 0],
        ['2021-02-28', 2021, 0],
        // ['2022-02-29', 2021, 0],
        // 2021March
        ['2021-03-01', 2021, 0],
        ['2021-03-02', 2021, 0],
        ['2021-03-03', 2021, 0],
        ['2021-03-04', 2021, 0],
        ['2021-03-05', 2021, 0],
        ['2021-03-06', 2021, 0],
        ['2021-03-07', 2021, 0],
        ['2021-03-08', 2021, 0],
        ['2021-03-09', 2021, 0],
        ['2021-03-10', 2021, 0],
        ['2021-03-11', 2021, 0],
        ['2021-03-12', 2021, 0],
        ['2021-03-13', 2021, 0],
        ['2021-03-14', 2021, 0],
        ['2021-03-15', 2021, 0],
        ['2021-03-16', 2021, 0],
        ['2021-03-17', 2021, 0],
        ['2021-03-18', 2021, 0],
        ['2021-03-19', 2021, 0],
        ['2021-03-20', 2021, 0],
        ['2021-03-21', 2021, 0],
        ['2021-03-22', 2021, 0],
        ['2021-03-23', 2021, 0],
        ['2021-03-24', 2021, 0],
        ['2021-03-25', 2021, 0],
        ['2021-03-26', 2021, 0],
        ['2021-03-27', 2021, 2],
        ['2021-03-28', 2021, 0],
        ['2021-03-29', 2021, 0],
        ['2021-03-30', 2021, 0],
        ['2021-03-31', 2021, 0],
        // 2021April
        ['2021-04-01', 2021, 0],
        ['2021-04-02', 2021, 0],
        ['2021-04-03', 2021, 1],
        ['2021-04-04', 2021, 0],
        ['2021-04-05', 2021, 0],
        ['2021-04-06', 2021, 0],
        ['2021-04-07', 2021, 0],
        ['2021-04-08', 2021, 0],
        ['2021-04-09', 2021, 0],
        ['2021-04-10', 2021, 0],
        ['2021-04-11', 2021, 0],
        ['2021-04-12', 2021, 0],
        ['2021-04-13', 2021, 0],
        ['2021-04-14', 2021, 0],
        ['2021-04-15', 2021, 0],
        ['2021-04-16', 2021, 0],
        ['2021-04-17', 2021, 0],
        ['2021-04-18', 2021, 0],
        ['2021-04-19', 2021, 0],
        ['2021-04-20', 2021, 0],
        ['2021-04-21', 2021, 0],
        ['2021-04-22', 2021, 0],
        ['2021-04-23', 2021, 0],
        ['2021-04-24', 2021, 0],
        ['2021-04-25', 2021, 0],
        ['2021-04-26', 2021, 0],
        ['2021-04-27', 2021, 0],
        ['2021-04-28', 2021, 0],
        ['2021-04-29', 2021, 0],
        ['2021-04-30', 2021, 0],
        // 2021May
        ['2021-05-01', 2021, 0],
        ['2021-05-02', 2021, 0],
        ['2021-05-03', 2021, 0],
        ['2021-05-04', 2021, 0],
        ['2021-05-05', 2021, 0],
        ['2021-05-06', 2021, 0],
        ['2021-05-07', 2021, 0],
        ['2021-05-08', 2021, 0],
        ['2021-05-09', 2021, 0],
        ['2021-05-10', 2021, 0],
        ['2021-05-11', 2021, 0],
        ['2021-05-12', 2021, 0],
        ['2021-05-13', 2021, 0],
        ['2021-05-14', 2021, 0],
        ['2021-05-15', 2021, 0],
        ['2021-05-16', 2021, 2],
        ['2021-05-17', 2021, 0],
        ['2021-05-18', 2021, 0],
        ['2021-05-19', 2021, 0],
        ['2021-05-20', 2021, 0],
        ['2021-05-21', 2021, 0],
        ['2021-05-22', 2021, 0],
        ['2021-05-23', 2021, 0],
        ['2021-05-24', 2021, 0],
        ['2021-05-25', 2021, 0],
        ['2021-05-26', 2021, 0],
        ['2021-05-27', 2021, 0],
        ['2021-05-28', 2021, 0],
        ['2021-05-29', 2021, 0],
        ['2021-05-30', 2021, 0],
        ['2021-05-31', 2021, 0],
      ]
=======
      const url = 'http://localhost:8080/api/alarm/list' // 宣告取得警報list網址
      const url1 = 'http://127.0.0.1:8080/api/alarm/txt' // 宣告取得警報txt
      if (index.status === 'update') {
        var selectedDate = new Date(index.date)
        var year = selectedDate.getFullYear()
        var month = selectedDate.getMonth()
        this.$refs.carousel.goTo(month)
        // 判斷使用者選擇日期有沒有跨年度
        if (year !== this.listyear) {
          axios({
            method: 'get',
            url,
            params: {
              table_timeselectStart: year + '-01-01',
              table_timeselectStop: year + '-12-31',
            },
          })
            .then((paramse) => {
              const arr = this.month
              var data = paramse.data
              var initial = new Date(year + '-01-01 00:00:00')
              var start = null
              var last = null
              var nowYear = null
              var nowMonth = null
              var nowDay = null
              var nowtime = null
              var output = []
              var dayTotle = leapyear(year)
              for (var i = 1; i <= dayTotle; i++) {
                start = initial.setDate(initial.getDate())
                start = new Date(start)
                last = initial.setDate(initial.getDate() + 1)
                nowYear = start.getFullYear()
                nowMonth = ('0' + (start.getMonth() + 1)).slice(-2)
                nowDay = ('0' + start.getDate()).slice(-2)
                nowtime = nowYear + '-' + nowMonth + '-' + nowDay
                last = new Date(last)
                var sum = 0
                var thistime = null
                data.forEach((index) => {
                  thistime = new Date(index.table_alarm_start)
                  if (thistime >= start && thistime < last) {
                    sum = sum + 1
                  }
                })
                output.push([nowtime, nowYear, sum])
              }
              arr.forEach((index, value) => {
                const chartDom = this.$refs[index]
                const myChart = echarts.getInstanceByDom(chartDom)
                myChart.setOption({
                  calendar: {
                    range: [nowYear + '-' + (value + 1)],
                  },
                  series: [
                    {
                      type: 'heatmap',
                      coordinateSystem: 'calendar',
                      data: output,
                    },
                  ],
                })
              })
            })
            .catch((error) => console.log('error from axios', error))
          this.listyear = year
        }
        // console.log(index)
      } else {
        const arr = this.month
        var seDate = this.date
        seDate = new Date(seDate)
        var seYear = seDate.getFullYear()
        this.listyear = seYear
        // 導入警報資料
        axios({
          method: 'get',
          url,
          params: {
            table_timeselectStart: seYear + '-01-01',
            table_timeselectStop: seYear + '-12-31',
          },
        })
          .then((paramse) => {
            var data = paramse.data
            var initial = new Date(seYear + '-01-01 00:00:00')
            var start = null
            var last = null
            var nowYear = null
            var nowMonth = null
            var nowDay = null
            var nowtime = null
            var output = []
            var dayTotle = leapyear(seYear)
            // var arr = []
            for (var i = 1; i <= dayTotle; i++) {
              start = initial.setDate(initial.getDate())
              start = new Date(start)
              last = initial.setDate(initial.getDate() + 1)
              nowYear = start.getFullYear()
              nowMonth = ('0' + (start.getMonth() + 1)).slice(-2)
              nowDay = ('0' + start.getDate()).slice(-2)
              nowtime = nowYear + '-' + nowMonth + '-' + nowDay
              last = new Date(last)
              var sum = 0
              var thistime = null
              data.forEach((index) => {
                thistime = new Date(index.table_alarm_start)
                if (thistime >= start && thistime < last) {
                  sum = sum + 1
                }
              })
              output.push([nowtime, nowYear, sum])
              // console.log(nowtime)
            }
            // console.log(output)
>>>>>>> fcc713333f3911a330783881fc7ccf1cb8837934

            arr.forEach((index, value) => {
              // console.log(index, value)
              const chartDom = this.$refs[index]
              const myChart = echarts.init(chartDom) // echarts初始化
              var option
              option = {
                id: 1,
                tooltip: {
                  position: 'top',
                },
                visualMap: {
                  // top: '30px',
                  min: 0,
                  max: 2,
                  show: false,
                  calculable: true,
                  orient: 'vertical',
                  // left: '2660',
                  inRange: {
                    color: ['#f1f3f4', '#E6E8E9', '#9aa2a4', '#37484C'],
                  },
                },
                mytextStyle: {
                  fontSize: 9,
                },
                calendar: {
                  top: '45px',
                  //  top: '25px',
                  left: '30px',
                  // right: '23px',
                  cellSize: ['23', '23'],
                  orient: 'vertical',

                  range: [nowYear + '-' + (value + 1)],
                  itemStyle: {
                    borderWidth: 0.1,
                  },
                  yearLabel: {
                    show: false,
                    textStyle: {
                      // fontFamily: 'Arial, Verdana, sans...',
                      fontFamily: 'Arial',
                      fontSize: '14',
                      // fontStyle: 'normal',
                      color: '#505f62',
                    },
                  },
                  splitLine: {
                    lineStyle: {
                      color: '#9ba5a8',
                      borderWidth: 0.1,
                    },
                  },
                  monthLabel: {
                    nameMap: [
                      '1月',
                      '2月',
                      '3月',
                      '4月',
                      '5月',
                      '6月',
                      '7月',
                      '8月',
                      '9月',
                      '10月',
                      '11月',
                      '12月',
                    ],
                  },
                  dayLabel: {
                    nameMap: ['日', '一', '二', '三', '四', '五', '六'],
                  },
                },
                series: [
                  {
                    type: 'heatmap',
                    coordinateSystem: 'calendar',
                    data: output,
                    itemStyle: {
                      borderColor: '#9ba5a8',
                      borderWidth: 0.1,
                    },
                    emphasis: {
                      itemStyle: {
                        shadowBlur: 10,
                        // shadowColor: 'rgba(0, 0, 0, 0.5)',
                        borderColor: '#fff',
                      },
                    },
                    label: {
                      show: true,
                      formatter(params) {
                        return Number(params.data[0].substring(8, 10))
                      },
                      textStyle: {
                        // fontFamily: 'Arial, Verdana, sans...',
                        fontFamily: 'Arial',
                        fontSize: '9',
                        // fontStyle: 'normal',
                        // color: '#505f62',
                      },
                    },
                  },
                ],
              }
              option && myChart.setOption(option)
              myChart.on('click', function (params) {
                // 控制台打印数据的名称
                axios({
                  method: 'get',
                  url: url1,
                })
                  .then((paramse) => {
                    var data = paramse.data
                    data = data.map(function (item) {
                      return [item[1], item[0], item[2]]
                    })
                    // console.log(data)
                    const heat = document.getElementById('heatMap2_for_this')
                    const myChart = echarts.getInstanceByDom(heat)
                    myChart.setOption({
                      series: [
                        {
                          name: '',
                          data
                        },
                      ],
                    })
                  })
                  .catch((error) => console.log('error from axios', error))
              })
            })
            var date = this.date
            var selectedDate = new Date(date)
            var month = selectedDate.getMonth()
            this.$refs.carousel.goTo(month)
          })
          .catch((error) => console.log('error from axios', error))
      }
      // 閏年判斷器
      function leapyear(yyyy) {
        if ((yyyy % 4 === 0 && yyyy % 100 !== 0) || yyyy % 400 === 0) {
          // 安安我是閏年
          return 366
        } else {
          return 365
        }
      }
    },
  },
}
// let myChart = echarts.init(document.getElementById('charts'));
</script>

<style></style>
<style lang="scss">
.carousel-wrapper {
  margin-top: 10px;
  padding-right: 30px;
  padding-left: 30px;
}

.ycoordinates {
  position: absolute;
  font-size: 12px;
  right: 80px;
  bottom: 49px;
}
.xcoordinates {
  position: absolute;
  font-size: 12px;
  bottom: 275px;
  left: 505px;
}
.faketime {
  font-weight: 500;
  margin-left: 10px;
}

.btn {
  background-color: #f2f4f4;
}
.reset {
  // float: right;
  // margin-top: 0.5em;
  // margin-right: 0.5em;
  right: 0.5em;
  top: 0.5em;
  position: absolute;
  float: right;
  margin-top: 0.5em;
  margin-right: 0.5em;
}

.piccc {
  background-image: url('/xzoom/images/20220510_v1.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 200%;
}

.img-wrapper {
  padding-top: 0px;
  margin-top: 0px;
  height: 178px;
}

.tablefont {
  // font-size: 12px;
  color: #9ba3a5;
  // text-align: left;
  // font-family: 'Noto Sans TC', sans-serif;
}
.carousel-wrapper {
  // padding-right: 50px;
  padding-left: 50px;
  padding-right: 10px;
  // padding-right: 100px;
}
button.slick-prev:before,
button.slick-next:before {
  color: #505f62 !important;
}
.block4HidingBug {
  background-color: #fff;
  height: 30px;
  width: 30px;
  position: absolute;
  z-index: 99999;
}
.carouselCover1 {
  // background-color: rgba(255, 255, 255, 0.8);
  background: linear-gradient(
    to left,
    rgba(255, 255, 255, 0),
    rgb(255, 255, 255)
  );
  position: absolute;
  height: 185px;
  width: 50px;
  z-index: 9999999;
}
.carouselCover2 {
  background: linear-gradient(
    to left,
    rgba(255, 255, 255),
    rgb(255, 255, 255, 0)
  );
  position: absolute;
  height: 185px;
  width: 50px;
  margin-left: 725px;
  z-index: 9999998;
}
// #zoom-target2 {
//   margin-top:50px
// }

// .carouselCenterBorder {
//   border: 2px solid black;
//   position: absolute;
//   height: 185px;
//   width: 210px;
//   margin-left: 275px;
// }
.monthHeat {
  height: 200px;
  width: 218px;
}
</style>

<style lang="scss">
.v-data-table > .v-data-table__wrapper > table > tbody > tr > td,
.v-data-table > .v-data-table__wrapper > table > thead > tr > td,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > td {
  font-size: 12px !important;
  // margin-right: 10px !important;
  padding: 0px !important;
}
</style>
