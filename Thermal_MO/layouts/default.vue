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
        <template v-for="(item, i) in items">
          <v-tab :key="i" v-if="item.permission" :to="item.to" router>
            <v-icon small>{{ item.icon }}</v-icon>
            <p>&nbsp;&nbsp;</p>
            {{ item.title }}
          </v-tab>
        </template>
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
          permission: this.$auth.hasScope('user'),
        },
        {
          icon: 'mdi-clipboard-text-clock',
          title: '歷史監測',
          to: 'HistoricalMonitoringPage',
          permission: this.$auth.hasScope('user'),
        },
        {
          icon: 'mdi-google-analytics',
          title: '數據蒐集狀況監測',
          to: 'DataScrapingPage',
          permission: this.$auth.hasScope('user'),
        },
        {
          icon: 'mdi-cog',
          title: '設定',
          to: 'SetupPage',
          permission: this.$auth.hasScope('admin'),
        },
        {
          icon: 'mdi-floor-plan',
          title: '深度分析',
          to: '建置中，恕無法訪問',
          // to: 'DeepLearningPage',
          permission: this.$auth.hasScope('user'),
        },
        {
          icon: 'mdi-table-arrow-down',
          title: '智慧報表',
          to: '建置中，恕無法訪問 ',
          // to: 'SmartReportsPage',
          permission: this.$auth.hasScope('admin'),
        },
        {
          icon: 'mdi-account-group-outline',
          title: '使用者管理',
          // to: '5',
          to: 'PermissionPage',
          permission: this.$auth.hasScope('admin'),
        },
        {
          icon: 'mdi-account-group-outline',
          title: '多畫面test',
          // to: '5',
          to: 'ForTesting9-5',
          permission: this.$auth.hasScope('louis'),
        },
        {
          icon: 'mdi-account-group-outline',
          title: '多邊形test',
          // to: '5',
          to: 'ForTesting9-6',
          permission: this.$auth.hasScope('louis'),
        },
        {
          icon: 'mdi-account-group-outline',
          title: '雲台',
          // to: '5',
          to: 'ForTesting9-7',
          permission: this.$auth.hasScope('louis'),
        },
        // {
        //   icon: 'mdi-account-group-outline',
        //   title: 'API動態測試(南部)',
        //   // to: '5',
        //   to: 'ForTesting11',
        // },

        {
          icon: 'mdi-account-group-outline',
          title: '設定測試',
          // to: '5',
          to: 'ForTestingR1',
          permission: this.$auth.hasScope('ray'),
        },

        {
          icon: 'mdi-account-group-outline',
          title: 'API動態測試(後端)',
          // to: '5',
          to: 'ForTesting12',
          permission: this.$auth.hasScope('ray'),
        },
        {
          icon: 'mdi-account-group-outline',
          title: 'API靜態測試(後端)',
          // to: '5',
          to: 'ForTesting13',
          permission: this.$auth.hasScope('ray'),
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
    loader() {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    },
  },
}
</script>
