<template>
  <v-container fluid mt-3>
    <!-- ------------------------------------------------------------------
    ------------------------------------------------------------------
    ------------------------------------------------------------------ -->
    <v-row>
      <v-col cols="12" md="6">
        <v-row :column="$vuetify.breakpoint.mdAndDown">
          <!-- 左上畫面顯示----------------------------------------------------------------------------------------------- -->
          <!-- <v-col cols="12" lg="12"> -->
          <v-col cols="12" lg="12" style="border: 1px solid red">
            <image-magnifier
              :src="image"
              :zoom-src="image"
              width="400"
              height="300"
              zoom-width="400"
              zoom-height="400"
            ></image-magnifier>
          </v-col>

          <!--左下畫面顯示----------------------------------------------------------------------------------------------- -->
          <!-- <v-col cols="12" lg="12"> -->
          <v-col cols="12" lg="12" style="border: 1px solid red">
            <ProductZoomer
              :base-images="images"
              :base-zoomer-options="zoomerOptions"
            />
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="6">
        <v-row :column="$vuetify.breakpoint.mdAndDown">
          <!-- 右上畫面顯示----------------------------------------------------------------------------------------------- -->
          <!-- <v-col cols="12" lg="12"> -->
          <v-col cols="12" lg="12" style="border: 1px solid red"> </v-col>

          <!--右下畫面顯示----------------------------------------------------------------------------------------------- -->
          <!-- <v-col cols="12" lg="12"> -->
          <v-col cols="12" lg="12" style="border: 1px solid red"></v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      image: 'HistoricalMonitoring/mockImg/tml.png',
      images: {
        thumbs: [
          {
            id: 1,
            url: 'HistoricalMonitoring/mockImg/tml.png',
          },
          {
            id: 2,
            url: 'HistoricalMonitoring/mockImg/tml.png',
          },
        ],
        normal_size: [
          {
            id: 1,
            url: 'HistoricalMonitoring/mockImg/tml.png',
          },
          {
            id: 2,
            url: 'HistoricalMonitoring/mockImg/tml.png',
          },
        ],
        large_size: [
          {
            id: 1,
            url: 'HistoricalMonitoring/mockImg/tml.png',
          },
          {
            id: 2,
            url: 'HistoricalMonitoring/mockImg/tml.png',
          },
        ],
      },
      'zoomerOptions': {
      zoomFactor: 3,
      pane: "pane",
      hoverDelay: 300,
      namespace: "zoomer-bottom",
      move_by_click: false,
      scroll_items: 4,
      choosed_thumb_border_color: "#dd2c00",
      scroller_position: "bottom",
      zoomer_pane_position: "right"
      }
    
    }
  },
}
</script>

<!-- <ProductZoomer :base-images="images" :base-zoomer-options="zoomerOptions" /> -->
