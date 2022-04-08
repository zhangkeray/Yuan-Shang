<template>
  <div class="fluid mt-3">
    <v-img class="bgimg" src="bgimg.png" height="93.2vh" />

    <v-row>
      <!-- 左畫面影像顯示----------------------------------------------------------------------------------------------- -->
      <v-col cols="12" md="12">
        <!-- <v-col cols="12" md="7" style="border: 1px solid red"> -->
        <v-card class="mt-3 mx-6" rounded="md" elevation="6" height="51.55em">
          <v-tabs vertical>
            <v-tab>
              <img class="" alt="" src="/data_scraping/data.png" width="14em" />
              <p>&nbsp;&nbsp;</p>
              全局數據
            </v-tab>
            <v-tab class="mr-1">
              <img class="" alt="" src="/data_scraping/data.png" width="14em" />
              <p>&nbsp;&nbsp;</p>
              年度數據
            </v-tab>
            <v-tab class="mr-1">
              <img class="" alt="" src="/data_scraping/data.png" width="14em" />
              <p>&nbsp;&nbsp;</p>
              ROI數據
            </v-tab>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <v-row>
                    <v-col cols="12" md="2">
                      <v-row :column="$vuetify.breakpoint.mdAndDown">
                        <!-- 左上畫面顯示----------------------------------------------------------------------------------------------- -->
                        <!-- <v-col cols="12" lg="12"> -->
                        <v-col cols="12" lg="12" style="border: 1px solid red">
                          <h4 class="cardtitle ml-3">當月資料完成度</h4>

                          <donutChart1 />
                          <br />
                          <br />
                        </v-col>

                        <!--左下畫面顯示----------------------------------------------------------------------------------------------- -->
                        <!-- <v-col cols="12" lg="12"> -->
                        <v-col cols="12" lg="12" style="border: 1px solid red">
                          <h4 class="cardtitle ml-3">當日資料完成度</h4>

                          <donutChart2 />
                        </v-col>
                      </v-row>
                    </v-col>

                    <v-col cols="12" md="10">
                      <v-row :column="$vuetify.breakpoint.mdAndDown">
                        <!-- 右上畫面顯示----------------------------------------------------------------------------------------------- -->
                        <!-- <v-col cols="12" lg="12"> -->
                        <v-col cols="12" lg="12" style="border: 1px solid red">
                          <div class="reset">
                            <v-icon color="#d8d8d8">mdi-circle-medium</v-icon
                            ><span class="subtitle-right"
                              >良好-資料丟失率&lt;2.5% (單日)&nbsp;&nbsp;</span
                            >
                            <v-icon color="#828c8f">mdi-circle-medium</v-icon
                            ><span class="subtitle-right"
                              >些微異常-資料丟失率&lt;5%
                              (單日)&nbsp;&nbsp;</span
                            ><v-icon color="#828c8f">mdi-circle-medium</v-icon
                            ><span class="subtitle-right"
                              >異常-資料丟失率&lt;10% (單日)&nbsp;&nbsp;</span
                            >
                            <v-icon color="#d8d8d8">mdi-circle-medium</v-icon
                            ><span class="subtitle-right"
                              >尚未偵測&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                            >
                          </div>
                          <h4 class="cardtitle ml-3">月份資料紀錄</h4>

                          <div class="carousel-wrapper">
                            <client-only>
                              <carousel
                                v-bind="options"
                                :navigationEnabled="true"
                                :scrollPerPage="false"
                                class="mx-5"
                                :navigationClickTargetSize="8"
                              >
                                <slide
                                  v-for="i in 12"
                                  :key="i"
                                  class="img-wrapper"
                                >
                                  <heat-map1 />
                                </slide>
                              </carousel>
                            </client-only>
                          </div>
                        </v-col>

                        <!--右下畫面顯示----------------------------------------------------------------------------------------------- -->
                        <!-- <v-col cols="12" lg="12"> -->
                        <v-col cols="12" lg="12" style="border: 1px solid red">
                          <div class="reset">
                            <v-icon color="#d8d8d8">mdi-circle-medium</v-icon
                            ><span class="subtitle-right"
                              >良好-資料丟失率&lt;2.5% (單日)&nbsp;&nbsp;</span
                            >
                            <v-icon color="#828c8f">mdi-circle-medium</v-icon
                            ><span class="subtitle-right"
                              >些微異常-資料丟失率&lt;5%
                              (單日)&nbsp;&nbsp;</span
                            ><v-icon color="#828c8f">mdi-circle-medium</v-icon
                            ><span class="subtitle-right"
                              >異常-資料丟失率&lt;10% (單日)&nbsp;&nbsp;</span
                            >
                            <v-icon color="#d8d8d8">mdi-circle-medium</v-icon
                            ><span class="subtitle-right"
                              >尚未偵測&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                            >
                          </div>
                          <h4 class="cardtitle ml-3">當日資料紀錄</h4>

                          <heat-map-2 />
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <v-row>
                    <v-col cols="12" md="2">
                      <v-row :column="$vuetify.breakpoint.mdAndDown">
                        <!-- 左上畫面顯示----------------------------------------------------------------------------------------------- -->
                        <!-- <v-col cols="12" lg="12"> -->
                        <v-col cols="12" lg="12" style="border: 1px solid red">
                          <h4 class="cardtitle ml-3">當月資料完成度</h4>

                          <donutChart1 />
                        </v-col>

                        <!--左下畫面顯示----------------------------------------------------------------------------------------------- -->
                        <!-- <v-col cols="12" lg="12"> -->
                      </v-row>
                    </v-col>

                    <v-col cols="12" md="10">
                      <v-row :column="$vuetify.breakpoint.mdAndDown">
                        <!-- 右上畫面顯示----------------------------------------------------------------------------------------------- -->
                        <!-- <v-col cols="12" lg="13"> -->
                        <v-col cols="12" lg="12" style="border: 1px solid red">
                          <h4 class="cardtitle ml-3">月份資料紀錄</h4>

                          <v-row justify="center">
                            <v-col v-for="n in 12" :key="n" cols="3">
                              <v-card height="200" width="300"> </v-card>
                            </v-col>
                          </v-row>
                        </v-col>

                        <!--右下畫面顯示----------------------------------------------------------------------------------------------- -->
                        <!-- <v-col cols="12" lg="12"> -->
                      </v-row>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <v-row>
                    <v-col cols="12" md="2">
                      <v-row :column="$vuetify.breakpoint.mdAndDown">
                        <!-- 左上畫面顯示----------------------------------------------------------------------------------------------- -->
                        <!-- <v-col cols="12" lg="12"> -->
                        <v-col cols="12" lg="12" style="border: 1px solid red">
                          <h4 class="cardtitle ml-3">當月資料完成度</h4>

                          <donutChart1 />
                          <br />
                          <br />
                        </v-col>

                        <!--左下畫面顯示----------------------------------------------------------------------------------------------- -->
                        <!-- <v-col cols="12" lg="12"> -->
                        <v-col cols="12" lg="12" style="border: 1px solid red">
                          <h4 class="cardtitle ml-3">當日資料完成度</h4>

                          <donutChart2 />
                        </v-col>
                      </v-row>
                    </v-col>

                    <v-col cols="12" md="10">
                      <v-row :column="$vuetify.breakpoint.mdAndDown">
                        <!-- 右上畫面顯示----------------------------------------------------------------------------------------------- -->
                        <!-- <v-col cols="12" lg="12"> -->
                        <v-col cols="12" lg="3" style="border: 1px solid red">
                          <div class="gallery">
                            <img
                              src="pic/iphone-12-black-select-2020.png"
                              class="pic"
                            />
                            <div class="thumbs">
                              <img
                                src="../static/left-icons/fullscreen.png"
                                class="thumb active"
                              />
                              <img
                                src="../static/left-icons/line.png"
                                class="thumb"
                              />
                              <img
                                src="../static/left-icons/spot.png"
                                class="thumb"
                              />
                              <img
                                src="../static/left-icons/snapshot.png"
                                class="thumb"
                              />
                              <img
                                src="../static/left-icons/rectangle.png"
                                class="thumb"
                              />
                              <img
                                src="../static/left-icons/hide-overlay.png"
                                class="thumb"
                              />
                            </div>
                          </div>
                        </v-col>

                        <v-col cols="12" lg="9" style="border: 1px solid red">
                          <div class="reset">
                            <v-icon color="#d8d8d8">mdi-circle-medium</v-icon
                            ><span class="subtitle-right"
                              >良好-資料丟失率&lt;2.5% (單日)&nbsp;&nbsp;</span
                            >
                            <v-icon color="#828c8f">mdi-circle-medium</v-icon
                            ><span class="subtitle-right"
                              >些微異常-資料丟失率&lt;5%
                              (單日)&nbsp;&nbsp;</span
                            ><v-icon color="#828c8f">mdi-circle-medium</v-icon
                            ><span class="subtitle-right"
                              >異常-資料丟失率&lt;10% (單日)&nbsp;&nbsp;</span
                            >
                            <v-icon color="#d8d8d8">mdi-circle-medium</v-icon
                            ><span class="subtitle-right"
                              >尚未偵測&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                            >
                          </div>
                          <h4 class="cardtitle ml-3">月份資料紀錄</h4>

                          <div class="carousel-wrapper">
                            <client-only>
                              <carousel
                                v-bind="options"
                                :navigationEnabled="true"
                                :scrollPerPage="true"
                                class="mx-5"
                              >
                                <slide class="img-wrapper">
                                  <month-heat-map-1 />
                                </slide>
                                <slide class="img-wrapper">
                                  <month-heat-map-2 />
                                </slide>
                                <slide class="img-wrapper">
                                  <month-heat-map-3 />
                                </slide>
                                <slide class="img-wrapper">
                                  <month-heat-map-4 />
                                </slide>
                                <slide class="img-wrapper">
                                  <month-heat-map-5 />
                                </slide>
                                <slide class="img-wrapper">
                                  <month-heat-map-6 />
                                </slide>
                                <slide class="img-wrapper">
                                  <month-heat-map-7 />
                                </slide>
                                <slide class="img-wrapper">
                                  <month-heat-map-8 />
                                </slide>
                                <slide class="img-wrapper">
                                  <month-heat-map-9 />
                                </slide>
                                <slide class="img-wrapper">
                                  <month-heat-map-10 />
                                </slide>
                                <slide class="img-wrapper">
                                  <month-heat-map-11 />
                                </slide>
                                <slide class="img-wrapper">
                                  <month-heat-map-12 />
                                </slide>
                              </carousel>
                            </client-only>
                          </div>
                        </v-col>

                        <!--右下畫面顯示----------------------------------------------------------------------------------------------- -->
                        <!-- <v-col cols="12" lg="12"> -->
                        <v-col cols="12" lg="12" style="border: 1px solid red">
                          <div class="reset">
                            <v-icon color="#d8d8d8">mdi-circle-medium</v-icon
                            ><span class="subtitle-right"
                              >良好-資料丟失率&lt;2.5% (單日)&nbsp;&nbsp;</span
                            >
                            <v-icon color="#828c8f">mdi-circle-medium</v-icon
                            ><span class="subtitle-right"
                              >些微異常-資料丟失率&lt;5%
                              (單日)&nbsp;&nbsp;</span
                            ><v-icon color="#828c8f">mdi-circle-medium</v-icon
                            ><span class="subtitle-right"
                              >異常-資料丟失率&lt;10% (單日)&nbsp;&nbsp;</span
                            >
                            <v-icon color="#d8d8d8">mdi-circle-medium</v-icon
                            ><span class="subtitle-right"
                              >尚未偵測&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                            >
                          </div>
                          <h4 class="cardtitle ml-3">當日資料紀錄</h4>

                          <heat-map-2 />
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import DonutChart1 from '../components/DataScraping/DonutChart1.vue'
import DonutChart2 from '../components/DataScraping/DonutChart2.vue'
import HeatMap1 from '../components/DataScraping/HeatMap1.vue'
import HeatMap2 from '../components/DataScraping/HeatMap2.vue'
import MonthHeatMap1 from '../components/DataScraping/MonthHeatMap/MonthHeatMap1.vue'
import MonthHeatMap2 from '../components/DataScraping/MonthHeatMap/MonthHeatMap2.vue'
import MonthHeatMap3 from '../components/DataScraping/MonthHeatMap/MonthHeatMap3.vue'
import MonthHeatMap4 from '../components/DataScraping/MonthHeatMap/MonthHeatMap4.vue'
import MonthHeatMap5 from '../components/DataScraping/MonthHeatMap/MonthHeatMap5.vue'
import MonthHeatMap6 from '../components/DataScraping/MonthHeatMap/MonthHeatMap6.vue'
import MonthHeatMap7 from '../components/DataScraping/MonthHeatMap/MonthHeatMap7.vue'
import MonthHeatMap8 from '../components/DataScraping/MonthHeatMap/MonthHeatMap8.vue'
import MonthHeatMap9 from '../components/DataScraping/MonthHeatMap/MonthHeatMap9.vue'
import MonthHeatMap10 from '../components/DataScraping/MonthHeatMap/MonthHeatMap10.vue'
import MonthHeatMap11 from '../components/DataScraping/MonthHeatMap/MonthHeatMap11.vue'
import MonthHeatMap12 from '../components/DataScraping/MonthHeatMap/MonthHeatMap12.vue'

export default {
  components: {
    HeatMap1,
    HeatMap2,
    DonutChart1,
    DonutChart2,
    MonthHeatMap1,
    MonthHeatMap2,
    MonthHeatMap3,
    MonthHeatMap4,
    MonthHeatMap5,
    MonthHeatMap6,
    MonthHeatMap7,
    MonthHeatMap8,
    MonthHeatMap9,
    MonthHeatMap10,
    MonthHeatMap11,
    MonthHeatMap12,
  },
  name: 'IndexPage',
  head: {
    title: '即時監控',
    link: [
      // { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: 'stylesheet', href: '/css/jquery-ui.css' },
      { rel: 'stylesheet', href: '/css/object.css' },
      { rel: 'stylesheet', href: '/css/card3.css' },
    ],
    script: [
      {
        src: '/js/jquery.js',
        type: 'text/javascript',
      },
      {
        src: '/js/jquery-ui.js',
        type: 'text/javascript',
      },
      {
        src: '/js/jquery-collision.js',
        type: 'text/javascript',
      },
      // {
      //   src: '/js/object.js',
      //   type: 'text/javascript',
      // },
    ],
  },
  data: () => ({
    options: {
      loop: false,
      perPage: 4,
      paginationEnabled: false,
    },
  }),

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
  .VueCarousel-slide {
    text-align: center;
  }
}
.img-wrapper img {
  margin: auto;
  width: 3000px;
  height: 100px;
}
</style>
