<template>
  <v-row>
    <v-col cols="12" lg="6" md="6">
      <v-card ref="form" class="my-6 ml-6" flat outlined height="48.5em">
        <v-card-title>
          <h5>電子郵件警報通知</h5>
          <v-spacer></v-spacer>
          <!-- on off -->
          <form>
            <div class="switch-field py-0 my-0 px-1">
              <input
                type="radio"
                id="radio-one-email-notice"
                name="switch-one"
                value="yes"
                checked
              />
              <label for="radio-one-email-notice">ON</label>
              <input
                type="radio"
                id="radio-two-email-notice"
                name="switch-one"
                value="no"
              />
              <label for="radio-two-email-notice">OFF</label>
            </div>
          </form>
        </v-card-title>
        <v-divider class="mx-4"></v-divider>
        <v-card-text class="pt-10 px-6">
          <v-row>
            <v-col cols="12" md="6" class="pa-0 ma-0">
              <v-row>
                <v-col cols="12" md="5">
                  <v-subheader class="py-0 pl-12 pb-1">Smtp Host</v-subheader>
                </v-col>
                <v-col cols="12" md="7">
                  <v-text-field
                    dense
                    outlined
                    ref=""
                    placeholder="smpt.gmail.com"
                    required
                    append-icon="mdi-pencil"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="6" class="pa-0 ma-0">
              <v-row>
                <v-col cols="12" md="5">
                  <v-subheader class="py-0 pl-12 pb-1">發報設定</v-subheader>
                </v-col>
                <v-col cols="12" md="7">
                  <!-- on off -->
                  <form class="form">
                    <div class="switch-field pt-1 my-0">
                      <input
                        type="radio"
                        id="radio-one-repos-setting1"
                        name="switch-one"
                        value="yes"
                        checked
                      />
                      <label for="radio-one-repos-setting1">ON</label>
                      <input
                        type="radio"
                        id="radio-two-repos-setting1"
                        name="switch-one"
                        value="no"
                      />
                      <label for="radio-two-repos-setting1">OFF</label>
                    </div>
                  </form>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6" class="pa-0 ma-0">
              <v-row>
                <v-col cols="12" md="5">
                  <v-subheader class="py-0 pl-12 pb-1">Smtp Post</v-subheader>
                </v-col>
                <v-col cols="12" md="7">
                  <v-text-field
                    dense
                    outlined
                    ref=""
                    placeholder="smpt.gmail.com"
                    required
                    append-icon="mdi-pencil"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="6" class="pa-0 ma-0">
              <v-row>
                <v-col cols="12" md="5">
                  <v-subheader class="py-0 pl-12 pb-1">重複發報</v-subheader>
                </v-col>
                <v-col cols="12" md="7">
                  <v-select
                    dense
                    outlined
                    ref=""
                    :rules="[() => !!repeat_transmission || '不可為空']"
                    :items="repeat_transmission"
                    placeholder="請選擇"
                    required
                  ></v-select>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6" class="pa-0 ma-0">
              <v-row>
                <v-col cols="12" md="5">
                  <v-subheader class="py-0 pl-12 pb-1">寄件人帳號</v-subheader>
                </v-col>
                <v-col cols="12" md="7">
                  <v-text-field
                    dense
                    outlined
                    ref=""
                    placeholder="smpt.gmail.com"
                    required
                    append-icon="mdi-pencil"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="6" class="pa-0 ma-0">
              <v-row>
                <v-col cols="12" md="5">
                  <v-subheader class="py-0 pl-12 pb-1">發報頻率</v-subheader>
                </v-col>
                <v-col cols="12" md="7">
                  <v-select
                    dense
                    outlined
                    ref=""
                    :rules="[() => !!frequency || '不可為空']"
                    :items="frequency"
                    placeholder="請選擇"
                    required
                  ></v-select>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6" class="pa-0 ma-0">
              <v-row>
                <v-col cols="12" md="5">
                  <v-subheader class="py-0 pl-12 pb-1">寄件人密碼</v-subheader>
                </v-col>
                <v-col cols="12" md="7">
                  <v-text-field
                    dense
                    outlined
                    ref=""
                    placeholder="smpt.gmail.com"
                    required
                    append-icon="mdi-pencil"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="6" class="pa-0 ma-0">
              <v-row>
                <v-col cols="12" md="5">
                  <v-subheader class="py-0 pl-12 pb-1"
                    >是否含警報圖</v-subheader
                  >
                </v-col>
                <v-col cols="12" md="7">
                  <v-select
                    dense
                    outlined
                    ref=""
                    :rules="[() => !!alert_pics || '不可為空']"
                    :items="alert_pics"
                    placeholder="請選擇"
                    required
                  ></v-select>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6" class="pa-0 ma-0">
              <v-row>
                <v-col cols="12" md="5">
                  <v-subheader class="py-0 pl-12 pb-1">收件人帳號</v-subheader>
                </v-col>
                <v-col cols="12" md="7">
                  <v-text-field
                    dense
                    outlined
                    ref=""
                    placeholder="smpt.gmail.com"
                    required
                    append-icon="mdi-pencil"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6" class="pa-0 ma-0">
              <v-row>
                <v-col cols="12" md="5">
                  <v-subheader class="py-0 pl-12 pb-1">郵件主題</v-subheader>
                </v-col>
                <v-col cols="12" md="7">
                  <v-text-field
                    dense
                    outlined
                    ref=""
                    placeholder="警報發送000"
                    required
                    append-icon="mdi-pencil"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6" class="pa-0 ma-0">
              <v-row>
                <v-col cols="12" md="5">
                  <v-subheader class="py-0 pl-12 pb-1">寄件者類型</v-subheader>
                </v-col>
                <v-col cols="12" md="7">
                  <v-select
                    dense
                    outlined
                    ref=""
                    :rules="[() => !!user_type || '不可為空']"
                    :items="user_type"
                    placeholder="請選擇"
                    required
                  ></v-select>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6" class="pa-0 ma-0">
              <v-row>
                <v-col cols="12" md="5">
                  <v-subheader class="py-0 pl-12 pb-1">驗證</v-subheader>
                </v-col>
                <v-col cols="12" md="7">
                  <v-select
                    dense
                    outlined
                    ref=""
                    :rules="[() => !!verify || '不可為空']"
                    :items="verify"
                    placeholder="請選擇"
                    required
                  ></v-select>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
        <footer class="footer">
          <v-card-actions class="px-6">
            <v-spacer></v-spacer>
            <v-slide-x-reverse-transition>
              <v-tooltip v-if="formHasErrors" left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    class="my-0"
                    v-bind="attrs"
                    @click="resetForm1"
                    v-on="on"
                  >
                    <v-icon>mdi-refresh</v-icon>
                  </v-btn>
                </template>
                <span>Refresh form</span>
              </v-tooltip>
            </v-slide-x-reverse-transition>
            <v-btn color="primary" outlined text @click="submit"> 確認 </v-btn>
          </v-card-actions>
        </footer>
        <!-- </v-card> -->
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card ref="form" class="my-6 mr-6" flat outlined height="48.5em">
        <v-card-title>
          <h5>LINE發報通知</h5>
          <v-spacer></v-spacer>
          <!-- on off -->
          <form>
            <div class="switch-field py-0 my-0 px-1">
              <input
                type="radio"
                id="radio-one-line-notice"
                name="switch-one"
                value="yes"
                checked
              />
              <label for="radio-one-line-notice">ON</label>
              <input
                type="radio"
                id="radio-two-line-notice"
                name="switch-one"
                value="no"
              />
              <label for="radio-two-line-notice">OFF</label>
            </div>
          </form>
        </v-card-title>
        <v-divider class="mx-4"></v-divider>
        <v-card-text class="pt-10 px-6">
          <v-row>
            <v-col cols="12" md="6" class="pa-0 ma-0">
              <v-row>
                <v-col cols="12" md="5">
                  <v-subheader class="py-0 pl-12 pb-1">LINE Token</v-subheader>
                </v-col>
                <v-col cols="12" md="7">
                  <v-text-field
                    dense
                    outlined
                    ref=""
                    v-model="country"
                    :rules="[() => !!country || '不可為空']"
                    :items="countries"
                    placeholder="Select..."
                    required
                    append-icon="mdi-pencil"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="6" class="pa-0 ma-0">
              <v-row>
                <v-col cols="12" md="5">
                  <v-subheader class="py-0 pl-12 pb-1">發報設定</v-subheader>
                </v-col>
                <v-col cols="12" md="7">
                  <!-- on off -->
                  <form class="form">
                    <div class="switch-field pt-1 my-0">
                      <input
                        type="radio"
                        id="radio-one-repos-setting2"
                        name="switch-one"
                        value="yes"
                        checked
                      />
                      <label for="radio-one-repos-setting2">ON</label>
                      <input
                        type="radio"
                        id="radio-two-repos-setting2"
                        name="switch-one"
                        value="no"
                      />
                      <label for="radio-two-repos-setting2">OFF</label>
                    </div>
                  </form>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6" class="pa-0 ma-0"> </v-col>
            <v-col cols="12" md="6" class="pa-0 ma-0">
              <v-row>
                <v-col cols="12" md="5">
                  <v-subheader class="py-0 pl-12 pb-1">重複發報</v-subheader>
                </v-col>
                <v-col cols="12" md="7">
                  <v-select
                    dense
                    outlined
                    ref=""
                    :rules="[() => !!repeat_transmission2 || '不可為空']"
                    :items="repeat_transmission2"
                    placeholder="請選擇"
                    required
                  ></v-select>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6" class="pa-0 ma-0"> </v-col>
            <v-col cols="12" md="6" class="pa-0 ma-0">
              <v-row>
                <v-col cols="12" md="5">
                  <v-subheader class="py-0 pl-12 pb-1">發報頻率</v-subheader>
                </v-col>
                <v-col cols="12" md="7">
                  <v-select
                    dense
                    outlined
                    ref=""
                    :rules="[() => !!frequency2 || '不可為空']"
                    :items="frequency2"
                    placeholder="請選擇"
                    required
                  ></v-select>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6" class="pa-0 ma-0"> </v-col>
            <v-col cols="12" md="6" class="pa-0 ma-0">
              <v-row>
                <v-col cols="12" md="5">
                  <v-subheader class="py-0 pl-12 pb-1"
                    >是否含警報圖</v-subheader
                  >
                </v-col>
                <v-col cols="12" md="7">
                  <v-select
                    dense
                    outlined
                    ref=""
                    :rules="[() => !!alert_pics2 || '不可為空']"
                    :items="alert_pics2"
                    placeholder="請選擇"
                    required
                  ></v-select>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
        <footer class="footer">
          <v-card-actions class="px-6">
            <v-spacer></v-spacer>
            <v-slide-x-reverse-transition>
              <v-tooltip v-if="formHasErrors" left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    class="my-0"
                    v-bind="attrs"
                    @click="resetForm2"
                    v-on="on"
                  >
                    <v-icon>mdi-refresh</v-icon>
                  </v-btn>
                </template>
                <span>Refresh form</span>
              </v-tooltip>
            </v-slide-x-reverse-transition>
            <v-btn color="primary" outlined text @click="submit2"> 確認 </v-btn>
          </v-card-actions>
        </footer>
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

<style lang="scss">
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
// .v-input__slot {
//   // max-height: 1em !important;
//   // width: 15em !important;
//   // color: red;
//   display: flex !important;
//   align-items: left !important;
//   font-size: 12px;
//   // padding: 0px 0px 0px 0px;
// }

// .v-input__slot .v-icon {
//   // max-height: 1em !important;
//   // width: 20em !important;
//   // color: red;
//   // display: flex !important;
//   // align-items: left !important;
//   font-size: 15px;
//   // padding: 0px 0px 0px 0px;
// }

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
</style>
