<template>
  <v-container fluid mt-3>
    <v-row>
      <v-col cols="12" md="4">
        <v-sheet class="ml-2" height="52em" rounded="lg"> pending </v-sheet>
      </v-col>

      <v-col cols="12" md="4">
        <v-sheet min-height="52em" rounded="lg"> pending </v-sheet>
      </v-col>

      <v-col cols="12" md="4">
        <v-sheet class="mr-2" min-height="52em" rounded="lg"> pending </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea'],
]
export default {
  name: 'DataScrapingPage',
}
</script>
<style scoped>
v-container {
  gap: 0em;
}
</style>
