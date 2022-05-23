<template>
  <div id="test">Drag Me</div>
</template>
<script>
export default {
  head: {
    title: '即時監控',
    link: [{ rel: 'stylesheet', href: 'css/details.css' }],
    script: [
      {
        src: '/js/jquery.js',
        type: 'text/javascript',
      },
      // jquery.pep.js 
      {
        src: '/js/jquery.pep.js',
        type: 'text/javascript',
      },
      // jquery.pep.js cdn
      // {
      //   src: 'https://rawgithub.com/briangonzalez/jquery.pep.js/master/src/jquery.pep.js',
      //   type: 'text/javascript',
      // },
    ],
  },

  mounted() {
    $(function () {
      $('#test').pep({
        // 登入進來遇到問題: Uncaught TypeError: $magnifier.pep is not a function
        // 導致無法使用
        // 需重新整理才能使用
        ignoreRightClick: true,
      })
    })
  },
}
</script>

<style lang="scss">
html {
  background: #48c8d7;
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
  color: #333;
}
#test {
  height: 200px;
  width: 200px;
  text-align: center;
  line-height: 200px;
  background: rgb(255, 17, 17);
  cursor: grabbing;
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
  border-radius: 100px;
}
</style>
