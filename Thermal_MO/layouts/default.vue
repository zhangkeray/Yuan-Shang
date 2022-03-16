<template>
  <v-app>
    <v-app-bar app color="" style="background: linear-gradient(to right, rgba(89, 89, 91, 1), rgba(5, 26, 31, 1))" dark>
      <img class="" alt="logo" src="/logo.png" width="150em" />
      <!-- <v-avatar color="" size="32"></v-avatar> -->
      <v-tabs centered color="white">
        <v-tab v-for="(item, i) in items" :key="i" :to="item.to" router>
          <v-icon small>{{ item.icon }}</v-icon>
          <p>&nbsp;&nbsp;</p>
          {{ item.title }}
        </v-tab>
      </v-tabs>
      <h4>user001</h4>
          <v-btn
      class="ma-2"
      :loading="loading"
      :disabled="loading"
      color="secondary"
      @click="loader = 'loading'"
    >
      登出
    </v-btn>
      <!-- <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="32"
      ></v-avatar> -->
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      // 登出
      loader: null,
      loading: false,
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
        //   title: 'Inspire',
        //   to: '/inspire',
        // },
      ],
    }
  },
  // 登出
  watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    },
}
</script>
<style scoped>

</style>
