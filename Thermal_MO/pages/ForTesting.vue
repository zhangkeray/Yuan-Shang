<template>
  <div class="image-wrap">
    <div class="image viewer">
      <div class="magnifier"></div>
    </div>
    <div class="image result"></div>
    <script src="/js/jquery.pep.js"></script>
  </div>
</template>
<script>
export default {
  head: {
    title: '即時監控',
    link: [
      { rel: 'stylesheet', href: '/css/object.css' },
      { rel: 'stylesheet', href: '/css/card3.css' },
      { rel: 'stylesheet', href: 'css/details.css' },
    ],
    script: [],
  },

  mounted() {
    var $result = $('.image.result')
    var $viewer = $('.image.viewer')
    var $magnifier = $viewer.find('.magnifier')

    $(function () {
      setTimeout(function () {
        $magnifier.pep({
          // 會遇到問題: Uncaught TypeError: $magnifier.pep is not a function
          constrainTo: 'parent',
          shouldEase: false,
          drag() {
            var pos = $magnifier.position()

            var x =
              ((pos.left + $magnifier.outerWidth() / 2) / $viewer.width()) *
                100 +
              '%'
            var y =
              ((pos.top + $magnifier.outerHeight() / 2) / $viewer.height()) *
                100 +
              '%'

            $result.css('background-position', [x, y].join(' '))
          }
        })
      }, 0)
    })
  },
  methods: {},
}
</script>

<style lang="scss">
body {
  background: #f3eee6;
}

// .image-wrap {
//   width: 304px;
//   height: 808px;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   -moz-transform: translateY(-50%) translateX(-50%);
//   -ms-transform: translateY(-50%) translateX(-50%);
//   -webkit-transform: translateY(-50%) translateX(-50%);
//   transform: translateY(-50%) translateX(-50%);
//   -moz-box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
//   -webkit-box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
//   box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
// }
.image-wrap {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  -moz-transform: translateY(-50%) translateX(-50%);
  -ms-transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
  transform: translateY(-50%) translateX(-50%);
  -moz-box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
  box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
}
// @media (min-width: 550px) {
//   .image-wrap {
//     width: 608px;
//     height: 404px;
//   }
//   .image-wrap .image {
//     width: 50% !important;
//     height: 100% !important;
//     clear: none !important;
//   }
// }

@media (min-width: 800px) {
  .image-wrap {
    width: 800px;
    height: 300px;
  }
  .image-wrap .image {
    width: 50% !important;
    height: 100% !important;
    clear: none !important;
  }
}

.image-wrap .image {
  width: 100%;
  height: 50%;
  background: url('static/xzoom/images/20220510_v1.jpg') no-repeat center center;
  float: left;
  margin: 0;
  padding: 0;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.image-wrap .image:first-child {
  border-right: 1px solid #342420;
}
.image-wrap .image.result {
  background-position: 50% 25%;
}
.image-wrap .image.viewer {
  -moz-background-size: 100%;
  -o-background-size: 100%;
  -webkit-background-size: 100%;
  background-size: 100%;
}
.image-wrap .image.viewer .magnifier {
  position: absolute;
  top: 20%;
  left: 45%;
  width: 80px;
  height: 60px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAEElEQVQIW2P8DwSMIMAABQA+HQQDNlbHLwAAAABJRU5ErkJggg==);
  opacity: 0.6;
  cursor: move;
}
</style>
