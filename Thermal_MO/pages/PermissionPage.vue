<template>
  <div class="fluid mt-3">
    <button id="b" touch-action="none">Test button!</button>
    <p><output id="o"></output></p>
  </div>
</template>

<script>
export default {
  // echarts引入
  components: {},
  name: 'IndexPage',
  head: {
    title: '即時監控',
    link: [
      // { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: 'stylesheet', href: '/css/jquery-ui.css' },
      { rel: 'stylesheet', href: '/css/object.css' },
      { rel: 'stylesheet', href: '/css/card3.css' },
      { rel: 'stylesheet', href: 'css/details.css' },
    ],
    script: [
      {
        src: '/js/jquery.js',
        type: 'text/javascript',
      },
      {
        src: '/js/jquery-ui.js',
        type: 'text/javascript',
      },
      {
        src: 'https://code.jquery.com/pep/0.4.3/pep.js',
        type: 'text/javascript',
      },
      // {
      //   src: '/js/object.js',
      //   type: 'text/javascript',
      // },
    ],
  },
  data: () => ({}),
  methods: {},
  mounted() {
    document.getElementById('b').addEventListener('pointerdown', function (e) {
      document.getElementById('o').innerHTML =
        'that was a ' +
        e.pointerType +
        ' ' +
        e.type +
        ' on a ' +
        e.target.nodeName
    })
    var $result = $('.image.result')
    var $viewer = $('.image.viewer')
    var $magnifier = $viewer.find('.magnifier')

    $magnifier.pep({
      constrainTo: 'parent',
      shouldEase: false,
      drag (ev, obj) {
        var pos = $magnifier.position()

        var x =
          ((pos.left + $magnifier.outerWidth() / 2) / $viewer.width()) * 100 +
          '%'
        var y =
          ((pos.top + $magnifier.outerHeight() / 2) / $viewer.height()) * 100 +
          '%'

        $result.css('background-position', [x, y].join(' '))
      },
    })
  },
}
</script>

