<template>
  <v-card flat>
    <v-card-text>
      <!-- 刷新按鈕 -->
      <v-tooltip left class="tips">
        <template #activator="{ on, attrs }">
          <v-btn
            small
            icon
            class="btn reset"
            color="#9BA3A5"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon small class="icon">mdi-restore</v-icon>
          </v-btn>
        </template>
        <span>重置</span>
      </v-tooltip>

      <!-- 麵包屑 -->
      <!-- <v-breadcrumbs
              :items="items"
              style="padding-top: 0px; position: absolute"
            >
              <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
              </template>
            </v-breadcrumbs> -->

      <div style="margin-left: 20px; top: 12px; position: absolute">
        <v-btn color="#9BA3A5" rounded x-small depressed style="color: #fff">
          溫度分布
        </v-btn>
      </div>

      <v-row>
        <v-col cols="12" md="12">
          <v-row :column="$vuetify.breakpoint.mdAndDown">
            <v-col cols="12" lg="12">
              <v-row
                class="mx-2 mt-8"
                style="border: 3px solid #f1f1f1; border-radius: 10px"
              >
                <v-col cols="12" md="7">
                  <v-row :column="$vuetify.breakpoint.mdAndDown">
                    <v-col
                      cols="12"
                      lg="12"
                      style="
                        border: 1px solid rgba(0, 0, 0, 0);
                        border-radius: 5px;
                      "
                      class="py-2"
                    >
                      <v-row :column="$vuetify.breakpoint.mdAndDown">
                        <v-menu
                          ref="menu"
                          v-model="menu"
                          :close-on-content-click="false"
                          transition="scale-transition"
                          offset-y
                          min-width="auto"
                          ><template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="dateRangeText"
                              label=""
                              readonly
                              dense
                              v-bind="attrs"
                              v-on="on"
                              style="
                                font-size: 12px;
                                margin-left: 160px;
                                margin-top: 10px;

                                position: absolute;
                                z-index: 999999;
                              "
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
                            no-title
                            scrollable
                            v-model="dates"
                            range
                            :active-picker.sync="activePicker"
                            locale="zh-tw"
                            :max="
                              new Date(
                                Date.now() -
                                  new Date().getTimezoneOffset() * 60000
                              )
                                .toISOString()
                                .substr(0, 10)
                            "
                            min="2010-01-01"
                          >
                            <v-btn text color="primary" @click="dateRange">
                              確定
                            </v-btn></v-date-picker
                          >
                        </v-menu>
                        <v-col
                          cols="12"
                          lg="12"
                          style="border: 1px solid rgba(0, 0, 0, 0)"
                        >
                          <temp-history-bar-chart />
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col cols="12" md="5">
                  <v-row :column="$vuetify.breakpoint.mdAndDown">
                    <v-col
                      cols="12"
                      lg="12"
                      style="border: 1px solid rgba(0, 0, 0, 0)"
                      class="py-2"
                    >
                      <temp-low-bar-chart />
                    </v-col>

                    <v-col
                      cols="12"
                      lg="12"
                      style="border: 1px solid rgba(0, 0, 0, 0)"
                      class="py-0"
                    >
                      <temp-avg-bar-chart />
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" md="7">
          <v-row :column="$vuetify.breakpoint.mdAndDown">
            <v-col cols="12" lg="12">
              <v-row
                class="ml-2 mt-2"
                style="border: 3px solid #f1f1f1; border-radius: 10px"
              >
                <v-menu
                  ref="menu2"
                  v-model="menu2"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                  ><template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="dateRangeText"
                      label=""
                      readonly
                      dense
                      v-bind="attrs"
                      v-on="on"
                      style="
                        font-size: 12px;
                        margin-left: 140px;
                        margin-top: 8px;

                        position: absolute;
                        z-index: 999999; 
                      "
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
                    no-title
                    scrollable
                    v-model="dates"
                    range
                    :active-picker.sync="activePicker"
                    locale="zh-tw"
                    :max="
                      new Date(
                        Date.now() - new Date().getTimezoneOffset() * 60000
                      )
                        .toISOString()
                        .substr(0, 10)
                    "
                    min="2010-01-01"
                  >
                    <v-btn text color="primary" @click="dateRange2">
                      確定
                    </v-btn></v-date-picker
                  >
                </v-menu>
                <v-col cols="12" md="12">
                  <peak-hours-statistics-bar-chart />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" md="5">
          <v-row :column="$vuetify.breakpoint.mdAndDown">
            <v-col cols="12" lg="12">
              <v-row
                class="mx-2 mt-2"
                style="border: 3px solid #f1f1f1; border-radius: 10px"
              >
                <h4 class="cardtitle ml-3">溫度參照點</h4>
                <v-col cols="12" md="12">
                  <div class="image-wrap">
                    <div class="image viewer">
                      <div class="magnifier"></div>
                    </div>
                    <div class="image result"></div>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
// echarts引入
import TempHistoryBarChart from './LineBarChart/TempHistoryBarChart.vue'
import TempLowBarChart from './LineBarChart/TempLowBarChart.vue'
import TempAvgBarChart from './LineBarChart/TempAvgBarChart.vue'
import PeakHoursStatisticsBarChart from './LineBarChart/PeakHoursStatisticsBarChart.vue'

export default {
  // echarts引入
  components: {
    TempHistoryBarChart,
    TempLowBarChart,
    TempAvgBarChart,
    PeakHoursStatisticsBarChart,
  },
  name: 'IndexPage',
  head: {
    title: '即時監控',
    link: [
      // { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: 'stylesheet', href: '/css/object.css' },
      { rel: 'stylesheet', href: '/css/card3.css' },
    ],
    script: [],
  },
  data: () => ({
    activePicker:null,
    date: ['', ''],
    dates: ['', ''],
    menu: false,
    options: {
      loop: false,
      perPage: 3,
      paginationEnabled: false,
    },
    items: [
      // {
      //   text: '整體資料監測',
      //   disabled: true,
      //   href: '../DataScrapingPage',
      // },
      //   {
      //     text: '全局數據',
      //     disabled: false,
      //     href: 'breadcrumbs_link_2',
      //   },
      //   {
      //     text: '年度資料完成度',
      //     disabled: true,
      //     href: '../DataScrapingPage',
      //   },
      // {
      //   text: '當月資料完成度',
      //   disabled: false,
      //   href: 'breadcrumbs_link_2',
      // },
    ],
  }),
  computed: {
    dateRangeText() {
      var datess = this.dates
      datess = datess.sort()

      return datess.join(' ~ ')
    },
  },
  mounted() {
    const unthumb = document.querySelectorAll('.thumb')
    for (const unthumbs of unthumb) {
      unthumbs.onclick = function (e) {
        // console.log(e.target.src);
        // console.log(e.target.getAttribute("src"));
        const newImg = e.target.src // 絕對連結
        // let newImg = e.target.getAttribute("src");  // getAttribute取得屬性 e.g. src //相對連結
        document.querySelector('.pic').setAttribute('src', newImg) // 取得這個pic之後，去設定他的scr屬性值是newImg(我點選時所得到的），你要設定的屬性是誰
        for (const th of this.thumb) {
          th.classList.remove('active')
        }
        e.target.classList.add('active')
      }
    }
    this.dates = ['2022-05-13', '2022-05-13']

    // 放大鏡
    var $result = $('.image.result')
    var $viewer = $('.image.viewer')
    var $magnifier = $viewer.find('.magnifier')

    $(function () {
      setTimeout(function () {
        $magnifier.pep({
          // 會遇到問題: Uncaught TypeError: $magnifier.pep is not a function
          constrainTo: 'parent',
          shouldEase: false,
          drag() {
            var pos = $magnifier.position()
            var x =
              ((pos.left + $magnifier.outerWidth() / 2) / $viewer.width()) *
                100 +
              '%'
            var y =
              ((pos.top + $magnifier.outerHeight() / 2) / $viewer.height()) *
                100 +
              '%'

            $result.css('background-position', [x, y].join(' '))
          },
        })
      }, 0)
    })
  },
  methods: {
    dateRange() {
      this.menu = false
      var input = this.dates
      console.log(input)
    },
    dateRange2() {
      this.menu2 = false
      var input = this.dates
      console.log(input)
    },
  },
}
</script>
<style scoped>
/* 左側浮動按鈕 */
.drawer {
  position: fixed;
  width: 3.6em;
  left: -3.599em;
  height: 51.8em;
  transition: all 0.5s;
  border-radius: 0px 10px 10px 0px;
  z-index: 99999;
  /* background-color: #031316; */
  color: rgba(89, 89, 91, 1);
}
.box {
  background-color: #fff;
}
.box:hover .drawer {
  left: 0;
}

/* 影像串流 */
.frame {
  width: 74em;
  margin-left: 0.3em;
  margin-top: 0.7em;
}
.cover {
  position: relative;
  max-width: 100%;
  width: 100%;
  display: inline-block;
  isolation: isolate;
}
#image {
  width: 100%;
  /* width: 70.5em; */
  pointer-events: none;
  /* margin-left: 2.1em; */
  /* margin-top: 2em; */
  isolation: isolate;
}
.arrow {
  height: 23px;
  width: 100px;
  position: absolute;
  margin-left: 1.16em;
  margin-top: 25.5em;
  transform: rotate(270deg);
  border-radius: 0 0 100px 100px;
}
/* 按鈕提示 */
.tips {
  z-index: 100000;
}
/* 區塊標題文字 */
.subtitle {
  font-size: 12px;
  color: #d9dddd;
  text-align: center;
}
.subtitle-right {
  font-size: 12px;
  color: #9ba3a5;
  text-align: left;
  font-family: 'Noto Sans TC', sans-serif;
}
/* h4 {
  line-height: 2em;
  padding-left: 1em;
  color: #031418;
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: bold;
} */
.gg {
  float: left;
  text-align: center;
}
.font-display {
  font-family: 'Noto Sans TC', sans-serif;
}
.chartTitle {
  color: #545454;
}

.date-picker {
  float: right;
}

.card5 {
  display: flex;
  /* 水平置中 */
  justify-content: center;
  /* 垂直置中 */
  align-content: center;
  flex-wrap: wrap;
}
.card5content {
  width: 6em;
  float: left;
  margin: auto;
}
.btn {
  background-color: #f2f4f4;
}
.reset {
  float: right;
  margin-top: 0.5em;
  margin-right: 0.5em;
}
.cardtitle {
  line-height: 2.5em;
  font-weight: 900;
  color: #505f62;
}

.text-color >>> .v-text-field__slot input {
  color: #9ba3a5;
}

.left-btn {
  background-color: #2d2d2d;
  width: 2.25em;
  height: 2.25em;
}

.right-btn {
  background-color: #f2f4f4;
  width: 2.25em;
  height: 2.25em;
}

.donut1 {
  float: left;
}
.donut2 {
  float: right;
}
/* .rectangle {
  z-index: 99999;
} */
.bgimg {
  position: absolute;
}

.scroll {
  /* width: 20px; */
  /* height: 200px; */
  /* overflow: auto; */
  /* float: right; */
  /* margin: 0 10px; */
}

.scroll4::-webkit-scrollbar {
  width: 10px;
}

.scroll4::-webkit-scrollbar-thumb {
  background: #666;
  border-radius: 20px;
}

.scroll4::-webkit-scrollbar-track {
  background: #ddd;
  border-radius: 20px;
}
</style>

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
}

</style>

<style lang="scss">
.image-wrap {
  width: 100px;
  height: 100px;
  // position: absolute;
  // top: 50%;
  // left: 50%;
  // -moz-transform: translateY(-50%) translateX(-50%);
  // -ms-transform: translateY(-50%) translateX(-50%);
  // -webkit-transform: translateY(-50%) translateX(-50%);
  // transform: translateY(-50%) translateX(-50%);
  // -moz-box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
  // -webkit-box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
  // box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
  margin-left: 0px;
}
// @media (min-width: 550px) {
//   .image-wrap {
//     width: 608px;
//     height: 404px;
//   }
//   .image-wrap .image {
//     width: 50% !important;
//     height: 100% !important;
//     clear: none !important;
//   }
// }

@media (min-width: 800px) {
  .image-wrap {
    width: 850px;
    height: 250px;
  }
  .image-wrap .image {
  width: 315px !important;
    height: 100% !important;
    // clear: none !important;
  }
}

.image-wrap .image {
  width: 322px !important;
  height: 97% !important;
  background: url('static/xzoom/images/20220510_v1.jpg') no-repeat center center;
  float: left;
  margin: 0;
  margin-right: 10px;
  padding: 0px;
  // -moz-box-sizing: border-box;
  // -webkit-box-sizing: border-box;
  // box-sizing: border-box;
}
.image-wrap .image:first-child {
  // border-right: 1px solid #342420;
}
.image-wrap .image.result {
  background-position: 50% 25%;
}
.image-wrap .image.viewer {
  -moz-background-size: 100%;
  -o-background-size: 100%;
  -webkit-background-size: 100%;
  background-size: 100%;
}
.image-wrap .image.viewer .magnifier {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 45px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAEElEQVQIW2P8DwSMIMAABQA+HQQDNlbHLwAAAABJRU5ErkJggg==);
  opacity: 0.6;
  cursor: move;
}
</style>
