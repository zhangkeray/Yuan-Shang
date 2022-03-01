<template>
       <v-skeleton-loader
      class="mx-auto"
      max-width="2000"
      type="card, card, card"
      
    ></v-skeleton-loader>
    
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
