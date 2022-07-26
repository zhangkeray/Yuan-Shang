<template>
  <div>
    <v-img class="bgimg" src="bgimg.png" height="93.2vh" />
    <v-tabs v-model="tab" vertical background-color="#fff0">
      <v-tab v-show="false" href="#tab-1">1</v-tab>
      <v-tab v-show="false" href="#tab-2">2</v-tab>
      <v-tabs-items v-model="tab" class="custom-tab-items">
        <v-tab-item value="tab-1">
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
                      Cam-s1-59 A棟 CS-02配電盤
                      <v-btn class="arrow-diago" rounded tile width="20px">
                        <img
                          class=""
                          alt="line"
                          src="/images/tabs.png"
                          width="60%"
                      /></v-btn>
                      <v-btn
                        class="arrow-diago"
                        rounded
                        tile
                        @click="openDialogImage()"
                      >
                        <img
                          class=""
                          alt="line"
                          src="/images/photo.png"
                          width="60%"
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
                      <img
                        class=""
                        alt="line"
                        src="/images/close.png"
                        width="70%"
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
                        height="240px"
                        class="diago-cus"
                      >
                        <template v-slot:header="{ props }">
                          <thead class="custom-thead">
                            <th
                              v-for="(head, idx) in props.headers"
                              :key="idx"
                              class="diago-table-title"
                            >
                              {{ head.text.toUpperCase() }}
                            </th>
                          </thead>
                        </template>
                        <template v-slot:[`item.item`]="{ item }">
                          <v-badge
                            :content="item.item"
                            overlap
                            color="#828C8F"
                            class="my-2"
                            bordered
                            ><v-btn icon class="right-btn alarm-btn-icon"
                              ><img
                                class=""
                                alt=""
                                src="/right-icons/spot2.png"
                                width="18px" /></v-btn
                          ></v-badge>
                        </template>
                        <template v-slot:[`item.setting`]="{ item }">
                          <v-btn color="" icon class="right-btn alert-off-cu"
                            ><img
                              :class="item"
                              alt=""
                              src="/right-icons/alert-fff.png"
                              width="15px"
                              depressed
                            />
                            <!-- <img
                            v-else-if="
                              item.spot_alarm_status === 1 &&
                              item.spot_temperature >= item.spot_threshold
                            "
                            class=""
                            alt=""
                            src="/right-icons/alertOn.png"
                            width="18em"
                            depressed
                          />
                          <img
                            v-else-if="item.spot_alarm_status === 0"
                            class=""
                            alt=""
                            src="/right-icons/alert-off.png"
                            width="18em"
                            depressed
                          /> -->
                          </v-btn>
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
                        height="240px"
                        class="diago-cus"
                      >
                        <template v-slot:header="{ props }">
                          <thead class="custom-thead">
                            <th
                              v-for="(head1, idz) in props.headers"
                              :key="idz"
                              class="diago-table-title"
                            >
                              {{ head1.text.toUpperCase() }}
                            </th>
                          </thead>
                        </template>
                        <template v-slot:[`item.item`]="{ item }">
                          <v-badge
                            :content="item.item"
                            overlap
                            color="#828C8F"
                            class="my-2"
                            bordered
                            ><v-btn icon class="right-btn alarm-btn-icon"
                              ><img
                                class=""
                                alt=""
                                src="/right-icons/spot2.png"
                                width="18px" /></v-btn
                          ></v-badge>
                        </template>
                        <template v-slot:[`item.location`]="{ item }">
                          X:{{ item.location.X }}<br />Y:{{ item.location.Y }}
                        </template>
                      </v-data-table>
                    </div>
                  </div>
                  <div class="diago-alarm-cover1">
                    <!-- 警報統計 -->
                    <div class="diago-border2">
                      <strong class="diago-title">警報統計</strong>
                      <!-- 圖表1 本日 -->
                      <div class="donut-flex mt-5">
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
                    <div class="diago-border2 ml-2">
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
                        :event-color="
                          (date) => (date[9] % 2 ? 'red' : 'yellow')
                        "
                        readonly
                        no-title
                        color="#828c8f"
                        width="267"
                        height="200"
                      ></v-date-picker>
                    </div>
                  </div>
                  <div class="diago-btn-cover mt-1 mb-3 mr-4 ml-3">
                    <v-btn
                      color="#de8788"
                      class="diago-btn"
                      max-height="24px"
                      max-width="95px"
                      rounded
                    >
                      <span class="diago-btn-font" @click="VideoActive('tab-2')"
                        >查看更多</span
                      >
                    </v-btn>
                  </div>
                </div>
                <div class="diago-tootip-img dialog-close">
                  <div class="diago-tootip-head">
                    <div class="diago-tootip-close">
                      <v-btn
                        class="diago-close-icon"
                        rounded
                        outlined
                        @click="offDialogImage()"
                      >
                        <img
                          class=""
                          alt="line"
                          src="/images/close.png"
                          width="60%"
                      /></v-btn>
                    </div>
                    <div class="diago-tootip-title pl-3">
                      Cam-s1-59 A棟CS-02配電盤
                    </div>
                  </div>
                  <div class="diago-tootip-photo">
                    <div
                      class="diago-tootip-photo-zoom"
                      id="diago-tootip-photo-zoom"
                    >
                      <div class="zoom-cover">
                        <template>
                          <v-btn
                            class="zoom-cover-btu"
                            fab
                            @click="zoom(1)"
                            :class="zoomin"
                          >
                            <img
                              class=""
                              alt="line"
                              src="/images/zoom-in.png"
                              width="30%"
                            />
                          </v-btn>
                        </template>
                        <template>
                          <v-btn
                            class="zoom-cover-btu"
                            fab
                            @click="zoom(0)"
                            :class="zoomout"
                          >
                            <img
                              class=""
                              alt="line"
                              src="/images/zoom-out.png"
                              width="30%"
                            />
                          </v-btn>
                        </template>
                      </div>
                    </div>
                    <img
                      class=""
                      src="/images/1657246562560.png"
                      width="100%"
                    />
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
                        @click="testdata()"
                      >
                        <template v-if="index01 === 3">
                          <!-- <div
                          class="ui-state-cover"
                          v-bind:class="[
                            index01 % 2 !== 0 ? 'ui-state-cover-outline' : 'ui-state-normal',
                          ]"
                        > -->
                          <div class="ui-state-cover ui-state-normal">
                            <!-- <img
                              src="loadingBG.png"
                              class="test-cramre"
                              :id="`test-cramre${index01}`"
                              width="100%"
                            /> -->
                            <div
                              class="ui-skeleton-loaders"
                              :id="`sleleton-loaders-custom${index01}`"
                            ></div>
                            <canvas
                              class="test-cramre cam-canvas"
                              :id="`test-cramre${index01}`"
                            ></canvas>
                            <div class="ui-state-default-footer">
                              <div class="ui-state-default-point"></div>
                              <span
                                >Cam-s1-55 A棟CS-01配電盤({{ index01 }})</span
                              >
                            </div>
                            <!-- <div
                            v-if="index01 % 2 !== 0"
                            class="ui-state-default-alarm"
                          > -->
                            <div
                              v-if="index01 === 10000"
                              class="ui-state-default-alarm"
                            >
                              <div>
                                <img src="/images/alarm-200.png" />超溫警報<img
                                  src="/images/alarm-200.png"
                                />
                              </div>
                            </div>
                          </div>
                        </template>
                        <template v-else-if="index01 === 1">
                          <div class="ui-state-cover ui-empty">
                            <!-- <img
                              src="empty.png"
                              class="test-cramre"
                              :id="`test-cramre${index01}`"
                              width="100%"
                            /> -->
                            <canvas
                              class="test-cramre cam-canvas"
                              :id="`test-cramre${index01}`"
                            ></canvas>
                            <div class="ui-state-default-footer">
                              <div class="ui-state-default-point1"></div>
                              <span
                                >Cam-s1-55 A棟CS-01配電盤({{ index01 }})</span
                              >
                            </div>
                          </div>
                        </template>
                        <template v-else>
                          <div class="ui-state-cover ui-empty">
                            <!-- <img
                              src="empty.png"
                              class="test-cramre"
                              :id="`test-cramre${index01}`"
                              width="100%"
                            /> -->
                            <canvas
                              class="test-cramre cam-canvas"
                              :id="`test-cramre${index01}`"
                            ></canvas>
                          </div>
                        </template>
                      </li>
                    </ul>
                  </v-card>
                </v-col>
                <!-- 右方控制面板 -->
                <v-col cols="3">
                  <v-card class="camera-bg mt-3" style="height: 830px">
                    <div class="menu-top mt-1">
                      <span class="menu-title">主分類</span>
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
                      <span class="menu-title">次分類</span>
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
                      <!-- 
                       -->
                    </div>
                    <!-- 選單組 -->
                    <div class="custom-g-select">
                      <!-- arrow -->
                      <div style="display: flex">
                        <v-btn class="arrow-custom mr-1" tile>
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
                      <span class="menu-title">當前分頁</span>
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
                      <span class="menu-title">2/5</span>
                      <div class="menu-top-setting">
                        <v-checkbox
                          v-model="carousel_checkbox"
                          label="輪播"
                          class="mr-3 mt-5"
                        ></v-checkbox>

                        <div class="text-center">
                          <v-menu :close-on-content-click="false" offset-y>
                            <!-- <v-tooltip top> -->
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
                            <!-- </v-tooltip> -->

                            <v-card class="pa-3">
                              <div class="setting-screen-cover mb-1">
                                <div class="setting-screen-title">輪播範圍</div>
                                <div
                                  class="setting-screen-arrow-left"
                                  @click="screenseting(0, 'carouselTime')"
                                >
                                  <img
                                    class=""
                                    alt=""
                                    src="/images/mini-arrow.png"
                                  />
                                </div>
                                <div class="setting-screen-input">
                                  當前選擇區
                                </div>
                                <div
                                  class="setting-screen-arrow-right"
                                  @click="screenseting(1, 'carouselTime')"
                                >
                                  <img
                                    class=""
                                    alt=""
                                    src="/images/mini-arrow.png"
                                  />
                                </div>
                              </div>
                              <div class="setting-screen-cover mb-1">
                                <div class="setting-screen-title">輪播時間</div>
                                <div
                                  class="setting-screen-arrow-left"
                                  @click="screenseting(0, 'carouselTime')"
                                >
                                  <img
                                    class=""
                                    alt=""
                                    src="/images/mini-arrow.png"
                                  />
                                </div>
                                <div class="setting-screen-input">
                                  {{ carouselTime }}
                                </div>
                                <div
                                  class="setting-screen-arrow-right"
                                  @click="screenseting(1, 'carouselTime')"
                                >
                                  <img
                                    class=""
                                    alt=""
                                    src="/images/mini-arrow.png"
                                  />
                                </div>
                              </div>
                              <div class="setting-screen-cover mb-1">
                                <div class="setting-screen-title">色譜模式</div>
                                <div
                                  class="setting-screen-arrow-left"
                                  @click="screenseting(0, 'palette')"
                                >
                                  <img
                                    class=""
                                    alt=""
                                    src="/images/mini-arrow.png"
                                  />
                                </div>
                                <div class="setting-screen-input">
                                  <div class="setting-screen-icon">
                                    <img :src="palette[0]" width="100%" />
                                  </div>
                                  {{ palette[1] }}
                                </div>
                                <div
                                  class="setting-screen-arrow-right"
                                  @click="screenseting(1, 'palette')"
                                >
                                  <img
                                    class=""
                                    alt=""
                                    src="/images/mini-arrow.png"
                                  />
                                </div>
                              </div>
                              <div class="setting-screen-cover mb-1">
                                <div class="setting-screen-title">影像模式</div>
                                <div
                                  class="setting-screen-arrow-left"
                                  @click="screenseting(0, 'imageMode')"
                                >
                                  <img
                                    class=""
                                    alt=""
                                    src="/images/mini-arrow.png"
                                  />
                                </div>
                                <div class="setting-screen-input">
                                  <div class="setting-screen-icon">
                                    <img :src="imageMode[0]" width="100%" />
                                  </div>
                                  {{ imageMode[1] }}
                                </div>
                                <div
                                  class="setting-screen-arrow-right"
                                  @click="screenseting(1, 'imageMode')"
                                >
                                  <img
                                    class=""
                                    alt=""
                                    src="/images/mini-arrow.png"
                                  />
                                </div>
                              </div>
                              <div class="setting-screen-btn">
                                <button>返回</button>
                                <button>確定</button>
                              </div>
                            </v-card>
                          </v-menu>
                        </div>
                      </div>
                    </div>
                    <!-- 搜尋相機編號 -->
                    <div class="search-cover">
                      <!-- 畫面分格 -->
                      <div class="pl-0 pr-2">
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
                                ><img
                                  class="tab-icon"
                                  src="/images/bell.png"
                                />{{ tabcontent[0] }}</v-tab
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
                                ><img
                                  class="tab-icon"
                                  src="/images/wifi.png"
                                />{{ tabcontent[2] }}</v-tab
                              >
                            </template>
                            <span>連線項目</span>
                          </v-tooltip>
                          <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                              <v-tab v-bind="attrs" v-on="on"
                                ><img
                                  class="tab-icon"
                                  src="/images/tabs.png"
                                />{{ tabcontent[3] }}</v-tab
                              >
                            </template>
                            <span>書籤</span>
                          </v-tooltip>
                          <!-- 超溫警報 -->
                          <v-tab-item>
                            <div class="Overtemperature-Alert">
                              <div class="py-2">
                                <strong class="Alert-title"
                                  >超溫項目警報</strong
                                >
                                <div class="Alert-txt py-3">
                                  <div v-for="ie in 100" :key="ie" class="px-3">
                                    <span
                                      v-if="ie < 3"
                                      class="Alert-txt-alarm px-3"
                                      >2022/07/27 03:11 Cam-s1-58 區域{{
                                        ie
                                      }}</span
                                    >
                                  </div>
                                </div>
                              </div>
                              <div>
                                <strong class="Alert-title"
                                  >超溫警報通知</strong
                                >
                                <div class="Alert-txt2 py-3">
                                  <div
                                    v-for="ieq in 100"
                                    :key="ieq"
                                    class="my-1"
                                  >
                                    <div class="Alert-background">
                                      <span class="Alert-font px-5"
                                        >2022/07/27 03:11 Cam-s1-58 區域{{
                                          ieq
                                        }}</span
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
                                  <div class="Alert-background">
                                    <span class="Alert-font px-5"
                                      >2022/07/27 03:11 Cam-s1-58 區域{{
                                        iee
                                      }}</span
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
                                    <strong class="Alert-title"
                                      >其他裝置</strong
                                    >
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
        </v-tab-item>
        <v-tab-item value="tab-2" style="height: 93.2vh">
          <MultiScreenstand id="1015" @VideoActive="VideoActive(data)" />
          <!-- <v-btn @click="VideoActive('tab-1')">BACK</v-btn> -->
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </div>
</template>

<script>
import axios from 'axios'
import MultiScreenstand from '../components/MultiScreen/MultiScreen-stand.vue'
export default {
  name: 'MultiScreenPage',
  components: {
    MultiScreenstand,
  },

  head: {
    link: [
      // { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: 'stylesheet', href: '/css/jquery-ui.css' },
      { rel: 'stylesheet', href: '/css/object.css' },
      { rel: 'stylesheet', href: '/css/card3.css' },
      { rel: 'stylesheet', href: 'css/details.css' },
    ],
    // script: [
    // {
    //   hid:'script',
    //   src: '/js/jquery-ui.js',
    //   type: 'text/javascript',
    //   callback: (data)=>{
    //     console.log(this)
    //   }
    // },
    // ],
  },
  // 載入完成外部(第三方)插件，使用callback呼叫local 方法
  metaInfo() {
    return {
      script: [
        {
          hid: 'extscript',
          src: '/js/jquery-collision.js',
        },
        {
          hid: 'extscript',
          src: '/js/zoom.js',
        },
        {
          hid: 'extscript',
          src: '/js/jquery-ui.js',
          callback: () => {
            this.externalLoaded = true
            this.initScript()
          },
        },
        // {
        //   skip: !this.externalLoaded,
        //   innerHTML: `
        //     /* this is only added once external script has been loaded */
        //     /* and e.g. window.$externalVar exists */
        //   `,
        // },
      ],
    }
  },
  data: () => ({
    socket: [],
    externalLoaded: false,
    // tab: null,
    data: [],
    tab: 'tab-1',
    // 放大鏡級數
    attrs: null,
    on: null,
    events: [],
    zoomL: 0,
    zoomin: '',
    zoomout: 'zoom-disabled',
    sortable: 'sortable4-1',
    ui_state: 'ui-state-default',
    c_diago: 'custom-dialog dialog-close',
    cam: [],
    depressed: true,
    carousel_checkbox: false,
    circularToday: 10,
    circularYesterday: 5,
    circularWeek: 50,
    circularMonth: 100,
    functionEvents: true,
    // 畫面設定

    carouselTime: '5分鐘',
    carouselAt: 0,
    palette: ['/left-icons/palette/palette-iron.png', 'Iron'],
    paletteAT: 0,
    imageMode: ['/left-icons/image-mode/image-mode-thermal.png', 'Thermal'],
    imageModeAT: 0,
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
      // { text: '24分格', value: 3 },
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
    // this.$nextTick(()=> {
    //   console.log(this.externalLoaded)
    // })
    // if(this.externalLoaded){
    // this.initScript()
    // }
    // this.tab = 'tab-2'
  },
  updated() {
    // 判斷視窗該在哪個方位
    $(
      '.ui-state-default,.ui-state-default4,.ui-state-default12,.ui-state-default100'
      // ).on('mouseover', function () {
    ).on('click', function () {
      $('.ui-state-cover-outline').each(function () {
        $(this).removeClass('ui-state-default-alarm-outline')
      })
      $('.ui-state-normal').each(function () {
        $(this).removeClass('ui-state-default-normal-outline')
      })
      $(this)
        .find('.ui-state-cover-outline')
        .addClass('ui-state-default-alarm-outline')
      $(this)
        .find('.ui-state-normal')
        .addClass('ui-state-default-normal-outline')
      // 假高度
      // var flash = ['600px', '500px', '400px', '2000px']
      // $('.diago-contnet').css('height', flash[Math.floor(Math.random() * 4)])
      // 假高度
      var cover = $('.cover-bg') // 宣告渲染畫面
      $('.custom-dialog').removeClass('dialog-close')
      var position = $(this).offset() // 取得點擊的元素座標
      var dialog = $('.custom-dialog') // 宣告互動視窗
      var div = $(this).find('canvas') // 選告元素底下的圖片
      dialog.css('max-height', cover.height() + 'px')
      $('.diago-contnet-cover').css(
        'max-height',
        cover.height() - 74 - 10 + 'px'
      )
      //   var document1Width = $(document).width() / 2 // 宣告目前頁面的一半寬度
      //   var document1Height = $(document).height() / 2 // 宣告目前頁面的一半高度
      var x = 0
      if (position.left + div.width() > cover.width() / 2) {
        x = position.left - dialog.width() - 5 // 宣告元素右下角x軸
      } else {
        x = position.left + div.width() + 5 // 宣告元素右下角x軸
      }
      if (x < 0) {
        x = 8
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

      // 如果計算結果y座標是負的，那會直接把y座標強制設定為0+header(高度)
      if (y < 64) {
        y = 70
      }

      // 指定視窗該在哪個方位
      dialog.css('top', y + 'px')
      dialog.css('left', x + 'px')
      // end
    })
    var el = document.querySelectorAll('.cam-canvas')
    var sum = 0
    el.forEach(function (el) {
      var img = new Image()
      var ctx = el.getContext('2d')
      img.onload = function () {
        el.width = this.naturalWidth
        el.height = this.naturalHeight
        console.log(el.width)
        ctx.drawImage(img, 0, 0, this.width, this.height)
      }
      if (sum === 3) {
        // img.src = '/loadingBG.png'
      } else if (sum === 1) {
        img.src = '/NOSIGNAL.jpg'
      } else {
        img.src = '/empty.png'
      }
      sum++
    })
  },
  methods: {
    // 第三方程式方法載入
    initScript() {
      // 監聽滑鼠滾輪
      var divZoom = document.getElementById('diago-tootip-photo-zoom')
      // console.log(divZoom)
      divZoom.addEventListener(
        'mousewheel',
        (e) => {
          e = e || window.event
          // console.log(e)
          if (e.wheelDelta <= 0 || e.detail > 0) {
            console.log('down')
            this.zoom(0)
          } else {
            console.log('up')
            this.zoom(1)
          }
        },
        false
      )
      // function MouseWheel(e) {
      //   e = e || window.event
      //   if (e.wheelDelta <= 0 || e.detail > 0) {
      //     this.zoom('0')
      //   } else {
      //     this.zoom('1')
      //   }
      // }
      // 排序
      $(function () {
        $('#sortable').sortable({
          placeholder: 'ui-state-highlight',
          cursor: 'grabbing',
          // revert: true
        })
        $('#sortable').disableSelection()
      })
      // 預覽小視窗放大縮小
      $('.diago-tootip-img')
        .resizable({
          // aspectRatio: 3.8 / 3.1,
          handles: 'all',
          aspectRatio: 4 / 3,
          minWidth: 380,
          maxWidth: 1150,
          // containment: '.cover-bg',
        })
        .draggable({
          handle: '.diago-tootip-head',
          containment: '.cover-bg',
          // containment: '.cover-bg',
        })
      $('.diago-tootip-photo').customZoom({
        cover: '.diago-tootip-photo-zoom', // 指定放大哪個元素
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
      this.transition(1)
      this.testdata()
      // this.tab = 'tab-2'
    },
    // 畫面設定
    screenseting(data, mode) {
      // 輪播
      var tmp = this.carouselAt
      var arr1 = ['5分鐘', '10分鐘', '15分鐘']
      if (mode === 'carouselTime' && data === 1) {
        tmp = tmp + 1
        if (tmp >= arr1.length) {
          tmp = 0
        }
        this.carouselTime = arr1[tmp]
      } else if (mode === 'carouselTime' && data === 0) {
        tmp = tmp - 1
        if (tmp < 0) {
          tmp = arr1.length - 1
        }
        this.carouselTime = arr1[tmp]
      }
      this.carouselAt = tmp
      // 色譜
      var tmp2 = this.paletteAT
      var arr2 = [
        ['/left-icons/palette/palette-iron.png', 'Iron'],
        ['/left-icons/palette/palette-lava.png', 'Lava'],
        ['/left-icons/palette/palette-gray.png', 'Gray'],
        ['/left-icons/palette/palette.png', 'Rainbow'],
        ['/left-icons/palette/palette-rainbow-hc.png', 'Rainbow HC'],
        ['/left-icons/palette/palette-arctic.png', 'Arctiv'],
      ]
      if (mode === 'palette' && data === 1) {
        tmp2 = tmp2 + 1
        if (tmp2 >= arr2.length) {
          tmp2 = 0
        }
        this.palette = arr2[tmp2]
      } else if (mode === 'palette' && data === 0) {
        tmp2 = tmp2 - 1
        if (tmp2 < 0) {
          tmp2 = arr2.length - 1
        }
        this.palette = arr2[tmp2]
      }
      this.paletteAT = tmp2
      console.log(tmp2)
      console.log(arr2)
      // 影像
      var tmp3 = this.imageModeAT
      var arr3 = [
        ['/left-icons/image-mode/image-mode-thermal.png', 'Thermal'],
        ['/left-icons/image-mode/image-mode-thermal-msx.png', 'Theraml MSX'],
        [
          '/left-icons/image-mode/image-mode-digital-camera.png',
          'Digital Camera',
        ],
        ['/left-icons/image-mode/image-mode-marco.png', 'Marco'],
        ['/left-icons/image-mode/image-mode-thermal-fsx.png', 'Thermal FSX'],
      ]
      if (mode === 'imageMode' && data === 1) {
        tmp3 = tmp3 + 1
        if (tmp3 >= arr3.length) {
          tmp3 = 0
        }
        this.imageMode = arr3[tmp3]
      } else if (mode === 'imageMode' && data === 0) {
        tmp3 = tmp3 - 1
        if (tmp3 < 0) {
          tmp3 = arr3.length - 1
        }
        this.imageMode = arr3[tmp3]
      }
      this.imageModeAT = tmp3
      // this.carouselTime = ''
      // this.palette = ''
      // this.imageMode = ''
    },
    // 放大鏡計算器
    zoom(level) {
      var zoom = this.zoomL
      var zoomer = $('.diago-tootip-photo-zoom')

      if (level === 1 && zoom <= 6) {
        this.zoomL = zoom + 1
      } else if (level === 0 && zoom > 0) {
        this.zoomL = zoom - 1
      }
      zoomer.css('background-size', (this.zoomL + 1) * 100 + '%')

      if (this.zoomL < 1) {
        this.zoomin = ''
        this.zoomout = 'zoom-disabled'
      } else if (this.zoomL > 6) {
        this.zoomin = 'zoom-disabled'
        this.zoomout = ''
      } else {
        this.zoomin = ''
        this.zoomout = ''
      }
    },
    // 跳轉到指定監視
    VideoActive(page) {
      this.tab = page
      // this.diagoOff()
    },
    // 測試假資料
    testdata() {
      // 連線裝置 假資料
      var arr = []
      var status01 = [true, false]
      for (var i = 0; i < Math.floor(Math.random() * 1000); i++) {
        arr.push({
          status: '/images/eye-on.png',
          id: `Cam-s1-${i}`,
          item: 'A棟CS-04配電盤',
          alarm: status01[Math.floor(Math.random() * 1)],
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
          item: `${zq}`,
          temperature: `${zq}°C`,
          setting: `++`,
        })
      }
      this.diagoalarmDesserts = arr3
      // 警報紀錄 假資料
      var arr4 = []
      var mock = [2, 50]
      var d = mock[Math.floor(Math.random() * 2)]
      for (var zq1 = 0; zq1 < d; zq1++) {
        arr4.push({
          item: `${zq1}`,
          temperature: `${zq1}°C`,
          status: `已超溫`,
          date: '03:03:01',
          location: { X: '50.12', Y: '33.54' },
        })
      }
      // console.log(d)
      this.diagoalarmlogDesserts = arr4
      // end
    },
    // 開啟影像預覽
    openDialogImage() {
      $('.diago-tootip-img').removeClass('dialog-close')
    },
    // 關閉影像預覽
    offDialogImage() {
      $('.diago-tootip-img').addClass('dialog-close')
    },
    // 關閉對話窗
    diagoOff() {
      $('.custom-dialog').addClass('dialog-close')
      $('.diago-tootip-img').addClass('dialog-close')
      $('.ui-state-cover-outline').each(function () {
        $(this).removeClass('ui-state-default-alarm-outline')
      })
      $('.ui-state-normal').each(function () {
        $(this).removeClass('ui-state-default-normal-outline')
      })
    },
    // 分格畫面判斷
    transition(data) {
      $('.custom-dialog').addClass('dialog-close')
      var output = {
        totle: null,
      }
      if (data === 0) {
        $('#sortable').sortable({
          placeholder: 'ui-state-highlight4',
          // revert: true
        })
        this.sortable = 'sortable4'
        this.ui_state = 'ui-state-default4'
        // 均分 4格
        this.cam = ['1', '2', '3', '4']
        output.totle = 4
        this.showDisplay(output)
      } else if (data === 1) {
        console.log('oh ta')
        $('#sortable').sortable({
          placeholder: 'ui-state-highlight',
          // revert: true
        })
        this.sortable = 'sortable4-1'
        this.ui_state = 'ui-state-default'
        // 4分格
        this.cam = ['1', '2', '3', '4']
        output.totle = 4
        this.showDisplay(output)
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
        output.totle = 12
        this.showDisplay(output)
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
        output.totle = 24
        this.showDisplay(output)
      }
    },
    // 載入監視影像
    showDisplay(output) {
      if (this.socket.length > 0) {
        console.log('asdasdas')
        this.socket.forEach(function (s) {
          s.disconnect()
        })
      }
      var tmpsocket = []
      this.$nextTick(function () {
        // 將目前相機列表存入陣列中
        var rtspStream = []

        rtspStream.push({
          id: 1,
          proxy: '/test',
          rtsp: 'rtsp://192.168.0.177:9554/live?channel=0&subtype=0',
        })
        // 宣告目前要直播的內容
        axios({
          method: 'post',
          url: 'http://192.168.0.173:6148/stream',
          data: rtspStream,
        }).then((params) => {
          for (var z = 0; z < output.totle; z++) {
            var socket = this.$nuxtSocket({
              name: 'main', // select "main" socket from nuxt.config.js - we could also skip this because "main" is the default socket
              channel: '//test',
            })
            if (z === 3) {
              const canvas = document.getElementById(`test-cramre${z}`)
              socket.on('data', (data) => {
                var img = new Image()
                var ctx = canvas.getContext('2d')
                img.onload = function () {
                  canvas.width = this.naturalWidth
                  canvas.height = this.naturalHeight
                  // URL.revokeObjectURL(url)
                  ctx.drawImage(img, 0, 0, this.width, this.height)
                }
                img.src = 'data:image/jpeg;base64,' + data
              })
              tmpsocket.push(socket)
              var loaders = document.getElementById(
                `sleleton-loaders-custom${z}`
              )
              console.log(`sleleton-loaders-custom${z}`)
              console.log(loaders)
              setTimeout(() => {
                loaders.style.display = 'none'
              }, 2000)
            }
          }
          this.socket = tmpsocket
          console.log('渲染完成')
        })
      })
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
  border-radius: 3px !important;
}
.cam-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
/* 對話視窗 */
.diago-contnet-cover {
  height: 100%;
  overflow-y: auto;
}
.custom-dialog {
  width: 420px;
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
  /* margin: 0px 0px 11px 0px; */
  /* transition: outline .3s; */
}
#diagoHover:hover {
  outline: 3px #cccccc solid;
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
  grid-template-columns: 136px 264px;
  padding: 10px;
}
.diago-border1 {
  border: 1px #d7dbdb solid;
  border-radius: 3px;
  padding: 5px;
  max-height: 276px;
}
.diago-border2 {
  border: 1px #d7dbdb solid;
  border-radius: 3px;
  padding: 5px;
}
.diago-title {
  color: #4f5e62;
  font-weight: bold;
}
.custom-thead {
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 1;
}
.diago-table-title {
  color: #4f5e62;
  font-size: 13px;
  border-bottom: 1px #000000 solid;
}
.diago-alarm-cover1 {
  display: grid;
  grid-template-columns: 113px 287px;
  padding: 10px;
}
.diago-tootip-img {
  position: absolute !important;
  top: 36px;
  left: 100%;
  /* width: 512px;
  height: 384px; */
  width: 556px;
  height: 417px;
  background-color: #fff;
  box-shadow: 0px 0px 8px 4px rgb(108 108 108 / 27%);
  border-radius: 3px;
}
.alert-off-cu {
  width: 28px !important;
  height: 28px !important;
  background-color: #d7dbdb;
}
.diago-tootip-close {
  width: 30px;
}
.diago-tootip-head {
  display: flex;
  align-items: center;
  position: absolute;
  top: -33px;
  background-color: #fff;
  width: 100%;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  box-shadow: 1px -8px 6px 0px rgb(108 108 108 / 27%);
  z-index: 99;
  cursor: all-scroll;
}
.alarm-btn-icon {
  width: 28px !important;
  height: 28px !important;
  background-color: #f2f4f4;
}
.diago-tootip-title {
  font-weight: bold;
  color: #4f5e62;
}
.diago-tootip-photo {
  padding: 10px;
}
.diago-cus > div {
  overflow-y: scroll !important;
}
.diago-tootip-photo > img {
  opacity: 0;
}
.diago-tootip-photo-zoom {
  width: 97%;
  height: 97%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background: url(/images/1657246562560.png) no-repeat center center;
  background-size: 100%;
  transition: background-size 0.5s;
  overflow: hidden;
  cursor: grab;
}
.zoom-cover {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
}
.zoom-cover-btu {
  background-color: #fff0 !important;
  box-shadow: unset !important;
}
.zoom-disabled {
  pointer-events: none;
  opacity: 0.7;
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
.diago-btn-cover {
  display: flex;
  justify-content: flex-end;
}
.diago-btn {
  width: 95px;
  height: 24px;
}
.diago-btn-font {
  letter-spacing: 0px;
  color: #fff;
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
.menu-title {
  color: #4f5e62;
  text-align: center;
}

.menu-top {
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  display: grid;
  align-items: center;
  grid-template-columns: 57px 150px 64px 150px;
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
  grid-template-columns: 21.1% 18% 25% 9% 27%;
  align-items: center;
  height: 55px;
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
  grid-template-columns: 130px 251px 41px;
  align-items: center;
}
.search-input {
  border: 1px #d7dbdb solid;
  height: 40px;
  padding: 5px 8px;
  margin: 8px 0px;
  border-radius: 3px;
}
.search-input .v-text-field--rounded > .v-input__control > .v-input__slot {
  /* padding:0px 10px !important; */
  border-left: 1px #d7dbdb solid;
  border-radius: 0px !important;
  padding: 0 0px 0px 5px;
}

.search-input .v-label {
  background-color: #fff;
}
.search-explore {
  display: flex;
  align-items: center;
  justify-content: end;
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
/* 畫面設定 */
.setting-screen-cover {
  display: grid;
  grid-template-columns: 72px 10px 174px 10px;
  align-items: center;
  font-size: 15px;
}
.setting-screen-title {
  color: #4f5e62;
}
.setting-screen-arrow-left,
.setting-screen-arrow-right {
  cursor: pointer;
}

.setting-screen-arrow-left img,
.setting-screen-arrow-right img {
  width: 0.9em;
}
.setting-screen-arrow-right {
  transform: rotateY(180deg);
}
.setting-screen-input {
  border: 1px solid #00000029;
  border-radius: 3px;
  margin: 2px 5px;
  color: #4f5e62;
  text-align: center;
  position: relative;
}
.setting-screen-icon {
  position: absolute;
  width: 12%;
  top: 2px;
  left: 8px;
}
.setting-screen-btn {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 15px;
}
.setting-screen-btn button {
  margin: 2px;
  background-color: #99a1a3;
  padding: 1px 11px;
  color: #fff;
  border-radius: 3px;
  transition: background-color 0.3s;
}
.setting-screen-btn button:hover {
  background-color: #7e8385;
}
.setting-screen-btn button:active {
  background-color: #727677;
}
/* 分隔畫面統整設定 */
.ui-state-cover {
  width: 100%;
  height: 0;
  position: relative;
  padding-bottom: 75%;
}
.ui-state-default-footer {
  position: absolute;
  background-color: #0000008f;
  /* top: 0; */
  z-index: 1;
  left: 0;
  color: #fff;
  bottom: 0;
  width: 100%;
  padding: 2% 0px;
  display: flex;
  align-items: center;
}
.ui-state-default-point {
  background-color: #8ab284;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  margin: 0px 10px;
}
.ui-state-default-point1 {
  background-color: #de8788;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  margin: 0px 10px;
}
.ui-state-default-alarm {
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  background-color: #de8788ad;
  z-index: 2;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.1s;
}
.ui-state-default-alarm > div {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  animation: neon 0.6s infinite alternate;
}
.ui-state-default-alarm > div img {
  width: 8%;
}
@keyframes neon {
  0% {
    opacity: 40%;
  }
  100% {
    opacity: 100%;
  }
}
.ui-state-default-alarm-outline {
  outline: 5px rgb(222 135 136) solid;
}
.ui-state-default-normal-outline {
  outline: 5px #99a1a3 solid;
}
.ui-state-default-normal-outline > .ui-state-default-footer {
  background-color: #99a1a3;
}
.ui-state-default-alarm-outline > .ui-state-default-alarm {
  height: 15%;
  top: unset;
  background-color: rgba(222, 135, 136, 0.67843);
  bottom: 0;
}
.ui-state-default-alarm-outline > .ui-state-default-alarm div {
  display: none !important;
}
.ui-state-default-alarm-outline > .ui-state-default-alarm > div {
  justify-content: flex-end;
  font-size: 23px;
  padding: 0 1em 0 0px;
}
.ui-state-default-alarm-outline > .ui-state-default-alarm > div > img {
  width: 7%;
}
.ui-empty {
}
/* 可移動排序 (分4格) */
.sortable4-1 {
  list-style-type: none;
  margin: 16px 3px;
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
  margin: 0px 0px 11px 0px;
  /* margin: 11px; */
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
  margin: 0px 0px 11px 4px !important;
  transform: translate(339px, -783px);
}

.ui-state-default-footer > span {
  font-size: 1em;
}
.ui-state-default:last-child .ui-state-default-footer > span {
  font-size: 1.2em;
}
.ui-state-default:last-child .ui-state-default-point {
  width: 24px;
  height: 24px;
  border-radius: 24px;
  margin: 0px 19px;
}
.ui-state-default:last-child .ui-state-default-alarm > div {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 78px;
  width: 100%;
}
.ui-state-default:last-child .ui-state-default-alarm > div img {
  width: 8%;
}
.ui-state-default:last-child
  .ui-state-default-alarm-outline
  > .ui-state-default-alarm
  > div {
  justify-content: flex-end;
  font-size: 40px;
  padding: 0 2em 0 0px;
}
.ui-state-default:last-child
  .ui-state-default-alarm-outline
  > .ui-state-default-alarm
  > div
  > img {
  width: 4%;
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
  margin: 0px 0px 7px 0px !important;
  position: relative;
  width: 99%;
}

/* .ui-state-default4 > div {
  position: absolute;
  background-color: #fff;
  top: 0;
  z-index: 99;
  left: 0;
} */
/* 可移動排序 (均分12格) */
.sortable12 {
  list-style-type: none;
  margin: 0;
  padding: 12px 0px 0px 0 !important;
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
  margin: 0px 0px 4px 0px;
  position: relative;
  width: 99%;
}

/* .ui-state-default12 > div {
  position: absolute;
  background-color: #fff;
  top: 0;
  z-index: 99;
  left: 0;
} */
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

/* .ui-state-default100 > div {
  position: absolute;
  background-color: #fff;
  top: 0;
  z-index: 99;
  left: 0;
} */
.busstop {
  font-size: 40px;
}
/* 自訂標籤 */
.custom-tab-items {
  background-color: #fff0 !important;
}
#custom-tab-items {
  background-color: #fff0 !important;
}
/* 自訂載入框架 */
.ui-skeleton-loaders {
  position: absolute;
  top: 0;
  left: 0;
  background: rgb(44, 44, 44);
  /* background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%); */
  background: linear-gradient(102deg, #d7d7d7 11%, #f3f3f3 28%, #d7d7d7 33%);
  background-size: 200% 100%;
  z-index: 1;
  width: 100%;
  height: 100%;
  animation: 1s shine linear infinite;
  pointer-events: none;
}
.ui-skeleton-loaders.loaders-disabled {
  display: none;
}
@keyframes shine {
  to {
    background-position-x: -200%;
  }
}
</style>