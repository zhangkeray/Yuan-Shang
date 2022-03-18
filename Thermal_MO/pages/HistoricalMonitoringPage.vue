<template>
  <v-container fluid mt-3>
    <v-row>
      <v-col cols="12" md="4">
        <v-sheet class="ml-2" height="52em" rounded="lg">pending
          <div class="text-center">
            
    <v-progress-circular
      :rotate="-90"
      :size="100"
      :width="15"
      :value="valueToday"
      color="#37484C"
    >
      {{ valueToday }}
      
    </v-progress-circular>

    <v-progress-circular
      :rotate="-90"
      :size="100"
      :width="15"
      :value="valueLastday"
      color="#37484C"
    >
      {{ valueLastday }}
    </v-progress-circular>

    <v-progress-circular
      :rotate="-90"
      :size="100"
      :width="15"
      :value="valueThisWeek"
      color="#37484C"
    >
      {{ valueThisWeek }}
    </v-progress-circular>

    <v-progress-circular
      :rotate="-90"
      :size="100"
      :width="15"
      :value="valueThisMonth"
      color="#37484C"
    >
      {{ valueThisMonth }}
    </v-progress-circular>
  </div>

        </v-sheet>
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
export default {
  name: 'HistoricalMonitoringPage',
  data () {
      return {
        interval: {},
        valueToday: 30,
        valueLastday: 20,
        valueThisWeek: 80,
       valueThisMonth: 50,
      }
    },
    beforeDestroy () {
      clearInterval(this.interval)
    },


    mounted () {
      this.interval = setInterval(() => {
        if (this.value === 100) {
          return (this.value = 0)
        }
        // this.value += 10
      }, 1000)
    },
}
</script>
<style scoped>
</style>