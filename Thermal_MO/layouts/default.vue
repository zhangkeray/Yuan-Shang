<template>
  <v-app>
    <v-app-bar
      app
      color=""
      style="
        background: linear-gradient(
          to right,
          rgba(89, 89, 91, 1),
          rgba(5, 26, 31, 1)
        );
      "
      dark
    >
      <img class="mr-16 logo" alt="logo" src="/logo.png" width="125em" />
      <!-- <v-avatar color="" size="32"></v-avatar> -->
      <v-tabs color="white">
        <v-tab v-for="(item, i) in items" :key="i" :to="item.to" router>
          <v-icon small>{{ item.icon }}</v-icon>
          <p>&nbsp;&nbsp;</p>
          {{ item.title }}
        </v-tab>
      </v-tabs>
      <h4 class="subtitle">{{ $auth.user.name }}</h4>
      <v-btn
        icon
        class="ml-2 mr-1"
        :loading="loading"
        :disabled="loading"
        color="#9BA3A5"
        small
        @click="$auth.logout()"
      >
        <v-icon small>mdi-logout</v-icon>
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
      loader: null,
      loading: false,
      items: [
        {
          icon: 'mdi-tablet',
          title: '即時監控',
          to: '/',
        },
        {
          icon: 'mdi-clipboard-text-clock',
          title: '歷史監測',
          to: 'HistoricalMonitoringPage',
        },
        {
          icon: 'mdi-google-analytics',
          title: '數據蒐集狀況監測',
          to: 'DataScrapingPage',
        },
        {
          icon: 'mdi-cog',
          title: '設定',
          to: 'SetupPage',
        },
        {
          icon: 'mdi-floor-plan',
          title: '深度分析',
          // to: '5',
          to: 'DeepLearningPage',
        },
        {
          icon: 'mdi-table-arrow-down',
          title: '智慧報表',
          // to: '5',
          to: 'SmartReportsPage',
        },
        {
          icon: 'mdi-account-group-outline',
          title: '權限管理',
          // to: '5',
          to: 'PermissionPage',
        },
        // {
        //   icon: 'mdi-account-group-outline',
        //   title: '測試7:禁用',
        //   // to: '5',
        //   to: 'ForTesting7',
        // },
        {
          icon: 'mdi-account-group-outline',
          title: '原API動態',
          // to: '5',
          to: 'ForTesting8_5',
        },
        {
          icon: 'mdi-account-group-outline',
          title: 'API動態測試',
          // to: '5',
          to: 'ForTesting8',
        },
        {
          icon: 'mdi-account-group-outline',
          title: 'API動態測試8real(比造原寫法)',
          // to: '5',
          to: 'ForTesting8real',
        },
        // {
        //   icon: 'mdi-account-group-outline',
        //   title: '測試9:Node.JS',
        //   // to: '5',
        //   to: 'ForTesting9',
        // },
        {
          icon: 'mdi-account-group-outline',
          title: '測試13',
          // to: '5',
          to: 'ForTesting13',
        },
        // {
        //   icon: 'mdi-account-group-outline',
        //   title: '測試9',
        //   // to: '5',
        //   to: 'ForTesting9',
        // },

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
    loader() {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    },
  },
}
</script>
