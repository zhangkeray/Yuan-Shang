<template>
  <v-app id="inspire">
    <v-app-bar app color="">
      <v-avatar color="" size="32"></v-avatar>
      <v-tabs centered  color="grey darken-1">
        <v-tab v-for="(item, i) in items" :key="i" :to="item.to" router>
          <v-icon small>{{ item.icon }}</v-icon>
          <p>&nbsp;&nbsp;</p>
          {{ item.title }}
        </v-tab>
      </v-tabs>
      <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="32"
      ></v-avatar>
    </v-app-bar>
    <v-main class="grey lighten-3">
        <Nuxt />
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
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
        // {
        //   icon: 'mdi-chart-bubble',
        //   title: 'Blogs',
        //   to: {
        //     name: 'blogs'
        //   }
        // }
        // {
        //   icon: 'mdi-chart-bubble',
        //   title: 'Inspire',
        //   to: '/inspire',
        // },
      ]
    }
  },
}
</script>
