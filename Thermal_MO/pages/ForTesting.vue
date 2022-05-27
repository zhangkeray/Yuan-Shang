<template>
  <div class="img-zoom-container">
    <div>
      <img
        id="myimage"
        src="/xzoom/images/20220510_v1.jpg"
        width="300"
        height="240"
        alt="Girl"
      />
    </div>
    <div id="myresult" class="img-zoom-result"></div>
  </div>
</template>
<script>
export default {
  head: {
    title: '即時監控',
    link: [
      { rel: 'stylesheet', href: '/css/jquery-ui.css' },
      { rel: 'stylesheet', href: '/css/object.css' },
      { rel: 'stylesheet', href: '/css/card3.css' },
      { rel: 'stylesheet', href: 'css/details.css' },
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

  mounted() {
    imageZoom('myimage', 'myresult')

    function imageZoom(imgID, resultID) {
      var img, lens, result, cx, cy
      img = document.getElementById(imgID)
      result = document.getElementById(resultID)
      /* 建立放大鏡: */
      lens = document.createElement('DIV')
      lens.setAttribute('class', 'img-zoom-lens')
      /* 插入影像到指定DVI: */
      img.parentElement.insertBefore(lens, img)
      /* 計算結果DIV與鏡頭的比值： */
      cx = result.offsetWidth / lens.offsetWidth
      cy = result.offsetHeight / lens.offsetHeight
      /* 為結果 DIV 設置背景屬性 */
      result.style.backgroundImage = "url('" + img.src + "')"
      result.style.backgroundSize =
        img.width * cx + 'px ' + img.height * cy + 'px'
      /* 當有人將光標移到圖像或鏡頭上時執行一個函數： */
      $('.img-zoom-lens')
        .draggable({
          containment: 'parent',
          drag(event, ui) {
            console.log('123')
            moveLens(event)
          },
        })
      //   lens.addEventListener('mouseup', moveLens)
      //   img.addEventListener('mouseup', moveLens)
      /* 也適用於觸摸屏： */
      lens.addEventListener('touchmove', moveLens)
      img.addEventListener('touchmove', moveLens)

      function moveLens(e) {
        var pos, x, y
        /* 防止在圖像上移動時可能發生的任何其他操作 */
        // e.preventDefault()
        /* 獲取光標的 x 和 y 位置： */
        pos = getCursorPos(e)
        /* 計算鏡頭的位置： */
        x = pos.x - lens.offsetWidth / 2
        y = pos.y - lens.offsetHeight / 2
        /* 防止鏡頭位於圖像之外： */
        if (x > img.width - lens.offsetWidth) {
          x = img.width - lens.offsetWidth
        }
        if (x < 0) {
          x = 0
        }
        if (y > img.height - lens.offsetHeight) {
          y = img.height - lens.offsetHeight
        }
        if (y < 0) {
          y = 0
        }
        /* 設置鏡頭位置： */
        lens.style.left = x + 'px'
        lens.style.top = y + 'px'
        /* 顯示鏡頭“看到”的內容： */
        result.style.backgroundPosition = '-' + x * cx + 'px -' + y * cy + 'px'
      }
      function getCursorPos(e) {
        var a
        var x = 0
        var y = 0
        e = e || window.event
        /* 獲取圖像的 x 和 y 位置： */
        a = img.getBoundingClientRect()
        /* 計算光標相對於圖像的 x 和 y 坐標： */
        x = e.pageX - a.left
        y = e.pageY - a.top
        /* 考慮任何頁面滾動： */
        x = x - window.pageXOffset
        y = y - window.pageYOffset
        return { x, y }
      }
    }
  },
  methods: {},
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

.img-zoom-container {
  position: relative;
  display: flex;
}

.img-zoom-lens {
  position: absolute;
  border: 1px solid #d4d4d4;
  /*set the size of the lens:*/
  width: 60px;
  height: 60px;
  cursor: pointer;
}

.img-zoom-result {
  border: 1px solid #d4d4d4;
  /*set the size of the result div:*/
  width: 300px;
  height: 240px;
}
</style>
