<template>
  <v-row>
    <v-col cols="12" lg="6" md="6">
      <v-card ref="form" class="my-6 ml-6" flat outlined height="48.5em">
        <v-card-title>
          <h5 style="color: #4f5e62">電子郵件警報通知</h5>
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
                    class="setup_input"
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
                  <v-radio-group v-model="radio" row mandatory dense style="padding: 10px 0 0 0">
                    <v-radio label="ON" value="radio-1" color="#4f5e62"></v-radio>
                    <v-radio label="OFF" value="radio-2" color="#4f5e62"></v-radio>
                  </v-radio-group>
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
                    class="setup_input"
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
                    class="setup_input"
                    dense
                    outlined
                    ref=""
                    :rules="[() => !!repeat_transmission || '不可為空']"
                    :items="repeat_transmission"
                    placeholder="請選擇"
                    required
                    :menu-props="{ bottom: true, offsetY: true }"
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
                    class="setup_input"
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
                    class="setup_input"
                    dense
                    outlined
                    ref=""
                    :rules="[() => !!frequency || '不可為空']"
                    :items="frequency"
                    placeholder="請選擇"
                    required
                    :menu-props="{ bottom: true, offsetY: true }"
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
                    class="setup_input"
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
                    class="setup_input"
                    dense
                    outlined
                    ref=""
                    :rules="[() => !!alert_pics || '不可為空']"
                    :items="alert_pics"
                    placeholder="請選擇"
                    required
                    :menu-props="{ bottom: true, offsetY: true }"
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
                    class="setup_input"
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
                    class="setup_input"
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
                    class="setup_input"
                    dense
                    outlined
                    ref=""
                    :rules="[() => !!user_type || '不可為空']"
                    :items="user_type"
                    placeholder="請選擇"
                    required
                    :menu-props="{ bottom: true, offsetY: true }"
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
                    class="setup_input"
                    dense
                    outlined
                    ref=""
                    :rules="[() => !!verify || '不可為空']"
                    :items="verify"
                    placeholder="請選擇"
                    required
                    :menu-props="{ bottom: true, offsetY: true }"
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
            <v-btn color="#4f5e62" outlined text @click="submit">
              確認
            </v-btn>
          </v-card-actions>
        </footer>
        <!-- </v-card> -->
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card ref="form" class="my-6 mr-6" flat outlined height="48.5em">
        <v-card-title>
          <h5 style="color: #4f5e62">LINE發報通知</h5>
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
                    class="setup_input"
                    dense
                    outlined
                    ref=""
                    placeholder="smtp.gmail.com"
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
                  <v-radio-group v-model="radio" row mandatory dense style="padding: 10px 0 0 0">
                    <v-radio label="ON" value="radio-1" color="#4f5e62"></v-radio>
                    <v-radio label="OFF" value="radio-2" color="#4f5e62"></v-radio>
                  </v-radio-group>
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
                    class="setup_input"
                    dense
                    outlined
                    ref=""
                    :rules="[() => !!repeat_transmission2 || '不可為空']"
                    :items="repeat_transmission2"
                    placeholder="請選擇"
                    required
                    :menu-props="{ bottom: true, offsetY: true }"
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
                    class="setup_input"
                    dense
                    outlined
                    ref=""
                    :rules="[() => !!frequency2 || '不可為空']"
                    :items="frequency2"
                    placeholder="請選擇"
                    required
                    :menu-props="{ bottom: true, offsetY: true }"
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
                    class="setup_input"
                    dense
                    outlined
                    ref=""
                    :rules="[() => !!alert_pics2 || '不可為空']"
                    :items="alert_pics2"
                    placeholder="請選擇"
                    required
                    :menu-props="{ bottom: true, offsetY: true }"
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
            <v-btn color="#4f5e62" outlined text @click="submit2">
              確認
            </v-btn>
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
    // 電子郵件警報通知:
    // 重複發報
    repeat_transmission: ['YES', 'NO'],
    // 寄件者類型
    user_type: ['user', 'mail server'],
    // 驗證
    verify: ['YES', 'NO'],
    // 發報頻率
    frequency: ['30秒', '1分鐘', '5分鐘', '10分鐘'],
    // 是否含警報圖
    alert_pics: ['YES', 'NO'],

    radioGroup: 1,
    // LINE發報通知:
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
.v-subheader {
  color: #4f5e62;
  font-weight: 500;
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
  border: 1px solid rgba(0, 0, 0, 0.102);
  /* 	box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1); */
  transition: all 0.3s ease-in-out;
  color: rgba(0, 0, 0, 0.102);
  font-size: 9px;
}

.switch-field label:hover {
  cursor: pointer;
}

.switch-field input:checked + label {
  background-color: white;
  box-shadow: none;
  color: #4f5e62;
  border: 1px solid #4f5e62;
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

.setup_input .v-input__slot {
  max-height: 1em !important;
  width: 15em !important;
  display: flex !important;
  align-items: left !important;
  font-size: 12px;
  color: #4f5e62 !important;
}

.setup_input input {
  color: #4f5e62 !important;
}
.setup_input .v-input__slot .v-icon {
  // max-height: 1em !important;
  // width: 20em !important;
  color: rgba(0, 0, 0, 0.1);
  // display: flex !important;
  // align-items: left !important;
  font-size: 15px;
  // padding: 0px 0px 0px 0px;
}

.theme--light.setup_input.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state)
  > .v-input__control
  > .v-input__slot
  fieldset {
  color: rgba(0, 0, 0, 0.1);
}

.v-input--selection-controls {
  margin-top: 0px;
  padding-top: 0px;
}

.v-list-item--dense .v-list-item__title,
.v-list-item--dense .v-list-item__subtitle,
.v-list--dense .v-list-item .v-list-item__title,
.v-list--dense .v-list-item .v-list-item__subtitle {
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1rem;
  color: #4f5e62;
}

.v-select__selection--comma {
  margin: 7px 4px 7px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  // font-weight: 500;
  color: #4f5e62;
}


.theme--light.v-label {
  color: #4f5e62;
  font-size: 12px
}
</style>
