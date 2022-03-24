<template lang="html" >
  <v-main class="pa-0 login-bg">
    <v-row
        justify="center"
        align="center"
        no-gutters
        style="height: 100vh;"
      >
      <v-col cols="12" md="3">
       <v-alert
      dense
      outlined
      v-if="errorMessage"
      type="error"
      show
    >
      {{ errorMessage }}
    </v-alert>
    
    <v-text-field v-model="username" label="username"></v-text-field>
    <v-text-field
      v-model="password"
      label="Password"
      type="password"
    ></v-text-field>
    <v-btn block @click="login"> Login </v-btn>
    <div>
      <v-text>default : admin/admin</v-text>

    </div>
      </v-col>
      </v-row>
  </v-main>
</template>
<script>
export default {
  name: 'LoginPage',
  middleware: ['auth'],
  data() {
    return {
      username: '',
      password: '',
      error: null,
    }
  },
  computed: {
    errorMessage() {
      const { error } = this
      if (!error || typeof error === 'string') {
        return error
      }
      let msg = ''
      if (error.message) {
        msg += error.message
      }
      if (error.errors) {
        msg += `(${JSON.stringify(error.errors)
          .replace(/[{}"[\]]/g, '')
          .replace(/:/g, ': ')
          .replace(/,/g, ' ')})`
      }
      return msg
    },
  },
  layout: 'TheSession',
  mounted() {
    // this.loginx = false
    // if (this.$auth.loggedIn) {
    //   this.$router.replace('/')
    // }else{
    //   this.loginx = true
    // }
  },
  methods: {
    login() {
      this.error = null

      return this.$auth
        .loginWith('local', {
          data: {
            username: this.username,
            password: this.password,
          },
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error(err)
          const responseData = err.response?.data
          this.error = responseData?.error ?? responseData
        })
    },
    localRefresh() {
      this.error = null

      return this.$auth
        .loginWith('localRefresh', {
          data: {
            username: this.username,
            password: this.password,
          },
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error(err)
          this.error = err.response?.data
        })
    },
  },
}
</script>

<style scoped>
</style>