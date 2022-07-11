<template>
  <v-card flat>
    <v-card-title>
      <h5>相機管理</h5>
    </v-card-title>
    <!-- this dialog is used for both create and update -->
    <!-- <v-divider></v-divider> -->
    <v-dialog v-model="dialog" max-width="700px">
      <template v-slot:activator="{ on }">
        <div class="d-flex">
          <v-select
            class="input"
            dense
            outlined
            ref=""
            :items="main_classification"
            v-model="search"
            placeholder="請選擇"
            required
          ></v-select>
          <!-- <v-select
            class="input"
            dense
            outlined
            ref=""
            :rules="[() => !!alert_pics2 || '不可為空']"
            :items="alert_pics2"
            placeholder="請選擇"
            required
          ></v-select> -->
          <v-text-field
            v-model="search"
            prepend-inner-icon="mdi-magnify"
            label="搜尋"
            outlined
            hide-details
            dense
            color="#828c8f"
            style="
              color: #828c8f;
              margin-left: 24px;
              height: 30px;
              width: 100px;
            "
          ></v-text-field>
          <v-btn
            color="#828c8f"
            dark
            v-on="on"
            outlined
            style="margin-right: 24px"
          >
            <v-icon small>mdi-plus-circle-outline</v-icon>
            <h5>新增相機</h5>
          </v-btn>
        </div>
      </template>
      <v-card>
        <v-card-title>
          <span v-if="editedItem.id">相機詳細資訊</span>
          <span v-else>新增</span>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" md="6" class="pa-0 ma-0">
              <v-row>
                <v-col cols="12" md="5">
                  <h7 class="py-0 pl-12 pa-0">系統編號</h7>
                </v-col>
                <v-col cols="12" md="7">
                  <h7>{{ system_number }}</h7>
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
        <v-btn color="" text @click="saveItem(editedItem)">儲存</v-btn>
      </v-card>
    </v-dialog>
    <!-- <v-divider></v-divider> -->
    <!-- 表格 -->
    <v-data-table
      :search="search"
      :headers="headers"
      :items="items"
      v-model="selected"
      show-select
      mobile-breakpoint="800"
      class="elevation-0 mx-6"
      :loading="loading ? '#828c8f' : null"
      loading-text="資料加載中... 請稍後"
      style="color: #828c8f"
      hide-default-footer
    >
      <!-- 刷新 -->

      <!-- 分頁 -->
      <!-- <template v-slot:top="{ pagination, options, updateOptions }">
        <div class="d-flex">
          <v-btn icon small @click="buttonCallback" style="margin-top: 20px">
            <v-icon style="margin-left: 1.5px">mdi-reload</v-icon>
          </v-btn>
          <v-btn icon small @click="buttonCallback" style="margin-top: 20px">
            <v-icon style="margin-left: 1.5px">mdi-eye</v-icon>
          </v-btn>
          <v-btn icon small @click="buttonCallback" style="margin-top: 20px">
            <v-icon style="margin-left: 1.5px">mdi-bookmark-outline</v-icon>
          </v-btn>
          <v-btn icon small @click="buttonCallback" style="margin-top: 20px">
            <v-icon style="margin-left: 1.5px">mdi-delete</v-icon>
          </v-btn>
          <v-btn icon small @click="buttonCallback" style="margin-top: 20px">
            <v-icon style="margin-left: 1.5px"
              >mdi-lightning-bolt-circle</v-icon
            >
          </v-btn>
          <v-spacer />
          <v-data-footer
            :pagination="pagination"
            :options="options"
            @update:options="updateOptions"
            items-per-page-text="每行筆數"
          >
          </v-data-footer>
        </div>
        <v-divider></v-divider>
      </template> -->
      <template v-slot:[`item.idx`]="idxs">
        <tr>
          <td
            v-for="headerData in headers.filter((val, index, arr) => {
              return index === 0
            })"
            :key="headerData.value"
          >
            {{ idxs.index + 1 }}
          </td>
        </tr>
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
          <v-icon class="mr-2" @click="showEditDialog(item)" color="#828c8f">
            mdi-alert-circle-outline
          </v-icon>
          <!-- <v-icon small @click="deleteItem(item)" color="#e89595">
            mdi-delete
          </v-icon> -->
        </div>
      </template>
    </v-data-table>
  </v-card>
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
        { text: '項次', value: 'idx', class: 'my-header-style' },
        { text: '連線伺服主機', value: 'sever', class: 'my-header-style' },
        {
          text: '伺服主機狀態',
          value: 'sever_status',
          class: 'my-header-style',
        },
        { text: '系統編號', value: 'system_number', class: 'my-header-style' },
        { text: '相機名稱', value: 'cam_name', class: 'my-header-style' },
        { text: '相機狀態', value: 'cam_status', class: 'my-header-style' },
        {
          text: '主分類',
          value: 'main_classification',
          class: 'my-header-style',
        },
        {
          text: '次分類',
          value: 'second_classification',
          class: 'my-header-style',
        },
        { text: '畫面位置', value: 'position', class: 'my-header-style' },
        { text: '相機溫度', value: 'cam_temp', class: 'my-header-style' },
        { text: 'IP位置', value: 'ip', class: 'my-header-style' },
        {
          text: '數據更新時間',
          value: 'last_modified',
          class: 'my-header-style',
        },
        {
          text: '相機建立時間',
          value: 'createdTime',
          class: 'my-header-style',
        },
        {
          text: '詳細資訊',
          value: 'actions',
          sortable: false,
          class: 'my-header-style',
        },
      ],
      // 權限數量管理
      items1: [
        {
          name: 'user',
          opened: 4,
          used: 2,
          left: 2,
        },
        {
          name: 'viewer',
          opened: 7,
          used: 4,
          left: 3,
        },
        {
          name: 'admin',
          opened: 1,
          used: 1,
          left: 0,
        },
      ],
      // 搜尋
      search: '',
      // 分頁
      page: 1,
      pageCount: 0,
      itemsPerPage: 1,
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
</style>
