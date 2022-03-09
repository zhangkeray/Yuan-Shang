<template>
  <v-container fluid mt-3>
    <v-row>
      <v-col cols="12" md="1">
        <v-sheet class="ml-2" height="52em" rounded="xl">
          <v-subheader class="justify-center">監測工具</v-subheader>
          <!-- <v-divider></v-divider> -->
          <v-btn class="mx-9 mt-0" color="white" fab>
            <img class="" alt="dot" src="/left-icons/dot.png" width="25em" />
          </v-btn>
          <v-btn class="mx-9 my-4" color="white" fab>
            <img class="" alt="line" src="/left-icons/line.png" width="15em" />
          </v-btn>
          <v-btn class="mx-9 mb-4" color="white" fab>
            <img
              class=""
              alt="rectangle"
              src="/left-icons/rectangle.png"
              width="22em"
            />
          </v-btn>
          <v-divider></v-divider>
          <v-subheader class="justify-center">影像呈現</v-subheader>
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
              <v-btn class="mx-5 mt-4" v-model="fab" color="white" fab>
                <v-icon v-if="fab"> mdi-close </v-icon>
                <img
                  v-else
                  class=""
                  alt="palette"
                  src="/left-icons/image-mode/image-mode.png"
                  width="25em"
                />
              </v-btn>

              <!-- <v-btn class="ma-2" small fab color="">
            <img class="" alt="palette" src="/rectangle.png" width="22em" />
          </v-btn> -->
            </template>
            <v-btn class="mt-4" fab small color="">
              <img
                alt="image-mode-thermal"
                src="/left-icons/image-mode/image-mode-thermal.png"
                width="25em"
              />
            </v-btn>
            <v-btn class="mt-4" fab small color="">
              <img
                alt="image-mode-thermal-msx"
                src="/left-icons/image-mode/image-mode-thermal-msx.png"
                width="25em"
              />
            </v-btn>
            <v-btn class="mt-4" fab small color="">
              <img
                alt="image-mode-digital-camera"
                src="/left-icons/image-mode/image-mode-digital-camera.png"
                width="30em"
              />
            </v-btn>
            <v-btn class="mt-4" fab small color="">
              <img
                alt="image-mode-marco"
                src="/left-icons/image-mode/image-mode-marco.png"
                width="25em"
              />
            </v-btn>
            <v-btn class="mt-4" fab small color="">
              <img
                alt="image-mode-thermal-fsx"
                src="/left-icons/image-mode/image-mode-thermal-fsx.png"
                width="30em"
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
              <v-btn class="mx-5 mt-4" v-model="fab2" color="white" fab>
                <v-icon v-if="fab2"> mdi-close </v-icon>
                <img
                  v-else
                  class=""
                  alt="palette"
                  src="/left-icons/palette/palette.png"
                  width="23em"
                />
              </v-btn>

              <!-- <v-btn class="ma-2" small fab color="">
            <img class="" alt="palette" src="/rectangle.png" width="22em" />
          </v-btn> -->
            </template>
            <v-btn class="mt-4" fab small color="">
              <img
                alt="palette-iron"
                src="/left-icons/palette/palette-iron.png"
                width="30em"
              />
            </v-btn>
            <v-btn class="mt-4" fab small color="">
              <img
                alt="palette-lava"
                src="/left-icons/palette/palette-lava.png"
                width="30em"
              />
            </v-btn>
            <v-btn class="mt-4" fab small color="">
              <img
                alt="palette-gray"
                src="/left-icons/palette/palette-gray.png"
                width="30em"
              />
            </v-btn>
            <v-btn class="mt-4" fab small color="">
              <img
                alt="palette-rainbow"
                src="/left-icons/palette/palette-rainbow.png"
                width="30em"
              />
            </v-btn>
            <v-btn class="mt-4" fab small color="">
              <img
                alt="palette-rainbow-hc"
                src="/left-icons/palette/palette-rainbow-hc.png"
                width="30em"
              />
            </v-btn>
            <v-btn class="mt-4" fab small color="">
              <img
                alt="palette-arctic"
                src="/left-icons/palette/palette-arctic.png"
                width="30em"
              />
            </v-btn>
          </v-speed-dial>
          <!-- ----------------------------------------------------------------------------------------------- -->
          <v-divider></v-divider>
          <v-subheader class="justify-center">計算工具</v-subheader>
          <!-- <v-divider></v-divider> -->
          <!-- 照明light -->
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
              <v-btn class="mx-5 mt-4" v-model="fab_light" color="" fab>
                <v-icon v-if="fab_light"> mdi-close </v-icon>
                <img
                  v-else
                  alt="palette"
                  src="/left-icons/light/light-on.png"
                  width="18em"
                />
              </v-btn>
            </template>
            <v-btn class="mt-4" fab small color="">
              <img
                alt="palette-iron"
                src="/left-icons/light/light-on.png"
                width="18em"
              />
            </v-btn>
            <v-btn class="mt-4" fab small color="">
              <img
                alt="palette-lava"
                src="/left-icons/light/light-off.png"
                width="18em"
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
            <template v-slot:activator>
              <v-btn
                class="mx-5 mt-4"
                v-model="fab_autofocus"
                color="white"
                fab
              >
                <v-icon v-if="fab_autofocus"> mdi-close </v-icon>
                <img
                  v-else
                  alt="palette"
                  src="/left-icons/autofocus/autofocus.png"
                  width="23em"
                />
              </v-btn>
            </template>
            <v-btn class="mt-4" fab small color="">
              <img
                alt="palette-iron"
                src="/left-icons/autofocus/autofocus-focus-further.png"
                width="23em"
              />
            </v-btn>
            <v-btn class="mt-4" fab small color="">
              <img
                alt="palette-lava"
                src="/left-icons/autofocus/autofocus-focus-closer.png"
                width="23em"
              />
            </v-btn>
            <v-btn class="mt-4" fab small color="">
              <img
                alt="palette-gray"
                src="/left-icons/autofocus/autofocus-autofocus.png"
                width="23em"
              />
            </v-btn>
          </v-speed-dial>
          <!-- ----------------------------------------------------------------------------------------------- -->
        </v-sheet>
      </v-col>

      <v-col cols="12" md="7">
        <v-sheet min-height="40em" rounded="xl"> </v-sheet>
      </v-col>

      <v-col cols="12" md="4">
        <v-sheet class="mr-2" min-height="40em" rounded="xl">
          <v-subheader class="justify-center">警報設置</v-subheader>
          <!-- <v-divider></v-divider> -->
          <v-simple-table fixed-header height="300px">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">監測範圍</th>
                  <th class="text-left">溫度</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in desserts" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.temperature }}°C</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-sheet>
      </v-col>

      <v-col cols="12" md="11">
        <v-sheet class="ml-2" min-height="3em" rounded="xl">
          <v-btn class="ma-2" small fab color="">
            <img class="" alt="image mode" src="/rectangle.png" width="22em" />
          </v-btn>
          <v-btn class="ma-2" small fab color="">
            <img class="" alt="palette" src="/rectangle.png" width="22em" />
          </v-btn>
          <v-btn class="ma-2" small fab color="">
            <img class="" alt="image mode" src="/rectangle.png" width="22em" />
          </v-btn>
          <v-btn class="ma-2" small fab color="">
            <img class="" alt="palette" src="/rectangle.png" width="22em" />
          </v-btn>
          <v-btn class="ma-2" small fab color="">
            <img class="" alt="image mode" src="/rectangle.png" width="22em" />
          </v-btn>
          <v-btn class="ma-2" small fab color="">
            <img class="" alt="palette" src="/rectangle.png" width="22em" />
          </v-btn>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PermissionPage',
  data: () => ({
    direction: 'right',
    fab: false,
    fling: false,
    hover: false,
    tabs: null,
    top: false,
    right: false,
    bottom: true,
    left: true,
    transition: 'scale-transition',

    direction2: 'right',
    fab2: false,
    fling2: false,
    hover2: false,
    tabs2: null,
    top2: false,
    right2: false,
    bottom2: true,
    left2: true,
    transition2: 'scale-transition',

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
  }),

  // data() {
  //   return {
  //     desserts: [
  //       {
  //         name: '點1',
  //         temperature: 15,
  //       },
  //       {
  //         name: '矩形1',
  //         temperature: 23,
  //       },
  //       {
  //         name: '點2',
  //         temperature: 26,
  //       },
  //       {
  //         name: '點3',
  //         temperature: 30,
  //       },
  //     ],
  //   }
  // },
}
</script>
<style scoped>
v-container {
  gap: 0em;
}
</style>
