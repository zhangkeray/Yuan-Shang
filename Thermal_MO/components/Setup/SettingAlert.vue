<template>
  <v-row>
    <v-col cols="12" lg="5" md="5">
      <v-card ref="form" class=" my-6">
        <v-card-title class="py-0">
          電子郵件警報通知
          <v-spacer></v-spacer>
          <v-switch v-model="switch1" dense></v-switch>
        </v-card-title>
        <v-divider class="mx-4"></v-divider>
        <v-card-text>
          <!-- ----- -->
          <!-- <v-card ref="form"> -->
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  dense
                  ref="name"
                  v-model="name"
                  :rules="[() => !!name || 'This field is required']"
                  :error-messages="errorMessages"
                  label="Smtp Host"
                  placeholder=""
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-autocomplete
                  dense
                  ref=""
                  v-model="country"
                  :rules="[() => !!country || 'This field is required']"
                  :items="countries"
                  label="發報設定"
                  placeholder="Select..."
                  required
                ></v-autocomplete>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  dense
                  ref="address"
                  v-model="address"
                  :rules="[
                    () => !!address || 'This field is required',
                    () =>
                      (!!address && address.length <= 25) ||
                      'Address must be less than 25 characters',
                    addressCheck,
                  ]"
                  label="Smtp Post"
                  placeholder="Snowy Rock Pl"
                  counter="25"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-autocomplete
                  dense
                  ref=""
                  v-model="country"
                  :rules="[() => !!country || 'This field is required']"
                  :items="countries"
                  label="重複發報"
                  placeholder="Select..."
                  required
                ></v-autocomplete>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  dense
                  ref="city"
                  v-model="city"
                  :rules="[
                    () => !!city || 'This field is required',
                    addressCheck,
                  ]"
                  label="寄件人帳號"
                  placeholder="El Paso"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-autocomplete
                  dense
                  ref=""
                  v-model="country"
                  :rules="[() => !!country || 'This field is required']"
                  :items="countries"
                  label="發報頻率"
                  placeholder="Select..."
                  required
                ></v-autocomplete>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  dense
                  ref="state"
                  v-model="state"
                  :rules="[() => !!state || 'This field is required']"
                  label="寄件人密碼"
                  required
                  placeholder="TX"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-autocomplete
                  dense
                  ref=""
                  v-model="country"
                  :rules="[() => !!country || 'This field is required']"
                  :items="countries"
                  label="是否含發報圖"
                  placeholder="Select..."
                  required
                ></v-autocomplete>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  dense
                  ref="zip"
                  v-model="zip"
                  :rules="[() => !!zip || 'This field is required']"
                  label="收件人帳號"
                  required
                  placeholder="79938"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-autocomplete
                  dense
                  ref=""
                  v-model="country"
                  :rules="[() => !!country || 'This field is required']"
                  :items="countries"
                  label="郵件主題"
                  placeholder="Select..."
                  required
                ></v-autocomplete>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-autocomplete
                  dense
                  ref=""
                  v-model="country"
                  :rules="[() => !!country || 'This field is required']"
                  :items="countries"
                  label="寄件者類型"
                  placeholder="Select..."
                  required
                ></v-autocomplete>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-autocomplete
                  dense
                  ref=""
                  v-model="country"
                  :rules="[() => !!country || 'This field is required']"
                  :items="countries"
                  label="驗證"
                  placeholder="Select..."
                  required
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider class="mt-12"></v-divider>
          <v-card-actions>
            <!-- <v-btn text> Cancel </v-btn> -->
            <v-spacer></v-spacer>
            <v-slide-x-reverse-transition>
              <v-tooltip v-if="formHasErrors" left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    class="my-0"
                    v-bind="attrs"
                    @click="resetForm"
                    v-on="on"
                  >
                    <v-icon>mdi-refresh</v-icon>
                  </v-btn>
                </template>
                <span>Refresh form</span>
              </v-tooltip>
            </v-slide-x-reverse-transition>
            <v-btn color="primary" text @click="submit"> 確認 </v-btn>
          </v-card-actions>
          <!-- </v-card> -->
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card ref="form" class=" my-6">
        <v-card-title class="py-0">
          LINE發報通知
          <v-spacer></v-spacer>
          <v-switch v-model="switch1" dense></v-switch>
        </v-card-title>
        <v-divider class="mx-4"></v-divider>
        <v-card-text>
          <!-- <v-card ref="form"> -->
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  dense
                  ref="name"
                  v-model="name"
                  :rules="[() => !!name || 'This field is required']"
                  :error-messages="errorMessages"
                  label="LINE Token"
                  placeholder=""
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-autocomplete
                  dense
                  ref=""
                  v-model="country"
                  :rules="[() => !!country || 'This field is required']"
                  :items="countries"
                  label="發報設定"
                  placeholder="Select..."
                  required
                ></v-autocomplete>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6"> </v-col>
              <v-col cols="12" md="6">
                <v-autocomplete
                  dense
                  ref=""
                  v-model="country"
                  :rules="[() => !!country || 'This field is required']"
                  :items="countries"
                  label="重複發報"
                  placeholder="Select..."
                  required
                ></v-autocomplete>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6"> </v-col>
              <v-col cols="12" md="6">
                <v-autocomplete
                  dense
                  ref=""
                  v-model="country"
                  :rules="[() => !!country || 'This field is required']"
                  :items="countries"
                  label="發報頻率"
                  placeholder="Select..."
                  required
                ></v-autocomplete>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6"> </v-col>
              <v-col cols="12" md="6">
                <v-autocomplete
                  dense
                  ref=""
                  v-model="country"
                  :rules="[() => !!country || 'This field is required']"
                  :items="countries"
                  label="是否含發報圖"
                  placeholder="Select..."
                  required
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider class="mt-12"></v-divider>
          <v-card-actions>
            <!-- <v-btn text> Cancel </v-btn> -->
            <v-spacer></v-spacer>
            <v-slide-x-reverse-transition>
              <v-tooltip v-if="formHasErrors" left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    class="my-0"
                    v-bind="attrs"
                    @click="resetForm"
                    v-on="on"
                  >
                    <v-icon>mdi-refresh</v-icon>
                  </v-btn>
                </template>
                <span>Refresh form</span>
              </v-tooltip>
            </v-slide-x-reverse-transition>
            <v-btn color="primary" text @click="submit"> 確認 </v-btn>
          </v-card-actions>
          <!-- </v-card> -->
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    countries: ['Afghanistan', 'Albania', 'Algeria', 'Andorra'],
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
    addressCheck() {
      this.errorMessages = this.address && !this.name ? `Hey! I'm required` : ''

      return true
    },
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
</style>
