<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <v-text-field
          v-model="CameraIP"
          label="Camera URL(RTSP)"
          required
        ></v-text-field>
      </v-col>
      <v-btn @click="cameraadd" style="margin-top: 32px">新增</v-btn>
      <v-btn @click="startStream" style="margin-top: 32px">start</v-btn>
      <v-btn @click="cameraremove" style="margin-top: 32px">清除</v-btn>
      <!-- <v-col cols="12" md="4">
        <v-text-field
          v-model="CameraName"
          label="Camera name"
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="4">
        <v-text-field
          v-model="CameraFps"
          label="Camera FPS"
          required
        ></v-text-field>
      </v-col> -->
    </v-row>
    <v-row height="80vh">
      <v-col v-for="(item, index) in rtspLists" :key="index" cols="3">
        <div>
          <img
            src="/loadingBG.png"
            :id="'rtsp-img' + index"
            class="rtpsimg"
            width="100%"
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
// import * as echarts from 'echarts'
// import axios from 'axios'
export default {
  name: 'HistoricalMonitoringPage',
  data: () => ({
    rtspLists: ['0', '0', '0', '0'],
    CameraIP: 'rtsp://:@192.168.0.177:9554/live?channel=1&subtype=0',
    CameraName: null,
    CameraFps: null,
  }),
  watch: {
    rtspLists(data) {
      console.log(data)
      setTimeout(() => {
        this.startStream()
      }, 1000)
    },
  },
  mounted() {
    // this.socket = this.$nuxtSocket({
    //   name: 'main', // select "main" socket from nuxt.config.js - we could also skip this because "main" is the default socket
    // })
    // const vm = this
    // this.startStream()
    // this.socket.on('connect', () => {
    //   this.socket.on('newMessage', (data2) => {
    //     this.rtspLists.push(data2)
    //     // const img = document.getElementById(`rtsp-img${data - 1}`)
    //     // this.socket.on(`data${data}`, (data1) => {
    //     //   img.src = 'data:image/jpeg;base64,' + data1
    //     //   // img.style.transform = 'rotate(360deg)'
    //     // })
    //     // console.log(img.src)
    //   })
    // })
    // const img1 = document.getElementById('rtsp-img1')
    // vm.socket.on('connect', () => {
    //   vm.socket.on('data1', (data) => {
    //     img1.src = 'data:image/jpeg;base64,' + data
    //     img1.style.transform = 'rotate(360deg)'
    //   })
    // })
  },
  methods: {
    getData() {
      this.socket = this.$nuxtSocket({
        name: 'main', // select "main" socket from nuxt.config.js - we could also skip this because "main" is the default socket
      })
      this.socket.on('getcamlist', (data) => {
        console.log(data)
        var arr = []
        data.forEach((index) => {
          arr.push(index.cam)
        })
        this.rtspLists = arr
      })
    },
    startStream() {
      this.socket = this.$nuxtSocket({
        name: 'main', // select "main" socket from nuxt.config.js - we could also skip this because "main" is the default socket
      })
      for (var i = 0; i < 4; i++) {
        const img = document.getElementById('rtsp-img' + i)
        this.socket.on('data' + i, (data) => {
          // console.log(data)
          img.src = 'data:image/jpeg;base64,' + data
          img.style.transform = 'rotate(360deg)'
        })
        console.log(img)
      }

      // var data = this.rtspLists
      // data.forEach((item, index) => {
      //   var id = index
      //   const img = document.getElementById('rtsp-img' + id)
      //   this.socket.on('data' + id, (data) => {
      //     img.src = 'data:image/jpeg;base64,' + data
      //     img.style.transform = 'rotate(360deg)'
      //   })
      //   console.log('rtsp-img' + id)
      // })
    },
    cameraadd() {
      // this.rtspLists.push('123')
      this.socket.emit('sendMessage', this.CameraIP)
      // this.CameraIP = ''
    },
    cameraremove() {
      const rtpsimg = document.querySelectorAll('.rtpsimg')
      rtpsimg.forEach(function() {
        this.src = '/loadingBG.png'
      })
      // this.socket.emit('removeCAM', 'remove')
      // this.rtspLists = []
      // this.socket.emit('stop')
      if (this.socket !== undefined) {
        this.socket.disconnect()
      }
    },
  },
}
</script>
<style scoped>
#asdferg {
  width: 300px;
  height: 300px;
}
</style>
