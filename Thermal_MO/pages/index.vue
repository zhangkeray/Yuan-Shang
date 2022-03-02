<template>
<v-app>
 <div>
    <v-card>
      <v-responsive :aspect-ratio="16/9">
        <v-card-text>
          This card will always be 16:9 (unless you put more stuff in it)
        </v-card-text>
      </v-responsive>
    </v-card>
  </div>
 
  </v-app>
</template>
<script>
export default {
  name: 'IndexPage',

  // Vuetify components provide
  // a theme variable that is
  // used to determine dark
  inject: {
    theme: {
      default: { isDark: false },
    },
  },
}
</script>
