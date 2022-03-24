<template>
  <v-container fluid mt-3>
    <v-row>
      <v-col cols="12" md="4">
        <v-sheet class="ml-2 text-center" height="52em" rounded="lg">
         <v-icon small >mdi-circle</v-icon><span>超溫</span>         <v-icon small >mdi-circle</v-icon><span>正常</span>

        </v-sheet>
      </v-col> 

      <v-col cols="12" md="4">
        <v-sheet min-height="52em" rounded="lg"> pending </v-sheet>
      </v-col>

      <v-col cols="12" md="4">
        <v-sheet class="mr-2" min-height="52em" rounded="lg"> pending  </v-sheet>
       
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'DeepLearningPage',
}
</script>
<style scoped>
</style>