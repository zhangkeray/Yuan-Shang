<template>
  <v-container fluid mt-3>
    <v-row>
      <v-col cols="12" md="4">
        <v-sheet class="ml-2" height="52em" rounded="xl"> pending </v-sheet>
      </v-col>

      <v-col cols="12" md="4">
        <v-sheet min-height="52em" rounded="xl"> pending </v-sheet>
      </v-col>

      <v-col cols="12" md="4">
        <v-sheet class="mr-2" min-height="52em" rounded="xl"> pending </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PermissionPage',
}
</script>
<style scoped>
v-container {
  gap: 0em;
}
</style>