<template >
  <!-- <v-main class="grey lighten-3"> -->
    <!-- <div> -->
      <v-container fluid  ma-0 py-0 >
        <v-row mt-5>
          <v-col cols="12" sm="1" >
<!-- ------------------------------------------------ -->

              <!-- <v-navigation-drawer
        v-model="drawer"
        permanent
        expand-on-hover
        mini-variant-width="4em"
      > -->
      <v-navigation-drawer 
        permanent
        nav
        expand-on-hover
        

      >
        <v-list>
          <!-- <v-list-item link>
            <v-list-item-content>
              <v-img src="/yst.png"></v-img>

            </v-list-item-content>
          </v-list-item> -->

          <v-list-item class="px-2">
  
            <v-list-item-content>
              <v-list-item-subtitle>監測工具</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list nav dense rounded>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            color="primary"
            class="px-3"
          >
            <v-list-item-action>
              <v-icon small>{{ item.icon }}</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

              <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
<!-- ------------------------------------------------ -->
          </v-col>

          <v-col cols="12" sm="9" >
            <v-sheet min-height="80vh" rounded="lg"> </v-sheet>
          </v-col>

          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268"> </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    <!-- </div> -->
  <!-- </v-main> -->

  <!-- <v-container fluid >
    <v-layout>
      <v-flex xs1 item1 ma-auto>
           <v-sheet
              rounded="lg"
              min-height="80vh"
            >
            </v-sheet>
      </v-flex>
      <v-flex xs8 item2>
           <v-sheet
              rounded="lg"
              min-height="80vh"
            >
            </v-sheet>
      </v-flex>
      <v-flex xs3 item3>
           <v-sheet
              rounded="lg"
              min-height="80vh"
            >
            </v-sheet>
      </v-flex>
    </v-layout>
  </v-container> -->
</template>


<script>
export default {
  name: 'SmartReportsPage',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-tablet',
          title: '即時監控',
          to: '/',
        },
        {
          icon: 'mdi-google-analytics',
          title: '數據蒐集狀況監測',
          to: 'DataScrapingPage',
        },
        {
          icon: 'mdi-clipboard-text-clock',
          title: '歷史監測',
          to: 'HistoricalMonitoringPage',
        },
        {
          icon: 'mdi-cog',
          title: '設定',
          to: 'SetupPage',
        },
        {
          icon: 'mdi-floor-plan',
          title: '深度分析',
          to: 'DeepLearningPage',
        },
        {
          icon: 'mdi-table-arrow-down',
          title: '智慧報表',
          to: 'SmartReportsPage',
        },
        {
          icon: 'mdi-account-group-outline',
          title: '權限管理',
          to: 'PermissionPage',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
<style scoped>
v-container {
  gap: 0em;
}
</style>


