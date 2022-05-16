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
        <!-- <v-btn rounded x-small depressed style="color: #9ba3a5">
          整體資料監測
        </v-btn>
        <span style="font-size: 18px">&raquo;</span>
        <v-btn rounded x-small depressed style="color: #9ba3a5">
          全局數據: 年度資料完成度
        </v-btn>
        <span style="font-size: 18px">&raquo;</span> -->
        <v-btn color="#9BA3A5" rounded x-small depressed style="color: #fff">
          警報狀況
        </v-btn>
      </div>

      <v-row>
        <v-col cols="12" md="12">
          <v-row :column="$vuetify.breakpoint.mdAndDown">
            <!-- (上)----------------------------------------------------------------------------------------------- -->
            <!-- <v-col cols="12" lg="12"> -->

            <v-col cols="12" lg="12">
              <v-row
                class="mx-2 mt-8"
                style="border: 3px solid #f1f1f1; border-radius: 10px"
              >
                <v-col cols="12" md="6">
                  <v-row :column="$vuetify.breakpoint.mdAndDown">
                    <!-- (上)圓餅圖:當月資料完成度----------------------------------------------------------------------------------------------- -->
                    <!-- <v-col cols="12" lg="12"> -->
                    <v-col
                      cols="12"
                      lg="12"
                      style="
                        border: 1px solid rgba(0, 0, 0, 0);
                        border-radius: 5px;
                      "
                    >
                      <v-row :column="$vuetify.breakpoint.mdAndDown">
                        <!-- ------------------------------------------------------------------------------------------------- -->
                        <!-- <v-col cols="12" lg="12"> -->
                        <h4 class="cardtitle ml-3">當月超溫紀錄</h4>
                        <v-col
                          cols="12"
                          lg="12"
                          style="border: 1px solid rgba(0, 0, 0, 0)"
                        >
                          <v-row>
                            <!-- <v-col cols="12" md="3">
                              <v-row :column="$vuetify.breakpoint.mdAndDown">
                                <v-col
                                  cols="12"
                                  lg="12"
                                  style="border: 1px solid rgba(0, 0, 0, 0)"
                                >
                                  <month-heat-map-1 style="margin-top: 10px" />
                                </v-col>
                              </v-row>
                            </v-col> -->

                            <v-col cols="12">
                              <v-row :column="$vuetify.breakpoint.mdAndDown">
                                <!-- (上)(輪播)當月熱力圖顯示----------------------------------------------------------------------------------------------- -->
                                <!-- <v-col cols="12" lg="12"> -->
                                <v-col
                                  cols="12"
                                  lg="12"
                                  style="border: 1px solid rgba(0, 0, 0, 0)"
                                >
                                  <!-- <div class="carousel-wrapper"> -->
                                  <VueSlickCarousel v-bind="slickOptions">
                                    <div class="img-wrapper">
                                      <MonthHeatMap1 />
                                    </div>

                                    <div class="img-wrapper">
                                      <MonthHeatMap2 />
                                    </div>

                                    <div class="img-wrapper">
                                      <MonthHeatMap3 />
                                    </div>

                                    <div class="img-wrapper">
                                      <MonthHeatMap4 />
                                    </div>

                                    <div class="img-wrapper">
                                      <MonthHeatMap5 />
                                    </div>

                                    <div class="img-wrapper">
                                      <MonthHeatMap6 />
                                    </div>

                                    <div class="img-wrapper">
                                      <MonthHeatMap7 />
                                    </div>

                                    <div class="img-wrapper">
                                      <MonthHeatMap8 />
                                    </div>

                                    <div class="img-wrapper">
                                      <MonthHeatMap9 />
                                    </div>

                                    <div class="img-wrapper">
                                      <MonthHeatMap10 />
                                    </div>

                                    <div class="img-wrapper">
                                      <MonthHeatMap11 />
                                    </div>

                                    <div class="img-wrapper">
                                      <MonthHeatMap12 />
                                    </div>
                                  </VueSlickCarousel>
                                  <!-- </div> -->
                                </v-col>
                              </v-row>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col cols="12" md="6">
                  <v-row :column="$vuetify.breakpoint.mdAndDown">
                    <!-- ------------------------------------------------------------------------------------------------- -->
                    <!-- <v-col cols="12" lg="12"> -->
                    <h4 class="cardtitle ml-3">當日超溫紀錄</h4>

                    <v-col
                      cols="12"
                      lg="12"
                      style="border: 1px solid rgba(0, 0, 0, 0)"
                    >
                      <!-- <div class="legend">
                        <v-icon color="#d8dddd">mdi-square-medium</v-icon
                        ><span class="subtitle-right"
                          >良好-資料丟失率&lt;2.5% (單日)&nbsp;&nbsp;</span
                        >
                        <v-icon color="#9aa2a4">mdi-square-medium</v-icon
                        ><span class="subtitle-right"
                          >些微異常-資料丟失率&lt;5% (單日)&nbsp;&nbsp;</span
                        ><v-icon color="#37484C">mdi-square-medium</v-icon
                        ><span class="subtitle-right"
                          >異常-資料丟失率&lt;10% (單日)&nbsp;&nbsp;</span
                        >
                        <v-icon color="#eef1f9">mdi-square-medium</v-icon
                        ><span class="subtitle-right"
                          >尚未偵測&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                        >
                      </div> -->
                      <v-row>
                        <v-col cols="12" md="12">
                          <v-row :column="$vuetify.breakpoint.mdAndDown">
                            <!-- (下)當日熱力圖顯示----------------------------------------------------------------------------------------------- -->
                            <v-col
                              cols="12"
                              lg="12"
                              style="border: 1px solid rgba(0, 0, 0, 0)"
                            >
                              <DayHeatMap />
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" md="12">
          <v-row :column="$vuetify.breakpoint.mdAndDown" justify="center">
            <v-col cols="12" lg="3">
              <v-row
                class="ml-2 mt-2"
                style="border: 3px solid #f1f1f1; border-radius: 10px"
              >
                <h4 class="cardtitle ml-3">監測項目超溫次數統計</h4>
                <v-spacer />
                <v-combobox
                  v-model="select"
                  :items="timeItems"
                  label=""
                  dense
                  color=""
                  style="font-size: 12px"
                ></v-combobox>
                <v-btn icon color="red">
                  <v-icon>mdi-alert-circle-outline</v-icon>
                </v-btn>

                <v-col cols="12" md="12">
                  <v-img
                    justify="center"
                    src="/xzoom/images/20220510_v1.jpg"
                    width="280"
                    style="display: block; margin: auto"
                  />
                  <v-data-table
                    :headers="firstHeaders"
                    :items="firstBodys"
                    :expanded="expanded"
                    item-key="name"
                    show-expand
                    class="elevation-0"
                    @click:row="clicked"
                    hide-default-footer
                    disable-sort
                    style="position: relative"
                    height="200px"
                  >
                    <template v-slot:expanded-item="{ headers }">
                      <v-data-table
                        :colspan="headers.length"
                        :headers="secondHeaders"
                        :items="secondBodys"
                        hide-default-footer
                        class="elevation-0 tablefont"
                        dense
                        disable-sort
                        style="
                          position: absolute;
                          background-color: transparent;
                        "
                      ></v-data-table>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </template>
                  </v-data-table>
                  <!-- <v-alert dense type="error" style="font-size: 12px">
                    通知
                    <strong>2022/07/27 03:01</strong>
                    <strong>矩形2</strong> 調整(X:20 Y50)
                  </v-alert>
                  <v-alert dense type="error" style="font-size: 12px">
                    通知
                    <strong>2022/07/27 03:00</strong>
                    <strong>矩形3</strong> 刪除
                  </v-alert> -->
                  <!-- <v-alert type="warning" dense dismissible>
                    <v-row align="center">
                      <v-col>
                        <h6 >
                        通知
                        <strong>矩形2</strong> 於2022/07/27 03:01 位置調整至(X:20 Y50)</h6>
                      </v-col>
                      <v-col class="shrink">
                        <v-btn small>查看圖片</v-btn>
                      </v-col>
                    </v-row>
                  </v-alert>
                  <v-alert type="warning" dense dismissible>
                    <v-row align="center">
                      <v-col>
                        <h6>
                        通知
                        <strong>矩形2</strong> 於2022/07/27 03:01 位置調整至(X:20 Y50)</h6>
                      </v-col>
                      <v-col class="shrink">
                        <v-btn small>查看圖片</v-btn>
                      </v-col>
                    </v-row>
                  </v-alert> -->
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="12" lg="9">
              <v-row
                class="mx-2 mt-2"
                style="border: 3px solid #f1f1f1; border-radius: 10px"
              >
                <!-- <h4 class="cardtitle">監測項目時段超溫紀錄表</h4> -->
                <v-col cols="9">
                  <v-row>
                    <!-- ----------------------------------------------------------------------------------------------- -->
                    <v-col cols="12" lg="12">
                      <!-- <h4 class="cardtitle ml-3">監測項目時段超溫紀錄表</h4> -->

                      <!-- <v-data-table
                        height="190px"
                        show-select
                        :single-select="singleSelect"
                        v-model="selected"
                      >
                        <template v-slot:default>
                          <thead>
                            <tr>
                              <th class="text-left">項目</th>
                              <th class="text-left">超溫開始時間</th>
                              <th class="text-left">超溫停止時間</th>
                              <th class="text-left">持續時間</th>
                              <th class="text-left">預設警報溫度</th>
                              <th class="text-left">最大溫度</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="item in fakeTemps" :key="item.name">
                              <td>{{ item.name }}</td>
                              <td>{{ item.overheatStart }}</td>
                              <td>{{ item.overheatStop }}</td>
                              <td>{{ item.duration }}</td>
                              <td>{{ item.defaultAlertTemp }}</td>
                              <td>{{ item.scope1 }}</td>

                            </tr>
                          </tbody>
                        </template>
                      </v-data-table> -->

                      <v-data-table
                        v-model="selected"
                        :headers="fakeTempsHeaders"
                        :items="fakeTemps"
                        :single-select="singleSelect"
                        item-key="name"
                        show-select
                        class="elevation-0"
                        height="190px"
                        hide-default-footer
                        fixed-header
                        style="width: 850px"
                      >
                      </v-data-table>
                    </v-col>

                    <v-col
                      cols="12"
                      lg="12"
                      style="border: 1px solid rgba(0, 0, 0, 0)"
                    >
                      <!-- <h4 class="cardtitle ml-3">監測項目時段超溫紀錄圖</h4> -->

                      <overheat-records-line-chart />
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="3">

                      <!-- <h4 class="cardtitle ml-3" style="position: absolute">
                        當日資料完成度
                      </h4> -->


                          <div class="zoom-box" style="padding-right:30px">
                            <img
                              class="xzoom4"
                              id="xzoom-fancy"
                              src="xzoom/images/20220510_v1.jpg"
                              xoriginal="xzoom/images/20220510_v1.jpg"
                              width="290"
                              style="display:block;margin:auto"
                            />
                          </div>
                          <div class="mt-1"
                            id="zoom-target2"
                            style="width: 290px; height: 220px;position:absolute;margin-left:0px"
                          ></div>

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
// import DonutChart1 from './DonutChart/DonutChart1.vue'
// import DonutChart2 from './DonutChart/DonutChart2.vue'
import DayHeatMap from './DayHeatMap/DayHeatMap.vue'
import MonthHeatMap1 from './MonthHeatMap/MonthHeatMap1.vue'
import MonthHeatMap2 from './MonthHeatMap/MonthHeatMap2.vue'
import MonthHeatMap3 from './MonthHeatMap/MonthHeatMap3.vue'
import MonthHeatMap4 from './MonthHeatMap/MonthHeatMap4.vue'
import MonthHeatMap5 from './MonthHeatMap/MonthHeatMap5.vue'
import MonthHeatMap6 from './MonthHeatMap/MonthHeatMap6.vue'
import MonthHeatMap7 from './MonthHeatMap/MonthHeatMap7.vue'
import MonthHeatMap8 from './MonthHeatMap/MonthHeatMap8.vue'
import MonthHeatMap9 from './MonthHeatMap/MonthHeatMap9.vue'
import MonthHeatMap10 from './MonthHeatMap/MonthHeatMap10.vue'
import MonthHeatMap11 from './MonthHeatMap/MonthHeatMap11.vue'
import MonthHeatMap12 from './MonthHeatMap/MonthHeatMap12.vue'
// import LineAndBarChart2022vs2021 from '../components/DataScraping/LineAndBarChart/LineAndBarChart2022vs2021.vue'
import overheatRecordsLineChart from './overheatRecordsLineChart/overheatRecordsLineChart.vue'

export default {
  // echarts引入
  components: {
    // DonutChart1,
    // DonutChart2,
    DayHeatMap,
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
    // LineAndBarChart2022vs2021,
    overheatRecordsLineChart,
  },
  name: 'IndexPage',
  head: {
    title: '即時監控',
    link: [
      // { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: 'stylesheet', href: '/css/jquery-ui.css' },
      { rel: 'stylesheet', href: '/css/object.css' },
      { rel: 'stylesheet', href: '/css/card3.css' },
      { rel: 'stylesheet', href: 'xzoom/imgZoom/css/normalize.css' },
      { rel: 'stylesheet', href: 'xzoom/imgZoom/css/foundation.css' },
      { rel: 'stylesheet', href: 'xzoom/css/imgZoom/demo.css' },
      { rel: 'stylesheet', media: 'all', href: 'xzoom/dist/xzoom.css' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        media: 'all',
        href: '/fancybox/source/jquery.fancybox.css',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        media: 'all',
        href: '/magnific-popup/css/magnific-popup.css',
      },
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
      {
        src: 'xzoom/js/vendor/modernizr.js',
        type: 'text/javascript',
      },
      {
        src: 'xzoom/js/vendor/jquery.js',
        type: 'text/javascript',
      },

      {
        src: 'xzoom/dist/xzoom.min.js',
        type: 'text/javascript',
      },

      {
        src: 'xzoom/hammer.js/1.0.5/jquery.hammer.min.js',
        type: 'text/javascript',
      },
      {
        src: 'xzoom/fancybox/source/jquery.fancybox.js',
        type: 'text/javascript',
      },
      {
        src: 'xzoom/magnific-popup/js/magnific-popup.js',
        type: 'text/javascript',
      },
      {
        src: 'xzoom/js/foundation.min.js',
        type: 'text/javascript',
      },
      {
        src: 'xzoom/js/setup.js',
        type: 'text/javascript',
      },
    ],
  },
  data: () => ({
    slickOptions: {
      slidesToShow: 3,
      arrows: false,
      // slidesToScroll: 3,
      // centerMode: true,
      // dots: true,
      // focusOnSelect: true,
      // touchThreshold: 3,
      swipeToSlide: true,
    },
    items: [
      {
        text: '整體資料監測',
        disabled: true,
        href: 'breadcrumbs_link_2',
      },
      {
        text: '全局數據: 年度資料完成度',
        disabled: true,
        href: 'breadcrumbs_link_2',
      },
      {
        text: '全局數據: 當月資料完成度',
        disabled: true,
        href: 'breadcrumbs_link_2',
      },
    ],

    //     <th class="text-left">項目</th>
    // <th class="text-left">超溫開始時間</th>
    // <th class="text-left">超溫停止時間</th>
    // <th class="text-left">持續時間</th>
    // <th class="text-left">預設警報溫度</th>
    // <th class="text-left">最大溫度</th>
    // 假數據顯示(待刪)
    fakeTempsHeaders: [
      {
        text: '',
        align: 'start',
        sortable: false,
        value: 'selected',
      },
      {
        text: '項次',
        // align: 'start',
        sortable: false,
        value: 'index',
      },
      {
        text: '項目',
        // align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: '超溫開始日期', value: 'overheatStartMonth' },
      { text: '超溫開始時間', value: 'overheatStart' },
      { text: '超溫停止時間', value: 'overheatStop' },
      { text: '持續時間', value: 'duration' },
      { text: '預設警報溫度', value: 'defaultAlertTemp' },
      { text: '最大溫度', value: 'scope1' },
    ],
    fakeTemps: [
      {
        index: '1',
        name: '矩形1',
        overheatStartMonth: '2022/07/27',
        overheatStart: '01:00:00',
        overheatStop: '01:09:59',
        duration: '10分',
        defaultAlertTemp: '50°C',
        scope1: '50°C', // 最大溫度
      },
      {
        index: '2',

        name: '矩形2',
        overheatStartMonth: '2022/07/27',
        overheatStart: '01:00:00',
        overheatStop: '01:09:59',
        duration: '10分',
        defaultAlertTemp: '50°C',
        scope1: '50°C',
      },
      {
        index: '3',

        name: '矩形3',
        overheatStartMonth: '2022/07/27',
        overheatStart: '01:00:00',
        overheatStop: '01:09:59',
        duration: '10分',
        defaultAlertTemp: '50°C',
        scope1: '50°C',
      },
      {
        index: '4',

        name: '點1',
        overheatStartMonth: '2022/07/27',
        overheatStart: '01:00:00',
        overheatStop: '01:09:59',
        duration: '10分',
        defaultAlertTemp: '50°C',
        scope1: '50°C',
      },
      {
        index: '5',

        name: '點2',
        overheatStartMonth: '2022/07/27',
        overheatStart: '01:00:00',
        overheatStop: '01:09:59',
        duration: '10分',
        defaultAlertTemp: '50°C',
        scope1: '50°C',
      },
    ],
    select: ['2022/03/08 03:08:57 - 2022/05/12 08:22:09'],
    timeItems: [
      '2022/01/10 01:00:17 - 2022/02/27 08:09:31',
      '2022/02/27 02:53:05 - 2022/03/08 21:09:25',
      '2022/03/08 03:08:57 - 2022/05/12 08:22:09',
    ],

    // 巢狀表格
    expanded: [],
    singleExpand: false,
    firstHeaders: [
      {
        text: '項目',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: '開始紀錄時間', value: 'calories' },
      // { text: '停止紀錄時間', value: 'fat' },
      { text: '超溫占比', value: 'carbs' },
      { text: '超溫總數', value: 'protein' },
      { text: '', value: 'data-table-expand' },
    ],

    secondHeaders: [
      {
        text: '',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: '超溫開始時間', value: 'calories' },
      { text: '持續時間', value: 'carbs' },
      { text: '最高溫度', value: 'protein' },
      { text: '警報溫度', value: 'iron' },
    ],
    firstBodys: [
      {
        name: '矩形1',
        calories: '2022/07/27 01:00',
        fat: '2022/10/27 08:09',
        carbs: '30%',
        protein: 3,
      },
      {
        name: '矩形2',
        calories: '2022/07/27 01:00',
        fat: '2022/10/27 08:09',
        carbs: '50%',
        protein: 5,
      },
      {
        name: '矩形3',
        calories: '2022/07/27 01:00',
        fat: '2022/10/27 08:09',
        carbs: '20%',
        protein: 2,
      },
    ],
    secondBodys: [
      {
        // name: '矩形1',
        calories: '2022/07/28 01:20:58',
        fat: '2022/09/28 01:25:58',
        carbs: '12分',
        protein: '60°C',
        iron: '50°C',
      },
      {
        // name: '矩形1',
        calories: '2022/07/28 01:20:58',
        fat: '2022/07/28 01:25:58',
        carbs: '5分',
        protein: '62°C',
        iron: '43°C',
      },
    ],
    secondBodys2: [
      {
        // name: '矩形1',
        calories: '2022/07/28 01:20:58',
        fat: '2022/09/28 01:25:58',
        carbs: '12分',
        protein: '60°C',
        iron: '50°C',
      },
      {
        // name: '矩形1',
        calories: '2022/07/28 01:20:58',
        fat: '2022/07/28 01:25:58',
        carbs: '5分',
        protein: '62°C',
        iron: '43°C',
      },
    ],
    // fakefakefake
    singleSelect: true,
    selected: [],
    headers: [
      {
        text: 'Dessert (100g serving)',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'Calories', value: 'calories' },
      { text: 'Fat (g)', value: 'fat' },
      { text: 'Carbs (g)', value: 'carbs' },
      { text: 'Protein (g)', value: 'protein' },
      { text: 'Iron (%)', value: 'iron' },
    ],
    desserts: [
      {
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: '1%',
      },
      {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: '1%',
      },
      {
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: '7%',
      },
      {
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: '8%',
      },
      {
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: '16%',
      },
      {
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: '0%',
      },
      {
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: '2%',
      },
      {
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: '45%',
      },
      {
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: '22%',
      },
      {
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: '6%',
      },
    ],
  }),

  mounted() {
    // const unthumb = document.querySelectorAll('.thumb')
    // for (const unthumbs of unthumb) {
    //   unthumbs.onclick = function (e) {
    //     // console.log(e.target.src);
    //     // console.log(e.target.getAttribute("src"));
    //     const newImg = e.target.src // 絕對連結
    //     // let newImg = e.target.getAttribute("src");  // getAttribute取得屬性 e.g. src //相對連結
    //     document.querySelector('.pic').setAttribute('src', newImg) // 取得這個pic之後，去設定他的scr屬性值是newImg(我點選時所得到的），你要設定的屬性是誰
    //     for (const th of this.thumb) {
    //       th.classList.remove('active')
    //     }
    //     e.target.classList.add('active')
    //   }
    // }
    // $(function () {
    //   $('.xzoom-2-4').xzoom({
    //     position: '#zoom-target',
    //     tint: '#000',
    //     tintOpacity: 0.3,
    //     fadeOut: true,
    //   })
    // })
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
.legend {
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

.carousel-wrapper {
  padding: 0px;
}
.img-wrapper {
  padding-top: 0px;
  margin-top: 0px;
  height: 170px;
}

.tablefont {
  // font-size: 12px;
  color: #9ba3a5;
  // text-align: left;
  // font-family: 'Noto Sans TC', sans-serif;
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
