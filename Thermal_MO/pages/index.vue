<template>
  <v-container fluid mt-3>

<v-navigation-drawer >
    <!-- -->
  </v-navigation-drawer>

    <v-row>
      <v-col cols="12" md="7">
        <v-row :column="$vuetify.breakpoint.mdAndDown">
          <!-- 左上畫面顯示----------------------------------------------------------------------------------------------- -->
          <v-col cols="12" lg="12">
          <!-- <v-col cols="12" lg="12" style="border: 1px solid red"> -->
            <v-card class="ml-3 fill-height" rounded="lg">
              <v-responsive :aspect-ratio="4 / 3">
                <v-card-text>
                  This card will always be 4:3 (unless you put more stuff in it)
                </v-card-text>
              </v-responsive>
            </v-card>
          </v-col>

          <!--左下畫面顯示----------------------------------------------------------------------------------------------- -->
          <v-col cols="12" lg="12">
          <!-- <v-col cols="12" lg="12" style="border: 1px solid red"> -->
            <v-card class="ml-3 fill-height" rounded="lg">
              <v-form>
                <v-container grid-list-sm>
                  <v-layout wrap>
                    <v-subheader class="mt-3">放射率：</v-subheader>
                    <v-flex xs1 sm1 md1>
                      <v-text-field
                        ref="input"
                        v-model.number="number"
                        type="number"
                        step="any"
                        min="0"
                        :rules="[numberRule]"
                      ></v-text-field>
                    </v-flex>
                     <v-subheader class="mt-3">反射率：</v-subheader>
                    <v-flex xs1 sm1 md1>
                      <v-text-field
                        ref="input"
                        v-model.number="number"
                        type="number"
                        step="any"
                        min="0"
                        :rules="[numberRule]"
                      ></v-text-field>
                    </v-flex>
                
                     <v-subheader class="mt-3">放射率：</v-subheader>
                    <v-flex xs1 sm1 md1>
                      <v-text-field
                        ref="input"
                        v-model.number="number"
                        type="number"
                        step="any"
                        min="0"
                        :rules="[numberRule]"
                      ></v-text-field>
                    </v-flex>
                     <v-subheader class="mt-3">距離：</v-subheader>
                    <v-flex xs1 sm1 md1>
                      <v-text-field
                        ref="input"
                        v-model.number="number"
                        type="number"
                        step="any"
                        min="0"
                        :rules="[numberRule]"
                      ></v-text-field>
                    </v-flex>
                     <v-subheader class="mt-3">濕度：</v-subheader>
                    <v-flex xs1 sm1 md1>
                      <v-text-field
                        ref="input"
                        v-model.number="number"
                        type="number"
                        step="any"
                        min="0"
                        :rules="[numberRule]"
                      ></v-text-field>
                    </v-flex>
                     <v-subheader class="mt-3">大氣溫度：</v-subheader>
                    <v-flex xs1 sm1 md1>
                      <v-text-field
                        ref="input"
                        v-model.number="number"
                        type="number"
                        step="any"
                        min="0"
                        :rules="[numberRule]"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <!--右邊畫面顯示----------------------------------------------------------------------------------------------- -->
      <v-col cols="12" md="5">
      <!-- <v-col cols="12" md="5" style="border: 1px solid red"> -->
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
      },
      {
        name: '矩形1',
        temperature: 23,
      },
      {
        name: '點2',
        temperature: 26,
      },
      {
        name: '點3',
        temperature: 30,
      },
    ],

    alignments: ['end'],

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

    // 左二數值顯示
    number: 0,
    numberRule: (val) => {
      if (val < 0) return 'Please enter a positive number'
      return true
    },
  }),
}
</script>









