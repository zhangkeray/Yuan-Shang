<template>
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
          <v-card-text>
            <h1>{{title}}</h1>
            <h1>{{uid}}</h1>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <h1>undefined</h1>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <h1>undefined</h1>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <h1>undefined</h1>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <h1>undefined</h1>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <h1>undefined</h1>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <h1>undefined</h1>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <h1>undefined</h1>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <h1>undefined</h1>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <h1>undefined</h1>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <h1>undefined</h1>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <h1>undefined</h1>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <h1>undefined</h1>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  name: 'SetupPage',
  async asyncData ({ params }) {
    const { data } = await axios.get(`http://192.168.0.173:8080/camera`)
    // console.log(data);
    return { 
      title: data.camera1.name,
      uid: data.camera1.uid
    //   desc: data.description
    }
  }
};
</script>