<template>
  <v-container fluid>
    <v-row>
      <v-col cols="9">
        <div>
          <v-card>
            <v-responsive :aspect-ratio="16 / 9">
              <v-card-text> 這此範圍可以畫線 </v-card-text>
              <div :class="wrapper"></div>
            </v-responsive>
          </v-card>
        </div>
      </v-col>
      <v-col cols="3">
        <v-btn @click="add" :disabled="pointShow">ADD</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'ForTesting9-6Page',
  head: {
    link: [
      // { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: 'stylesheet', href: '/css/jquery-ui.css' },
    ],
    script: [
      {
        src: '/js/jquery-ui.js',
        type: 'text/javascript',
      },
      {
        src: '/js/jquery-collision.js',
        type: 'text/javascript',
      },
    ],
  },
  data: () => ({
    wrapper: 'wrapper',
    pointShow: false,
  }),
  mounted() {
    // this.wrapper1()
  },
  methods: {
    add() {
      this.pointShow = true
      console.log('add')
      this.wrapper = 'wrapper crosshair'
      var totle = 0
      var last = 0
      this.$nextTick(function () {
        $('.crosshair').on('click', (event) => {
          var point = null
          if (totle === 0) {
            point = `<div class="custom-point point-first" data-id="${totle}" id="point${totle}" style="left: ${
              event.offsetX - 10
            }px; top: ${event.offsetY - 10}px"></div>`
          } else {
            point = `<div class="custom-point" data-id="${totle}" id="point${totle}" style="left: ${
              event.offsetX - 10
            }px; top: ${event.offsetY - 10}px"></div>`
          }
          $('.crosshair').append(point)
          last = totle - 1
          if (totle === 1) {
            $('.crosshair').append(`<div class="line"></div>`)
            this.wrapper1(last, totle, last)
          } else if (totle > 1) {
            console.log('okok')
            $('.crosshair').append(`<div class="line"></div>`)
            this.wrapper1(last, totle, last)
          }
          $('.custom-point').draggable({
            drag: (event, ui) => {
              var tmp = totle - 1
              for (var i = 0; i <= tmp; i++) {
                if (i === 1) {
                  this.wrapper1(0, 1, 0)
                } else if (i > 1) {
                  this.wrapper1(i - 1, i, i - 1)
                }
              }
            },
            containment: ".crosshair"
          })
          totle = totle + 1
          // 移動點方法
        })
      })
    },
    // test(totle) {
    //   console.log(totle)
    //   if(totle === 1){
    //     this.wrapper1('custom-point')
    //   }
    // },
    wrapper1(point01, point02, line01) {
      const point1 = document.getElementsByClassName('custom-point')[point01]
      const point2 = document.getElementsByClassName('custom-point')[point02]
      const line = document.getElementsByClassName('line')[line01]

      // Find the points based off the elements left and top
      var p1 = { x: point1.offsetLeft, y: point1.offsetTop }
      var p2 = { x: point2.offsetLeft, y: point2.offsetTop }

      // Get distance between the points for length of line
      var a = p1.x - p2.x
      var b = p1.y - p2.y
      var length = Math.sqrt(a * a + b * b)

      // Get angle between points
      var angleDeg = (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180) / Math.PI

      // Get distance from edge of point to center
      var pointWidth = point1.clientWidth / 2
      var pointHeight = point1.clientWidth / 2

      // Set line distance and position
      // Add width/height from above so the line starts in the middle instead of the top-left corner
      line.style.width = length + 'px'
      line.style.left = p1.x + pointWidth + 'px'
      line.style.top = p1.y + pointHeight + 'px'

      // Rotate line to match angle between points
      line.style.transform = 'rotate(' + angleDeg + 'deg)'
    },
  },
}
</script>
<style scoped>
.wrapper {
  width: 100%;
  height: 93%;
  position: relative;
  border: 1px solid #aaa;
  background-color: #eee;
}
.crosshair {
  cursor: crosshair;
}
.point {
  width: 20px;
  height: 20px;
  position: absolute;
  background-color: #555;
}
</style>
<style>
.custom-point {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: rgb(141, 22, 22);
  z-index: 999;
  cursor: grab;
  /* transform: translate(-50%, -50%); */
}
.line {
  position: absolute;
  height: 2px;
  background-color: #d63030;
  transform-origin: left;
  pointer-events: none;
}
</style>