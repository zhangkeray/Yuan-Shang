<template>
  <div>
    <v-img class="bgimg" src="bgimg.png" height="93.2vh" />
    <v-container fluid="true">
      <div>
        <v-row>
          <v-col cols="9" class="p-1">
            <v-card class="camera-bg align-items-c mt-3" style="">
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
              <div class="menu-top">
                <div>
                  <v-btn class="arrow-custom" tile>
                    <img
                      class=""
                      alt="line"
                      src="/images/Previous.png"
                      width="60%"
                    />
                  </v-btn>
                  <v-btn class="arrow-custom" tile>
                    <img
                      class=""
                      alt="line"
                      src="/images/next.png"
                      width="60%"
                    />
                  </v-btn>
                </div>
                <div class="menu-top-setting">
                  <v-checkbox
                    v-model="carousel_checkbox"
                    label="輪播"
                    class="mr-3"
                  ></v-checkbox>
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        class="btu-setting"
                        fab
                        x-small
                        v-bind="attrs"
                        v-on="on"
                      >
                        <img
                          class=""
                          alt="line"
                          src="/images/setting.png"
                          width="70%"
                        />
                      </v-btn>
                    </template>
                    <span>畫面設定</span>
                  </v-tooltip>
                </div>
              </div>
              <!-- 選單組 -->
              <div class="custom-g-select">
                <div class="pl-0">
                  <v-select
                    class="custom-select"
                    v-model="e1"
                    :items="areas"
                    dense
                    solo
                  ></v-select>
                </div>
                <div class="pl-0">
                  <v-select
                    class="custom-select"
                    v-model="e2"
                    :items="groups"
                    dense
                    solo
                  ></v-select>
                </div>
                <div class="pl-0">
                  <v-select
                    class="custom-select"
                    v-model="e3"
                    :items="pages"
                    dense
                    solo
                  ></v-select>
                </div>
                <div class="px-0">
                  <v-select
                    v-model="e4"
                    class="custom-select"
                    :items="splitScreen"
                    dense
                    solo
                  >
                    <template v-slot:prepend>
                      <v-fade-transition leave-absolute>
                        <img
                          width="24"
                          height="24"
                          class="transition-img"
                          src="/images/display.png"
                          alt=""
                        />
                      </v-fade-transition>
                    </template>
                  </v-select>
                </div>
              </div>
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
    depressed: true,
    carousel_checkbox: false,
    // 下拉選單
    e1: '第一區',
    areas: ['第一區', '第一區', '第一區'],
    e2: '第一組',
    groups: ['第一組', '第一組', '第一組'],
    e3: '第一頁',
    pages: ['第一頁', '第一頁', '第一頁'],
    e4: '4分格',
    splitScreen: ['均分4分格', '4分格', '12分格'],
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
  border-radius: 0px !important;
}
.align-items-c {
  display: flex;
  align-items: center;
}
.cam-grid {
  display: grid;
  grid-template-columns: 338px;
  margin-right: 7px;
  grid-template-rows: 261px 261px 261px;
  align-items: center;
}
.cam-only {
  width: 100%;
}
.arrow-custom {
  background-color: #fff !important;
  box-shadow: unset !important;
  border: 2px rgb(218, 218, 218) solid;
  border-radius: 3px;
  width: 42px;
  min-width: 42px !important;
  height: 43px !important;
}
.menu-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu-top-setting {
  display: flex;
  align-items: center;
}
.btu-setting {
  background-color: #fff !important;
  box-shadow: unset !important;
}
.custom-g-select {
  display: grid;
  grid-template-columns: 20% 21% 21% 38%;
}

.custom-g-select>div:first-child{
  margin-left: 0px !important; 
}
.custom-g-select>div{
  margin-left: 5px;
}
.custom-select {
  height: 40px;
  border: 1px rgb(218, 218, 218) solid;
  /* flex-direction: row-reverse; */
}
.transition-img {
  margin: 0px 0px 0px 3px;
}
.custom-select div {
  font-size: 10px;
}
.custom-select > div > div {
  box-shadow: unset !important;
  padding-right: 3px !important;
  padding-left: 3px !important;
}
</style>