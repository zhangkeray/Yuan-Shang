<template>
  <v-container fluid mt-3>
    <!-- 左側浮動按鈕---------------------------------------------------------------------------------------------------- -->
    <div class="box">
      <v-card class="drawer" rounded="lg" elevation="10" dark>
        <v-sheet class="arrow" elevation="5"></v-sheet>

        <!-- 監測工具monitoring tools-------------------------------------------------------------------------------- -->
        <p class="subtitle text-center"><br />監測<br />工具</p>
        <!-- 點spot -->
        <v-tooltip right>
          <template #activator="{ on, attrs }">
            <v-btn class="mx-3" color="" fab x-small v-bind="attrs" v-on="on" id="add-spot">
              <img alt="spot" src="/left-icons/spot.png" width="18em" />
            </v-btn>
          </template>
          <span>點</span>
        </v-tooltip>
        <!-- 線line -->
        <v-tooltip right>
          <template #activator="{ on, attrs }">
            <v-btn
              class="mx-3 mt-3"
              color=""
              fab
              x-small
              v-bind="attrs"
              v-on="on"
              id="add-line"
            >
              <img alt="line" src="/left-icons/line.png" width="12em" />
            </v-btn>
          </template>
          <span>直線</span>
        </v-tooltip>
        <!-- 矩形rectangle -->
        <v-tooltip right>
          <template #activator="{ on, attrs }">
            <v-btn
              class="mx-3 my-3"
              color=""
              fab
              x-small
              v-bind="attrs"
              v-on="on"
              id="add-scope"
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
          v-model="fab_imageMode"
          :top="top_imageMode"
          :bottom="bottom_imageMode"
          :right="right_imageMode"
          :left="left_imageMode"
          :direction="direction_imageMode"
          :open-on-hover="hover_imageMode"
          :transition="transition_imageMode"
        >
          <template #activator>
            <v-tooltip right>
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
          <v-tooltip top>
            <template #activator="{ on, attrs }">
              <v-btn class="mt-3" color="" fab x-small v-bind="attrs" v-on="on" >
                <img
                  alt="image-mode-thermal"
                  src="/left-icons/image-mode/image-mode-thermal.png"
                  width="20em"
                />
              </v-btn>
            </template>
            <span>Thermal</span>
          </v-tooltip>
          <v-tooltip top>
            <template #activator="{ on, attrs }">
              <v-btn class="mt-3" color="" fab x-small v-bind="attrs" v-on="on">
                <img
                  alt="image-mode-thermal-msx"
                  src="/left-icons/image-mode/image-mode-thermal-msx.png"
                  width="20em"
                />
              </v-btn>
            </template>
            <span>Thermal MSX</span>
          </v-tooltip>
          <v-tooltip top>
            <template #activator="{ on, attrs }">
              <v-btn class="mt-3" color="" fab x-small v-bind="attrs" v-on="on">
                <img
                  alt="image-mode-digital-camera"
                  src="/left-icons/image-mode/image-mode-digital-camera.png"
                  width="20em"
                />
              </v-btn>
            </template>
            <span>Digital Camera</span>
          </v-tooltip>
          <v-tooltip top>
            <template #activator="{ on, attrs }">
              <v-btn class="mt-3" color="" fab x-small v-bind="attrs" v-on="on">
                <img
                  alt="image-mode-marco"
                  src="/left-icons/image-mode/image-mode-marco.png"
                  width="17em"
                />
              </v-btn>
            </template>
            <span>Marco</span>
          </v-tooltip>
          <v-tooltip top>
            <template #activator="{ on, attrs }">
              <v-btn class="mt-3" color="" fab x-small v-bind="attrs" v-on="on">
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
          v-model="fab_palette"
          :top="top_palette"
          :bottom="bottom_palette"
          :right="right_palette"
          :left="left_palette"
          :direction="direction_palette"
          :open-on-hover="hover_palette"
          :transition="transition_palette"
        >
          <template #activator>
            <v-tooltip right>
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
          <v-tooltip top>
            <template #activator="{ on, attrs }">
              <v-btn class="mt-3" color="" fab x-small v-bind="attrs" v-on="on">
                <img
                  alt="palette-iron"
                  src="/left-icons/palette/palette-iron.png"
                  width="20em"
                />
              </v-btn>
            </template>
            <span>Iron</span>
          </v-tooltip>
          <v-tooltip top>
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
          <v-tooltip top>
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
          <v-tooltip top>
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
          <v-tooltip top>
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
          <v-tooltip top>
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
          v-model="fab_calibration"
          :top="top_calibration"
          :bottom="bottom_calibration"
          :right="right_calibration"
          :left="left_calibration"
          :direction="direction_calibration"
          :open-on-hover="hover_calibration"
          :transition="transition_calibration"
        >
          <template #activator>
            <v-tooltip right>
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
                    width="15em"
                  />
                </v-btn>
              </template>
              <span>計算</span>
            </v-tooltip>
          </template>
          <v-btn class="" color="" fab x-small>
            <img alt="pending" src="/left-icons/.png" width="14em" />
          </v-btn>
          <v-btn class="" color="" fab x-small>
            <img alt="pending" src="/left-icons/.png" width="14em" />
          </v-btn>
        </v-speed-dial>
        <!-- 照明light -->
        <v-speed-dial
          v-model="fab_light"
          :top="top_light"
          :bottom="bottom_light"
          :right="right_light"
          :left="left_light"
          :direction="direction_light"
          :open-on-hover="hover_light"
          :transition="transition_light"
        >
          <template #activator>
            <v-tooltip right>
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
          <v-tooltip top>
            <template #activator="{ on, attrs }">
              <v-btn class="" color="" fab x-small v-bind="attrs" v-on="on">
                <img
                  alt="palette-iron"
                  src="/left-icons/light/light-on.png"
                  width="22em"
                />
              </v-btn>
            </template>
            <span>開</span>
          </v-tooltip>
          <v-tooltip top>
            <template #activator="{ on, attrs }">
              <v-btn class="" color="" fab x-small v-bind="attrs" v-on="on">
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
          v-model="fab_autofocus"
          :top="top_autofocus"
          :bottom="bottom_autofocus"
          :right="right_autofocus"
          :left="left_autofocus"
          :direction="direction_autofocus"
          :open-on-hover="hover_autofocus"
          :transition="transition_autofocus"
          class="mx-3 my-3"
        >
          <template #activator>
            <v-tooltip right>
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
          <v-tooltip top>
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
          <v-tooltip top>
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
          <v-tooltip top>
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
        <v-tooltip right>
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
        <v-tooltip right>
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
        <v-tooltip right>
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
        <v-tooltip right class>
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
              <div class="cover" id="cover">
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
              <h3 class="font-weight-black">警報設置</h3>
              <v-simple-table fixed-header height="300px" class="mx-3">
                <template #default >
                  <thead>
                    <tr>
                      <th class="text-left">監測範圍</th>
                      <th class="text-left">溫度</th>
                      <th class="text-left">警報</th>
                      <th class="text-left">刪除</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in temps" :key="item.name">
                      <td>
                        <v-badge content="1" overlap color="#828C8F"
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
              <h3 class="font-weight-black">警報紀錄</h3>
              <v-simple-table fixed-header height="300px" class="mx-3">
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
              <h3 class="font-weight-black">警報統計</h3>
              <!-- <v-row :column="$vuetify.breakpoint.mdAndDown"> -->
              <v-row>
                <v-col cols="12" lg="6">
                  <p class="subtitle ">本日</p>
                  <IndexDonuts />
                </v-col>
                <v-col cols="12" lg="6">
                  <p class="subtitle ">上週</p>
                  <IndexDonuts2 />
                </v-col>
                <p class="subtitle ">本週</p>
                <v-col cols="12" lg="6">
                  <!-- <IndexDonuts3 /> -->
                </v-col>
                <p class="subtitle r">單月</p>
                <v-col cols="12" lg="6">
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <!--右4畫面顯示----------------------------------------------------------------------------------------------- -->
          <v-col cols="12" lg="5">
            <!-- <v-col cols="12" lg="6" style="border: 1px solid red"> -->
            <v-card class="mr-3 fill-height" rounded="md">
              <div>
              <h3 class="font-weight-black">歷史警報</h3>
              </div>
    
    <div>
      <v-date-picker
        v-model="date2"
        :event-color="date => date[9] % 2 ? 'red' : 'yellow'"
        :events="functionEvents"
        no-title
        color="#37484C"
      ></v-date-picker>
    </div>


            </v-card>
          </v-col>
          <!--右5畫面顯示----------------------------------------------------------------------------------------------- -->
          <v-col cols="12" lg="12">
            <!-- <v-col cols="12" lg="12" style="border: 1px solid red"> -->
            <v-card class="mr-3" height="8em" rounded="md">
            <h3 class="font-weight-black">參數調整</h3>

              <v-form class="mx-3">
                <v-container>
                  <v-form v-model="valid">
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
    title: "即時監控",
    link: [
      // { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "/css/jquery-ui.css" },
      { rel: "stylesheet", href: "/css/object.css" },
    ],
    script: [
      {
        src: "/js/jquery.js",
        type: "text/javascript",
      },
      {
        src: "/js/jquery-ui.js",
        type: "text/javascript",
      },
      {
        src: "/js/jquery-collision.js",
        type: "text/javascript",
      },
      {
        src: "/js/object.js",
        type: "text/javascript",
      },
    ],
  },
  data: () => ({
    // 右4顯示
    arrayEvents: null,
    date1: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    date2: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),

    // 右1右2假數據顯示(待刪)
    temps: [
      {
        name: '點1',
        temperature: 15,
        situation: '已超溫',
        time: '04:30:14',
        date: '2022/3/14',
      },
      {
        name: '矩形1',
        temperature: 23,
        situation: '已超溫',
        time: '04:30:14',
        date: '2022/3/14',
      },
      {
        name: '點2',
        temperature: 26,
        situation: '已超溫',
        time: '04:30:14',
        date: '2022/3/14',
      },
      {
        name: '點3',
        temperature: 30,
        situation: '已超溫',
        time: '04:30:14',
        date: '2022/3/14',
      },
    ],
    // 左側隱藏按鈕動作設定
    direction_imageMode: 'right',
    // bottom_imageMode: true,
    transition_imageMode: 'scale-transition',

    direction_palette: 'right',
    // bottom_palette: true,
    transition_palette: 'scale-transition',

    direction_calibration: 'right',
    // bottom_calibration: true,
    transition_calibration: 'scale-transition',

    direction_light: 'right',
    // bottom_light: true,
    transition_light: 'scale-transition',

    direction_autofocus: 'right',
    // bottom_autofocus: true,
    transition_autofocus: 'scale-transition',

    // 右5設定
    emissivity: 0.95,
    transmission: 1.000,
    reflected: "20°C",
    distance:" 1.00m",
    atmospheric: "20°C",
    humidity: "50%",


  }),
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
    // 右四
    // this.arrayEvents = [...Array(6)].map(() => {
    //     const day = Math.floor(Math.random() * 30)
    //     const d = new Date()
    //     d.setDate(day)
    //     return d.toISOString().substr(0, 10)
    //   })
  },
  methods: {
      functionEvents (date) {
        const [,, day] = date.split('-')
        if ([2,3,4,5,7,8,12,13,14,15,17].includes(parseInt(day, 10))) return ['grey']
        if ([1,6,9,10,11,16].includes(parseInt(day, 10))) return ['red']
        return false
      },
    },
}
</script>
<style scoped>
.drawer {
  position: fixed;
  width: 3.52em;
  left: -3.52em;
  height: 51.8em;
  /* width: 60px;
  left: -60px; */
  transition: all 0.5s;
  z-index: 9999;
}

.box {
  /* height: 30px;
  width: 30px; */
  background-color: blue;
}
.arrow {
  height: 23px;
  width: 100px;
  position: absolute;
  margin-left: 1em;
  margin-top: 25.5em;
  transform: rotate(270deg);
  border-radius: 0 0 100px 100px;
  /* background-color: white; */
}
.subtitle {
  font-size: 12px;
  z-index: 99999;
}

.box:hover .drawer {
  left: 0;
}
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

h3 {
   line-height:1.7em;
   padding-left: 0.3em;
}
</style>
