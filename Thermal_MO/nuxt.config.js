import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Thermal_MO',
    title: 'Thermal_MO',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // 字體
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
        Inter: [900,700,500],
      },
    },
  

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // auth 登入用
    '@nuxtjs/auth-next',
    // socket
    'nuxt-socket-io',
  ],
  io: {
    // we could have multiple sockets that we identify with names
    // one of these sockets may have set "default" to true
    sockets: [
      {
        default: true, // make this the default socket
        name: 'main', // give it a name that we can later use to choose this socket in the .vue file
        url: 'http://192.168.0.173:6147', // URL wherever your socket IO server runs
      },
    ],
  },

  // 日後做登入參考用
  auth: {
    redirect: {
      login: '/login',
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'https://sakko-demo-api.herokuapp.com/api/v1/user/sign_in',
            method: 'post',
            propertyName: 'user.auth_jwt',
          },
          logout: {
            url: 'https://sakko-demo-api.herokuapp.com/api/v1/user/sign_out',
            method: 'delete',
          },
          user: {
            url: 'https://sakko-demo-api.herokuapp.com/api/v1/user/me',
            method: 'get',
            propertyName: 'user',
          },
        },
        tokenName: 'auth-token',
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  // 切換ip
  server: {
    // host: '192.168.0.182', // Ray
    // host: '192.168.0.173', // Louis
    port: 3002,
  },
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {},
  },
}
