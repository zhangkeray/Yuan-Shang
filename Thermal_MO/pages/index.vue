<template>
  <v-container fluid mt-3>
    <div class="box">
      <v-card class="drawer" rounded="lg" light elevation="15">
        <v-row>
          <v-col>
            <!-- 監測工具monitoring tools------------------------------------------------------------------------------ -->
            <p class="subtitle text-center"><br />監測<br />工具</p>
            <!-- 點spot -->
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="mx-3"
                  color=""
                  fab
                  x-small
                  v-bind="attrs"
                  v-on="on"
                >
                  <img alt="spot" src="/left-icons/spot.png" width="18em" />
                </v-btn>
              </template>
              <span>點</span>
            </v-tooltip>
            <!-- 線line -->
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="mx-3 mt-3"
                  color=""
                  fab
                  x-small
                  v-bind="attrs"
                  v-on="on"
                >
                  <img alt="line" src="/left-icons/line.png" width="12em" />
                </v-btn>
              </template>
              <span>直線</span>
            </v-tooltip>
            <!-- 矩形rectangle -->
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="mx-3 my-3"
                  color=""
                  fab
                  x-small
                  v-bind="attrs"
                  v-on="on"
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
              <template v-slot:activator>
                <v-tooltip right>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-model="fab_imageMode"
                      class="mt-3"
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
              <v-btn class="" color="" fab x-small>
                <img
                  alt="image-mode-thermal"
                  src="/left-icons/image-mode/image-mode-thermal.png"
                  width="20em"
                />
              </v-btn>
              <v-btn class="" color="" fab x-small>
                <img
                  alt="image-mode-thermal-msx"
                  src="/left-icons/image-mode/image-mode-thermal-msx.png"
                  width="20em"
                />
              </v-btn>
              <v-btn class="" color="" fab x-small>
                <img
                  alt="image-mode-digital-camera"
                  src="/left-icons/image-mode/image-mode-digital-camera.png"
                  width="20em"
                />
              </v-btn>
              <v-btn class="" color="" fab x-small>
                <img
                  alt="image-mode-marco"
                  src="/left-icons/image-mode/image-mode-marco.png"
                  width="17em"
                />
              </v-btn>
              <v-btn class="" color="" fab x-small>
                <img
                  alt="image-mode-thermal-fsx"
                  src="/left-icons/image-mode/image-mode-thermal-fsx.png"
                  width="20em"
                />
              </v-btn>
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
              <template v-slot:activator>
                <v-tooltip right>
                  <template v-slot:activator="{ on, attrs }">
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
              <v-btn class="" color="" fab x-small>
                <img
                  alt="palette-iron"
                  src="/left-icons/palette/palette-iron.png"
                  width="20em"
                />
              </v-btn>
              <v-btn class="" color="" fab x-small>
                <img
                  alt="palette-lava"
                  src="/left-icons/palette/palette-lava.png"
                  width="20em"
                />
              </v-btn>
              <v-btn class="" color="" fab x-small>
                <img
                  alt="palette-gray"
                  src="/left-icons/palette/palette-gray.png"
                  width="20em"
                />
              </v-btn>
              <v-btn class="" color="" fab x-small>
                <img
                  alt="palette-rainbow"
                  src="/left-icons/palette/palette-rainbow.png"
                  width="20em"
                />
              </v-btn>
              <v-btn class="" color="" fab x-small>
                <img
                  alt="palette-rainbow-hc"
                  src="/left-icons/palette/palette-rainbow-hc.png"
                  width="20em"
                />
              </v-btn>
              <v-btn class="" color="" fab x-small>
                <img
                  alt="palette-arctic"
                  src="/left-icons/palette/palette-arctic.png"
                  width="20em"
                />
              </v-btn>
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
              <template v-slot:activator>
                <v-tooltip right>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-model="fab_calibration"
                      class="mt-3"
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
              <template v-slot:activator>
                <v-tooltip right>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-model="fab_light"
                      class="mt-3"
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
                        src="/left-icons/light/light-on.png"
                        width="14em"
                      />
                    </v-btn>
                  </template>
                  <span>照明</span>
                </v-tooltip>
              </template>
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn class="" color="" fab x-small v-bind="attrs" v-on="on">
                    <img
                      alt="palette-iron"
                      src="/left-icons/light/light-on.png"
                      width="14em"
                    />
                  </v-btn>
                </template>
                <span>開</span>
              </v-tooltip>
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn class="" color="" fab x-small v-bind="attrs" v-on="on">
                    <img
                      alt="palette-lava"
                      src="/left-icons/light/light-off.png"
                      width="14em"
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
              class="my-3"
            >
              <template #activator>
                <v-tooltip right>
                  <template v-slot:activator="{ on, attrs }">
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
              <v-tooltip right>
                <template v-slot:activator="{ on, attrs }">
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
              <v-tooltip right>
                <template v-slot:activator="{ on, attrs }">
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
              <v-tooltip right>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn class="" color="" fab x-small v-bind="attrs" v-on="on">
                    <img
                      alt="palette-gray"
                      src="/left-icons/autofocus/autofocus-autofocus.png"
                      width="18em"
                    />
                  </v-btn>
                </template>
                <span></span>
              </v-tooltip>
            </v-speed-dial>
            <v-divider></v-divider>
            <!-- 影像調整image adjustment ------------------------------------------------------------------------------ -->
            <p class="subtitle text-center"><br />影像<br />調整</p>
            <!-- 全螢幕fullscreen -->
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="mx-3"
                  color=""
                  fab
                  x-small
                  v-bind="attrs"
                  v-on="on"
                >
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
              <template v-slot:activator="{ on, attrs }">
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
              <template v-slot:activator="{ on, attrs }">
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
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
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
          </v-col>
        </v-row>
      </v-card>
    </div>

    <!-- ------------------------------------------------------------------
    ------------------------------------------------------------------
    ------------------------------------------------------------------ -->
    <v-row>
      <!-- 左畫面顯示----------------------------------------------------------------------------------------------- -->
      <v-col cols="12" md="7">
        <!-- <v-col cols="12" md="7" style="border: 1px solid red"> -->
        <v-card class="ml-3 fill-height" rounded="lg">
          <!-- <v-responsive :aspect-ratio="4 / 3">
            <v-card-text>
              This card will always be 4:3 (unless you put more stuff in it)
            </v-card-text>
          </v-responsive> -->
                            <img
                class="ttt"
                alt=""
                src="/forDemo/snapshot.jpg"
                width="1050em"
                style="display:block; margin:auto; align:center"
              />
        </v-card>
      </v-col>
      <!--右1畫面顯示----------------------------------------------------------------------------------------------- -->
      <v-col cols="12" md="5">
        <v-row :column="$vuetify.breakpoint.mdAndDown">
          <v-col cols="12" lg="7">
            <!-- <v-col cols="12" lg="6" style="border: 1px solid red"> -->
            <v-card class="fill-height" rounded="lg">
               <v-subheader class="justify-center">警報紀錄</v-subheader>
          <v-simple-table fixed-header height="300px">
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
                  <td>{{ item.name }}</td>
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

          <!--右2畫面顯示----------------------------------------------------------------------------------------------- -->
          <v-col cols="12" lg="5">
            <!-- <v-col cols="12" lg="6" style="border: 1px solid red"> -->
            <v-card class="mr-3 fill-height" rounded="lg">
  <v-subheader class="justify-center">警報設置</v-subheader>
          <v-simple-table fixed-header height="300px">
            <template #default>
              <thead>
                <tr>
                  <th class="text-left">監測範圍</th>
                  <th class="text-left">溫度</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in temps" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.temperature }}°C</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
            </v-card>
          </v-col>

          <!--右3畫面顯示----------------------------------------------------------------------------------------------- -->
          <v-col cols="12" lg="6">
            <!-- <v-col cols="12" lg="6" style="border: 1px solid red"> -->
            <v-card class="fill-height" rounded="lg">
                       <img
                class="test3"
                alt=""
                src="/forDemo/test2.png"
                width="200em"
                                style="display:block; margin:auto; align:center"

              />
               </v-card>
          </v-col>
          <!--右4畫面顯示----------------------------------------------------------------------------------------------- -->
          <v-col cols="12" lg="6">
            <!-- <v-col cols="12" lg="6" style="border: 1px solid red"> -->
            <v-card class="mr-3 fill-height" rounded="lg">
              <v-form>
                <v-container grid-list-sm>
                  <v-row>
                    <v-col cols="12" md="4">
                      <p class="subtitle text-center">放射率</p>

                      <v-text-field
                        ref="input"
                        v-model.number="number"
                        type="number"
                        step="any"
                        min="0"
                        :rules="[numberRule]"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                      <p class="subtitle text-center">反射率</p>
                      <v-text-field
                        ref="input"
                        v-model.number="number"
                        type="number"
                        step="any"
                        min="0"
                        :rules="[numberRule]"
                      ></v-text-field>
                    <v-subheader class="mt-3">距離：</v-subheader>
                      <v-text-field
                        ref="input"
                        v-model.number="number"
                        type="number"
                        step="any"
                        min="0"
                        :rules="[numberRule]"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                      <p class="subtitle text-center">大氣濕度</p>
                      <v-text-field
                        ref="input"
                        v-model.number="number"
                        type="number"
                        step="any"
                        min="0"
                        :rules="[numberRule]"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-card>
          </v-col>
          <!--右5畫面顯示----------------------------------------------------------------------------------------------- -->
          <v-col cols="12" lg="12">
            <!-- <v-col cols="12" lg="12" style="border: 1px solid red"> -->
            <v-card class="mr-3 fill-height" rounded="lg" >
              <img
                class="test3"
                alt=""
                src="/forDemo/test3.png"
                width="520em"
                                style="display:block; margin:auto; align:center"


              />
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
  data: () => ({
    temps: [
      {
        name: '點1',
        temperature: 15,
        situation: "已超溫",
        time: "04:30:14",
        date: "2022/3/14"
      },
      {
        name: '矩形1',
        temperature: 23,
        situation: "已超溫",
                time: "04:30:14",
        date: "2022/3/14"
      },
      {
        name: '點2',
        temperature: 26,
        situation: "已超溫",
                time: "04:30:14",
        date: "2022/3/14"
      },
      {
        name: '點3',
        temperature: 30,
        situation: "已超溫",
                time: "04:30:14",
        date: "2022/3/14"
      },
    ],

    alignments: ['end'],

    // 左側選項按鈕動作設定
    direction_imageMode: 'right',
    fab_imageMode: false,
    fling_imageMode: false,
    hover_imageMode: false,
    tabs_imageMode: null,
    top_imageMode: false,
    right_imageMode: false,
    bottom_imageMode: true,
    left_imageMode: true,
    transition_imageMode: 'scale-transition',

    direction_palette: 'right',
    fab_palette: false,
    fling_palette: false,
    hover_palette: false,
    tabs_palette: null,
    top_palette: false,
    right_palette: false,
    bottom_palette: true,
    left_palette: true,
    transition_palette: 'scale-transition',

    direction_calibration: 'right',
    fab_calibration: false,
    fling_calibration: false,
    hover_calibration: false,
    tabs_calibration: null,
    top_calibration: false,
    right_calibration: false,
    bottom_calibration: true,
    left_calibration: true,
    transition_calibration: 'scale-transition',

    direction_light: 'right',
    fab_light: false,
    fling_light: false,
    hover_light: false,
    tabs_light: null,
    top_light: false,
    right_light: false,
    bottom_light: true,
    left_light: true,
    transition_light: 'scale-transition',

    direction_autofocus: 'right',
    fab_autofocus: false,
    fling_autofocus: false,
    hover_autofocus: false,
    tabs_autofocus: null,
    top_autofocus: false,
    right_autofocus: false,
    bottom_autofocus: true,
    left_autofocus: true,
    transition_autofocus: 'scale-transition',

    // 左二數值顯示
    number: 0,
    numberRule: (val) => {
      if (val < 0) return 'Please enter a positive number'
      return true
    },
  }),
}
</script>
<style scoped>
.drawer {
  position: fixed;
  width: 3.52em;
  left: -3.52em;
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

.subtitle {
  font-size: 12px;
}

/* .box:hover{
    background-color: blue;
  } */

.box:hover .drawer {
  left: 0;
}




</style>
