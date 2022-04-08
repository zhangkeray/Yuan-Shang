<template>
  <v-container fluid mt-3>
    <v-row>
      <v-col cols="12" md="4">
        <v-card class="ml-2 text-center" height="52em" rounded="lg">
        <div class="gallery">
        <img src="pic/iphone-12-black-select-2020.png" class="pic"> 
        <div class="thumbs">
            <img src="../static/left-icons/fullscreen.png" class="thumb active">
            <img src="../static/left-icons/line.png" class="thumb">
            <img src="../static/left-icons/spot.png" class="thumb">
            <img src="../static/left-icons/snapshot.png" class="thumb">
            <img src="../static/left-icons/rectangle.png" class="thumb">
            <img src="../static/left-icons/hide-overlay.png" class="thumb">
        </div>
    </div>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="ml-2 text-center" height="52em" rounded="lg">
          pending
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="ml-2 text-center" height="52em" rounded="lg">
          pending
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
// import VueCarousel from 'vue-carousel';
export default {
  name: 'DeepLearningPage',

  mounted() {
            const unthumb = document.querySelectorAll(".thumb");
        for(const unthumbs of unthumb){
            unthumbs.onclick = function(e){
                // console.log(e.target.src);
                // console.log(e.target.getAttribute("src")); 
                const newImg = e.target.src; // 絕對連結
                // let newImg = e.target.getAttribute("src");  // getAttribute取得屬性 e.g. src //相對連結
                document.querySelector(".pic").setAttribute("src", newImg); // 取得這個pic之後，去設定他的scr屬性值是newImg(我點選時所得到的），你要設定的屬性是誰
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
