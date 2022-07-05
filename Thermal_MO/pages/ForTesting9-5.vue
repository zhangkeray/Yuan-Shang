<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="9">
        <v-row>
          <v-col v-for="(item, index) in rtspLists" :key="index" cols="2">
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
      </v-col>
      <v-col cols="12" md="3">
        <v-row>
          <v-col cols="7">
            <v-text-field
              v-model="CameraIP"
              label="Camera URL(RTSP)"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="5">
            <v-text-field
              v-model="proxy"
              label="代理網址(連相機用)"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-btn @click="cameraadd">新增</v-btn>
            <v-btn @click="startStream1">start stream</v-btn>
            <v-btn @click="streamStop">stop stream</v-btn>
          </v-col>
          <v-col cols="12">
            <v-data-table
              dense
              :headers="headers"
              :items="desserts"
              item-key="name"
              class="elevation-1"
              hide-default-footer
              disable-pagination
            ></v-data-table>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
// import * as echarts from 'echarts'
import axios from 'axios'
export default {
  name: 'HistoricalMonitoringPage',
  data: () => ({
    rtspLists: [],
    CameraIP: 'rtsp://192.168.0.138/avc',
    proxy: null,
    CameraName: null,
    CameraFps: null,
    rtsp: [],
    desserts: [],
    headers: [
      {
        text: 'id',
        align: 'center',
        // sortable: false,
        value: 'id',
      },
      { text: 'Proxy', value: 'proxy' },
      { text: 'RTSP URL', value: 'rtsp' },
    ],
    getDataSetInt: null,
  }),
  mounted() {
    var ar = []
    for (var i = 0; i < 300; i++) {
      ar.push('0')
    }
    this.rtspLists = ar
    if (this.getDataSetInt !== null) {
      clearInterval(this.getDataSetInt)
    }
    this.getDataSetInt = setInterval(() => {
      this.getData()
    }, 1000)
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
      // 抓取資料
      axios({
        method: 'get',
        url: 'http://192.168.0.173:6148/cameraList',
      })
        .then((response) => {
          var data = response.data
          var arr = []
          data.forEach((index, i) => {
            arr.push({
              id: i + 1,
              proxy: `/${index.proxy}`,
              rtsp: index.cam,
            })
          })
          this.desserts = arr
        })
        .catch((error) => console.log('error from axios', error))
    },
    startStream1() {
      var rtspid = this.rtsp
      if (rtspid.length > 0) {
        rtspid.forEach((index) => {
          index.disconnect()
        })
        this.rtsp = []
      }
      // 將目前相機列表存入陣列中
      var rtspStream = []
      this.desserts.forEach((index) => {
        rtspStream.push({
          id: index.id,
          proxy: index.proxy,
          rtsp: index.rtsp,
        })
      })
      // console.log(rtspStream)
      axios({
        method: 'post',
        url: 'http://192.168.0.173:6148/stream',
        data: rtspStream,
      })
        .then((params) => {
          var data = params.data
          var arr = []
          for (var i = 0; i < data.length; i++) {
            this.socket = this.$nuxtSocket({
              name: 'main', // select "main" socket from nuxt.config.js - we could also skip this because "main" is the default socket
              channel: '/' + data[i].proxy,
            })
            const img = document.getElementById('rtsp-img' + i)
            this.socket.on('data', function (data) {
              img.src = 'data:image/jpeg;base64,' + data
            })
            arr.push(this.socket)
          }
          this.rtsp = arr
        })
        .catch((error) => console.log('error from axios', error))
    },
    cameraadd() {
      if (
        this.CameraIP !== null &&
        this.proxy !== null &&
        this.CameraIP !== '' &&
        this.proxy !== ''
      ) {
        console.log(this.CameraIP)
        var data = { ip: this.CameraIP, proxy: this.proxy }
        axios({
          method: 'post',
          url: 'http://192.168.0.173:6148/add',
          data,
        })
          .then((params) => {
            const data = params.data
            if (data.status === '200') {
              console.log('add')
              this.getData()
              this.startStream1()
            } else if (data.status === '403') {
              alert('輸入有誤，可能是"代理網址"有重複，請查明後重新輸入')
            }
            // this.startStream1()
          })
          .catch((error) => console.log('error from axios', error))
      } else {
        alert('請輸入完整資訊')
      }
    },
    streamStop() {
      var rtspid = this.rtsp
      if (this.socket !== undefined) {
        rtspid.forEach((index) => {
          index.disconnect()
        })
        this.rtsp = []
      }
      const rtpsimg = $('.rtpsimg')
      rtpsimg.each(function () {
        this.src = '/loadingBG.png'
      })
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
