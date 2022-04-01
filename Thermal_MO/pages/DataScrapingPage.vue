<template>
  <div class="fluid mt-3">
    <v-img class="bgimg" src="bgimg.png" height="93.2vh" />


    <v-row>
      <!-- 左畫面影像顯示----------------------------------------------------------------------------------------------- -->
      <v-col cols="12" md="12">
        <!-- <v-col cols="12" md="7" style="border: 1px solid red"> -->
        <v-card class="mt-3 mx-6" rounded="md" elevation="6" height="51.55em">


    <v-tabs vertical>
      <v-tab>
        <v-icon left>
          mdi-account
        </v-icon>
        Option 1
      </v-tab>
      <v-tab>
        <v-icon left>
          mdi-lock
        </v-icon>
        Option 2
      </v-tab>
      <v-tab>
        <v-icon left>
          mdi-access-point
        </v-icon>
        Option 3
      </v-tab>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
            </p>

            <p>
              Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Aliquam lobortis. Aliquam lobortis. Suspendisse non nisl sit amet velit hendrerit rutrum.
            </p>

            <p class="mb-0">
              Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
            </p>

            <p>
              Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
            </p>

            <p>
              Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.
            </p>

            <p>
              Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
            </p>

            <p class="mb-0">
              Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            </p>

            <p class="mb-0">
              Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
        </v-card>
      </v-col>
     </v-row>
         
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'IndexPage',
  head: {
    title: '即時監控',
    link: [
      // { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: 'stylesheet', href: '/css/jquery-ui.css' },
      { rel: 'stylesheet', href: '/css/object.css' },
      { rel: 'stylesheet', href: '/css/card3.css' },
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
        src: '/js/jquery-collision.js',
        type: 'text/javascript',
      },
      // {
      //   src: '/js/object.js',
      //   type: 'text/javascript',
      // },
    ],
  },
  data: () => ({
    // 右2
    timer: null,
    time: 20,
    // 切換按鈕
    isActive: false,
    // 左側隱藏按鈕動作設定
    direction_imageMode: 'right',
    fab_imageMode: false,
    transition_imageMode: 'scale-transition',

    direction_palette: 'right',
    fab_palette: false,
    transition_palette: 'scale-transition',

    direction_calibration: 'right',
    fab_calibration: false,
    transition_calibration: 'scale-transition',

    direction_light: 'right',
    fab_light: false,
    transition_light: 'scale-transition',

    direction_autofocus: 'right',
    fab_autofocus: false,
    transition_autofocus: 'scale-transition',

    // 右1點線面_宣告變數陣列
    spots: [],
    scopes: [],
    lines: [],

    // 右2假數據顯示(待刪)
    temps: [
      {
        name: '點2',
        duration: 37,
        temperature: 44,
        alertTemperature: 35,
        time: '2022/03/17 02:10:07',
      },
    {
      name: '矩形1',
      duration: 27,
      temperature: 36,
      alertTemperature: 35,
      time: '2022/03/16 18:30:14',
    },
    {
      name: '矩形1',
      duration: 12,
      temperature: 33,
      alertTemperature: 35,
      time: '2022/03/16 18:30:14',
    },
      {
        name: '點3',
        duration: 14,
        temperature: 30,
        alertTemperature: 35,
        time: '2022/03/17 07:04:22',
      },
      {
        name: '矩形1',
        duration: 120,
        temperature: 22,
        alertTemperature: 35,
        time: '2022/03/16 18:30:14',
      },

    ],

    // 右3顯示
    interval: {},
    valueToday: 15,
    valueLastday: 8,
    valueThisWeek: 55,
    valueThisMonth: 15,

    // 右4顯示
    arrayEvents: null,
    date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),

    // 右5設定
    emissivity: 0.95,
    transmission: 1.0,
    reflected: `${20}°C`,
    distance: `${1.0}m`,
    atmospheric: `${20}°C`,
    humidity: `${50}%`,
    temperature: `${20}°C`,
  }),

  mounted() {
    // jquery-ui
    const vm = this

    // use "main" socket defined in nuxt.config.js
    vm.socket = this.$nuxtSocket({
      name: 'main', // select "main" socket from nuxt.config.js - we could also skip this because "main" is the default socket
    })
    const img = document.getElementById('image')
    vm.socket.on('data', (data) => {
      img.src = 'data:image/jpeg;base64,' + data
      img.style.transform = 'rotate(360deg)'
    })

    // 右3圓餅顯示
    this.interval = setInterval(() => {
      if (this.valueToday > 100) {
        return (this.valueToday = 0)
      }
      // this.valueToday += 1
    }, 1000)
    // 右3圓餅顯示
    this.arrayEvents = [...Array(6)].map(() => {
      const day = Math.floor(Math.random() * 30)
      const d = new Date()
      d.setDate(day)
      return d.toISOString().substr(0, 10)
    })
    // 右2假資料
    
    this.temps.duration = setInterval(this.countdown, 1000)
  },

  methods: {
    // 右2
    countdown() {
      this.temps.duration++
    },

    // 左側燈泡
    light() {
      if (document.getElementById('light_on')) {
        document.getElementById('light_on').src =
          '/left-icons/light/light-off.png'
        document.getElementById('light_on').setAttribute('id', 'light_img')
      } else {
        document.getElementById('light_img').src =
          '/left-icons/light/light-on.png'
        document.getElementById('light_img').setAttribute('id', 'light_on')
      }
    },
    // 左側暫停
    freeze() {
      if (document.getElementById('freeze')) {
        document.getElementById('freeze').src =
          '/left-icons/freeze/unfreeze.png'
        document.getElementById('freeze').setAttribute('id', 'unfreeze')
      } else {
        document.getElementById('unfreeze').src =
          '/left-icons/freeze/freeze.png'
        document.getElementById('unfreeze').setAttribute('id', 'freeze')
      }
    },

    // 點-主程式
    spot() {
      axios({
        method: 'get',
        url: `http://192.168.0.173:8080/camera`,
        // data: data,
        // headers: headers,
      })
        .then(function (response) {
          console.log(response.data.temperature)
        })
        .catch((error) => console.log(error))

      var array = this.spots
      var totle1 = 0
      if (array.length === 0) {
        totle1 = 0
      } else if (array.length >= 6) {
        return false
      } else {
        totle1 = array.length
      }
      var spotsum = 0
      if (array.length === 0) {
        spotsum = totle1 + 1
      } else {
        var testarray = []
        array.forEach(function (element) {
          testarray.push(element.name)
        })
        spotsum = spotsum + 1
        while (testarray.includes(spotsum)) {
          spotsum = spotsum + 1
        }
      }
      var locationA = 40 + spotsum * 20
      var $element = `<div id="spot${spotsum}" class="spot" style="top: ${locationA}px; left: ${locationA}px;"><img src="/images/spot_1.png" /><div class="spot-span"><div>${spotsum}</div></div></div>`
      $('#cover').append($element)
      var spottotlesum = 1
      $('.spot').each(function () {
        $(this).hover(
          function () {
            $(this).children('div').addClass('hover')
          },
          function () {
            $(this).children('div').removeClass('hover')
          }
        )
        var spotname = '#spot' + spottotlesum
        $(spotname).draggable({
          containment: 'parent',
          tolerance: 'pointer',
        })
        spottotlesum = spottotlesum + 1
      })
      var content = {
        name: spotsum,
        temperature: Math.floor(Math.random() * 50),
        situation: '已超溫',
        time: '04:30:14',
        date: '2022/3/14',
      }
      this.addspot(content)
    },
    // 點-刪除程式
    removespot(index, name) {
      var array = this.spots
      array.splice(index, 1)
      var selectspot = '#spot' + name
      $(selectspot).remove()
      this.$forceUpdate()
    },
    // 點-新增程式(為主程式延伸)
    addspot(content) {
      var array = this.spots
      array.push(content)
      array.sort(function (a, b) {
        return a.name - b.name
      })
    },
    // 範圍-主程式
    scope() {
      var array = this.scopes
      var totle = 0
      if (array.length === 0) {
        totle = 0
      } else if (array.length >= 6) {
        return false
      } else {
        totle = array.length
      }
      var scopesum = 0
      if (array.length === 0) {
        scopesum = totle + 1
      } else {
        var testarray = []
        array.forEach(function (element) {
          testarray.push(element.name)
        })
        scopesum = scopesum + 1
        while (testarray.includes(scopesum)) {
          scopesum = scopesum + 1
        }
      }

      var locationA = 40 + scopesum * 20
      // var tooltip_content = '<div class="tooltip_content" >TEST TOOLTIP</div>'
      var $element = `<div id="scope${scopesum}" class="scope" style="top:${locationA}px;left:${locationA}px;" title="Tooltip"><div class="scope-span"><div>${scopesum}</div></div><span class="scope-test-xy-TL">X:Y:</span><span class="scope-test-xy-BR">X:Y:</span></div>`
      $('#cover').append($element)

      var scopetotlesum = 1
      $('.scope').each(function () {
        $(this).hover(
          function () {
            $(this).children('div').addClass('hover')
          },
          function () {
            $(this).children('div').removeClass('hover')
          }
        )
        var scopename = '#scope' + scopetotlesum
        var cover = 0
        var coverwidthTL = 0
        var coverheightTL = 0
        var coverwidthBR = 0
        var coverheightBR = 0
        $(scopename)
          .resizable({
            containment: 'parent',
            handles: 'all',
            minWidth: 50,
            minHeight: 50,
            resize(event, ui) {
              cover = $('.cover')
              coverwidthTL = ui.position.left / cover.width()
              coverheightTL = ui.position.top / cover.height()
              coverwidthBR =
                (ui.position.left + this.offsetWidth) / cover.width()
              coverheightBR =
                (ui.position.top + this.offsetHeight) / cover.height()
              coverwidthTL = coverwidthTL.toFixed(3)
              coverheightTL = coverheightTL.toFixed(3)
              coverwidthBR = coverwidthBR.toFixed(3)
              coverheightBR = coverheightBR.toFixed(3)
              $(this)
                .find('.scope-test-xy-TL')
                .html('X:' + coverwidthTL + ' Y:' + coverheightTL)
              $(this)
                .find('.scope-test-xy-BR')
                .html('X:' + coverwidthBR + ' Y:' + coverheightBR)
            },
          })
          .draggable({
            containment: 'parent',
            drag(event, ui) {
              cover = $('.cover')
              coverwidthTL = ui.position.left / cover.width()
              coverheightTL = ui.position.top / cover.height()
              coverwidthBR =
                (ui.position.left + this.offsetWidth) / cover.width()
              coverheightBR =
                (ui.position.top + this.offsetHeight) / cover.height()
              coverwidthTL = coverwidthTL.toFixed(3)
              coverheightTL = coverheightTL.toFixed(3)
              coverwidthBR = coverwidthBR.toFixed(3)
              coverheightBR = coverheightBR.toFixed(3)
              $(this)
                .find('.scope-test-xy-TL')
                .html('X:' + coverwidthTL + ' Y:' + coverheightTL)
              $(this)
                .find('.scope-test-xy-BR')
                .html('X:' + coverwidthBR + ' Y:' + coverheightBR)
            },
            create(event, ui) {
              cover = $('.cover')
              coverwidthTL = this.offsetLeft / cover.width()
              coverheightTL = this.offsetTop / cover.height()
              coverwidthBR =
                (this.offsetLeft + this.offsetWidth) / cover.width()
              coverheightBR =
                (this.offsetTop + this.offsetHeight) / cover.height()
              coverwidthTL = coverwidthTL.toFixed(3)
              coverheightTL = coverheightTL.toFixed(3)
              coverwidthBR = coverwidthBR.toFixed(3)
              coverheightBR = coverheightBR.toFixed(3)
              $(this)
                .find('.scope-test-xy-TL')
                .html('X:' + coverwidthTL + ' Y:' + coverheightTL)
              $(this)
                .find('.scope-test-xy-BR')
                .html('X:' + coverwidthBR + ' Y:' + coverheightBR)
            },
          })
        scopetotlesum = scopetotlesum + 1
      })
      var content = {
        name: scopesum,
        temperature: Math.floor(Math.random() * 50),
        situation: '已超溫',
        time: '04:30:14',
        date: '2022/3/14',
      }
      this.addscope(content)
    },
    // 範圍-刪除程式
    removescope(index, name) {
      var array = this.scopes
      array.splice(index, 1)
      var selectspot = '#scope' + name
      $(selectspot).remove()
      this.$forceUpdate()
    },
    // 範圍-新增程式(為主程式延伸)
    addscope(content) {
      var array = this.scopes
      array.push(content)
      array.sort(function (a, b) {
        return a.name - b.name
      })
    },
    // 線-主程式
    line() {
      var array = this.lines
      var totle = 0
      if (array.length === 0) {
        totle = 0
      } else if (array.length >= 6) {
        return false
      } else {
        totle = array.length
      }
      var pointsum = 0
      if (array.length === 0) {
        pointsum = totle + 1
      } else {
        var testarray = []
        array.forEach(function (element) {
          testarray.push(element.name)
        })
        pointsum = pointsum + 1
        while (testarray.includes(pointsum)) {
          pointsum = pointsum + 1
        }
      }
      var pointname = 'point' + pointsum
      var pointhover = 'point_hover' + pointsum
      var linename = 'line' + pointsum
      var locationA = 40 + pointsum * 20
      var locationB = 260 + pointsum * 20
      var locationB2 = 120 + pointsum * 20
      var $element = `<div class="${pointname} point-totle" id="pointA" style="left: ${locationA}px; top: ${locationA}px"></div><div class="${pointname} ${pointhover}" id="pointB" style="left:${locationB}px; top: ${locationB2}px"><div class="line-span"><div>${pointsum}</div></div></div><div class="${linename}" id="line"></div>`
      $('#cover').append($element)
      var contentline = {
        name: pointsum,
        temperature: Math.floor(Math.random() * 50),
        situation: '已超溫',
        time: '04:30:14',
        date: '2022/3/14',
      }
      this.addline(contentline)

      pointname = '.point' + pointsum
      var wrapperpointname = 'point' + pointsum
      var wrapperlinename = 'line' + pointsum
      wrapper(wrapperpointname, wrapperlinename)
      $(pointname).draggable({
        drag(e, ui) {
          wrapper(wrapperpointname, wrapperlinename)
          $(e.target).addClass('point-hover')
        },
        containment: 'parent',
        stop(event, ui) {
          $(event.target).removeClass('point-hover')
        },
      })
      var pointhoverclass = '.point_hover' + pointsum
      $(pointname).hover(
        function () {
          $(pointhoverclass).children('div').addClass('hover')
        },
        function () {
          $(pointhoverclass).children('div').removeClass('hover')
        }
      )

      function wrapper(pointname, linename) {
        const point1 = document.getElementsByClassName(pointname)[0]
        const point2 = document.getElementsByClassName(pointname)[1]
        const line = document.getElementsByClassName(linename)[0]
        var getline = getCoordinate(point1, point2, line)
        line.style.width = getline.width + 'px'
        line.style.left = getline.left + 'px'
        line.style.top = getline.top + 'px'
        line.style.transform = 'rotate(' + getline.angleDeg + 'deg)'
      }
      function getCoordinate(point1, point2) {
        var p1 = {
          x: point1.offsetLeft,
          y: point1.offsetTop,
        }
        var p2 = {
          x: point2.offsetLeft,
          y: point2.offsetTop,
        }
        var a = p1.x - p2.x
        var b = p1.y - p2.y
        var length = Math.sqrt(a * a + b * b)
        var angleDeg = (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180) / Math.PI
        var pointWidth = point1.clientWidth / 2
        var pointHeight = point1.clientWidth / 2
        var array = []
        array.width = length
        array.left = p1.x + pointWidth
        array.top = p1.y + pointHeight
        array.angleDeg = angleDeg
        return array
      }
      // Refer to : https://stackoverflow.com/questions/66879479/draw-a-diagonal-line-between-two-points-with-css-and-js
    },
    // 線-新增程式(為主程式延伸)
    addline(contentline) {
      var array = this.lines
      array.push(contentline)
      array.sort(function (a, b) {
        return a.name - b.name
      })
    },
    // 線-刪除程式
    removeline(index, name) {
      var array = this.lines
      array.splice(index, 1)

      var selectline1 = '.point' + name
      $(selectline1).each(function () {
        $(this).remove()
      })
      var selectline2 = '.line' + name
      $(selectline2).remove()
      this.$forceUpdate()
    },
    // 右4日期
    functionEvents(date) {
      const [, , day] = date.split('-')
      if ([2, 3, 4, 5, 7, 8, 12, 13, 14, 15, 17].includes(parseInt(day, 10)))
        return ['#d8d8d8']
      if ([1, 6, 9, 10, 11, 16].includes(parseInt(day, 10))) return ['#828C8F']
      return false
    },
    // 今天
    getCurrentDate() {
      var now = new Date() // 当前日期
      // var nowDayOfWeek = now.getDay() - 1 // 今天本周的第几天
      var nowDay = now.getDate() // 当前日
      var nowMonth = now.getMonth() // 当前月
      var nowYear = now.getYear() // 当前年
      nowYear += nowYear < 2000 ? 1900 : 0 //

      function formatDate(date) {
        var myyear = date.getFullYear()
        var mymonth = date.getMonth() + 1
        var myweekday = date.getDate()
        if (mymonth < 10) {
          mymonth = '0' + mymonth
        }
        if (myweekday < 10) {
          myweekday = '0' + myweekday
        }
        return myyear + '/' + mymonth + '/' + myweekday
      }
      var currentDate = new Date(nowYear, nowMonth, nowDay)
      return formatDate(currentDate)
    },

    // 昨天
    getLastDate() {
      function getDay(num, str) {
        var today = new Date()
        var nowTime = today.getTime()
        var ms = 24 * 3600 * 1000 * num
        today.setTime(parseInt(nowTime + ms))
        var oYear = today.getFullYear()
        var oMoth = (today.getMonth() + 1).toString()
        if (oMoth.length <= 1) oMoth = '0' + oMoth
        var oDay = today.getDate().toString()
        if (oDay.length <= 1) oDay = '0' + oDay
        return oYear + str + oMoth + str + oDay
      }
      var yesterday = getDay(-1, '/');
      return yesterday
    },

    // 本週
    getWeekStartDate() {
      var now = new Date() // 当前日期
      var nowDayOfWeek = now.getDay() - 1 // 今天本周的第几天
      var nowDay = now.getDate() // 当前日
      var nowMonth = now.getMonth() // 当前月
      var nowYear = now.getYear() // 当前年
      nowYear += nowYear < 2000 ? 1900 : 0 //

      function formatDate(date) {
        var myyear = date.getFullYear()
        var mymonth = date.getMonth() + 1
        var myweekday = date.getDate()
        if (mymonth < 10) {
          mymonth = '0' + mymonth
        }
        if (myweekday < 10) {
          myweekday = '0' + myweekday
        }
        return myyear + '/' + mymonth + '/' + myweekday
      }
      var weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek)
      return formatDate(weekStartDate)
    },
    // 本月
    getMonthStartDate() {
      var now = new Date() // 当前日期
      // var nowDayOfWeek = now.getDay() - 1 // 今天本周的第几天
      // var nowDay = now.getDate() // 当前日
      var nowMonth = now.getMonth() // 当前月
      var nowYear = now.getYear() // 当前年
      nowYear += nowYear < 2000 ? 1900 : 0 //

      function formatDate(date) {
        var myyear = date.getFullYear()
        var mymonth = date.getMonth() + 1
        var myweekday = date.getDate()
        if (mymonth < 10) {
          mymonth = '0' + mymonth
        }
        if (myweekday < 10) {
          myweekday = '0' + myweekday
        }
        return myyear + '/' + mymonth + '/' + myweekday
      }
      var monthStartDate = new Date(nowYear, nowMonth, 1)
      return formatDate(monthStartDate)
    },
  },
}
</script>
<style scoped>
/* 左側浮動按鈕 */
.drawer {
  position: fixed;
  width: 3.6em;
  left: -3.599em;
  height: 51.8em;
  transition: all 0.5s;
  border-radius: 0px 10px 10px 0px;
  z-index: 99999;
  /* background-color: #031316; */
  color: rgba(89, 89, 91, 1);
}
.box {
  background-color: #fff;
}
.box:hover .drawer {
  left: 0;
}

/* 影像串流 */
.frame {
  width: 74em;
  margin-left: 0.3em;
  margin-top: 0.7em;
}
.cover {
  position: relative;
  max-width: 100%;
  width: 100%;
  display: inline-block;
  isolation: isolate;
}
#image {
  width: 100%;
  /* width: 70.5em; */
  pointer-events: none;
  /* margin-left: 2.1em; */
  /* margin-top: 2em; */
  isolation: isolate;
}
.arrow {
  height: 23px;
  width: 100px;
  position: absolute;
  margin-left: 1.16em;
  margin-top: 25.5em;
  transform: rotate(270deg);
  border-radius: 0 0 100px 100px;
}
/* 按鈕提示 */
.tips {
  z-index: 100000;
}
/* 區塊標題文字 */
.subtitle {
  font-size: 12px;
  color: #d9dddd;
  text-align: center;
}
.subtitle-right {
  font-size: 12px;
  color: #9ba3a5;
  text-align: left;
  font-family: 'Noto Sans TC', sans-serif;

}
/* h4 {
  line-height: 2em;
  padding-left: 1em;
  color: #031418;
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: bold;
} */
.gg {
  float: left;
  text-align: center;
}
.font-display {
  font-family: 'Noto Sans TC', sans-serif;
}
.chartTitle {
  color: #545454;
}

.date-picker {
  float: right;
}

.card5 {
  display: flex;
  /* 水平置中 */
  justify-content: center;
  /* 垂直置中 */
  align-content: center;
  flex-wrap: wrap;
}
.card5content {
  width: 6em;
  float: left;
  margin: auto;
}
.btn {
  background-color: #f2f4f4;
}
.reset {
  float: right;
  margin-top: 0.5em;
  margin-right: 0.5em;
}
.cardtitle {
  line-height: 2.5em;
  font-weight: 900;
  color: #505f62;
}

.text-color >>> .v-text-field__slot input {
  color: #9ba3a5;
}

.left-btn {
  background-color: #2d2d2d;
  width: 2.25em;
  height: 2.25em;
}

.right-btn {
  background-color: #f2f4f4;
  width: 2.25em;
  height: 2.25em;
}

.donut1 {
  float: left;
}
.donut2 {
  float: right;
}
/* .rectangle {
  z-index: 99999;
} */
.bgimg {
  position: absolute;
}

.scroll {
  /* width: 20px; */
  /* height: 200px; */
  /* overflow: auto; */
  /* float: right; */
  /* margin: 0 10px; */
}

.scroll4::-webkit-scrollbar {
  width: 10px;
}
 
.scroll4::-webkit-scrollbar-thumb {
  background: #666;
  border-radius: 20px;
}

.scroll4::-webkit-scrollbar-track {
  background: #ddd;
  border-radius: 20px;
}
</style>
