<template>
  <div class="fluid mt-3">
    <v-img class="bgimg" src="bgimg.png" height="93.2vh" />
    <v-row>
      <v-col cols="12" md="12">
        <v-card class="mt-3 mx-6" rounded="md" elevation="6" height="51.55em">
          <v-tabs
            v-model="tab"
            vertical
            slider-size="3"
            color="#37484C"
            background-color="#f1f1f1"
            height="51.55em"
          >
            <v-tab href="#tab-1" style="font-size: 15px; justify-content: left">
              <img class="" alt="" src="/data_scraping/data.png" width="14em" />
              <p>&nbsp;&nbsp;</p>
              警報設定
            </v-tab>

            <v-tab href="#tab-2" style="font-size: 15px; justify-content: left">
              <img class="" alt="" src="/data_scraping/data.png" width="14em" />
              <p>&nbsp;&nbsp;</p>
              硬體分配管理
            </v-tab>

            <v-tab href="#tab-3" style="font-size: 15px; justify-content: left">
              <img class="" alt="" src="/data_scraping/data.png" width="14em" />
              <p>&nbsp;&nbsp;</p>
              伺服器主機管理
            </v-tab>

            <v-tab href="#tab-4" style="font-size: 15px; justify-content: left">
              <img class="" alt="" src="/data_scraping/data.png" width="14em" />
              <p>&nbsp;&nbsp;</p>
              相機管理
            </v-tab>

            <v-tab-item value="tab-1">
              <client-only>
                <SettingAlert />
              </client-only>
            </v-tab-item>

            <v-tab-item value="tab-2">
              <client-only>
                <HardwareDistribution />
              </client-only>
            </v-tab-item>

            <v-tab-item value="tab-3">
              <client-only>
                <ServerManagement />
              </client-only>
            </v-tab-item>

            <v-tab-item value="tab-4">
              <client-only>
                <CamaraManagement />
              </client-only>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SettingAlert from '../components/Setup/SettingAlert.vue'
import HardwareDistribution from '../components/Setup/HardwareDistribution.vue'
import ServerManagement from '../components/Setup/ServerManagement.vue'
import CamaraManagement from '../components/Setup/CamaraManagement.vue'

export default {
  name: 'SetupPage',
  components: {
    SettingAlert,
    HardwareDistribution,
    ServerManagement,
    CamaraManagement,
  },
  data: () => ({
    tab: 'tab-1',
    // tab: 'null',
  }),
  methods: {
    test() {
      console.log('test')
    },
  },
}
</script>
<style scoped>
.bgimg {
  position: absolute;
}

.scroll4::-webkit-scrollbar {
  width: 10px;
}

.scroll4::-webkit-scrollbar-thumb {
  background: #666;
  border-radius: 20px;
}

.scroll4::-webkit-scrollbar-track {
  background: #ddd;
  border-radius: 20px;
}
</style>
