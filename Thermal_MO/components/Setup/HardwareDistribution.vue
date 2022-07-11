<template>
  <v-row>
    <v-col cols="12" lg="6" md="6">
      <v-card ref="form" class="my-6 ml-6 card" flat outlined height="48.5em">
        <v-card-title>
          <v-row>
            <v-col cols="12" class="pb-0">
              <h5>伺服器主機分類管理</h5>
            </v-col>
            <v-col cols="12" md="12" class="pt-0">
              <div class="d-flex">
                <v-text-field
                  v-model="search"
                  prepend-inner-icon="mdi-magnify"
                  label="搜尋"
                  outlined
                  hide-details
                  dense
                  color="#828c8f"
                  class="search"
                  style="color: #828c8f; margin-right: 8px"
                ></v-text-field>

                <!-- <v-spacer></v-spacer> -->
                <v-btn color="#828c8f" dark v-on="on" outlined>
                  <h5>查看更多</h5>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card-title>
        <v-divider class="mx-4"></v-divider>
        <v-card-text class="pt-10 px-6"> </v-card-text>

        <!-- </v-card> -->
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card ref="form" class="my-6 mr-6" flat outlined height="48.5em">
        <v-card-title>
          <v-row>
            <v-col cols="12" class="pb-0">
              <h5>相機分類管理</h5>
            </v-col>
            <v-col cols="12" md="12" class="pt-0">
              <div class="d-flex">
                <v-text-field
                  v-model="search"
                  prepend-inner-icon="mdi-magnify"
                  label="搜尋"
                  outlined
                  hide-details
                  dense
                  color="#828c8f"
                  class="search"
                  style="color: #828c8f; margin-right: 8px"
                ></v-text-field>

                <!-- <v-spacer></v-spacer> -->
                <v-btn color="#828c8f" dark v-on="on" outlined>
                  <h5>查看更多</h5>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card-title>
        <v-divider class="mx-4"></v-divider>
        <v-card-text class="pt-10 px-6"> </v-card-text>

        <!-- </v-card> -->
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    // 重複發報
    repeat_transmission: ['YES', 'NO'],
    // 寄件者類型
    user_type: ['viewer', 'user', 'admin'],
    // 驗證
    verify: ['YES', 'NO'],
    // 發報頻率
    frequency: ['30秒', '1分鐘', '5分鐘', '10分鐘'],
    // 是否含警報圖
    alert_pics: ['YES', 'NO'],

    // 重複發報
    repeat_transmission2: ['YES', 'NO'],
    // 發報頻率
    frequency2: ['30秒', '1分鐘', '5分鐘', '10分鐘'],
    // 是否含警報圖
    alert_pics2: ['YES', 'NO'],
    errorMessages: '',
    name: null,
    address: null,
    city: null,
    state: null,
    zip: null,
    country: null,
    formHasErrors: false,
  }),

  computed: {
    form() {
      return {
        name: this.name,
        address: this.address,
        city: this.city,
        state: this.state,
        zip: this.zip,
        country: this.country,
      }
    },
  },

  watch: {
    name() {
      this.errorMessages = ''
    },
  },

  methods: {
    resetForm() {
      this.errorMessages = []
      this.formHasErrors = false

      Object.keys(this.form).forEach((f) => {
        this.$refs[f].reset()
      })
    },
    submit() {
      this.formHasErrors = false

      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) this.formHasErrors = true

        this.$refs[f].validate(true)
      })
    },
    resetForm2() {
      this.errorMessages = []
      this.formHasErrors = false

      Object.keys(this.form).forEach((f) => {
        this.$refs[f].reset()
      })
    },
    submit2() {
      this.formHasErrors = false

      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) this.formHasErrors = true

        this.$refs[f].validate(true)
      })
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

<style lang="scss" scrope>
.carousel-wrapper {
  margin-top: 10px;
  padding-right: 30px;
  padding-left: 30px;
}

.ycoordinates {
  position: absolute;
  font-size: 12px;
  right: 80px;
  bottom: 49px;
}
.xcoordinates {
  position: absolute;
  font-size: 12px;
  bottom: 275px;
  left: 505px;
}
.faketime {
  font-weight: 500;
  margin-left: 10px;
}

.btn {
  background-color: #f2f4f4;
}
.reset {
  // float: right;
  // margin-top: 0.5em;
  // margin-right: 0.5em;
  right: 0.5em;
  top: 0.5em;
  position: absolute;
}


// on off
.switch-field {
  display: flex;
  margin-bottom: 36px;
  overflow: hidden;
}

.switch-field input {
  position: absolute !important;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  width: 1px;
  border: 0;
  overflow: hidden;
}

.switch-field label {
  /* 	background-color: #e4e4e4; */
  font-size: 9px;
  line-height: 1;
  text-align: center;
  padding: 8px 16px;
  margin-right: -1px;
  border: 1px solid #828c8f;
  /* 	box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1); */
  transition: all 0.1s ease-in-out;
  color: rgba(0, 0, 0, 0.2);
  font-size: 9px;
}

.switch-field label:hover {
  cursor: pointer;
}

.switch-field input:checked + label {
  background-color: white;
  box-shadow: none;
  color: #828c8f;
}

.switch-field label:first-of-type {
  border-radius: 4px 0 0 4px;
}

.switch-field label:last-of-type {
  border-radius: 0 4px 4px 0;
}

.footer {
  position: absolute;
  bottom: 12px;
  float: bottom;
  left: 44em;
}

// .search > .v-input__control > .v-input__slot {
//   /* padding:0px 10px !important; */
//   font-size: 12px;
// }
.search .v-input__slot {
  min-height: 36px !important;
  // width: 15em !important;

  font-size: 13px;
}

.search .v-input__slot .v-icon {
  font-size: 20px;
}

.search .v-input__slot .v-label {
  font-size: 13px;
  // padding: 0px 0px 0px 0px;
}


</style>
