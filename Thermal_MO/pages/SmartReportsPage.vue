<template>
  <v-container fluid mt-3>
    <v-row>
      <v-col cols="12" md="12">
        <v-card class="ml-2 text-center" height="52em" rounded="lg">
        <div class="gallery">
        <img src="../static/left-icons/fullscreen.png" class="pic"> 
         <month-heat-map-1 class="pic" src="../static/left-icons/fullscreen.png" />
        <!-- <div class="pic">1</div> -->
        <div class="thumbs">
                   <!-- <month-heat-map-1 class="thumb active" src="../static/left-icons/fullscreen.png" />
                   <month-heat-map-2 class="thumb " src="../static/left-icons/spot.png" />
                   <month-heat-map-3 class="thumb " src="../static/left-icons/spot.png" /> -->

                   <div class="thumb active" src="../static/left-icons/fullscreen.png">1</div>
                   <div class="thumb " src="../static/left-icons/spot.png" >2</div>
                   <div class="thumb " src="../static/left-icons/spot.png" >3</div>

        </div>
    </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

// import MonthHeatMap1 from '../components/DataScraping/MonthHeatMap/MonthHeatMap1.vue'
// import MonthHeatMap2 from '../components/DataScraping/MonthHeatMap/MonthHeatMap2.vue'
// import MonthHeatMap3 from '../components/DataScraping/MonthHeatMap/MonthHeatMap3.vue'
// import MonthHeatMap4 from '../components/DataScraping/MonthHeatMap/MonthHeatMap4.vue'
// import MonthHeatMap5 from '../components/DataScraping/MonthHeatMap/MonthHeatMap5.vue'
// import MonthHeatMap6 from '../components/DataScraping/MonthHeatMap/MonthHeatMap6.vue'
// import MonthHeatMap7 from '../components/DataScraping/MonthHeatMap/MonthHeatMap7.vue'
// import MonthHeatMap8 from '../components/DataScraping/MonthHeatMap/MonthHeatMap8.vue'
// import MonthHeatMap9 from '../components/DataScraping/MonthHeatMap/MonthHeatMap9.vue'
// import MonthHeatMap10 from '../components/DataScraping/MonthHeatMap/MonthHeatMap10.vue'
// import MonthHeatMap11 from '../components/DataScraping/MonthHeatMap/MonthHeatMap11.vue'
// import MonthHeatMap12 from '../components/DataScraping/MonthHeatMap/MonthHeatMap12.vue'

export default {
  components: {
    // MonthHeatMap1,
    // MonthHeatMap2,
    // MonthHeatMap3,
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
  name: 'DeepLearningPage',

  mounted() {
            const unthumb = document.querySelectorAll(".thumb");
        for(const unthumbs of unthumb){
            unthumbs.onclick = function(e){
                // console.log(e.target.src);
                // console.log(e.target.getAttribute("src")); 
                const newImg = e.target.tagName; // 絕對連結
                // let newImg = e.target.getAttribute("src");  // getAttribute取得屬性 e.g. src //相對連結
                document.querySelector(".pic").setAttribute("tagname", newImg); // 取得這個pic之後，去設定他的scr屬性值是newImg(我點選時所得到的），你要設定的屬性是誰
                for(const th of this.thumb){
                    th.classList.remove("active");
                }
                e.target.classList.add("active");
            }
        }
  }
}
</script>
<style scoped></style>
