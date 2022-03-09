<template>
  <v-container fluid mt-3 >
    <v-row >
      <v-col
        cols="12"
        md="1"
        
      >
        <v-sheet class="ml-2" height="80vh" rounded="xl">
          <p>檢測工具</p>
        </v-sheet>
      </v-col>

      <v-col
        cols="12"
        md="8"
      >
       <v-sheet min-height="86vh" rounded="xl"> </v-sheet>

      </v-col>

      <v-col
        cols="12"
        md="3"
      >
        <v-sheet class="mr-2" min-height="86vh" rounded="xl"> </v-sheet>
      </v-col>
    </v-row>

    <v-footer
    color="primary lighten-1"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
  </v-container>
  
  
</template>


<script>
export default {
  name: 'PermissionPage',
  data: () => ({
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
    }),
}
</script>
<style scoped>
v-container {
  gap: 0em;
}
</style>
