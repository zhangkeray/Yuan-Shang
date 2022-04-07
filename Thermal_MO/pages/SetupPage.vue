<template>
  <div class="fluid mt-3">
    <v-img class="bgimg" src="bgimg.png" height="93.2vh" />


    <v-row>
      <!-- 左畫面影像顯示----------------------------------------------------------------------------------------------- -->
      <v-col cols="12" md="12">
        <!-- <v-col cols="12" md="7" style="border: 1px solid red"> -->
        <v-card class="mt-3 mx-6" rounded="md" elevation="6" height="51.55em">


    <v-tabs vertical>
      <v-tab> 相機資訊 </v-tab>
      <v-tab> ip設定 </v-tab>
      <v-tab> 軟體版本維護 </v-tab>
      <v-tab> 採樣條件設定 </v-tab>
      <v-tab> 加密憑證 </v-tab>
      <v-tab> 智慧通知 </v-tab>
      <v-tab> 監測排程管理 </v-tab>
      <v-tab> FTP </v-tab>
      <v-tab> 通訊協議 </v-tab>
      <v-tab> Server線程管理 </v-tab>
      <v-tab> DI/DO </v-tab>
      <v-tab> 歷史資料運算 </v-tab>
      <v-tab> API輸出項目 </v-tab>

      <v-tab-item>
        <v-card flat>
          <v-col class="d-flex" cols="12">
            <v-tabs v-model="tab" align-with-title>
              <v-tabs-slider color="yellow"></v-tabs-slider>

              <v-tab v-for="item in items" :key="item">
                {{ item }}
              </v-tab>
            </v-tabs>
          </v-col>
          <v-card-text>
            <v-tabs-items v-model="tab">
              <v-tab-item v-for="item in text" :key="item">
                <v-card flat>
                  <v-card-text class="d-flex flex-column">
                    <div class="pb-4">
                      <span style="font-size: 2em"
                        >設備名稱:<a>{{ item.name }}</a></span
                      >
                    </div>
                    <div class="pb-4">
                    <span style="font-size: 2em"
                      >設備編號:<a>{{ item.uid }}</a></span
                    >
                    </div>
                    <div class="pb-4">
                    <span style="font-size: 2em"
                      >設備FPS:<a>{{ item.fps }}</a></span
                    >
                    </div>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <h2>ip設定</h2>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <h2>軟體版本維護</h2>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <h2>採樣條件設定</h2>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <h2>加密憑證</h2>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <h2>智慧通知</h2>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <h2>監測排程管理</h2>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <h2>FTP</h2>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <h2>通訊協議</h2>
            <h4>pending<v-icon>mdi-emoticon-cool-outline</v-icon></h4>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <h2>Server線程管理</h2>
            <h4>pending<v-icon>mdi-emoticon-cool-outline</v-icon></h4>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <h2>DI/DO</h2>
            <h4>pending<v-icon>mdi-emoticon-cool-outline</v-icon></h4>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <h2>歷史資料運算</h2>
            <h4>pending<v-icon>mdi-emoticon-cool-outline</v-icon></h4>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <h2>API輸出項目</h2>
            <h4>pending<v-icon>mdi-emoticon-cool-outline</v-icon></h4>
            <!-- ------------------------------------------------------------ -->
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">相機</th>
                    <th class="text-left">編號</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in title" :key="item">
                    <td>{{ title }}</td>
                    <td>{{ uid }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <!-- ------------------------------------------------------------ -->
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
// import axios from 'axios'
export default {
  // name: 'SetupPage',
  // async asyncData({ params }) {
  //   const { data } = await axios.get(`http://192.168.0.173:8080/camera`)
  //   // console.log(Object.values。(data));
  //   const cameraname = []
  //   const camerauid = []
  //   const test = Object.values(data)
  //   test.forEach(function (item) {
  //     cameraname.push(item.name)
  //     camerauid.push(item)
  //   })

  //   console.log(cameraname)
  //   return {
  //     title: data.camera1.name,
  //     uid: data.camera1.uid,
  //     tab: null,
  //     items: cameraname,
  //     text: camerauid,

      //   desc: data.description // be mute
    // }

  // },
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