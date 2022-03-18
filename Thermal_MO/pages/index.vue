<template>
  <v-container fluid mt-3>
    <!-- 左側浮動按鈕---------------------------------------------------------------------------------------------------- -->
    <div class="box">
      <v-card class="drawer" rounded="lg" elevation="10" dark>
        <v-sheet class="arrow" elevation="5"></v-sheet>
        <!-- 監測工具monitoring tools-------------------------------------------------------------------------------- -->
        <p class="subtitle text-center"><br />監測<br />工具</p>
        <!-- 點spot -->
        <v-tooltip right class="tips">
          <template #activator="{ on, attrs }">
            <v-btn
              class="mx-3"
              color=""
              fab
              x-small
              v-bind="attrs"
              v-on="on"
              @click="spot()"
            >
              <img alt="spot" src="/left-icons/spot.png" width="18em" />
            </v-btn>
          </template>
          <span>點</span>
        </v-tooltip>
        <!-- 線line -->
        <v-tooltip right class="tips">
          <template #activator="{ on, attrs }">
            <v-btn
              class="mx-3 mt-3"
              color=""
              fab
              x-small
              v-bind="attrs"
              v-on="on"
              @click="line()"
            >
              <img alt="line" src="/left-icons/line.png" width="12em" />
            </v-btn>
          </template>
          <span>直線</span>
        </v-tooltip>
        <!-- 矩形rectangle -->
        <v-tooltip right class="tips">
          <template #activator="{ on, attrs }">
            <v-btn
              class="mx-3 my-3"
              color=""
              fab
              x-small
              v-bind="attrs"
              v-on="on"
              @click="scope()"
            >
              <img
                alt="rectangle"
                src="/left-icons/rectangle.png"
                width="16em"
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
                  class="mx-3"
                  color=""
                  fab
                  x-small
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon v-if="fab_imageMode"> mdi-close </v-icon>
                  <img
                    v-else
                    alt="palette"
                    src="/left-icons/image-mode/image-mode.png"
                    width="18em"
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
                  width="20em"
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
                  width="20em"
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
                  width="20em"
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
                  width="17em"
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
                  width="20em"
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
                  class="mx-3 my-3"
                  color=""
                  fab
                  x-small
                  v-bind="attrs"
                  v-on="on"
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
                  width="20em"
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
                  width="20em"
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
                  width="20em"
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
                  width="20em"
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
                  width="20em"
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
                  class="mx-3"
                  color=""
                  fab
                  x-small
                  v-bind="attrs"
                  v-on="on"
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
                  class="mx-3 mt-3"
                  color=""
                  fab
                  x-small
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon v-if="fab_light"> mdi-close </v-icon>
                  <img
                    v-else
                    alt="palette"
                    src="/left-icons/light/light.png"
                    width="14em"
                  />
                </v-btn>
              </template>
              <span>照明</span>
            </v-tooltip>
          </template>
          <v-tooltip top class="tips">
            <template #activator="{ on, attrs }">
              <v-btn class="mt-5" color="" fab x-small v-bind="attrs" v-on="on">
                <img
                  alt="palette-iron"
                  src="/left-icons/light/light-on.png"
                  width="22em"
                />
              </v-btn>
            </template>
            <span>開</span>
          </v-tooltip>
          <v-tooltip top class="tips">
            <template #activator="{ on, attrs }">
              <v-btn class="mt-5" color="" fab x-small v-bind="attrs" v-on="on">
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
          class="mx-3 my-3"
        >
          <template #activator>
            <v-tooltip right class="tips">
              <template #activator="{ on, attrs }">
                <v-btn
                  v-model="fab_autofocus"
                  color=""
                  fab
                  x-small
                  v-bind="attrs"
                  v-on="on"
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
                  width="19em"
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
                  width="20em"
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
                  width="18em"
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
            <v-btn class="mx-3" color="" fab x-small v-bind="attrs" v-on="on">
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
              class="mx-3 mt-3"
              color=""
              fab
              x-small
              v-bind="attrs"
              v-on="on"
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
              class="mx-3 mt-3"
              color=""
              fab
              x-small
              v-bind="attrs"
              v-on="on"
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
              class="mx-3 my-3"
              color=""
              fab
              x-small
              v-bind="attrs"
              v-on="on"
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
          <v-responsive :aspect-ratio="4 / 3">
            <!-- <v-responsive> -->
            <v-card-text>
              <div id="cover" class="cover">
                <img
                  id="image"
                  src="https://dummyimage.com/640x480/969696/000000&text=loading...."
                />
                <!-- <div class="crosshair">
                  <img src="/images/spot(png).png" />
                </div> -->
              </div>
            </v-card-text>
          </v-responsive>
        </v-card>
      </v-col>
      <!--右1畫面顯示----------------------------------------------------------------------------------------------- -->
      <v-col cols="12" md="5">
        <v-row :column="$vuetify.breakpoint.mdAndDown">
          <v-col cols="12" lg="5">
            <!-- <v-col cols="12" lg="6" style="border: 1px solid red"> -->
            <v-card class="" rounded="md">
              <h4 class="font-weight-black">警報設置</h4>
              <v-simple-table fixed-header height="300px" class="mx-3 table1">
                <template #default>
                  <thead>
                    <tr>
                      <th class="text-left">監測範圍</th>
                      <th class="text-left">溫度</th>
                      <th class="text-left">警報</th>
                      <th class="text-left">刪除</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- spot -->
                    <tr v-for="(item, index) in spots" :key="index">
                      <td>
                        <v-badge :content="item.name" overlap color="#828C8F"
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
                        <v-badge :content="item.name" overlap color="#828C8F"
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
                        <v-badge :content="item.name" overlap color="#828C8F"
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
              <h4 class="font-weight-black">警報紀錄</h4>
              <v-simple-table fixed-header height="300px" class="mx-3 table2">
                <template #default>
                  <thead>
                    <tr>
                      <th class="text-left">監測範圍</th>
                      <th class="text-left">溫度</th>
                      <th class="text-left">狀況</th>
                      <th class="text-left">時間</th>
                      <th class="text-left">日期</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in temps" :key="item.name">
                      <td>
                        <v-badge content="1" overlap color="#828C8F">
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
                      <td>{{ item.temperature }}°C</td>
                      <td>{{ item.situation }}</td>
                      <td>{{ item.time }}</td>
                      <td>{{ item.date }}</td>
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
              <h4 class="font-weight-black">警報統計</h4>
              <!-- <v-row :column="$vuetify.breakpoint.mdAndDown"> -->
              <v-row>
                <v-col cols="12" md="6">
                  <v-row :column="$vuetify.breakpoint.mdAndDown" class="">
                    <!-- 左上圓餅 -->
                    <v-col cols="12" lg="12" class="mt-5 ml-3">
                      <!-- <v-col cols="12" lg="12" style="border: 1px solid red"> -->
                      <v-progress-circular
                        :rotate="-90"
                        :size="100"
                        :width="10"
                        :value="valueToday"
                        color="#37484C"
                      >
                        {{ valueToday }}%
                      </v-progress-circular>
                      <v-sheet class="gg mr-11"
                        ><h4>今日</h4>
                        <br /><br />
                        <p class="subtitle">
                          累計 {{ valueToday }} 次
                        </p></v-sheet
                      >
                    </v-col>

                    <!-- 左下圓餅 -->
                    <v-col cols="12" lg="12" class="ml-3">
                      <!-- <v-col cols="12" lg="12" style="border: 1px solid red"> -->
                      <v-progress-circular
                        :rotate="-90"
                        :size="100"
                        :width="10"
                        :value="valueThisWeek"
                        color="#37484C"
                      >
                        {{ valueThisWeek }}%
                      </v-progress-circular>
                      <v-sheet class="gg mr-11"
                        ><h4 class="chartTitle">本周</h4>
                        <br /><br />
                        <p class="subtitle">累計 8 次</p></v-sheet
                      >
                    </v-col>
                  </v-row>
                </v-col>

                <v-col cols="12" md="6">
                  <v-row :column="$vuetify.breakpoint.mdAndDown">
                    <!-- 右上圓餅 -->
                    <v-col cols="12" lg="12" class="mt-5 mr-3">
                      <!-- <v-col cols="12" lg="12" style="border: 1px solid red"> -->
                      <v-progress-circular
                        :rotate="-90"
                        :size="100"
                        :width="10"
                        :value="valueLastday"
                        color="#37484C"
                      >
                        {{ valueLastday }}%
                      </v-progress-circular>
                      <v-sheet class="gg mr-11"
                        ><h4>昨日</h4>
                        <br /><br />
                        <p class="subtitle">累計 3 次</p></v-sheet
                      >
                    </v-col>

                    <!-- 左下圓餅 -->
                    <v-col cols="12" lg="12" class="mr-3">
                      <!-- <v-col cols="12" lg="12" style="border: 1px solid red"> -->
                      <v-progress-circular
                        :rotate="-90"
                        :size="100"
                        :width="10"
                        :value="valueThisMonth"
                        color="#37484C"
                      >
                        {{ valueThisMonth }}%
                      </v-progress-circular>
                      <v-sheet class="gg mr-11"
                        ><h4>本月</h4>
                        <br /><br />
                        <p class="subtitle">累計 15 次</p></v-sheet
                      >
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <!--右4畫面顯示----------------------------------------------------------------------------------------------- -->
          <v-col cols="12" lg="5">
            <!-- <v-col cols="12" lg="6" style="border: 1px solid red"> -->
            <v-card class="mr-3 fill-height" rounded="md">
              <div>
                <h4 class="font-weight-black">歷史警報</h4>
              </div>

              <div>
                <v-date-picker
                  v-model="date2"
                  :event-color="(date) => (date[9] % 2 ? 'red' : 'yellow')"
                  :events="functionEvents"
                  no-title
                  color="#37484C"
                  width="18em"
                ></v-date-picker>
              </div>
            </v-card>
          </v-col>
          <!--右5畫面顯示----------------------------------------------------------------------------------------------- -->
          <v-col cols="12" lg="12">
            <!-- <v-col cols="12" lg="12" style="border: 1px solid red"> -->
            <v-card class="mr-3" height="8em" rounded="md">
              <h4>參數調整</h4>

              <v-form class="mx-3">
                <v-container>
                  <v-form>
                    <v-container>
                      <v-row>
                        <v-col cols="12" md="2">
                          <v-text-field
                            v-model="emissivity"
                            label="放射率"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="2">
                          <v-text-field
                            v-model="transmission"
                            label="穿透率"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="2">
                          <v-text-field
                            v-model="reflected"
                            label="反射溫度"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="2">
                          <v-text-field
                            v-model="distance"
                            label="量測距離"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="2">
                          <v-text-field
                            v-model="atmospheric"
                            label="環境溫度"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="2">
                          <v-text-field
                            v-model="humidity"
                            label="環境濕度"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-form>
                </v-container>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
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
    // 右4顯示
    arrayEvents: null,
    date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),

    // 右3顯示
    interval: {},
    valueToday: 37.8,
    valueLastday: 13.2,
    valueThisWeek: 42.5,
    valueThisMonth: 19.4,

    // 右4顯示
    beforeDestroy() {
      clearInterval(this.interval)
    },
    // 右1右2假數據顯示(待刪)
    temps: [
      {
        name: '點3',
        temperature: 30,
        situation: '符合超溫',
        time: '07:04:22',
        date: '2022/3/17',
      },
      {
        name: '點2',
        temperature: 26,
        situation: '超溫',
        time: '02:10:07',
        date: '2022/3/17',
      },
      {
        name: '矩形1',
        temperature: 23,
        situation: '超溫',
        time: '18:30:14',
        date: '2022/3/16',
      },
      {
        name: '點1',
        temperature: 15,
        situation: '超溫',
        time: '17:15:08',
        date: '2022/3/14',
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
    spots: [],
    scopes: [],
    lines: [],
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

    // 右5設定
    emissivity: 0.95,
    transmission: 1.0,
    reflected: `${20}°C`,
    distance: `${1.0}m`,
    atmospheric: `${20}°C`,
    humidity: `${50}%`,
  }),
  // jquery-ui
  mounted() {
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

  // 右4顯示
  methods: {
    spot() {
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
      console.log(spotsum)
      var locationA = 40 + spotsum * 20
      var $element = `<div id="spot${spotsum}" class="spot" style="top: ${locationA}px; left: ${locationA}px;"><img src="/images/spot_1.png" /><span class="spot-span">${spotsum}</span></div>`
      $('#cover').append($element)
      var spottotlesum = 1
      $('.spot').each(function () {
        $(this).hover(
          function () {
            console.log('hover')
            $(this).children('span').addClass('hover')
          },
          function () {
            $(this).children('span').removeClass('hover')
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
    removespot(index, name) {
      var array = this.spots
      array.splice(index, 1)
      var selectspot = '#spot' + name
      $(selectspot).remove()
      this.$forceUpdate()
    },
    addspot(content) {
      var array = this.spots
      array.push(content)
      array.sort(function (a, b) {
        return a.name - b.name
      })
    },
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
      var $element = `<div id="scope${scopesum}" class="scope" style="top:${locationA}px;left:${locationA}px;" title="Tooltip"><span class="scope-span">${scopesum}</span></div>`
      $('#cover').append($element)

      var scopetotlesum = 1
      $('.scope').each(function () {
        $(this).hover(
          function () {
            console.log('hover')
            $(this).children('span').addClass('hover')
          },
          function () {
            $(this).children('span').removeClass('hover')
          }
        )
        var scopename = '#scope' + scopetotlesum
        $(scopename)
          .resizable({
            containment: 'parent',
            handles: 'all',
            minWidth: 50,
            minHeight: 50,
          })
          .draggable({
            containment: 'parent',
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
    removescope(index, name) {
      var array = this.scopes
      array.splice(index, 1)
      var selectspot = '#scope' + name
      $(selectspot).remove()
      this.$forceUpdate()
    },
    addscope(content) {
      var array = this.scopes
      array.push(content)
      array.sort(function (a, b) {
        return a.name - b.name
      })
    },
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
      console.log(pointsum)
      var pointname = 'point' + pointsum
      var pointhover = 'point_hover' + pointsum
      var linename = 'line' + pointsum
      var locationA = 40 + pointsum * 20
      var locationB = 260 + pointsum * 20
      var locationB2 = 120 + pointsum * 20
      var $element = `<div class="${pointname} point-totle" id="pointA" style="left: ${locationA}px; top: ${locationA}px"></div><div class="${pointname} ${pointhover}" id="pointB" style="left:${locationB}px; top: ${locationB2}px"><span class="line-span">${pointsum}</span></div><div class="${linename}" id="line"></div>`
      $('#cover').append($element)
      var contentline = {
        name: pointsum,
        temperature: Math.floor(Math.random() * 50),
        situation: '已超溫',
        time: '04:30:14',
        date: '2022/3/14',
      }
      this.addline(contentline)
      
      // var wrapperpointname = 0
      // var wrapperlinename = 0
      // array.forEach(function (element) {
        pointname = '.point' + pointsum
        var wrapperpointname = 'point' + pointsum
        var wrapperlinename = 'line' + pointsum
        // console.log(pointname)
        wrapper(wrapperpointname, wrapperlinename)
        $(pointname).draggable({
          drag(e, ui) {
            wrapper(wrapperpointname, wrapperlinename)
            $(e.target).addClass('point-hover')
            console.log(wrapperpointname, wrapperlinename)
          },
          containment: 'parent',
          stop(event, ui) {
            $(event.target).removeClass('point-hover')
          },
        })
        var pointhoverclass = '.point_hover' + pointsum
        $(pointname).hover(
          function () {
            $(pointhoverclass).children('span').addClass('hover')
          },
          function () {
            $(pointhoverclass).children('span').removeClass('hover')
          }
        )
      // })
      // var pointtotle = 1
      // $('.point-totle').each(function () {
      //   var pointeachname = '.point' + pointtotle
      //   $(pointeachname).draggable({
      //     drag(e, ui) {
      //       wrapper(pointname, linename)
      //       $(e.target).addClass('point-hover')
      //     },
      //     containment: 'parent',
      //     stop(event, ui) {
      //       $(event.target).removeClass('point-hover')
      //     },
      //   })
      //   var pointname = 'point' + pointtotle
      //   var linename = 'line' + pointtotle
      //   wrapper(pointname, linename)
      //   pointtotle = pointtotle + 1
      // })

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
    },
    addline(contentline) {
      var array = this.lines
      array.push(contentline)
      array.sort(function (a, b) {
        return a.name - b.name
      })
    },
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
        return ['grey']
      if ([1, 6, 9, 10, 11, 16].includes(parseInt(day, 10))) return ['red']
      return false
    },
  },
}
</script>
<style scoped>
/* 左側浮動按鈕 */
.drawer {
  position: fixed;
  width: 3.52em;
  left: -3.52em;
  height: 51.8em;
  /* width: 60px;
  left: -60px; */
  transition: all 0.5s;
  z-index: 99999;
}
.box {
  background-color: #fff;
}
.box:hover .drawer {
  left: 0;
}
/* 影像串流 */
.cover {
  position: relative;
  max-width: 100%;
  width: 100%;
  display: inline-block;
}
#image {
  /* width: 94.5%; */
  width: 70.5em;
  pointer-events: none;
  margin-left: 2.1em;
  margin-top: 2em;
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
}
/* @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@900&display=swap'); */
h4 {
  line-height: 1.9em;
  padding-left: 1em;
  color: #051a1f;
  font-family: 'Noto Sans TC', sans-serif;
}
.gg {
  float: right;
  text-align: left;
}
.table1,
.table2 {
  overflow-y: scroll;
}
.font-display {
  font-family: 'Noto Sans TC', sans-serif;
}
.chartTitle {
  color: #505f62;
}
</style>
