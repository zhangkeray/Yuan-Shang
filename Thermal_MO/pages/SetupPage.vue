<template>
<v-app>
  <v-card>
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
  </v-app>
</template>


<script>
import axios from 'axios'
export default {
  name: 'SetupPage',
  async asyncData({ params }) {
    const { data } = await axios.get(`http://192.168.0.173:8080/camera`)
    // console.log(Object.values。(data));
    const cameraname = []
    const camerauid = []
    const test = Object.values(data)
    test.forEach(function (item) {
      cameraname.push(item.name)
      camerauid.push(item)
    })

    console.log(cameraname)
    return {
      title: data.camera1.name,
      uid: data.camera1.uid,
      tab: null,
      items: cameraname,
      text: camerauid,
      //   desc: data.description
    }
  },
}
</script>
