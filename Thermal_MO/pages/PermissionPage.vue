<template>
  <div class="carousel-wrapper">
    <VueSlickCarousel v-bind="slickOptions">
      <div class="img-wrapper">
        <MonthHeatMap1 />
      </div>

      <div class="img-wrapper">
        <MonthHeatMap2 />
      </div>

      <div class="img-wrapper">
        <MonthHeatMap3 />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import MonthHeatMap1 from '../components/HistoricalMonitoring/MonthHeatMap/MonthHeatMap1.vue'
import MonthHeatMap2 from '../components/HistoricalMonitoring/MonthHeatMap/MonthHeatMap2.vue'
import MonthHeatMap3 from '../components/HistoricalMonitoring/MonthHeatMap/MonthHeatMap3.vue'
// import MonthHeatMap4 from './MonthHeatMap/MonthHeatMap4.vue'
// import MonthHeatMap5 from './MonthHeatMap/MonthHeatMap5.vue'
// import MonthHeatMap6 from './MonthHeatMap/MonthHeatMap6.vue'
// import MonthHeatMap7 from './MonthHeatMap/MonthHeatMap7.vue'
// import MonthHeatMap8 from './MonthHeatMap/MonthHeatMap8.vue'
// import MonthHeatMap9 from './MonthHeatMap/MonthHeatMap9.vue'
// import MonthHeatMap10 from './MonthHeatMap/MonthHeatMap10.vue'
// import MonthHeatMap11 from './MonthHeatMap/MonthHeatMap11.vue'
// import MonthHeatMap12 from './MonthHeatMap/MonthHeatMap12.vue'
export default {
  components: {
    MonthHeatMap1,
    MonthHeatMap2,
    MonthHeatMap3,
    // MonthHeatMap4,
    // MonthHeatMap5,
    // MonthHeatMap6,
    // MonthHeatMap7,
    // MonthHeatMap8,
    // MonthHeatMap9,
    // MonthHeatMap10,
    // MonthHeatMap11,
    // MonthHeatMap12,
  },
  data() {
    return {
      slickOptions: {
        slidesToShow: 2,
        arrows: false,
      },
    }
  },
}
</script>

<style>
.carousel-wrapper {
  padding: 40px;
}
.img-wrapper img {
  margin: auto;
  width: 200px;
  height: 100px;
  background-image: linear-gradient(gray 100%, transparent 0);
}
</style>
