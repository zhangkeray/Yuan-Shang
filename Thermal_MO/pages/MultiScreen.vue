<template>
  <div>
    <v-img class="bgimg" src="bgimg.png" height="93.2vh" />
    <v-container fluid="true">
      <div>
        <v-row>
          <v-col cols="9" class="p-1">
            <v-card class="camera-bg mt-3" style="">
              <div class="cam-grid">
                <div v-for="(item01, index) in cam" :key="index">
                  <img
                    src="1656315342184.jpg"
                    class="test-cramre"
                    width="100%"
                  />
                </div>
              </div>
              <div class="cam-only">
                <img src="1656315342184.jpg" class="test-cramre" width="100%" />
              </div>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card class="camera-bg mt-3" style="height: 830px">
              <div></div>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
  <!-- <v-row>
                <v-col cols="4">
                  <v-img
                    src="1656315342184.jpg"
                    class="test-cramre"
                    width="100%"
                  ></v-img
                  ><v-img
                    src="1656315342184.jpg"
                    class="test-cramre"
                    width="100%"
                  ></v-img
                  ><v-img
                    src="1656315342184.jpg"
                    class="test-cramre"
                    width="100%"
                  ></v-img>
                </v-col>
                <v-col cols="8"
                  ><v-img
                    src="1656315342184.jpg"
                    class="test-cramre"
                    width="100%"
                  ></v-img
                ></v-col>
              </v-row> -->
</template>

<script>
export default {
  name: 'MultiScreenPage',
  data: () => ({
    cam: ['1', '2', '3'],
  }),
}
</script>

<style>
.bgimg {
  position: absolute;
}
.camera-bg {
  background: #fff;
  height: 830px;
  padding: 16px;
  align-items: center;
  display: flex;
}
.cam-grid {
  display: grid;
  grid-template-columns: 338px;
  margin-right: 7px;
}
.cam-only {
  width: 100%;
}
</style>