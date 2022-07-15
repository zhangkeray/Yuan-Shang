<template>
  <div class="fluid mt-3">
    <v-img class="bgimg" src="bgimg.png" height="93.2vh" />

    <v-row>
      <!-- 左測選項----------------------------------------------------------------------------------------------- -->
      <v-col cols="12" md="12">
        <!-- <v-col cols="12" md="7" style="border: 1px solid red"> -->
        <v-card class="mt-3 mx-6" rounded="md" elevation="6" height="51.55em">
          <v-tabs
            vertical
            slider-size="3"
            color="#37484C"
            background-color="#f1f1f1"
            height="51.55em"
            v-model="tab"
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
              <no-ssr>
                <SettingAlert />
              </no-ssr>
            </v-tab-item>

            <v-tab-item value="tab-2">
              <no-ssr>
                <HardwareDistribution />
              </no-ssr>
            </v-tab-item>

            <v-tab-item value="tab-3">
              <no-ssr>
                <ServerManagement />
              </no-ssr>
            </v-tab-item>

            <v-tab-item value="tab-4">
              <no-ssr>
                <CamaraManagement />
              </no-ssr>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// echarts引入
import SettingAlert from '../components/Setup/SettingAlert.vue'
import HardwareDistribution from '../components/Setup/HardwareDistribution.vue'
import ServerManagement from '../components/Setup/ServerManagement.vue'
import CamaraManagement from '../components/Setup/CamaraManagement.vue'

export default {
  // echarts引入
  components: {
    SettingAlert,
    HardwareDistribution,
    ServerManagement,
    CamaraManagement,
  },
  name: 'IndexPage',
  head: {
    title: '即時監控',
    link: [
      // { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: 'stylesheet', href: '/css/jquery-ui.css' },
      { rel: 'stylesheet', href: '/css/object.css' },
      { rel: 'stylesheet', href: '/css/card3.css' },
      { rel: 'stylesheet', href: 'css/details.css' },
    ],
    script: [
      // {
      //   src: '/js/jquery.js',
      //   type: 'text/javascript',
      // },
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
    tab: 'tab-1',
    // tab: 'null',
  }),
  methods: {
    test(){
      console.log('test')
    }
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


