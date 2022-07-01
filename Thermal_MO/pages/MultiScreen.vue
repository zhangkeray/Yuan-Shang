<template>
  <div>
    <v-img class="bgimg" src="bgimg.png" height="93.2vh" />
    <v-container fluid>
      <div class="cover-bg" style="position: relative">
        <!-- 對話框 -->
        <div :class="c_diago">
          <!-- <div class="draggable-bar"></div> -->
          <div class="diago-head">
            <div class="diago-point-cover">
              <div class="diago-point mt-5"></div>
            </div>
            <div class="diago-title mt-5">
              <div>
                Cam-s1-59 A棟 CS-02配電盤<v-btn
                  class="arrow-diago"
                  rounded
                  tile
                >
                  <img class="" alt="line" src="/images/tabs.png" width="60%"
                /></v-btn>
              </div>
              <div>IP: 192.168.0.173</div>
            </div>
            <div class="diago-close">
              <v-btn
                class="diago-close-icon"
                rounded
                outlined
                @click="diagoOff"
              >
                <img class="" alt="line" src="/images/close.png" width="70%"
              /></v-btn>
            </div>
          </div>
          <div class="diago-contnet-cover">
            <div class="diago-alarm-cover">
              <!-- 警報設置 -->
              <div class="diago-border1">
                <strong class="diago-title">警報設置</strong>
                <v-data-table
                  dense
                  :headers="diagoalarmHeaders"
                  :items="diagoalarmDesserts"
                  disable-pagination
                  hide-default-header
                  hide-default-footer
                >
                  <template v-slot:header="{ props }">
                    <th
                      v-for="head in props.headers"
                      :key="head"
                      class="diago-table-title"
                    >
                      {{ head.text.toUpperCase() }}
                    </th>
                  </template>
                </v-data-table>
              </div>
              <!-- 警報紀錄 -->
              <div class="diago-border1 ml-2">
                <strong class="diago-title">警報紀錄</strong>
                <v-data-table
                  dense
                  :headers="diagoalarmlogHeaders"
                  :items="diagoalarmlogDesserts"
                  disable-pagination
                  hide-default-header
                  hide-default-footer
                >
                  <template v-slot:header="{ props }">
                    <th
                      v-for="head1 in props.headers"
                      :key="head1"
                      class="diago-table-title"
                    >
                      {{ head1.text.toUpperCase() }}
                    </th>
                  </template>
                </v-data-table>
              </div>
            </div>
            <div class="diago-alarm-cover1">
              <!-- 警報統計 -->
              <div class="diago-border1">
                <strong class="diago-title">警報統計</strong>
                <!-- 圖表1 本日 -->
                <div class="donut-flex mt-3">
                  <v-progress-circular
                    class="donut1"
                    :rotate="-90"
                    :size="40"
                    :width="5"
                    :value="circularToday"
                    color="#828c8f"
                    backgroud
                  >
                    <h6>{{ circularToday }}</h6>
                  </v-progress-circular>
                  <div class="ml-3 donut-txt">當日</div>
                </div>
                <!-- 圖表1 昨日 -->
                <div class="donut-flex mt-5">
                  <v-progress-circular
                    class="donut1"
                    :rotate="-90"
                    :size="40"
                    :width="5"
                    :value="circularYesterday"
                    color="#828c8f"
                    backgroud
                  >
                    <h6>{{ circularYesterday }}</h6>
                  </v-progress-circular>
                  <div class="ml-3 donut-txt">昨日</div>
                </div>
                <!-- 圖表1 當周 -->
                <div class="donut-flex mt-5">
                  <v-progress-circular
                    class="donut1"
                    :rotate="-90"
                    :size="40"
                    :width="5"
                    :value="circularWeek"
                    color="#de8788"
                    backgroud
                  >
                    <h6>{{ circularWeek }}</h6>
                  </v-progress-circular>
                  <div class="ml-3 donut-txt">當周</div>
                </div>
                <!-- 圖表1 當月 -->
                <div class="donut-flex mt-5">
                  <v-progress-circular
                    class="donut1"
                    :rotate="-90"
                    :size="40"
                    :width="5"
                    :value="circularMonth"
                    color="#828c8f"
                    backgroud
                  >
                    <h6>{{ circularMonth }}</h6>
                  </v-progress-circular>
                  <div class="ml-3 donut-txt">當月</div>
                </div>
              </div>
              <!-- 警報歷史 -->
              <div class="diago-border1 ml-2">
                <strong class="diago-title">警報歷史</strong>
                <div class="reset1">
                  <v-icon color="#d8d8d8">mdi-circle-medium</v-icon
                  ><span class="subtitle-right">正常</span>
                  <v-icon color="#828c8f">mdi-circle-medium</v-icon
                  ><span class="subtitle-right">超溫</span>
                </div>
                <v-date-picker
                  v-model="date2"
                  class="date-picker"
                  :event-color="(date) => (date[9] % 2 ? 'red' : 'yellow')"
                  events
                  readonly
                  no-title
                  color="#828c8f"
                  width="220"
                  height="200"
                ></v-date-picker>
              </div>
            </div>
          </div>
        </div>
        <v-row>
          <!-- 分隔畫面 -->
          <v-col cols="9" class="p-1">
            <v-card class="camera-bg align-items-c mt-3" style="">
              <ul id="sortable" :class="sortable">
                <li
                  v-for="(item01, index01) in cam"
                  :key="index01"
                  :class="ui_state"
                  id="diagoHover"
                  @click="testdata"
                >
                  <div>
                    <a rel="busstop" class="busstop">{{ index01 }}</a>
                  </div>
                  <img
                    src="1656315342184.jpg"
                    class="test-cramre"
                    width="100%"
                  />
                </li>
              </ul>
            </v-card>
          </v-col>
          <!-- 右方控制面板 -->
          <v-col cols="3">
            <v-card class="camera-bg mt-3" style="height: 830px">
              <div class="menu-top">
                <div>
                  <v-btn class="arrow-custom" tile>
                    <img
                      class=""
                      alt="line"
                      src="/images/Previous.png"
                      width="60%"
                    />
                  </v-btn>
                  <v-btn class="arrow-custom" tile>
                    <img
                      class=""
                      alt="line"
                      src="/images/next.png"
                      width="60%"
                    />
                  </v-btn>
                </div>
                <div class="menu-top-setting">
                  <v-checkbox
                    v-model="carousel_checkbox"
                    label="輪播"
                    class="mr-3"
                  ></v-checkbox>
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        class="btu-setting"
                        fab
                        x-small
                        v-bind="attrs"
                        v-on="on"
                      >
                        <img
                          class=""
                          alt="line"
                          src="/images/setting.png"
                          width="70%"
                        />
                      </v-btn>
                    </template>
                    <span>畫面設定</span>
                  </v-tooltip>
                </div>
              </div>
              <!-- 選單組 -->
              <div class="custom-g-select">
                <!-- 區域 -->
                <div class="pl-0">
                  <v-select
                    class="custom-select"
                    v-model="e1"
                    :items="areas"
                    dense
                    solo
                  ></v-select>
                </div>
                <!-- 組別 -->
                <div class="pl-0">
                  <v-select
                    class="custom-select"
                    v-model="e2"
                    :items="groups"
                    dense
                    solo
                  ></v-select>
                </div>
                <!-- page -->
                <div class="pl-0">
                  <v-select
                    class="custom-select"
                    v-model="e3"
                    :items="pages"
                    dense
                    solo
                  ></v-select>
                </div>
                <!-- 畫面分格 -->
                <div class="px-0">
                  <v-select
                    v-model="e4"
                    class="custom-select"
                    :items="splitScreen"
                    dense
                    solo
                    @change="transition"
                  >
                    <template v-slot:prepend>
                      <v-fade-transition leave-absolute>
                        <img
                          width="24"
                          height="24"
                          class="transition-img"
                          src="/images/display.png"
                          alt=""
                        />
                      </v-fade-transition>
                    </template>
                  </v-select>
                </div>
              </div>
              <!-- 搜尋相機編號 -->
              <div class="search-cover">
                <div class="search-input">
                  <v-text-field
                    rounded
                    class="pa-0 ma-0"
                    label="搜尋 相機編號/監測項目"
                  >
                    <template v-slot:prepend>
                      <v-fade-transition leave-absolute>
                        <img
                          width="24"
                          height="24"
                          class="transition-img"
                          src="/images/search.png"
                          alt=""
                        />
                      </v-fade-transition>
                    </template>
                  </v-text-field>
                </div>
                <div class="search-explore">
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        class="btu-setting"
                        fab
                        x-small
                        v-bind="attrs"
                        v-on="on"
                      >
                        <img
                          class=""
                          alt="line"
                          src="/images/explore.png"
                          width="70%"
                        />
                      </v-btn>
                    </template>
                    <span>探索</span>
                  </v-tooltip>
                </div>
              </div>
              <!-- 標籤 -->
              <div>
                <v-card class="custom-cards-tags">
                  <v-tabs
                    color="#4f5e62"
                    class="custom-tabs"
                    left
                    @change="CustomTabs"
                  >
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <v-tab v-bind="attrs" v-on="on"
                          ><img class="tab-icon" src="/images/bell.png" />{{
                            tabcontent[0]
                          }}</v-tab
                        >
                      </template>
                      <span>超溫警報</span>
                    </v-tooltip>
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <v-tab v-bind="attrs" v-on="on"
                          ><img
                            class="tab-icon"
                            src="/images/exclamation.png"
                          />{{ tabcontent[1] }}</v-tab
                        >
                      </template>
                      <span>通知</span>
                    </v-tooltip>
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <v-tab v-bind="attrs" v-on="on"
                          ><img class="tab-icon" src="/images/wifi.png" />{{
                            tabcontent[2]
                          }}</v-tab
                        >
                      </template>
                      <span>連線項目</span>
                    </v-tooltip>
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <v-tab v-bind="attrs" v-on="on"
                          ><img class="tab-icon" src="/images/tabs.png" />{{
                            tabcontent[3]
                          }}</v-tab
                        >
                      </template>
                      <span>書籤</span>
                    </v-tooltip>
                    <!-- 超溫警報 -->
                    <v-tab-item>
                      <div class="Overtemperature-Alert">
                        <div class="py-2">
                          <strong class="Alert-title">超溫項目警報</strong>
                          <div class="Alert-txt py-3">
                            <div v-for="ie in 100" :key="ie" class="px-3">
                              <span v-if="ie < 3" class="Alert-txt-alarm px-3"
                                >2022/07/27 03:11 Cam-s1-58 區域{{ ie }}</span
                              >
                              <span v-else class="Alert-font px-3"
                                >2022/07/27 03:11 Cam-s1-58 區域{{ ie }}</span
                              >
                            </div>
                          </div>
                        </div>
                        <div>
                          <strong class="Alert-title">超溫警報通知</strong>
                          <div class="Alert-txt2 py-3">
                            <div v-for="ieq in 100" :key="ieq" class="my-1">
                              <div v-if="ieq < 3" class="Alert-background1">
                                <span class="Alert-font px-5"
                                  >2022/07/27 03:11 Cam-s1-58 區域{{ ieq }}</span
                                >
                              </div>
                              <div v-else class="Alert-background">
                                <span class="Alert-font px-5"
                                  >2022/07/27 03:11 Cam-s1-58 區域{{ ieq }}</span
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </v-tab-item>
                    <!-- 通知 -->
                    <v-tab-item>
                      <div class="mags-cover py-3">
                        <strong class="Alert-title">操作通知</strong>
                        <div class="Alert-txt2 py-3">
                          <div v-for="iee in 100" :key="iee" class="my-1">
                            <div v-if="iee < 3" class="Alert-background1">
                              <span class="Alert-font px-5"
                                >2022/07/27 03:11 Cam-s1-58 區域{{ iee }}</span
                              >
                            </div>
                            <div v-else class="Alert-background">
                              <span class="Alert-font px-5"
                                >2022/07/27 03:11 Cam-s1-58 區域{{ iee }}</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </v-tab-item>
                    <!-- 連線項目 -->
                    <v-tab-item>
                      <div class="connect-cover">
                        <div>
                          <div class="my-3">
                            <strong class="Alert-title">相機</strong>
                          </div>
                          <v-data-table
                            :headers="connectHeaders"
                            :items="connectDesserts"
                            disable-pagination
                            hide-default-footer
                            height="250px"
                            class=""
                          >
                            <template v-slot:[`item.status`]="{ item }">
                              <div class="connect-icon">
                                <img :src="item.status" />
                              </div>
                            </template>
                          </v-data-table>
                        </div>
                        <div>
                          <div>
                            <div class="my-3">
                              <strong class="Alert-title">其他裝置</strong>
                            </div>
                            <v-data-table
                              :headers="otherDevicesHeaders"
                              :items="otherDevicesDesserts"
                              disable-pagination
                              hide-default-footer
                              height="240px"
                              class=""
                            >
                              <template v-slot:[`item.status`]="{ item }">
                                <div class="connect-icon">
                                  <div
                                    v-if="item.status === 0"
                                    class="status-open"
                                  ></div>
                                  <div v-else class="status-off"></div>
                                </div>
                              </template>
                            </v-data-table>
                          </div>
                        </div>
                      </div>
                    </v-tab-item>
                    <!-- 書籤 -->
                    <v-tab-item>
                      <div>
                        <div class="my-3">
                          <strong class="Alert-title">書籤項目</strong>
                        </div>
                        <v-data-table
                          :headers="tagsHeaders"
                          :items="tagsDesserts"
                          disable-pagination
                          hide-default-footer
                          height="540px"
                          class=""
                        >
                          <template v-slot:[`item.delete`]="{ item }">
                            <div class="trash-icon">
                              <img :src="item.delete" />
                            </div>
                          </template>
                          <template v-slot:[`item.check`]="{ item }">
                            <div class="connect-icon">
                              {{ item.check }}
                            </div>
                          </template>
                        </v-data-table>
                      </div>
                    </v-tab-item>
                  </v-tabs>
                </v-card>
              </div>
              <!-- end -->
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'MultiScreenPage',
  head: {
    link: [
      // { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: 'stylesheet', href: '/css/jquery-ui.css' },
    ],
    script: [
      {
        src: '/js/jquery-ui.js',
        type: 'text/javascript',
      },
      {
        src: '/js/jquery-collision.js',
        type: 'text/javascript',
      },
    ],
  },
  data: () => ({
    sortable: 'sortable4-1',
    ui_state: 'ui-state-default',
    c_diago: 'custom-dialog dialog-close',
    cam: ['1', '2', '3', '4'],
    depressed: true,
    carousel_checkbox: false,
    circularToday: 10,
    circularYesterday: 5,
    circularWeek: 50,
    circularMonth: 100,
    functionEvents: true,
    // 日曆
    arrayEvents: null,
    date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    // 下拉選單
    e1: '第一區',
    areas: ['第一區', '第一區', '第一區'],
    e2: '第一組',
    groups: ['第一組', '第一組', '第一組'],
    e3: '第一頁',
    pages: ['第一頁', '第一頁', '第一頁'],
    e4: 1,
    splitScreen: [
      { text: '均分4分格', value: 0 },
      { text: '4分格', value: 1 },
      { text: '12分格', value: 2 },
      { text: '24分格', value: 3 },
    ],
    // 標籤文字
    tabcontent: [],
    // 連線項目
    connectHeaders: [
      {
        text: '',
        align: 'start',
        sortable: false,
        value: 'status',
      },
      { text: '編號', value: 'id' },
      { text: '監測項目', value: 'item' },
      { text: '上次更新時間', value: 'update' },
    ],
    connectDesserts: [],
    // 其他裝置
    otherDevicesHeaders: [
      {
        text: '',
        align: 'start',
        sortable: false,
        value: 'status',
      },
      { text: '編號', value: 'id' },
      { text: '位置', value: 'item' },
      { text: '上次更新時間', value: 'update' },
    ],
    otherDevicesDesserts: [],
    // 書籤項目
    tagsHeaders: [
      {
        text: '',
        // align: 'center',
        sortable: false,
        value: 'delete',
      },
      {
        text: '編號',
        align: 'center',
        value: 'id',
        width: '50px',
        class: 'tagsId',
      },
      { text: '項目', value: 'item' },
      { text: '', value: 'check' },
    ],
    tagsDesserts: [],
    // end
    // dialog table

    // 警報設置
    diagoalarmHeaders: [
      { text: '項目', value: 'item', align: 'center' },
      {
        text: '溫度',
        align: 'center',
        // value: 'id',
        // width: '50px',
        value: 'temperature',
      },

      { text: '設定', value: 'setting', align: 'center' },
    ],
    diagoalarmDesserts: [],
    // 警報紀錄
    diagoalarmlogHeaders: [
      { text: '項目', value: 'item', align: 'center' },
      {
        text: '溫度',
        align: 'center',
        // value: 'id',
        // width: '50px',
        value: 'temperature',
      },
      { text: '狀態', value: 'status', align: 'center' },
      { text: '時間', value: 'date', align: 'center' },
      { text: '熱點座標', value: 'location', align: 'center' },
    ],
    diagoalarmlogDesserts: [],
  }),

  mounted() {
    // 排序
    $(function () {
      $('#sortable').sortable({
        placeholder: 'ui-state-highlight',
        cursor: 'grabbing',
        // revert: true
      })
      $('#sortable').disableSelection()
    })
    // 對話視窗
    // $('.custom-dialog').draggable({
    //   start: () => {
    //     $('.custom-dialog').css('opacity', '0.9')
    //     $('.custom-dialog').css('transition', 'all 0s')
    //   },
    //   stop: () => {
    //     $('.custom-dialog').css('opacity', '1')
    //     $('.custom-dialog').css('transition', 'all 0.1s')
    //   },
    //   handle: '.draggable-bar',
    //   cursor: 'grabbing',
    //   containment: 'parent',
    // })
  },
  updated() {
    // 判斷視窗該在哪個方位
    $(
      '.ui-state-default,.ui-state-default4,.ui-state-default12,.ui-state-default100'
      // ).on('mouseover', function () {
    ).on('click', function () {
      // 假高度
      // var flash = ['600px', '500px', '400px', '2000px']
      // $('.diago-contnet').css('height', flash[Math.floor(Math.random() * 4)])
      // 假高度
      var cover = $('.cover-bg') // 宣告渲染畫面
      $('.custom-dialog').removeClass('dialog-close')
      var position = $(this).offset() // 取得點擊的元素座標
      var dialog = $('.custom-dialog') // 宣告互動視窗
      var div = $(this).find('img') // 選告元素底下的圖片
      dialog.css('max-height', cover.height() + 'px')
      $('.diago-contnet-cover').css('max-height', cover.height() - 74 + 'px')
      //   var document1Width = $(document).width() / 2 // 宣告目前頁面的一半寬度
      //   var document1Height = $(document).height() / 2 // 宣告目前頁面的一半高度
      var x = 0
      if (position.left + div.width() > cover.width() / 2) {
        x = position.left - dialog.width() // 宣告元素右下角x軸
      } else {
        x = position.left + div.width() // 宣告元素右下角x軸
      }

      var dialogHeight = dialog.height() / 2
      var y = position.top + div.height() / 2 - dialogHeight // 宣告元素右下角y軸
      // var bottomY = dialog.offset().top + dialog.height()
      // if (bottomY > cover.height()) {
      //   y = 64
      // }

      // 如果計算結果，視窗畫面底部座標大於實際畫面的高度，將會實施以下公式: y = y - (y + 視窗高度 - 實際畫面高度)
      if (y + dialog.height() > cover.height()) {
        y = y - (y + dialog.height() - cover.height())
      }

      // 如果計算結果y座標是負的，那會直接把y座標強制設定為0+TOP BAR(高度)
      if (y < 64) {
        y = 64
      }

      // 指定視窗該在哪個方位
      dialog.css('top', y + 'px')
      dialog.css('left', x + 'px')
    })
  },
  methods: {
    // 測試假資料
    testdata() {
      // 連線裝置 假資料
      var arr = []
      for (var i = 0; i < Math.floor(Math.random() * 1000); i++) {
        arr.push({
          status: '/images/eye-on.png',
          id: `Cam-s1-${i}`,
          item: 'A棟CS-04配電盤',
          update: '2022/06/06 14:07:08',
        })
      }
      this.connectDesserts = arr

      // 其他裝置 假資料
      var arr1 = []
      for (var j = 0; j < Math.floor(Math.random() * 1000); j++) {
        arr1.push({
          status: '0',
          id: `Cam-s1-${j}`,
          item: 'A棟CS-04配電盤',
          update: '2022/06/06 14:07:08',
        })
      }
      this.otherDevicesDesserts = arr1

      // 書籤 假資料
      var arr2 = []
      for (var z = 0; z < Math.floor(Math.random() * 1000); z++) {
        arr2.push({
          delete: '/images/trash.png',
          id: `${z}`,
          item: `Cam-s1-${z} A棟CS-04配電盤`,
          check: '查看',
        })
      }
      this.tagsDesserts = arr2
      // 警報設置 假資料
      var arr3 = []
      for (var zq = 0; zq < Math.floor(Math.random() * 16); zq++) {
        arr3.push({
          item: '+',
          temperature: `${zq}`,
          setting: `++`,
        })
      }
      this.diagoalarmDesserts = arr3
      // 警報紀錄 假資料
      var arr4 = []
      var mock = [12,1000,10, 1]
      var d = mock[Math.floor(Math.random() * 4)]
      for (var zq1 = 0; zq1 < d; zq1++) {
        arr4.push({
          item: '+',
          temperature: `${zq1}`,
          status: `++`,
          date: '03:03:01',
          location: '303030',
        })
      }
      console.log(d)
      this.diagoalarmlogDesserts = arr4
      // end
    },

    // 關閉對話窗
    diagoOff() {
      $('.custom-dialog').addClass('dialog-close')
    },
    // 分格畫面判斷
    transition(data) {
      $('.custom-dialog').addClass('dialog-close')
      if (data === 0) {
        $('#sortable').sortable({
          placeholder: 'ui-state-highlight4',
          // revert: true
        })
        this.sortable = 'sortable4'
        this.ui_state = 'ui-state-default4'
        // 均分 4格
        this.cam = ['1', '2', '3', '4']
      } else if (data === 1) {
        $('#sortable').sortable({
          placeholder: 'ui-state-highlight',
          // revert: true
        })
        this.sortable = 'sortable4-1'
        this.ui_state = 'ui-state-default'
        // 4分格
        this.cam = ['1', '2', '3', '4']
      } else if (data === 2) {
        $('#sortable').sortable({
          placeholder: 'ui-state-highlight12',
          // revert: true
        })
        this.sortable = 'sortable12'
        this.ui_state = 'ui-state-default12'
        // 12分格
        var arr = []
        for (var i = 1; i <= 12; i++) {
          arr.push(i)
        }
        this.cam = arr
      } else if (data === 3) {
        $('#sortable').sortable({
          placeholder: 'ui-state-highlight100',
          // revert: true
        })

        this.sortable = 'sortable100'
        this.ui_state = 'ui-state-default100'
        // 12分格
        var arr1 = []
        for (var z = 1; z <= 24; z++) {
          arr1.push(i)
        }
        this.cam = arr1
      }
    },
    // 標籤標題隱藏
    CustomTabs(data) {
      if (data === 0) {
        this.tabcontent = ['超溫警報', '', '', '']
      } else if (data === 1) {
        this.tabcontent = ['', '通知', '', '']
      } else if (data === 2) {
        this.tabcontent = ['', '', '連線項目', '']
      } else if (data === 3) {
        this.tabcontent = ['', '', '', '書籤']
      }
    },
  },
}
</script>

<style>
.bgimg {
  position: absolute;
}
.camera-bg {
  background: #fff;
  height: 830px;
  padding: 16px;
  border-radius: 0px !important;
}
/* 對話視窗 */
.diago-contnet-cover {
  height: 100%;
  overflow-y: auto;
}
.custom-dialog {
  width: 370px;
  height: auto;
  position: fixed;
  top: 64px;
  left: 39%;
  background-color: #fff;
  z-index: 99999;
  box-shadow: 0px 0px 8px 4px rgb(108 108 108 / 27%);
  border-radius: 3px;
  transition: all 0.1s;
  opacity: 1;
  /* overflow-y: auto; */
  /* transform: translate(-50%, -50%); */
}
.draggable-bar {
  width: 70px;
  height: 5px;
  position: absolute;
  top: 13px;
  left: 50%;
  background-color: #80898c;
  border-radius: 3px;
  transform: translate(-50%, -50%);
  transition: all 0.3s;
  cursor: move;
}
.draggable-bar:hover {
  width: 100px;
}
#diagoHover {
  cursor: grab;
}
.dialog-close {
  pointer-events: none;
  opacity: 0 !important;
}
.diago-head {
  display: grid;
  grid-template-columns: 10% 77% 13%;
  color: #4f5e62;
}
.diago-point-cover {
  display: flex;
  justify-content: center;
  padding: 7px 0 0 0;
}
.diago-point {
  width: 15px;
  height: 15px;
  background-color: #8ab284;
  border-radius: 15px;
}
.diago-title img {
  width: 30px;
  margin: 0 0 0 9px;
}
.diago-title > div {
  display: flex;
  align-items: center;
}
.arrow-diago {
  background-color: #fff !important;
  box-shadow: unset !important;
  border: 0px #d7dbdb solid;
  border-radius: 3px;
  width: 42px;
  min-width: 42px !important;
  height: 30px !important;
}
.diago-close {
  margin-top: 10px;
}
.diago-close-icon {
  background-color: #fff !important;
  box-shadow: unset !important;
  border: 0px #d7dbdb solid !important;
  width: 100% !important;
  min-width: 0 !important;
}
.diago-alarm-cover {
  display: grid;
  grid-template-columns: 111px 238px;
  padding: 10px;
}
.diago-border1 {
  border: 1px #d7dbdb solid;
  border-radius: 3px;
  padding: 5px;
}
.diago-title {
  color: #4f5e62;
  font-weight: bold;
}
.diago-table-title {
  color: #4f5e62;
  font-size: 13px;
  border-bottom: 1px #000000 solid;
}
.diago-alarm-cover1 {
  display: grid;
  grid-template-columns: 100px 247px;
  padding: 10px;
}
.donut-flex {
  display: flex;
  align-items: center;
  justify-content: center;
}
.donut-txt {
  color: #4f5e62;
  font-size: 10px;
}
.reset1 {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  float: right;
}
.reset1 > span {
  color: #4f5e62;
  font-size: 8px;
}
/* 對話視窗 end */
.align-items-c {
  /* display: flex; */
  align-items: center;
}
.cam-grid4 {
  display: grid;
  width: 100%;
  grid-template-columns: 38% 38%;
  justify-content: center;
}
.cam-grid4 > div {
  margin-right: 5px;
}
.cam-grid4-olny {
  display: grid;
  grid-template-columns: 338px;
  margin-right: 7px;
  grid-template-rows: 261px 261px 261px;
  align-items: center;
}
.cam-grid12 {
  display: grid;
  width: 100%;
  grid-template-columns: 25% 25% 25% 25%;
  justify-content: center;
}
.cam-grid12 > div {
  margin-right: 5px;
}
.cam-only {
  width: 100%;
}
.arrow-custom {
  background-color: #fff !important;
  box-shadow: unset !important;
  border: 1px #d7dbdb solid;
  border-radius: 3px;
  width: 42px;
  min-width: 42px !important;
  height: 43px !important;
}
.menu-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu-top-setting {
  display: flex;
  align-items: center;
}
.btu-setting {
  background-color: #fff !important;
  box-shadow: unset !important;
}
.custom-g-select {
  display: grid;
  grid-template-columns: 20% 21% 21% 38%;
}

.custom-g-select > div:first-child {
  margin-left: 0px !important;
}
.custom-g-select > div {
  margin-left: 5px;
}
.custom-select {
  height: 40px;
  border: 1px #d7dbdb solid;
  color: #4f5e62;
  /* flex-direction: row-reverse; */
}
.transition-img {
  margin: 0px 0px 0px 3px;
}
.custom-select div {
  font-size: 10px;
}
.custom-select > div > div {
  box-shadow: unset !important;
  padding-right: 3px !important;
  padding-left: 3px !important;
}
.search-cover {
  display: grid;
  grid-template-columns: 360px 60px;
}
.search-input {
  border: 1px #d7dbdb solid;
  height: 44px;
  padding: 5px 8px;
  margin: 8px 0px;
  border-radius: 3px;
}
.search-input .v-text-field--rounded > .v-input__control > .v-input__slot {
  /* padding:0px 10px !important; */
  border-left: 1px #d7dbdb solid;
  border-radius: 0px !important;
}

.search-input .v-label {
  background-color: #fff;
}
.search-explore {
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-cards-tags {
  box-shadow: unset !important;
}
.custom-tabs-color {
  color: rgb(155, 18, 18);
}
.custom-tabs > .v-tabs-bar {
  border-bottom: 1px #d7dbdb solid !important;
}
.custom-tabs > .v-tabs-bar div {
  font-weight: 900;
  font-size: 17px;
}
.tab-icon {
  margin-right: 5px;
  width: 25px !important;
}
.custom-tabs .v-tab {
  padding: 5px !important;
  min-width: 0px !important;
  max-width: none !important;
}

.Overtemperature-Alert {
  display: grid;
  grid-template-rows: 182px 407px;
}

.Alert-title {
  font-size: 14px;
  color: #4f5e62;
  letter-spacing: 1.4px;
}
.Alert-txt {
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 83%;
}
.Alert-txt2 {
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 100%;
}
.Alert-txt-alarm {
  color: #de8788;
}
.Alert-font {
  color: #4f5e62;
}
.Alert-background {
  background-color: #f0f2f3;
}
.Alert-background1 {
  background-color: #f7e1e1;
}
.mags-cover {
  height: 585px;
}

.connect-cover {
  display: grid;
  grid-template-rows: 295px 295px;
}
.connect-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
.connect-cover img {
  width: 30px;
  height: 30px;
}

.status-open {
  width: 10px;
  height: 10px;
  background-color: #8ab284;
  border-radius: 10px;
}

.status-off {
  width: 10px;
  height: 10px;
  background-color: #de8788;
  border-radius: 10px;
}
.tagsId {
  /* width: 50px; */
  /* min-width: 30px; */
  padding: 0px 0px 0px 0px !important;
  margin: 0px 0px 0px 0px !important;
}
.trash-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
.trash-icon img {
  width: 30px;
  height: 30px;
}

/* 可移動排序 (分4格) */
.sortable4-1 {
  list-style-type: none;
  margin: 0;
  padding: 0 !important;
  width: 100%;
  height: 100%;
}
.ui-state-highlight {
  width: 334px;
  height: 250px;
  background-color: rgb(83, 144, 223);
  margin: 11px;
}
.ui-state-default {
  position: relative;
  width: 334px;
  height: 250px;
  background-color: rgb(150, 150, 150);
  margin: 11px;
}
.ui-state-highlight:last-child {
  width: 1032px;
  height: 764px;
  z-index: 9;
  transform: translate(339px, -783px);
}

.ui-state-default:last-child {
  width: 1032px;
  height: 764px;
  z-index: 9;
  transform: translate(339px, -783px);
}

.ui-state-default > div {
  position: absolute;
  background-color: #fff;
  top: 0;
  z-index: 99;
  left: 0;
}
/* 可移動排序 (均分4格) */
.sortable4 {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 534px 534px;
  align-items: center;
  justify-content: center;
}

.ui-state-highlight4 {
  position: relative;
  background-color: rgb(83, 144, 223);
  width: 528px;
  height: 403px;
}
.ui-state-default4 {
  position: relative;
  width: 99%;
}

.ui-state-default4 > div {
  position: absolute;
  background-color: #fff;
  top: 0;
  z-index: 99;
  left: 0;
}
/* 可移動排序 (均分12格) */
.sortable12 {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  align-items: center;
  justify-content: center;
}

.ui-state-highlight12 {
  position: relative;
  background-color: rgb(83, 144, 223);
  width: 335px;
  height: 258px;
}
.ui-state-default12 {
  position: relative;
  width: 99%;
}

.ui-state-default12 > div {
  position: absolute;
  background-color: #fff;
  top: 0;
  z-index: 99;
  left: 0;
}
/* 可移動排序 (均分24格) */
.sortable100 {
  list-style-type: none;
  margin-top: 34px;
  padding: 0 !important;
  width: 100%;
  display: grid;
  grid-template-columns: 17% 17% 17% 17% 17% 17%;
  align-items: center;
  justify-content: center;
}

.ui-state-highlight100 {
  position: relative;
  background-color: rgb(83, 144, 223);
  width: 228px;
  height: 178px;
}
.ui-state-default100 {
  position: relative;
  width: 99%;
}

.ui-state-default100 > div {
  position: absolute;
  background-color: #fff;
  top: 0;
  z-index: 99;
  left: 0;
}
.busstop {
  font-size: 40px;
}
</style>