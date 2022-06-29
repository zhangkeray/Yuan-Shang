<template>
  <div>
    <v-img class="bgimg" src="bgimg.png" height="93.2vh" />
    <v-container fluid>
      <div>
        <v-row>
          <v-col cols="9" class="p-1">
            <v-card class="camera-bg align-items-c mt-3" style="">
              <div class="cam-grid">
                <div v-for="(item01, index) in cam" :key="index">
                  <img
                    src="1656315342184.jpg"
                    class="test-cramre"
                    width="100%"
                  />
                </div>
              </div>
              <div class="cam-only">
                <img src="1656315342184.jpg" class="test-cramre" width="100%" />
              </div>
            </v-card>
          </v-col>
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
                <div class="pl-0">
                  <v-select
                    class="custom-select"
                    v-model="e1"
                    :items="areas"
                    dense
                    solo
                  ></v-select>
                </div>
                <div class="pl-0">
                  <v-select
                    class="custom-select"
                    v-model="e2"
                    :items="groups"
                    dense
                    solo
                  ></v-select>
                </div>
                <div class="pl-0">
                  <v-select
                    class="custom-select"
                    v-model="e3"
                    :items="pages"
                    dense
                    solo
                  ></v-select>
                </div>
                <div class="px-0">
                  <v-select
                    v-model="e4"
                    class="custom-select"
                    :items="splitScreen"
                    dense
                    solo
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
                    <v-tab
                      ><img class="tab-icon" src="/images/bell.png" />{{
                        tabcontent[0]
                      }}</v-tab
                    >
                    <v-tab
                      ><img class="tab-icon" src="/images/exclamation.png" />{{
                        tabcontent[1]
                      }}</v-tab
                    >
                    <v-tab
                      ><img class="tab-icon" src="/images/wifi.png" />{{
                        tabcontent[2]
                      }}</v-tab
                    >
                    <v-tab
                      ><img class="tab-icon" src="/images/tabs.png" />{{
                        tabcontent[3]
                      }}</v-tab
                    >
                    <!-- 超溫警報 -->
                    <v-tab-item>
                      <div>1</div>
                    </v-tab-item>
                    <!-- 通知 -->
                    <v-tab-item>
                      <div>2</div>
                    </v-tab-item>
                    <!-- 連線項目 -->
                    <v-tab-item>
                      <div>3</div>
                    </v-tab-item>
                    <!-- 書籤 -->
                    <v-tab-item>
                      <div>4</div>
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
  <!-- <v-row>
                <v-col cols="4">
                  <v-img
                    src="1656315342184.jpg"
                    class="test-cramre"
                    width="100%"
                  ></v-img
                  ><v-img
                    src="1656315342184.jpg"
                    class="test-cramre"
                    width="100%"
                  ></v-img
                  ><v-img
                    src="1656315342184.jpg"
                    class="test-cramre"
                    width="100%"
                  ></v-img>
                </v-col>
                <v-col cols="8"
                  ><v-img
                    src="1656315342184.jpg"
                    class="test-cramre"
                    width="100%"
                  ></v-img
                ></v-col>
              </v-row> -->
</template>

<script>
export default {
  name: 'MultiScreenPage',
  data: () => ({
    cam: ['1', '2', '3'],
    depressed: true,
    carousel_checkbox: false,
    // 下拉選單
    e1: '第一區',
    areas: ['第一區', '第一區', '第一區'],
    e2: '第一組',
    groups: ['第一組', '第一組', '第一組'],
    e3: '第一頁',
    pages: ['第一頁', '第一頁', '第一頁'],
    e4: '4分格',
    splitScreen: ['均分4分格', '4分格', '12分格'],
    // 標籤文字
    tabcontent: [],
  }),
  methods: {
    CustomTabs(data) {
      if (data === 0) {
        this.tabcontent = ['超溫警報', '', '', '']
      }else if (data === 1) {
        this.tabcontent = ['', '通知', '', '']
      }else if (data === 2) {
        this.tabcontent = ['', '', '連線項目', '']
      }else if (data === 3) {
        this.tabcontent = ['', '', '', '書籤']
      }
      console.log(data)
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
.align-items-c {
  display: flex;
  align-items: center;
}
.cam-grid {
  display: grid;
  grid-template-columns: 338px;
  margin-right: 7px;
  grid-template-rows: 261px 261px 261px;
  align-items: center;
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
}
.tab-icon {
  margin-right: 5px;
  width: 25px !important;
}
.v-tab {
  padding: 5px !important;
  min-width: 0px !important;
  max-width: none !important;
}
</style>