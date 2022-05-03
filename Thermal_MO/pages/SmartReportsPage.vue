<template>
  <div id="app">
    <li>
      <a href="#">Cork</a>
      <div class="place-image">
        <img src="data_scraping/img/globalData.png" />
      </div>
    </li>
  </div>
</template>
<script>
export default {
  name: 'IndexPage',

  mounted() {
    $('a').hover(
      function () {
        $('.place-image').fadeIn('slow')
      },
      function () {
        $('.place-image').fadeOut('slow')
      }
    )
  },
}
</script>
<style>
.place-image {
  display: none;
}

div.place-image {
  width: 326px;
  height: 326px;
}
</style>
