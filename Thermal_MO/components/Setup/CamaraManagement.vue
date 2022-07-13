<template>
  <v-row>
    <v-col cols="12" lg="12" md="12">
      <v-card ref="form" class="my-6 mx-6 card" flat outlined height="48.5em">
        <v-card-title>
          <v-row>
            <v-col cols="12" class="pb-0">
              <h5>相機管理</h5>
            </v-col>
            <v-col cols="12" md="12" class="py-0">
              <div class="d-flex">
                <div class="d-flex">
                  <v-select
                    class="classification input mr-2"
                    dense
                    outlined
                    ref=""
                    :items="repeat_transmission"
                    placeholder="主分類"
                  ></v-select>
                  <v-select
                    class="classification input mr-2"
                    dense
                    outlined
                    ref=""
                    :items="repeat_transmission"
                    placeholder="次分類"
                  ></v-select>
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
                </div>
                <v-spacer />

                <v-dialog v-model="dialog" max-width="700px">
                  <template v-slot:activator="{ on }">
                    <v-btn color="primary" v-on="on" outlined text>
                      <v-icon small>mdi-plus-circle-outline</v-icon>
                      <h5>新增相機</h5>
                    </v-btn>
                  </template>

                  <v-card>
                    <v-card-title>
                      <span v-if="editedItem.id">伺服器詳細資訊</span>
                      <span v-else>新增</span>
                    </v-card-title>
                    <v-card-text>
                      <v-row>
                        <v-col cols="12" md="6" class="pa-0 ma-0">
                          <v-row>
                            <v-col cols="12" md="5">
                              <h7 class="py-0 pl-12 pa-0">名稱</h7>
                            </v-col>
                            <v-col cols="12" md="7">
                              <h7>{{ editedItem.system_number }}</h7>
                            </v-col>
                            <v-col cols="12" md="5">
                              <h7 class="py-0 pl-12 pa-0">系統編號</h7>
                            </v-col>
                            <v-col cols="12" md="7">
                              <h7>{{ editedItem.system_number }}</h7>
                            </v-col>
                            <v-col cols="12" md="5">
                              <h7 class="py-0 pl-12 pa-0">系統編號</h7>
                            </v-col>
                            <v-col cols="12" md="7">
                              <h7>{{ editedItem.system_number }}</h7>
                            </v-col>
                            <v-col cols="12" md="5">
                              <h7 class="py-0 pl-12 pa-0">系統編號</h7>
                            </v-col>
                            <v-col cols="12" md="7">
                              <h7>{{ editedItem.system_number }}</h7>
                            </v-col>

                            <v-col cols="12" md="5">
                              <h7 class="py-0 pl-12 pa-0">系統編號</h7>
                            </v-col>
                            <v-col cols="12" md="7">
                              <h7>{{ editedItem.system_number }}</h7>
                            </v-col>
                            <v-col cols="12" md="5">
                              <h7 class="py-0 pl-12 pa-0">系統編號</h7>
                            </v-col>
                            <v-col cols="12" md="7">
                              <h7>{{ editedItem.system_number }}</h7>
                            </v-col>
                            <v-col cols="12" md="5">
                              <h7 class="py-0 pl-12 pa-0">系統編號</h7>
                            </v-col>
                            <v-col cols="12" md="7">
                              <h7>{{ editedItem.system_number }}</h7>
                            </v-col>
                            <v-col cols="12" md="5">
                              <h7 class="py-0 pl-12 pa-0">系統編號</h7>
                            </v-col>
                            <v-col cols="12" md="7">
                              <h7>{{ editedItem.system_number }}</h7>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-card-text>
                    <v-spacer></v-spacer>
                    <v-btn color="" text @click="showEditDialog()">取消</v-btn>
                    <v-btn color="" text @click="saveItem(editedItem)"
                      >儲存</v-btn
                    >
                  </v-card>
                </v-dialog>
              </div>
              <v-divider></v-divider>
            </v-col>
            <v-col cols="12" md="12" class="py-0 my-0">
              <div class="d-flex">
                <div class="d-flex">
                  <v-btn icon small @click="buttonCallback" class="mr-3">
                    <v-icon>mdi-reload</v-icon>
                  </v-btn>
                  <v-btn icon small @click="buttonCallback" class="mr-3">
                    <v-icon>mdi-eye</v-icon>
                  </v-btn>
                  <v-btn icon small @click="buttonCallback" class="mr-3">
                    <v-icon>mdi-bookmark-outline</v-icon>
                  </v-btn>
                  <v-btn icon small @click="buttonCallback" class="mr-3">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                  <v-btn icon small @click="buttonCallback">
                    <v-icon>mdi-lightning-bolt-circle</v-icon>
                  </v-btn>
                </div>
                <v-spacer />
                <div class="d-flex">
                  <v-text-field
                    class="classification input mr-2 py-0 my-0"
                    :value="itemsPerPage"
                    label="顯示筆數"
                    type="number"
                    min="-1"
                    max="15"
                    @input="itemsPerPage = parseInt($event, 10)"
                    outlined
                  ></v-text-field>
                  <!-- <v-select
                  class="classification input mr-2"
                    :value="itemsPerPage"
                    outlined
                    dense
                    width="20px"
                    label="顯示筆數"
                    type="number"
                    min="-1"
                    max="15"
                    @input="itemsPerPage = parseInt($event, 10)"
                  ></v-select> -->
                  <v-pagination
                    v-model="page"
                    :length="pageCount"
                    :total-visible="10"
                    class="custom py-0 my-0"
                  ></v-pagination>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card-title>
        <v-divider></v-divider>

        <!-- this dialog is used for both create and update -->
        <!-- 表格 -->

        <v-data-table
          :search="search"
          :headers="headers"
          :items="items"
          mobile-breakpoint="800"
          :loading="loading ? '#828c8f' : null"
          loading-text="資料加載中... 請稍後"
          style="color: #828c8f"
          hide-default-footer
          v-model="selected"
          show-select
          :page.sync="page"
          @page-count="pageCount = $event"
          :items-per-page="itemsPerPage"
          fixed-header
          class="pa-0 ma-0"
        >
          <template v-slot:[`item.idx`]="idxs">
            <div
              style="position: relative; right: 44px"
              v-for="headerData in headers.filter((val, index, arr) => {
                return index === 0
              })"
              :key="headerData.value"
            >
              {{ idxs.index + 1 }}
            </div>
          </template>

          <template v-slot:[`item.sever_status`]="ssts">
            <v-icon
              v-if="ssts.item.sever_status === '1'"
              :color="getGreenColor()"
              x-small
              >mdi-circle</v-icon
            >
            <v-icon v-else :color="getRedColor()" x-small>mdi-circle</v-icon>
          </template>

          <template v-slot:[`item.cam_status`]="csts">
            <v-icon
              v-if="csts.item.cam_status === '1'"
              :color="getGreenColor()"
              x-small
              >mdi-circle</v-icon
            >
            <v-icon v-else :color="getRedColor()" x-small>mdi-circle</v-icon>
          </template>

          <!-- 編輯刪除 -->
          <template v-slot:[`item.actions`]="{ item }">
            <div class="text-truncate">
              <v-icon @click="showEditDialog(item)" color="#828c8f">
                mdi-information-outline
              </v-icon>
            </div>
          </template>
        </v-data-table>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import axios from 'axios'
// import TheTab2 from '../components/Permission/TheTab2.vue'

const apiToken = 'keywVOqtjDGyPhH76'
const airTableApp = 'appxyftNJN3Ry2NPa'
const airTableName = 'Table%201'

export default {
  components: {
    // TheTab2,
  },
  data() {
    return {
      selected: [],
      n: 0,
      headers: [
        // { text: 'Id', value: 'id' },
        {
          text: '項次',
          value: 'idx',
          align: 'right',
          class: 'my-header-style',
        },
        {
          text: '連線伺服主機',
          value: 'server_system_number2',
          align: 'center',
          class: 'my-header-style',
        },
        {
          text: '伺服主機狀態',
          value: 'server_status',
          align: 'center',
          class: 'my-header-style',
        },
        {
          text: '系統編號',
          value: 'camera_system_number',
          align: 'center',
          class: 'my-header-style',
        },
        {
          text: '相機名稱',
          value: 'cam_name',
          align: 'center',
          class: 'my-header-style',
        },
        {
          text: '相機狀態',
          value: 'cam_status',
          align: 'center',
          class: 'my-header-style',
        },
        {
          text: '主分類',
          value: 'main_classification',
          align: 'center',
          class: 'my-header-style',
        },
        {
          text: '次分類',
          value: 'second_classification',
          align: 'center',
          class: 'my-header-style',
        },
        {
          text: '畫面位置',
          value: 'position',
          align: 'center',
          class: 'my-header-style',
        },
        {
          text: '相機溫度',
          value: 'cam_temp',
          align: 'center',
          class: 'my-header-style',
        },
        {
          text: 'IP位置',
          value: 'ip',
          align: 'center',
          class: 'my-header-style',
        },
        {
          text: '數據更新時間',
          value: 'last_modified',
          align: 'center',
          class: 'my-header-style',
        },
        {
          text: '相機建立時間',
          value: 'createdTime',
          align: 'center',
          class: 'my-header-style',
        },
        {
          text: '詳細資訊',
          value: 'actions',
          align: 'center',
          sortable: false,
          class: 'my-header-style',
        },
      ],
      // 搜尋
      search: '',
      // 分頁
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      // 密碼

      // 信箱
      show: false,
      loading: true,
      // email: '',
      // emailRules: [
      //   (v) => !!v || '有效的信箱',
      //   (v) => /.+@.+/.test(v) || '無效的信箱格式',
      // ],
      items: [],
      status: ['enable', 'disable'],
      itemsSelect: ['user', 'viewer', 'admin'],
      dialog: false,
      editedItem: {},
    }
  },
  mounted() {
    this.loadItems()
  },
  methods: {
    // 允許使用之變色
    getGreenColor() {
      return '#69c585'
    },
    getRedColor() {
      return '#e89595'
    },
    // 對話框
    showEditDialog(item) {
      this.editedItem = item || {}
      this.dialog = !this.dialog
    },
    loadItems() {
      this.loading = true
      this.items = []
      axios
        .get(`https://api.airtable.com/v0/${airTableApp}/${airTableName}`, {
          headers: { Authorization: 'Bearer ' + apiToken },
        })
        .then((response) => {
          this.items = response.data.records.map((item) => {
            return {
              id: item.id,
              createdTime: item.createdTime,
              last_modified: item.last_modified,
              ...item.fields,
            }
          })
          this.loading = false
        })
        .catch((error) => {
          console.log(error)
        })
    },
    saveItem(item) {
      // this is used for both creating and updating API records
      // the default method is POST for creating a new item

      let method = 'post'
      let url = `https://api.airtable.com/v0/${airTableApp}/${airTableName}`
      const id = item.id

      // airtable API needs the data to be placed in fields object
      const data = {
        fields: item,
      }

      if (id) {
        // if the item has an id, we're updating an existing item
        method = 'patch'
        url = `https://api.airtable.com/v0/${airTableApp}/${airTableName}/${id}`

        // must remove id from the data for airtable patch to work
        delete data.fields.id
        delete data.fields.createdTime
        delete data.fields.last_modified
      }

      // save the record
      axios[method](url, data, {
        headers: {
          Authorization: 'Bearer ' + apiToken,
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        if (response.data && response.data.id) {
          console.log(response.data)
          // add new item to state
          this.editedItem.id = response.data.id
          if (!id) {
            // add the new item to items state
            this.items.push(this.editedItem)
          }
          this.editedItem = {}
        }
        this.dialog = !this.dialog
      })
    },
    deleteItem(item) {
      // console.log('deleteItem', item)
      const id = item.id
      const idx = this.items.findIndex((item) => item.id === id)
      if (confirm('確定刪除?')) {
        /* not really deleting in API for demo */
        axios
          .delete(
            `https://api.airtable.com/v0/${airTableApp}/${airTableName}/${id}`,
            {
              headers: {
                Authorization: 'Bearer ' + apiToken,
                'Content-Type': 'application/json',
              },
            }
          )
          .then((response) => {
            this.items.splice(idx, 1)
          })
        this.items.splice(idx, 1)
      }
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
<style lang="scss">
.my-header-style {
  color: #828c8f !important;
  font-size: 9px;
}

.my-header-style2 {
  color: #828c8f !important;
  font-size: 16px;
}

.my-footer-style {
  color: #828c8f !important;
}

// .v-data-footer {
//   color: #828c8f;
// }
.v-data-footer .v-icon {
  color: #828c8f;
  // color: #69c585;
}

// .v-data-footer > .v-input__slot {
//   min-height: 2.21em !important;
//   // width: 8em !important;
//   color: #828c8f;
//   display: flex !important;
//   align-items: center !important;
// }

// #table > .v-data-footer .v-icon {
//   color: black;
// }

.input_edit_left .v-input__slot {
  max-height: 1em !important;
  width: 10em !important;
  // color: red;
  //   display: flex !important;
  //   align-items: left !important;
  font-size: 9px;
  // padding: 0px 0px 0px 0px;
}

.input_edit_left .v-input__slot .v-icon {
  // max-height: 1em !important;
  // width: 20em !important;
  // color: red;
  // display: flex !important;
  // align-items: left !important;
  font-size: 15px;
  // padding: 0px 0px 0px 0px;
}

.classification .v-input__slot {
  max-height: 5px !important;
  // width: 15em !important;
  font-size: 13px;
}

.classification input {
  color: #4f5e62 !important;
}
.classification .v-input__slot .v-icon {
  font-size: 20px;
}

.classification .v-input__slot .v-label {
  font-size: 14px;
  // padding: 0px 0px 0px 0px;
}
</style>
