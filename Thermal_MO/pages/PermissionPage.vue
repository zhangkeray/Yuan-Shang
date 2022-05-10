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
            
          </v-col>

          <!--左下畫面顯示----------------------------------------------------------------------------------------------- -->
          <!-- <v-col cols="12" lg="12"> -->
          <v-col cols="12" lg="12" style="border: 1px solid red">
            <div class="zoom-box">
              <img
                class="xzoom-2-4"
                src="/HistoricalMonitoring/mockImg/tml.png"
                xoriginal="/HistoricalMonitoring/mockImg/tml.png"
                width="300"
              />
            </div>
            <div id="zoom-target" style="width:300px;height:250px">

            </div>
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
  head: {
    title: '即時監控',
    link: [
      // { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: 'stylesheet', href: '/imgZoom/css/normalize.css' },
      { rel: 'stylesheet', href: '/imgZoom/css/foundation.css' },
      { rel: 'stylesheet', href: '/css/imgZoom/demo.css' },
      { rel: 'stylesheet', media: 'all', href: '/dist/xzoom.css' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        media: 'all',
        href: '/fancybox/source/jquery.fancybox.css',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        media: 'all',
        href: '/magnific-popup/css/magnific-popup.css',
      },
    ],
    script: [
      {
        src: '/js/vendor/modernizr.js',
        type: 'text/javascript',
      },
      {
        src: '/js/vendor/jquery.js',
        type: 'text/javascript',
      },

      {
        src: '/dist/xzoom.min.js',
        type: 'text/javascript',
      },

      {
        src: '/hammer.js/1.0.5/jquery.hammer.min.js',
        type: 'text/javascript',
      },
      {
        src: '/fancybox/source/jquery.fancybox.js',
        type: 'text/javascript',
      },
      {
        src: '/magnific-popup/js/magnific-popup.js',
        type: 'text/javascript',
      },
      {
        src: '/js/foundation.min.js',
        type: 'text/javascript',
      },
      {
        src: '/js/setup.js',
        type: 'text/javascript',
      },
    ],
  },
  mounted() {
    $(function () {
      $('.xzoom-2-4').xzoom({
          position: '#zoom-target',
                    tint: '#000',
            tintOpacity: 0.3,
            fadeOut: true,
      })
    })
  },
}
</script>
<style scoped>
#zoom-target {
  background-image:url('/HistoricalMonitoring/mockImg/tml.png');
  background-repeat:no-repeat;
  
}
</style>
