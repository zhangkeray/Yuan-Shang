<template>
  <div>
    <v-img class="bgimg" src="bgimg.png" height="93.2vh" />
    <v-container fluid="true">
      <div>
        <v-row>
          <v-col cols="9">
            <v-card class="camera-bg mt-3" style="height: 850px">
              <v-row>
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
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card class="camera-bg mt-3" style="height: 850px">
              <v-row>
                </v-row>
              <div></div>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'MultiScreenPage',
}
</script>

<style>
.bgimg {
  position: absolute;
}
.camera-bg {
  background: #fff;
}
</style>