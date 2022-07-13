<template>
  <v-row>
    <v-col cols="12" lg="6" md="6">
      <v-card ref="form" class="my-6 ml-6 card" flat outlined height="48.5em">
        <v-card-title>
          <v-row>
            <v-col cols="12" class="pb-0">
              <h5 style="color: #4f5e62">伺服器主機分類管理</h5>
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
                  color="#4f5e62"
                  class="search"
                  style="color: #4f5e62; margin-right: 8px"
                ></v-text-field>

                <!-- <v-spacer></v-spacer> -->
                <v-btn color="#4f5e62" outlined text> 查看更多 </v-btn>
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
              <h5 style="color: #4f5e62">相機分類管理</h5>
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
                  color="#4f5e62"
                  class="search"
                  style="color: #4f5e62; margin-right: 8px"
                ></v-text-field>

                <!-- <v-spacer></v-spacer> -->
                <v-btn color="#4f5e62" outlined text> 查看更多 </v-btn>
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
.search .v-input__slot {
  min-height: 36px !important;
  // width: 15em !important;
  font-size: 13px;
}

.search input {
  color: #4f5e62 !important;
}
.search .v-input__slot .v-icon {
  font-size: 20px;
}

.search .v-input__slot .v-label {
  font-size: 14px;
  // padding: 0px 0px 0px 0px;
}

.theme--light.search.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state)
  > .v-input__control
  > .v-input__slot
  fieldset {
  color: rgba(0, 0, 0, 0.1);
}
</style>
