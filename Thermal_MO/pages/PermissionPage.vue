<template>
  <div class="container">
    <div class="box">
      <v-card class="drawer" rounded="lg" >
        <v-row>
          <v-col>
            <p class="subtitle text-center"><br/>監測<br/>工具</p>
            <v-btn class="mx-3" color="" fab x-small >
              <img
                class=""
                alt="spot"
                src="/left-icons/spot.png"
                width="18em"
              />
            </v-btn>
            <v-btn class="mx-3 mt-3" color="" fab x-small>
              <img
                class=""
                alt="line"
                src="/left-icons/line.png"
                width="12em"
              />
            </v-btn>
            <v-btn class="mx-3 my-3" color="" fab x-small>
              <img
                class=""
                alt="rectangle"
                src="/left-icons/rectangle.png"
                width="16em"
              />
            </v-btn>
            <v-divider></v-divider>
            <p class="subtitle text-center"><br/>影像<br/>呈現</p>
            <!-- <v-divider></v-divider> -->
            <!-- <v-btn class="mx-10 my-3" small fab color="">
            <img class="" alt="palette" src="/rectangle.png" width="22em" />
          </v-btn> -->

            <!-- 影像模式image-mode -->
            <!-- ----------------------------------------------------------------------------------------------- -->
            <v-speed-dial
              v-model="fab"
              :top="top"
              :bottom="bottom"
              :right="right"
              :left="left"
              :direction="direction"
              :open-on-hover="hover"
              :transition="transition"
            >
              <template v-slot:activator>
                <v-btn v-model="fab" class="mx-3" color="" fab x-small>
                  <v-icon v-if="fab"> mdi-close </v-icon>
                  <img
                    v-else
                    alt="palette"
                    src="/left-icons/image-mode/image-mode.png"
                    width="18em"
                  />
                </v-btn>
              </template>
              <v-btn class="mt-0" color="" fab x-small>
                <img
                  alt="image-mode-thermal"
                  src="/left-icons/image-mode/image-mode-thermal.png"
                  width="20em"
                />
              </v-btn>
              <v-btn class="mt-0" color="" fab x-small>
                <img
                  alt="image-mode-thermal-msx"
                  src="/left-icons/image-mode/image-mode-thermal-msx.png"
                  width="20em"
                />
              </v-btn>
              <v-btn class="mt-0" color="" fab x-small>
                <img
                  alt="image-mode-digital-camera"
                  src="/left-icons/image-mode/image-mode-digital-camera.png"
                  width="20em"
                />
              </v-btn>
              <v-btn class="mt-0" color="" fab x-small>
                <img
                  alt="image-mode-marco"
                  src="/left-icons/image-mode/image-mode-marco.png"
                  width="17em"
                />
              </v-btn>
              <v-btn class="mt-0" color="" fab x-small>
                <img
                  alt="image-mode-thermal-fsx"
                  src="/left-icons/image-mode/image-mode-thermal-fsx.png"
                  width="20em"
                />
              </v-btn>
            </v-speed-dial>
            <!-- ----------------------------------------------------------------------------------------------- -->

            <!-- 色譜模式palette -->
            <!-- ----------------------------------------------------------------------------------------------- -->
            <v-speed-dial
              v-model="fab2"
              :top="top2"
              :bottom="bottom2"
              :right="right2"
              :left="left2"
              :direction="direction2"
              :open-on-hover="hover2"
              :transition="transition2"
            >
              <template v-slot:activator>
                <v-btn v-model="fab2" class="mx-3 my-3" color="" fab x-small>
                  <v-icon v-if="fab2"> mdi-close </v-icon>
                  <img
                    v-else
                    class=""
                    alt="palette"
                    src="/left-icons/palette/palette.png"
                    width="18em"
                  />
                </v-btn>
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
            <!-- ----------------------------------------------------------------------------------------------- -->
            <v-divider></v-divider>
            <p class="subtitle text-center"><br/>計算<br/>工具</p>
            <!-- 計算calibration -->
            <!-- ----------------------------------------------------------------------------------------------- -->
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
                <v-btn v-model="fab_light" class="mx-3" color="" fab x-small>
                  <v-icon v-if="fab_light"> mdi-close </v-icon>
                  <img
                    v-else
                    alt="palette"
                    src="/left-icons/calibration.png"
                    width="15em"
                  />
                </v-btn>
              </template>
              <v-btn class="" color="" fab x-small>
                <img
                  alt="palette-iron"
                  src="/left-icons/light/light-on.png"
                  width="14em"
                />
              </v-btn>
              <v-btn class="" color="" fab x-small>
                <img
                  alt="palette-lava"
                  src="/left-icons/light/light-off.png"
                  width="14em"
                />
              </v-btn>
            </v-speed-dial>
            <!-- ----------------------------------------------------------------------------------------------- -->            <!-- 照明light -->
            <!-- ----------------------------------------------------------------------------------------------- -->
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
                <v-btn v-model="fab_light" class="mx-3 mt-3" color="" fab x-small>
                  <v-icon v-if="fab_light"> mdi-close </v-icon>
                  <img
                    v-else
                    alt="palette"
                    src="/left-icons/light/light-on.png"
                    width="14em"
                  />
                </v-btn>
              </template>
              <v-btn class="" color="" fab x-small>
                <img
                  alt="palette-iron"
                  src="/left-icons/light/light-on.png"
                  width="14em"
                />
              </v-btn>
              <v-btn class="" color="" fab x-small>
                <img
                  alt="palette-lava"
                  src="/left-icons/light/light-off.png"
                  width="14em"
                />
              </v-btn>
            </v-speed-dial>
            <!-- ----------------------------------------------------------------------------------------------- -->

            <!-- 自動對焦autoFocus -->
            <!-- ----------------------------------------------------------------------------------------------- -->
            <v-speed-dial
              v-model="fab_autofocus"
              :top="top_autofocus"
              :bottom="bottom_autofocus"
              :right="right_autofocus"
              :left="left_autofocus"
              :direction="direction_autofocus"
              :open-on-hover="hover_autofocus"
              :transition="transition_autofocus"
            >
              <template #activator>
                <v-btn v-model="fab_autofocus" class="mx-3 my-3" color="" fab x-small>
                  <v-icon v-if="fab_autofocus"> mdi-close </v-icon>
                  <img
                    v-else
                    alt="palette"
                    src="/left-icons/autofocus/autofocus.png"
                    width="16em"
                  />
                </v-btn>
              </template>
              <v-btn class="" color="" fab x-small>
                <img
                  alt="palette-iron"
                  src="/left-icons/autofocus/autofocus-focus-further.png"
                  width="19em"
                />
              </v-btn>
              <v-btn class="" color="" fab x-small>
                <img
                  alt="palette-lava"
                  src="/left-icons/autofocus/autofocus-focus-closer.png"
                  width="20em"
                />
              </v-btn>
              <v-btn class="" color="" fab x-small>
                <img
                  alt="palette-gray"
                  src="/left-icons/autofocus/autofocus-autofocus.png"
                  width="18em"
                />
              </v-btn>
            </v-speed-dial>
            <!-- 下排影像工具 -->
            <!-- ----------------------------------------------------------------------------------------------- -->
                        <v-divider></v-divider>
            <p class="subtitle text-center"><br/>影像<br/>調整</p>
                     <v-btn class="mx-3" color="" fab x-small>
              <img
                class=""
                alt="spot"
                src="/left-icons/fullscreen.png"
                width="19em"
              />
            </v-btn>
            <v-btn class="mx-3 mt-3" color="" fab x-small>
              <img
                class=""
                alt="line"
                src="/left-icons/snapshot.png"
                width="19em"
              />
            </v-btn>
            <v-btn class="mx-3 mt-3" color="" fab x-small>
              <img
                class=""
                alt="rectangle"
                src="/left-icons/freeze.png"
                width="11em"
              />
            </v-btn>  
               <v-btn class="mx-3 my-3" color="" fab x-small>
              <img
                class=""
                alt="rectangle"
                src="/left-icons/hide-overlay.png"
                width="18em"
              />
            </v-btn>           
            </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>
<style scoped>
.drawer {
  position: absolute;
  width: 3.5em;
  left: -3.5em;
  transition: all 0.5s;
}

.box {
  height: 30px;
  width: 30px;
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