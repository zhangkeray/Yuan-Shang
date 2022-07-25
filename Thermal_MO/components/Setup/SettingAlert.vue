<template>
  <v-row>
    <v-col cols="12" lg="6" md="6">
      <v-card class="my-6 ml-6" flat outlined height="48.5em">
        <v-card-title>
          <h5 style="color: #4f5e62">電子郵件警報通知</h5>
          <v-spacer></v-spacer>
          <!-- 電子郵件警報通知 右上方on/off -->
          <form>
            <div class="switch-field py-0 my-0 px-1">
              <input
                id="radio-one-email-notice"
                type="radio"
                name="switch-one"
                value="yes"
                checked
              />
              <label for="radio-one-email-notice">ON</label>
              <input
                id="radio-two-email-notice"
                type="radio"
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
            <!-- Smtp Host -->
            <v-col cols="12" md="6" class="pa-0 ma-0">
              <v-row>
                <v-col cols="12" md="5">
                  <v-subheader class="py-0 pl-12 pb-1">Smtp Host</v-subheader>
                </v-col>
                <v-col cols="12" md="7">
                  <v-text-field
                    v-model="smtpHost"
                    class="setup_input"
                    dense
                    outlined
                    placeholder="smpt.gmail.com"
                    required
                    append-icon="mdi-pencil"
                    :rules="smtpHostRules"
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
                  <v-radio-group
                    v-model="radio"
                    row
                    mandatory
                    dense
                    style="padding: 10px 0 0 0"
                  >
                    <v-radio
                      label="ON"
                      value="radio-1"
                      color="#4f5e62"
                    ></v-radio>
                    <v-radio
                      label="OFF"
                      value="radio-2"
                      color="#4f5e62"
                    ></v-radio>
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
                    v-model="smtpPost"
                    class="setup_input"
                    dense
                    outlined
                    placeholder="smpt.gmail.com"
                    required
                    append-icon="mdi-pencil"
                    :rules="smtpPostRules"
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
                    v-model="repeatTransmission"
                    class="setup_input"
                    dense
                    outlined
                    :rules="[(v) => !!v || '表格尚未選擇']"
                    :items="repeatTransmissionItems"
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
                    v-model="senderAccount"
                    class="setup_input"
                    dense
                    outlined
                    placeholder="smpt.gmail.com"
                    required
                    append-icon="mdi-pencil"
                    :rules="senderAccountRules"
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
                    v-model="frequency"
                    class="setup_input"
                    dense
                    outlined
                    :rules="[() => !!frequency || '表格尚未選擇']"
                    :items="frequencyItems"
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
                    v-model="senderPassword"
                    class="setup_input"
                    dense
                    outlined
                    placeholder="smpt.gmail.com"
                    required
                    append-icon="mdi-pencil"
                    :rules="senderPasswordRules"
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
                    v-model="alertPics"
                    class="setup_input"
                    dense
                    outlined
                    :rules="[() => !!alertPics || '表格尚未選擇']"
                    :items="alertPicsItems"
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
                    v-model="receiverAccount"
                    class="setup_input"
                    dense
                    outlined
                    placeholder="smpt.gmail.com"
                    required
                    append-icon="mdi-pencil"
                    :rules="receiverAccountRules"
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
                    v-model="emailTheme"
                    class="setup_input"
                    dense
                    outlined
                    placeholder="警報發送000"
                    required
                    append-icon="mdi-pencil"
                    :rules="emailThemeRules"
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
                    v-model="userType"
                    class="setup_input"
                    dense
                    outlined
                    :rules="[() => !!userType || '表格尚未選擇']"
                    :items="userTypeItems"
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
                    v-model="verify"
                    class="setup_input"
                    dense
                    outlined
                    :rules="[() => !!verify || '表格尚未選擇']"
                    :items="verifyItems"
                    placeholder="請選擇"
                    required
                    :menu-props="{ bottom: true, offsetY: true }"
                  ></v-select>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
        <!-- 儲存 含對話框  -->
        <v-card-actions class="footer pl-8 pb-1">
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" large persistent max-width="290">
            <template #activator="{ on, attrs }">
              <v-btn color="#4f5e62" outlined text v-bind="attrs" v-on="on">
                儲存
              </v-btn>
            </template>
            <v-card flat>
              <v-card-title><h5>確定儲存?</h5></v-card-title>
              <v-card-text></v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  small
                  color="#4f5e62"
                  dark
                  depressed
                  @click="
                    dialog = false
                    cancel()
                  "
                  @cancel="cancel"
                  >取消</v-btn
                >
                <!-- dialogForConfirm為判斷是否成功 -->
                <v-btn
                  v-if="!valid"
                  color="#4f5e62"
                  outlined
                  text
                  small
                  :disabled="!valid"
                  :loading="dialogForConfirm"
                  @click="
                    dialogForConfirm = true
                    dialog = false
                  "
                  >確定</v-btn
                >
                <v-dialog
                  v-model="dialogForConfirm"
                  hide-overlay
                  persistent
                  width="300"
                >
                  <v-card color="primary" dark>
                    <v-card-text>
                      資料儲存中...請稍後
                      <v-progress-linear
                        indeterminate
                        color="white"
                        class="mb-0"
                      ></v-progress-linear>
                    </v-card-text>
                  </v-card>
                </v-dialog>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card-actions>
      </v-card>
    </v-col>
    <!-- LINE發報通知 -->
    <v-col cols="12" lg="6" md="6">
      <v-card class="my-6 mr-6" flat outlined height="48.5em">
        <v-card-title>
          <h5 style="color: #4f5e62">LINE發報通知</h5>
          <v-spacer></v-spacer>
          <!-- LINE發報通知 右上方on/off -->
          <form>
            <div class="switch-field py-0 my-0 px-1">
              <input
                id="radio-one-line-notice"
                type="radio"
                name="switch-one"
                value="yes"
                checked
              />
              <label for="radio-one-line-notice">ON</label>
              <input
                id="radio-two-line-notice"
                type="radio"
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
                  <!-- <v-form ref="form" v-model="valid"   lazy-validation> -->
                  <v-text-field
                    v-model="lineToken"
                    class="setup_input"
                    dense
                    outlined
                    placeholder="smtp.gmail.com"
                    required
                    append-icon="mdi-pencil"
                    :rules="lineTokenRules"
                  ></v-text-field>
                  <!-- </v-form> -->
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="6" class="pa-0 ma-0">
              <v-row>
                <v-col cols="12" md="5">
                  <v-subheader class="py-0 pl-12 pb-1">發報設定</v-subheader>
                </v-col>
                <v-col cols="12" md="7">
                  <v-radio-group
                    v-model="radio"
                    row
                    mandatory
                    dense
                    style="padding: 10px 0 0 0"
                  >
                    <v-radio
                      label="ON"
                      value="radio-1"
                      color="#4f5e62"
                    ></v-radio>
                    <v-radio
                      label="OFF"
                      value="radio-2"
                      color="#4f5e62"
                    ></v-radio>
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
                    v-model="repeatTransmission2"
                    class="setup_input"
                    dense
                    outlined
                    :rules="[() => !!repeatTransmission2 || '表格尚未選擇']"
                    :items="repeatTransmissionItems2"
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
                    v-model="frequency2"
                    class="setup_input"
                    dense
                    outlined
                    :rules="[() => !!frequency2 || '表格尚未選擇']"
                    :items="frequencyItems2"
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
                    v-model="alertPics2"
                    class="setup_input"
                    dense
                    outlined
                    :rules="[() => !!alertPics2 || '表格尚未選擇']"
                    :items="alertPicsItems2"
                    placeholder="請選擇"
                    required
                    :menu-props="{ bottom: true, offsetY: true }"
                  ></v-select>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
        <!-- 儲存 含對話框  -->
        <v-card-actions class="footer pl-8 pb-1">
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" large persistent max-width="290">
            <template #activator="{ on, attrs }">
              <v-btn
                color="#4f5e62"
                outlined
                text
                v-bind="attrs"
                v-on="on"
                @click="validate()"
              >
                儲存
              </v-btn>
            </template>
            <v-card>
              <v-card-title><h5>確定儲存?</h5></v-card-title>
              <v-card-text></v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  small
                  color="#4f5e62"
                  dark
                  depressed
                  @click="
                    dialog = false
                    cancel()
                  "
                  @cancel="cancel"
                  >取消</v-btn
                >
                <v-btn
                  color="#4f5e62"
                  outlined
                  text
                  small
                  :disabled="dialogForConfirm"
                  :loading="dialogForConfirm"
                  @click="
                    dialogForConfirm = true
                    dialog = false
                  "
                  >確定</v-btn
                >
                <v-dialog
                  v-model="dialogForConfirm"
                  :disabled="!valid"
                  hide-overlay
                  persistent
                  width="300"
                >
                  <v-card color="primary" dark>
                    <v-card-text>
                      資料儲存中...請稍後
                      <v-progress-linear
                        indeterminate
                        color="white"
                        class="mb-0"
                      ></v-progress-linear>
                    </v-card-text>
                  </v-card>
                </v-dialog>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card-actions>
      </v-card>
      <!-- 消息通知(通知儲存成功or失敗) -->
      <v-snackbar
        v-model="snack"
        :color="snackColor"
        min-height="20px"
        class="snack"
        right
      >
        <div class="d-flex">
          <v-icon small>{{ snackIcon }}</v-icon>
          <div style="margin-left: 4px; padding-top: 3px">{{ snackText }}</div>
        </div>

        <template #action="{ attrs }">
          <v-btn v-bind="attrs" small icon @click="snack = false">
            <v-icon small dark>mdi-close</v-icon>
          </v-btn>
        </template>
      </v-snackbar>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    // 表單驗證
    radioGroup: 1,
    valid: true,
    smtpHost: '',
    smtpHostRules: [
      (v) => !!v || '表格不可為空',
      // v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    smtpPost: '',
    smtpPostRules: [
      (v) => !!v || '表格不可為空',
      // v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    senderAccount: '',
    senderAccountRules: [
      (v) => !!v || '表格不可為空',
      // v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    senderPassword: '',
    senderPasswordRules: [
      (v) => !!v || '表格不可為空',
      // v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    receiverAccount: '',
    receiverAccountRules: [
      (v) => !!v || '表格不可為空',
      // v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    emailTheme: '',
    emailThemeRules: [
      (v) => !!v || '表格不可為空',
      // v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    lineToken: '',
    lineTokenRules: [
      (v) => !!v || '表格不可為空',
      // v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    // 電子郵件警報通知:
    // 重複發報
    repeatTransmission: null,
    repeatTransmissionItems: ['YES', 'NO'],
    // 寄件者類型
    userType: null,
    userTypeItems: ['user', 'mail server'],
    // 驗證
    verify: null,
    verifyItems: ['YES', 'NO'],
    // 發報頻率
    frequency: null,
    frequencyItems: ['30秒', '1分鐘', '5分鐘', '10分鐘'],
    // 是否含警報圖
    alertPics: null,
    alertPicsItems: ['YES', 'NO'],

    // LINE發報通知:
    // 重複發報
    repeatTransmission2: null,
    repeatTransmissionItems2: ['YES', 'NO'], // 發報頻率
    // 發報頻率
    frequency2: null,
    frequencyItems2: ['30秒', '1分鐘', '5分鐘', '10分鐘'],
    // 是否含警報圖
    alertPics2: null,
    alertPicsItems2: ['YES', 'NO'],

    radio: '',
    snack: false,
    snackColor: '',
    snackText: '',
    snackIcon: '',
    dialog: false,
    dialogForConfirm: false,
  }),

  watch: {
    // 按下確定後之進度條
    dialogForConfirm(val) {
      if (!val) return
      setTimeout(() => (this.dialogForConfirm = false), 4000)

      // setTimeout(() => this.save(), 4000)
      setTimeout(() => this.error(), 4000)
    },
  },

  methods: {
    // 消息顯示
    save() {
      this.snack = true
      this.snackColor = '#8AB284'
      this.snackText = '資料儲存成功!'
      this.snackIcon = 'mdi-check-circle'
    },
    cancel() {
      this.snack = true
      this.snackColor = '#4f5e62'
      this.snackText = '已取消'
      this.snackIcon = 'mdi-close-circle'
    },
    error() {
      this.snack = true
      this.snackColor = '#e89595'
      this.snackText = '資料儲存失敗!'
      this.snackIcon = 'mdi-alert-circle'
    },
    // 表單驗證
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
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
  font-size: 12px;
}

.snack {
  // opacity: 0.7;
  margin-bottom: 150px;
}
</style>
