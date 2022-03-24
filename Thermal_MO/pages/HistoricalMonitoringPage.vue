<template>
  <v-container fluid mt-3>
    <!-- 左側浮動按鈕---------------------------------------------------------------------------------------------------- -->
    <div class="box">
      <v-card class="drawer" elevation="10" dark>
        <v-sheet class="arrow" elevation="5"></v-sheet>
        <!-- 監測工具monitoring tools-------------------------------------------------------------------------------- -->
        <p class="subtitle text-center"><br />監測<br />工具</p>
        <!-- 點spot -->
        <v-tooltip right class="tips">
          <template #activator="{ on, attrs }">
            <v-btn
              class="left-btn mx-3"
              icon
              v-bind="attrs"
              v-on="on"
              @click="spot()"
              elevation="6"
            >
              <img alt="spot" src="/left-icons/spot.png" width="20em" />
            </v-btn>
                            <!-- <v-btn x-small icon class="btn reset" color="#9BA3A5">
                  <v-icon x-small class="icon">mdi-restore</v-icon>
                </v-btn> -->
          </template>
          <span>點</span>
        </v-tooltip>
        <!-- 線line -->
        <v-tooltip right class="tips">
          <template #activator="{ on, attrs }">
            <v-btn
              class="left-btn mx-3 mt-3"
              icon
              v-bind="attrs"
              v-on="on"
              @click="line()"
              elevation="6"
            >
              <img alt="line" src="/left-icons/line.png" width="15em" />
            </v-btn>
          </template>
          <span>直線</span>
        </v-tooltip>
        <!-- 矩形rectangle -->
        <v-tooltip right class="tips">
          <template #activator="{ on, attrs }">
            <v-btn
              class="left-btn mx-3 my-3"
              icon
              v-bind="attrs"
              v-on="on"
              @click="scope()"
              elevation="6"
            >
              <img
                alt="rectangle"
                src="/left-icons/rectangle.png"
                width="18em"
              />
            </v-btn>
          </template>
          <span>矩形</span>
        </v-tooltip>
        <v-divider></v-divider>
        <!-- 影像呈現image presentation------------------------------------------------------------------------------ -->
        <p class="subtitle text-center"><br />影像<br />呈現</p>
        <!-- 影像模式image mode -->
        <v-speed-dial
          :direction="direction_imageMode"
          :transition="transition_imageMode"
        >
          <template #activator>
            <v-tooltip right class="tips">
              <template #activator="{ on, attrs }">
                <v-btn
                  v-model="fab_imageMode"
                  class="left-btn mx-3"
                  icon
                  v-bind="attrs"
                  v-on="on"
                  elevation="6"
                >
                  <v-icon v-if="fab_imageMode"> mdi-close </v-icon>
                  <img
                    v-else
                    alt="palette"
                    src="/left-icons/image-mode/image-mode.png"
                    width="21em"
                  />
                </v-btn>
              </template>
              <span>影像模式</span>
            </v-tooltip>
          </template>
          <v-tooltip top class="tips">
            <template #activator="{ on, attrs }">
              <v-btn class="mt-2" color="" fab x-small v-bind="attrs" v-on="on">
                <img
                  alt="image-mode-thermal"
                  src="/left-icons/image-mode/image-mode-thermal.png"
                  width="22em"
                />
              </v-btn>
            </template>
            <span>Thermal</span>
          </v-tooltip>
          <v-tooltip top class="tips">
            <template #activator="{ on, attrs }">
              <v-btn class="mt-2" color="" fab x-small v-bind="attrs" v-on="on">
                <img
                  alt="image-mode-thermal-msx"
                  src="/left-icons/image-mode/image-mode-thermal-msx.png"
                  width="22em"
                />
              </v-btn>
            </template>
            <span>Thermal MSX</span>
          </v-tooltip>
          <v-tooltip top class="tips">
            <template #activator="{ on, attrs }">
              <v-btn class="mt-2" color="" fab x-small v-bind="attrs" v-on="on">
                <img
                  alt="image-mode-digital-camera"
                  src="/left-icons/image-mode/image-mode-digital-camera.png"
                  width="22em"
                />
              </v-btn>
            </template>
            <span>Digital Camera</span>
          </v-tooltip>
          <v-tooltip top class="tips">
            <template #activator="{ on, attrs }">
              <v-btn class="mt-2" color="" fab x-small v-bind="attrs" v-on="on">
                <img
                  alt="image-mode-marco"
                  src="/left-icons/image-mode/image-mode-marco.png"
                  width="22em"
                />
              </v-btn>
            </template>
            <span>Marco</span>
          </v-tooltip>
          <v-tooltip top class="tips">
            <template #activator="{ on, attrs }">
              <v-btn class="mt-2" color="" fab x-small v-bind="attrs" v-on="on">
                <img
                  alt="image-mode-thermal-fsx"
                  src="/left-icons/image-mode/image-mode-thermal-fsx.png"
                  width="22em"
                />
              </v-btn>
            </template>
            <span>Thermal FSX</span>
          </v-tooltip>
        </v-speed-dial>
        <!-- 色譜模式palette -->
        <v-speed-dial
          :direction="direction_palette"
          :transition="transition_palette"
        >
          <template #activator>
            <v-tooltip right class="tips">
              <template #activator="{ on, attrs }">
                <v-btn
                  v-model="fab_palette"
                  class="left-btn mx-3 my-3"
                  icon
                  v-bind="attrs"
                  v-on="on"
                  elevation="6"
                >
                  <v-icon v-if="fab_palette"> mdi-close </v-icon>
                  <img
                    v-else
                    alt="palette"
                    src="/left-icons/palette/palette.png"
                    width="18em"
                  />
                </v-btn>
              </template>
              <span>色譜模式</span>
            </v-tooltip>
          </template>
          <v-tooltip top class="tips">
            <template #activator="{ on, attrs }">
              <v-btn class="" color="" fab x-small v-bind="attrs" v-on="on">
                <img
                  alt="palette-iron"
                  src="/left-icons/palette/palette-iron.png"
                  width="24em"
                />
              </v-btn>
            </template>
            <span>Iron</span>
          </v-tooltip>
          <v-tooltip top class="tips">
            <template #activator="{ on, attrs }">
              <v-btn class="" color="" fab x-small v-bind="attrs" v-on="on">
                <img
                  alt="palette-lava"
                  src="/left-icons/palette/palette-lava.png"
                  width="24em"
                />
              </v-btn>
            </template>
            <span>Lava</span>
          </v-tooltip>
          <v-tooltip top class="tips">
            <template #activator="{ on, attrs }">
              <v-btn class="" color="" fab x-small v-bind="attrs" v-on="on">
                <img
                  alt="palette-gray"
                  src="/left-icons/palette/palette-gray.png"
                  width="24em"
                />
              </v-btn>
            </template>
            <span>Gray</span>
          </v-tooltip>
          <v-tooltip top class="tips">
            <template #activator="{ on, attrs }">
              <v-btn class="" color="" fab x-small v-bind="attrs" v-on="on">
                <img
                  alt="palette-rainbow"
                  src="/left-icons/palette/palette-rainbow.png"
                  width="24em"
                />
              </v-btn>
            </template>
            <span>Rainbow</span>
          </v-tooltip>
          <v-tooltip top class="tips">
            <template #activator="{ on, attrs }">
              <v-btn class="" color="" fab x-small v-bind="attrs" v-on="on">
                <img
                  alt="palette-rainbow-hc"
                  src="/left-icons/palette/palette-rainbow-hc.png"
                  width="24em"
                />
              </v-btn>
            </template>
            <span>Rainbow HC</span>
          </v-tooltip>
          <v-tooltip top class="tips">
            <template #activator="{ on, attrs }">
              <v-btn class="" color="" fab x-small v-bind="attrs" v-on="on">
                <img
                  alt="palette-arctic"
                  src="/left-icons/palette/palette-arctic.png"
                  width="20em"
                />
              </v-btn>
            </template>
            <span>Arctic</span>
          </v-tooltip>
        </v-speed-dial>
        <v-divider></v-divider>

        <!-- 計算工具calibration tools------------------------------------------------------------------------------ -->
        <p class="subtitle text-center"><br />計算<br />工具</p>

        <!-- 計算calibration -->
        <v-speed-dial
          :direction="direction_calibration"
          :transition="transition_calibration"
        >
          <template #activator>
            <v-tooltip right class="tips">
              <template #activator="{ on, attrs }">
                <v-btn
                  v-model="fab_calibration"
                  class="left-btn mx-3"
                  icon
                  v-bind="attrs"
                  v-on="on"
                  elevation="6"
                >
                  <v-icon v-if="fab_calibration"> mdi-close </v-icon>
                  <img
                    v-else
                    alt="palette"
                    src="/left-icons/calibration.png"
                    width="16em"
                  />
                </v-btn>
              </template>
              <span>計算</span>
            </v-tooltip>
          </template>
          <v-btn class="" color="" fab x-small>
            <!-- <img alt="pending" src="/left-icons/.png" width="14em" /> -->
          </v-btn>
          <v-btn class="" color="" fab x-small>
            <!-- <img alt="pending" src="/left-icons/.png" width="14em" /> -->
          </v-btn>
        </v-speed-dial>
        <!-- 照明light -->
        <v-speed-dial
          :direction="direction_light"
          :transition="transition_light"
        >
          <template #activator>
            <v-tooltip right class="tips">
              <template #activator="{ on, attrs }">

                <v-btn
                  v-model="fab_light"
                  class="left-btn mx-3 mt-3"
                  icon 
                  v-bind="attrs"
                  v-on="on"
                  elevation="6"
                >
                  <v-icon v-if="fab_light"> mdi-close </v-icon>
                  <img
                    v-else
                    alt="palette"
                    src="/left-icons/light/light-off.png"
                    width="14em"
                  />
                </v-btn>
              </template>
              <span>照明</span>
            </v-tooltip>
          </template>
          <v-tooltip top class="tips">
            <template #activator="{ on, attrs }">
              <v-btn class="mt-5" color="" fab x-small v-bind="attrs" v-on="on" elevation="6">
                <img
                  alt="palette-iron"
                  src="/left-icons/light/light-on.png"
                  width="16em"
                />
              </v-btn>
            </template>
            <span>開</span>
          </v-tooltip>
          <v-tooltip top class="tips">
            <template #activator="{ on, attrs }">
              <v-btn class="mt-5" color="" fab x-small v-bind="attrs" v-on="on" elevation="6">
                <img
                  alt="palette-lava"
                  src="/left-icons/light/light-off.png"
                  width="16em"
                />
              </v-btn>
            </template>
            <span>關</span>
          </v-tooltip>
        </v-speed-dial>
        <!-- 自動對焦autoFocus -->
        <v-speed-dial
          :direction="direction_autofocus"
          :transition="transition_autofocus"     
        >
          <template #activator>
            <v-tooltip right class="tips">
              <template #activator="{ on, attrs }">
                <v-btn
                  v-model="fab_autofocus"
                  class="left-btn mx-3 my-3"
                  icon
                  v-bind="attrs"
                  v-on="on"
                  elevation="6"
                >
                  <v-icon v-if="fab_autofocus"> mdi-close </v-icon>
                  <img
                    v-else
                    alt="palette"
                    src="/left-icons/autofocus/autofocus.png"
                    width="16em"
                  />
                </v-btn>
              </template>
              <span>自動對焦</span>
            </v-tooltip>
          </template>
          <v-tooltip top class="tips">
            <template #activator="{ on, attrs }">
              <v-btn class="" color="" fab x-small v-bind="attrs" v-on="on">
                <img
                  alt="palette-iron"
                  src="/left-icons/autofocus/autofocus-focus-further.png"
                  width="22em"
                />
              </v-btn>
            </template>
            <span>遠景</span>
          </v-tooltip>
          <v-tooltip top class="tips">
            <template #activator="{ on, attrs }">
              <v-btn class="" color="" fab x-small v-bind="attrs" v-on="on">
                <img
                  alt="palette-lava"
                  src="/left-icons/autofocus/autofocus-focus-closer.png"
                  width="22em"
                />
              </v-btn>
            </template>
            <span>近景</span>
          </v-tooltip>
          <v-tooltip top class="tips">
            <template #activator="{ on, attrs }">
              <v-btn class="" color="" fab x-small v-bind="attrs" v-on="on">
                <img
                  alt="palette-gray"
                  src="/left-icons/autofocus/autofocus-autofocus.png"
                  width="22em"
                />
              </v-btn>
            </template>
            <span>自動對焦</span>
          </v-tooltip>
        </v-speed-dial>
        <v-divider></v-divider>
        <!-- 影像調整image adjustment ------------------------------------------------------------------------------ -->
        <p class="subtitle text-center"><br />影像<br />調整</p>
        <!-- 全螢幕fullscreen -->
        <v-tooltip right class="tips">
          <template #activator="{ on, attrs }">
            <v-btn class="left-btn mx-3" icon v-bind="attrs" v-on="on" elevation="6">             
              <img
                class=""
                alt="spot"
                src="/left-icons/fullscreen.png"
                width="19em"
              />
            </v-btn>
          </template>
          <span>全螢幕</span>
        </v-tooltip>
        <!-- 影像快照snapshot -->
        <v-tooltip right class="tips">
          <template #activator="{ on, attrs }">
            <v-btn
              class="left-btn mx-3 mt-3"
              icon
              v-bind="attrs"
              v-on="on"
              elevation="6"
            >
              <img
                class=""
                alt="line"
                src="/left-icons/snapshot.png"
                width="19em"
              />
            </v-btn>
          </template>
          <span>影像快照</span>
        </v-tooltip>
        <!-- 串流暫停freeze/持續unfreeze -->
        <v-tooltip right class="tips">
          <template #activator="{ on, attrs }">
            <v-btn
              class="left-btn mx-3 mt-3"
              icon
              v-bind="attrs"
              v-on="on"
              elevation="6"
            >
              <img
                class=""
                alt="rectangle"
                src="/left-icons/freeze.png"
                width="11em"
              />
            </v-btn>
          </template>
          <span>串流暫停/持續</span>
        </v-tooltip>
        <!-- 隱藏/顯示監測項目hide/show overlay -->
        <v-tooltip right class="tips">
          <template #activator="{ on, attrs }">
            <v-btn
              class="left-btn mx-3 my-3"
              icon
              v-bind="attrs"
              v-on="on"
              elevation="6"
            >
              <img
                class=""
                alt="rectangle"
                src="/left-icons/hide-overlay.png"
                width="18em"
              />
            </v-btn>
          </template>
          <span>隱藏/顯示監測項目</span>
        </v-tooltip>
      </v-card>
    </div>

    <!-- ------------------------------------------------------------------
    ------------------------------------------------------------------
    ------------------------------------------------------------------ -->

    <v-row>
      <!-- 左畫面影像顯示----------------------------------------------------------------------------------------------- -->
      <v-col cols="12" md="7">
        <!-- <v-col cols="12" md="7" style="border: 1px solid red"> -->
        <v-card class="ml-3 fill-height" rounded="md">
          <!-- <v-responsive :aspect-ratio="4 / 3"> -->
          <v-card-text>
            <div class="frame">
              <div id="cover" class="cover">
                <img
                  id="image"
                  src="https://dummyimage.com/640x480/969696/000000&text=loading...."
                />
              </div>
            </div>
          </v-card-text>
          <!-- </v-responsive> -->
        </v-card>
      </v-col>
      <!--右1畫面顯示----------------------------------------------------------------------------------------------- -->
      <v-col cols="12" md="5">
        <v-row :column="$vuetify.breakpoint.mdAndDown">
          <v-col cols="12" lg="5">
            <!-- <v-col cols="12" lg="6" style="border: 1px solid red"> -->
            <v-card class="" rounded="md">
              <h4 class="cardtitle ml-3">警報設置</h4>
              <v-simple-table fixed-header height="300px" class="mx-3 table1">
                <template #default>
                  <thead>
                    <tr>
                      <th class="text-left">範圍</th>
                      <th class="text-left">溫度</th>
                      <th class="text-left">警報</th>
                      <th class="text-left">刪除</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- spot -->
                    <tr v-for="(item, index) in spots" :key="index">
                      <td>
                        <v-badge
                          :content="item.name"
                          overlap
                          color="#828C8F"
                          class="my-4"
                          ><v-btn fab x-small depressed
                            ><img
                              class=""
                              alt="alert"
                              src="/left-icons/spot.png"
                              width="18em" /></v-btn
                        ></v-badge>
                      </td>
                      <td>{{ item.temperature }}°C</td>
                      <td>
                        <v-btn color="" fab x-small depressed
                          ><img
                            class=""
                            alt="alert"
                            src="/left-icons/alert.png"
                            width="18em"
                            depressed
                        /></v-btn>
                      </td>
                      <td>
                        <v-btn color="" fab x-small depressed
                          ><img
                            class=""
                            alt="delete"
                            src="/left-icons/delete.png"
                            width="18em"
                            @click="removespot(index, item.name)"
                        /></v-btn>
                      </td>
                    </tr>
                    <!-- SCOPE -->
                    <tr v-for="(item, index) in scopes" :key="index">
                      <td>
                        <v-badge
                          :content="item.name"
                          overlap
                          color="#828C8F"
                          class="my-4"
                          ><v-btn fab x-small depressed
                            ><img
                              class=""
                              alt="alert"
                              src="/left-icons/rectangle.png"
                              width="18em" /></v-btn
                        ></v-badge>
                      </td>
                      <td>{{ item.temperature }}°C</td>
                      <td>
                        <v-btn color="" fab x-small depressed
                          ><img
                            class=""
                            alt="alert"
                            src="/left-icons/alert.png"
                            width="18em"
                            depressed
                        /></v-btn>
                      </td>
                      <td>
                        <v-btn color="" fab x-small depressed
                          ><img
                            class=""
                            alt="delete"
                            src="/left-icons/delete.png"
                            width="18em"
                            @click="removescope(index, item.name)"
                        /></v-btn>
                      </td>
                    </tr>
                    <!-- LINE -->
                    <tr v-for="(item, index) in lines" :key="index">
                      <td>
                        <v-badge
                          :content="item.name"
                          overlap
                          color="#828C8F"
                          class="my-4"
                          ><v-btn fab x-small depressed
                            ><img
                              class=""
                              alt="alert"
                              src="/left-icons/line.png"
                              width="18em" /></v-btn
                        ></v-badge>
                      </td>
                      <td>{{ item.temperature }}°C</td>
                      <td>
                        <v-btn color="" fab x-small depressed
                          ><img
                            class=""
                            alt="alert"
                            src="/left-icons/alert.png"
                            width="18em"
                            depressed
                        /></v-btn>
                      </td>
                      <td>
                        <v-btn
                          color=""
                          fab
                          x-small
                          depressed
                          @click="removeline(index, item.name)"
                          ><img
                            class=""
                            alt="delete"
                            src="/left-icons/delete.png"
                            width="18em"
                        /></v-btn>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card>
          </v-col>

          <!--右2畫面顯示----------------------------------------------------------------------------------------------- -->
  <v-col cols="12" lg="7">
            <!-- <v-col cols="12" lg="6" style="border: 1px solid red"> -->

            <v-card class="mr-3 fill-height" rounded="md">
              <h4 class="cardtitle ml-3">警報紀錄</h4>
              <v-simple-table fixed-header height="300px" class="mx-3 table2">
                <template #default>
                  <thead>
                    <tr>
                      <th class="text-left">範圍</th>
                      <th class="text-left">狀況</th>
                      <th class="text-left">溫度</th>
                      <th class="text-left">時間</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in temps" :key="item.name">
                      <td>
                        <v-badge
                          content="1"
                          overlap
                          color="#828C8F"
                          class="badge my-4"
                        >
                          <v-btn fab x-small depressed>
                            <img
                              class=""
                              alt="alert"
                              src="/left-icons/spot.png"
                              width="18em"
                            />
                          </v-btn>
                        </v-badge>
                      </td>
                      <td>{{ item.situation }}</td>
                      <td>{{ item.temperature }}°C</td>
                      <td>{{ item.time }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card>
          </v-col>

          <!--右3畫面顯示----------------------------------------------------------------------------------------------- -->
          <v-col cols="12" lg="7">
            <!-- <v-col cols="12" lg="6" style="border: 1px solid red"> -->
            <v-card class="fill-height" rounded="md">
              <h4 class="cardtitle ml-3">警報統計</h4>
              <!-- <v-row :column="$vuetify.breakpoint.mdAndDown"> -->
              <v-row>
                <v-col cols="12" md="6">
                  <v-row :column="$vuetify.breakpoint.mdAndDown" class="">
                    <!-- 左上圓餅 -->
                    <v-col cols="12" lg="12" class="mt-1 ml-3">
                      <!-- <v-col cols="12" lg="12" style="border: 1px solid red"> -->
                      <v-progress-circular
                        :rotate="-90"
                        :size="95"
                        :width="10"
                        :value="valueToday"
                        color="#828C8F"
                      >
                        <h3>{{ valueToday }}</h3>
                      </v-progress-circular>
                      <v-sheet class="gg"
                        ><h4 class="chartTitle mr-16">今日</h4>

                        <p class="subtitle mr-2">
                          {{ currentDateTime() }}00:00<br />ǀ<br />{{
                            currentDateTime()
                          }}24:00
                        </p>
                      </v-sheet>
                    </v-col>

                    <!-- 左下圓餅 -->
                    <v-col cols="12" lg="12" class="mt-6 ml-3">
                      <v-progress-circular
                        :rotate="-90"
                        :size="95"
                        :width="10"
                        :value="valueThisWeek"
                        color="#828C8F"
                      >
                        <h3>{{ valueThisWeek }}</h3>
                      </v-progress-circular>
                      <v-sheet class="gg"
                        ><h4 class="chartTitle mr-16">本周</h4>
                        <p class="subtitle mr-2">
                          {{ currentDateTime() }}00:00<br />ǀ<br />{{
                            currentDateTime()
                          }}24:00
                        </p>
                      </v-sheet>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col cols="12" md="6">
                  <v-row :column="$vuetify.breakpoint.mdAndDown">
                    <!-- 右上圓餅 -->
                    <v-col cols="12" lg="12" class="mt-5 mr-10">
                      <v-progress-circular
                        :rotate="-90"
                        :size="95"
                        :width="10"
                        :value="valueLastday"
                        color="#828C8F"
                      >
                        <h3>{{ valueLastday }}</h3>
                      </v-progress-circular>
                      <v-sheet class="gg"
                        ><h4 class="chartTitle mr-16">昨日</h4>
                        <p class="subtitle mr-2">
                          {{ lastDateTime() }}00:00<br />ǀ<br />{{
                            lastDateTime()
                          }}24:00
                        </p>
                      </v-sheet>
                    </v-col>

                    <!-- 左下圓餅 -->
                    <v-col cols="12" lg="12" class="mr-3">
                      <v-progress-circular
                        :rotate="-90"
                        :size="95"
                        :width="10"
                        :value="valueThisMonth"
                        color="#828C8F"
                      >
                        <h3>{{ valueThisMonth }}</h3>
                      </v-progress-circular>
                      <v-sheet class="gg"
                        ><h4 class="chartTitle mr-16">本月</h4>
                        <p class="subtitle mr-2">
                          2022/3/1 00:00<br />ǀ<br />{{
                            currentDateTime()
                          }}24:00
                        </p>
                      </v-sheet>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <!--右4畫面顯示----------------------------------------------------------------------------------------------- -->
          <v-col cols="12" lg="5">
            <v-card class="mr-3 fill-height" rounded="md">
              <div>
                <h4 class="cardtitle ml-3">歷史警報</h4>
              </div>

              <div>
                <v-date-picker
                  v-model="date2"
                  :event-color="(date) => (date[9] % 2 ? 'red' : 'yellow')"
                  :events="functionEvents"
                  no-title
                  color="#9BA3A5"
                  width="18.4em"
                ></v-date-picker>
              </div>
            </v-card>
          </v-col>
          <!--右5畫面顯示----------------------------------------------------------------------------------------------- -->
          <v-col cols="12" lg="12">
            <!-- <v-col cols="12" lg="12" style="border: 1px solid red"> -->
            <v-card class="mr-3" height="6.7em" rounded="md">
              <div>
                <v-btn x-small icon class="btn reset" color="#9BA3A5">
                  <v-icon x-small class="icon">mdi-restore</v-icon>
                </v-btn>
                <h4 class="cardtitle ml-3">參數調整</h4>
              </div>

              <v-form class="">
                <v-text-field
                  class="subtitle card5content ml-16 mt-1 mr-5 text-color"
                  v-model="temperature"
                  label="一般溫度"
                  color="#828c8f"
                ></v-text-field>

                <v-text-field
                  class="subtitle card5content mt-1 mr-5 text-color"
                  v-model="reflected"
                  label="反射溫度"
                  color="#828c8f"
                ></v-text-field>

                <v-text-field
                  class="subtitle card5content mt-1 mr-5 text-color"
                  v-model="atmospheric"
                  label="環境溫度"
                  color="#828c8f"
                ></v-text-field>

                <v-text-field
                  class="subtitle card5content mt-1 mr-5 text-color"
                  v-model="humidity"
                  label="環境濕度"
                  color="#828c8f"
                ></v-text-field>

                <v-text-field
                  class="subtitle card5content mt-1 mr-5 text-color"
                  v-model="distance"
                  label="量測距離"
                  color="#828c8f"
                ></v-text-field>

                <v-text-field
                  class="subtitle card5content mt-1 mr-5 text-color"
                  v-model="emissivity"
                  label="放射率"
                  color="#828c8f"
                ></v-text-field>

                <v-text-field
                  class="subtitle card5content mt-1 mr-5 text-color font-weight-large"
                  v-model="transmission"
                  label="穿透率"
                  color="#828c8f"
                ></v-text-field>
              </v-form>
              <!-- <v-btn icon class="btn reset" color="#9BA3A5"> 
                  <v-icon  class="icon">mdi-cached</v-icon>
                </v-btn> -->
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'IndexPage',
  head: {
    title: '即時監控',
    link: [
      // { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: 'stylesheet', href: '/css/jquery-ui.css' },
      { rel: 'stylesheet', href: '/css/object.css' },
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
    // 切換按鈕
    isActive: false,
    // 左側隱藏按鈕動作設定
    direction_imageMode: 'right',
    fab_imageMode: false,
    transition_imageMode: 'scale-transition',

    direction_palette: 'right',
    fab_palette: false,
    transition_palette: 'scale-transition',

    direction_calibration: 'right',
    fab_calibration: false,
    transition_calibration: 'scale-transition',

    direction_light: 'right',
    fab_light: false,
    transition_light: 'scale-transition',

    direction_autofocus: 'right',
    fab_autofocus: false,
    transition_autofocus: 'scale-transition',


    // 右1右2假數據顯示(待刪)
    temps: [
      {
        name: '點3',
        situation: '曾超溫 00:00:14',
        temperature: "89/30",
         time: '2022/3/17 07:04:22',
      },
      {
        name: '點2',
        temperature: "45/26",
        situation: '已超溫 00:00:38',
         time: '2022/3/17 02:10:07',
      },
      {
        name: '矩形1',
        temperature: "22/23",
        situation: '曾超溫 00:01:42',
        time: '2022/3/16 18:30:14',
      },
      {
        name: '點1',
        temperature: "22/15",
        situation: '已超溫 00:01:20',
         time: '2022/3/14 17:15:08',
      },
      // {
      //   name: '點4',
      //   temperature: 30,
      //   situation: '超溫',
      //   time: '04:30:14',
      //   date: '2022/3/14',
      // },
      // {
      //   name: '點4',
      //   temperature: 30,
      //   situation: '超溫',
      //   time: '04:30:14',
      //   date: '2022/3/14',
      // },
    ],
    // 右1點線面_宣告變數陣列
    spots: [],
    scopes: [],
    lines: [],

    // 右3顯示
    interval: {},
    valueToday: 3,
    valueLastday: 4,
    valueThisWeek: 10,
    valueThisMonth: 15,

    // 右4顯示
    arrayEvents: null,
    date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    beforeDestroy() {
      clearInterval(this.interval)
    },

    // 右5設定
    emissivity: 0.95,
    transmission: 1.0,
    reflected: `${20}°C`,
    distance: `${1.0}m`,
    atmospheric: `${20}°C`,
    humidity: `${50}%`,
    temperature: `${20}°C`,
  }),

  mounted() {
    // jquery-ui
    const vm = this
    // use "main" socket defined in nuxt.config.js
    vm.socket = this.$nuxtSocket({
      name: 'main', // select "main" socket from nuxt.config.js - we could also skip this because "main" is the default socket
    })
    const img = document.getElementById('image')
    vm.socket.on('data', (data) => {
      img.src = 'data:image/jpeg;base64,' + data
      img.style.transform = 'rotate(360deg)'
    })
    // 右3圓餅顯示
    this.interval = setInterval(() => {
      if (this.valueToday > 100) {
        return (this.valueToday = 0)
      }
      this.valueToday += 1
    }, 1000)
  },

  methods: {
    // 燈泡
    toggle() {
  // if (!this.isActive) {
  //   this.isActive = true;
  // } else {
  //   this.isActive = false;
  // }

  this.isActive = !this.enable;
},
    // 點-主程式
    spot() {
      axios({
        method: 'get',
        url: `http://192.168.0.173:8080/camera`,
        // data: data,
        // headers: headers,
      })
        .then(function (response) {
          console.log(response.data.temperature)
        })
        .catch((error) => console.log(error))

      var array = this.spots
      var totle1 = 0
      if (array.length === 0) {
        totle1 = 0
      } else if (array.length >= 6) {
        return false
      } else {
        totle1 = array.length
      }
      var spotsum = 0
      if (array.length === 0) {
        spotsum = totle1 + 1
      } else {
        var testarray = []
        array.forEach(function (element) {
          testarray.push(element.name)
        })
        spotsum = spotsum + 1
        while (testarray.includes(spotsum)) {
          spotsum = spotsum + 1
        }
      }
      var locationA = 40 + spotsum * 20
      var $element = `<div id="spot${spotsum}" class="spot" style="top: ${locationA}px; left: ${locationA}px;"><img src="/images/spot_1.png" /><div class="spot-span"><div>${spotsum}</div></div></div>`
      $('#cover').append($element)
      var spottotlesum = 1
      $('.spot').each(function () {
        $(this).hover(
          function () {
            $(this).children('div').addClass('hover')
          },
          function () {
            $(this).children('div').removeClass('hover')
          }
        )
        var spotname = '#spot' + spottotlesum
        $(spotname).draggable({
          containment: 'parent',
          tolerance: 'pointer',
        })
        spottotlesum = spottotlesum + 1
      })
      var content = {
        name: spotsum,
        temperature: Math.floor(Math.random() * 50),
        situation: '已超溫',
        time: '04:30:14',
        date: '2022/3/14',
      }
      this.addspot(content)
    },
    // 點-刪除程式
    removespot(index, name) {
      var array = this.spots
      array.splice(index, 1)
      var selectspot = '#spot' + name
      $(selectspot).remove()
      this.$forceUpdate()
    },
    // 點-新增程式(為主程式延伸)
    addspot(content) {
      var array = this.spots
      array.push(content)
      array.sort(function (a, b) {
        return a.name - b.name
      })
    },
    // 範圍-主程式
    scope() {
      var array = this.scopes
      var totle = 0
      if (array.length === 0) {
        totle = 0
      } else if (array.length >= 6) {
        return false
      } else {
        totle = array.length
      }
      var scopesum = 0
      if (array.length === 0) {
        scopesum = totle + 1
      } else {
        var testarray = []
        array.forEach(function (element) {
          testarray.push(element.name)
        })
        scopesum = scopesum + 1
        while (testarray.includes(scopesum)) {
          scopesum = scopesum + 1
        }
      }

      var locationA = 40 + scopesum * 20
      // var tooltip_content = '<div class="tooltip_content" >TEST TOOLTIP</div>'
      var $element = `<div id="scope${scopesum}" class="scope" style="top:${locationA}px;left:${locationA}px;" title="Tooltip"><div class="scope-span"><div>${scopesum}</div></div><span class="scope-test-xy-TL">X:Y:</span><span class="scope-test-xy-BR">X:Y:</span></div>`
      $('#cover').append($element)

      var scopetotlesum = 1
      $('.scope').each(function () {
        $(this).hover(
          function () {
            $(this).children('div').addClass('hover')
          },
          function () {
            $(this).children('div').removeClass('hover')
          }
        )
        var scopename = '#scope' + scopetotlesum
        var cover = 0
        var coverwidthTL = 0
        var coverheightTL = 0
        var coverwidthBR = 0
        var coverheightBR = 0
        $(scopename)
          .resizable({
            containment: 'parent',
            handles: 'all',
            minWidth: 50,
            minHeight: 50,
            resize(event, ui) {
              cover = $('.cover')
              coverwidthTL = ui.position.left / cover.width()
              coverheightTL = ui.position.top / cover.height()
              coverwidthBR =
                (ui.position.left + this.offsetWidth) / cover.width()
              coverheightBR =
                (ui.position.top + this.offsetHeight) / cover.height()
              coverwidthTL = coverwidthTL.toFixed(3)
              coverheightTL = coverheightTL.toFixed(3)
              coverwidthBR = coverwidthBR.toFixed(3)
              coverheightBR = coverheightBR.toFixed(3)
              $(this)
                .find('.scope-test-xy-TL')
                .html('X:' + coverwidthTL + ' Y:' + coverheightTL)
              $(this)
                .find('.scope-test-xy-BR')
                .html('X:' + coverwidthBR + ' Y:' + coverheightBR)
            },
          })
          .draggable({
            containment: 'parent',
            drag(event, ui) {
              cover = $('.cover')
              coverwidthTL = ui.position.left / cover.width()
              coverheightTL = ui.position.top / cover.height()
              coverwidthBR =
                (ui.position.left + this.offsetWidth) / cover.width()
              coverheightBR =
                (ui.position.top + this.offsetHeight) / cover.height()
              coverwidthTL = coverwidthTL.toFixed(3)
              coverheightTL = coverheightTL.toFixed(3)
              coverwidthBR = coverwidthBR.toFixed(3)
              coverheightBR = coverheightBR.toFixed(3)
              $(this)
                .find('.scope-test-xy-TL')
                .html('X:' + coverwidthTL + ' Y:' + coverheightTL)
              $(this)
                .find('.scope-test-xy-BR')
                .html('X:' + coverwidthBR + ' Y:' + coverheightBR)
            },
            create(event, ui) {
              cover = $('.cover')
              coverwidthTL = this.offsetLeft / cover.width()
              coverheightTL = this.offsetTop / cover.height()
              coverwidthBR =
                (this.offsetLeft + this.offsetWidth) / cover.width()
              coverheightBR =
                (this.offsetTop + this.offsetHeight) / cover.height()
              coverwidthTL = coverwidthTL.toFixed(3)
              coverheightTL = coverheightTL.toFixed(3)
              coverwidthBR = coverwidthBR.toFixed(3)
              coverheightBR = coverheightBR.toFixed(3)
              $(this)
                .find('.scope-test-xy-TL')
                .html('X:' + coverwidthTL + ' Y:' + coverheightTL)
              $(this)
                .find('.scope-test-xy-BR')
                .html('X:' + coverwidthBR + ' Y:' + coverheightBR)
            },
          })
        scopetotlesum = scopetotlesum + 1
      })
      var content = {
        name: scopesum,
        temperature: Math.floor(Math.random() * 50),
        situation: '已超溫',
        time: '04:30:14',
        date: '2022/3/14',
      }
      this.addscope(content)
    },
    // 範圍-刪除程式
    removescope(index, name) {
      var array = this.scopes
      array.splice(index, 1)
      var selectspot = '#scope' + name
      $(selectspot).remove()
      this.$forceUpdate()
    },
    // 範圍-新增程式(為主程式延伸)
    addscope(content) {
      var array = this.scopes
      array.push(content)
      array.sort(function (a, b) {
        return a.name - b.name
      })
    },
    // 線-主程式
    line() {
      var array = this.lines
      var totle = 0
      if (array.length === 0) {
        totle = 0
      } else if (array.length >= 6) {
        return false
      } else {
        totle = array.length
      }
      var pointsum = 0
      if (array.length === 0) {
        pointsum = totle + 1
      } else {
        var testarray = []
        array.forEach(function (element) {
          testarray.push(element.name)
        })
        pointsum = pointsum + 1
        while (testarray.includes(pointsum)) {
          pointsum = pointsum + 1
        }
      }
      var pointname = 'point' + pointsum
      var pointhover = 'point_hover' + pointsum
      var linename = 'line' + pointsum
      var locationA = 40 + pointsum * 20
      var locationB = 260 + pointsum * 20
      var locationB2 = 120 + pointsum * 20
      var $element = `<div class="${pointname} point-totle" id="pointA" style="left: ${locationA}px; top: ${locationA}px"></div><div class="${pointname} ${pointhover}" id="pointB" style="left:${locationB}px; top: ${locationB2}px"><div class="line-span"><div>${pointsum}</div></div></div><div class="${linename}" id="line"></div>`
      $('#cover').append($element)
      var contentline = {
        name: pointsum,
        temperature: Math.floor(Math.random() * 50),
        situation: '已超溫',
        time: '04:30:14',
        date: '2022/3/14',
      }
      this.addline(contentline)

      pointname = '.point' + pointsum
      var wrapperpointname = 'point' + pointsum
      var wrapperlinename = 'line' + pointsum
      wrapper(wrapperpointname, wrapperlinename)
      $(pointname).draggable({
        drag(e, ui) {
          wrapper(wrapperpointname, wrapperlinename)
          $(e.target).addClass('point-hover')
        },
        containment: 'parent',
        stop(event, ui) {
          $(event.target).removeClass('point-hover')
        },
      })
      var pointhoverclass = '.point_hover' + pointsum
      $(pointname).hover(
        function () {
          $(pointhoverclass).children('div').addClass('hover')
        },
        function () {
          $(pointhoverclass).children('div').removeClass('hover')
        }
      )

      function wrapper(pointname, linename) {
        const point1 = document.getElementsByClassName(pointname)[0]
        const point2 = document.getElementsByClassName(pointname)[1]
        const line = document.getElementsByClassName(linename)[0]
        var getline = getCoordinate(point1, point2, line)
        line.style.width = getline.width + 'px'
        line.style.left = getline.left + 'px'
        line.style.top = getline.top + 'px'
        line.style.transform = 'rotate(' + getline.angleDeg + 'deg)'
      }
      function getCoordinate(point1, point2) {
        var p1 = {
          x: point1.offsetLeft,
          y: point1.offsetTop,
        }
        var p2 = {
          x: point2.offsetLeft,
          y: point2.offsetTop,
        }
        var a = p1.x - p2.x
        var b = p1.y - p2.y
        var length = Math.sqrt(a * a + b * b)
        var angleDeg = (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180) / Math.PI
        var pointWidth = point1.clientWidth / 2
        var pointHeight = point1.clientWidth / 2
        var array = []
        array.width = length
        array.left = p1.x + pointWidth
        array.top = p1.y + pointHeight
        array.angleDeg = angleDeg
        return array
      }
      // Refer to : https://stackoverflow.com/questions/66879479/draw-a-diagonal-line-between-two-points-with-css-and-js
    },
    // 線-新增程式(為主程式延伸)
    addline(contentline) {
      var array = this.lines
      array.push(contentline)
      array.sort(function (a, b) {
        return a.name - b.name
      })
    },
    // 線-刪除程式
    removeline(index, name) {
      var array = this.lines
      array.splice(index, 1)

      var selectline1 = '.point' + name
      $(selectline1).each(function () {
        $(this).remove()
      })
      var selectline2 = '.line' + name
      $(selectline2).remove()
      this.$forceUpdate()
    },
    functionEvents(date) {
      const [, , day] = date.split('-')
      if ([2, 3, 4, 5, 7, 8, 12, 13, 14, 15, 17].includes(parseInt(day, 10)))
        return ['#697679']
      if ([1, 6, 9, 10, 11, 16].includes(parseInt(day, 10))) return ['#E26D6D']
      return false
    },
    // 今天
    currentDateTime() {
      const current = new Date()
      const date =
        current.getFullYear() +
        '/' +
        (current.getMonth() + 1) +
        '/' +
        current.getDate()
      // const time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
      const dateTime = date + ' '
      return dateTime
    },
    // 昨天
    lastDateTime() {
      const current = new Date()
      const date =
        current.getFullYear() +
        '/' +
        (current.getMonth() + 1) +
        '/' +
        (current.getDate() - 1)
      // const time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
      const dateTime = date + ' '
      return dateTime
    },
    // 本週
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
}
.box {
  background-color: #fff;
}
.box:hover .drawer {
  left: 0;
}

/* 影像串流 */
.frame {
  width: 70.5em;
  margin-left: 2.1em;
  margin-top: 2em;
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
  margin-left: 1em;
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
/* h4 {
  line-height: 2em;
  padding-left: 1em;
  color: #031418;
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: bold;
} */
.gg {
  float: right;
  text-align: center;
}
.font-display {
  font-family: 'Noto Sans TC', sans-serif;
}
.chartTitle {
  color: #828c8f;
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
  color: #505F62;
}

  .text-color >>> .v-text-field__slot input {
    color: #9ba3a5;
  }

  .left-btn {
    background-color: #2D2D2D;
    width: 2.25em;
        height: 2.25em;

  }
  .left-btn-img {
filter:brightness(100%);
}
</style>
