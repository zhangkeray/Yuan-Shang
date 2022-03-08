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
  </v-container>
  
</template>


<script>
export default {
  name: 'PermissionPage',
  components: {},
}
</script>
<style scoped>
v-container {
  gap: 0em;
}
</style>
