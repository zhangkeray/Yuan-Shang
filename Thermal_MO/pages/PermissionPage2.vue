<template>
  <div class="fluid mt-3">
    <v-img class="bgimg" src="bgimg.png" height="93.2vh" />

    <v-row>
      <!-- 左測選項----------------------------------------------------------------------------------------------- -->
      <v-col cols="12" md="12">
        <!-- <v-col cols="12" md="7" style="border: 1px solid red"> -->
        <v-card class="mt-3 mx-6" rounded="md" elevation="6" height="51.55em">
          <v-tabs
            vertical
            slider-size="3"
            color="#37484C"
            background-color="#f1f1f1"
            height="51.55em"
            v-model="tab"
          >
            <v-tab href="#tab-1" style="font-size: 15px; justify-content: left">
              <img class="" alt="" src="/data_scraping/data.png" width="14em" />
              <p>&nbsp;&nbsp;</p>
              權限管理
            </v-tab>

            <!-- <v-tab
              href="#tab-2"
              style="font-size: 15px; justify-content: left">
              <img class="" alt="" src="/data_scraping/data.png" width="14em" />
              <p>&nbsp;&nbsp;</p>
              溫度分佈
            </v-tab> -->

            <v-tab-item value="tab-1">
              <no-ssr>
                <v-card>
                  <v-card-title>
                    <h4>權限管理</h4>
                  </v-card-title>
                  <!-- this dialog is used for both create and update -->
                  <v-dialog v-model="dialog" max-width="700px">
                    <template v-slot:activator="{ on }">
                      <div class="d-flex">
                        <v-text-field
                          v-model="search"
                          prepend-inner-icon="mdi-magnify"
                          label="Search"
                          outlined
                          hide-details
                          dense
                          color="#828c8f"
                          style="color: #828c8f"
                        ></v-text-field>
                        <v-spacer />
                        <v-btn
                          color="#828c8f"
                          dark
                          class="ml-auto mx-6"
                          v-on="on"
                          outlined
                        >
                          <v-icon small>mdi-plus-circle-outline</v-icon>
                          <h5>新增</h5>
                        </v-btn>
                      </div>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span v-if="editedItem.id"> {{ editedItem.name }}</span>
                        <span v-else>Create</span>
                      </v-card-title>
                      <v-card-text>
                        <v-row>
                          <v-col cols="12" sm="4">
                            <v-text-field
                              v-model="editedItem.name"
                              label="名稱"
                            ></v-text-field>
                          </v-col>

                          <v-col cols="12" sm="4">
                            <v-text-field
                              v-model="editedItem.email"
                              label="信箱"
                              :rules="emailRules"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="4">
                            <v-text-field
                              v-model="editedItem.password"
                              :type="show ? 'text' : 'password'"
                              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                              @click:append="show = !show"
                              label="密碼"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="4">
                            <v-autocomplete
                              v-model="editedItem.permission"
                              label="權限"
                              :items="itemsSelect"
                              dense
                            ></v-autocomplete>
                          </v-col>
                          <v-col cols="12" sm="4">
                            <v-autocomplete
                              v-model="editedItem.status"
                              label="允許使用"
                              :items="status"
                              dense
                            ></v-autocomplete>
                          </v-col>
                        </v-row>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="showEditDialog()"
                          >Cancel</v-btn
                        >
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="saveItem(editedItem)"
                          >Save</v-btn
                        >
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  <v-divider></v-divider>
                  <!-- 表格 -->
                  <v-data-table
                    :search="search"
                    :headers="headers"
                    :items="items"
                    mobile-breakpoint="800"
                    class="elevation-0 mx-6"
                    :loading="loading ? '#828c8f' : null"
                    loading-text="資料加載中... 請稍後"
                    style="color: #828c8f"
                    hide-default-footer
                    :page.sync="page"
                    :items-per-page="itemsPerPage"
                    @page-count="pageCount = $event"
                  >
                    <!-- 分頁 -->
                    <template v-slot:top>
                      <!-- <template
                      v-slot:top="{ pagination, options, updateOptions }"
                    >
                      <v-data-footer
                        :pagination="pagination"
                        :options="options"
                        @update:options="updateOptions"
                        items-per-page-text="每行頁數"
                      /> -->
                      <!-- <div class="d-flex"> -->
                      <v-row>
                        <v-spacer />
                        <v-col cols="1">
                          <!-- <v-col cols="1"  style="border: 1px solid black"> -->
                          <v-text-field
                            :value="itemsPerPage"
                            label="顯示筆數"
                            outlined
                            dense
                            type="number"
                            min="-1"
                            max="15"
                            @input="itemsPerPage = parseInt($event, 10)"
                            style="width: 75px; margin-left: 40px"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="2">
                          <!-- <v-col cols="2" style="border: 1px solid black"> -->
                          <v-pagination
                            v-model="page"
                            :length="pageCount"
                            color="#828c8f"
                          ></v-pagination>
                        </v-col>
                      </v-row>
                      <!-- </div> -->
                    </template>
                    <template v-slot:[`item.idx`]="idxs">
                      <tr>
                        <td
                          v-for="headerData in headers.filter(
                            (val, index, arr) => {
                              return index === 0
                            }
                          )"
                          :key="headerData.value"
                        >
                          {{ idxs.index + 1 }}
                        </td>
                      </tr>
                    </template>

                    <template v-slot:[`item.status`]="sts">
                      <v-chip
                        v-if="sts.item.status === 'enable'"
                        :color="getGreenColor()"
                        dark
                      >
                        {{ sts.item.status }}
                      </v-chip>
                      <v-chip v-else :color="getRedColor()" dark>
                        {{ sts.item.status }}
                      </v-chip>
                    </template>

                    <!-- 編輯刪除 -->
                    <template v-slot:[`item.actions`]="{ item }">
                      <div class="text-truncate">
                        <v-icon
                          small
                          class="mr-2"
                          @click="showEditDialog(item)"
                          color="#828c8f"
                        >
                          mdi-pencil
                        </v-icon>
                        <v-icon small @click="deleteItem(item)" color="#e89595">
                          mdi-delete
                        </v-icon>
                      </div>
                    </template>

                    <!-- <template v-slot:[`opened`]="{ opened }">
                      <div class="text-truncate" style="width: 180px">
                        {{ opened }}
                      </div>
                    </template> -->
                  </v-data-table>
                  <v-divider></v-divider>
                  <h3>權限數量</h3>
                  <p>admin 已使用 {{ n }} 個，還剩{{ n }}可用</p>
                  <p>user 已使用 {{ n }} 個，還剩{{ n }}可用</p>
                  <p>viewer 已使用 {{ n }} 個，還剩{{ n }}可用</p>
                </v-card>
              </no-ssr>
            </v-tab-item>

            <v-tab-item value="tab-2">
              <no-ssr> </no-ssr>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import axios from 'axios'

const apiToken = 'keywVOqtjDGyPhH76'
const airTableApp = 'appUuhKyRHpI79vK4'
const airTableName = 'Table%201'

export default {
  data() {
    return {
      n: 0,
      headers: [
        // { text: 'Id', value: 'id' },
        { text: '#', value: 'idx', class: 'my-header-style' },
        { text: '允許使用', value: 'status', class: 'my-header-style' },
        { text: '權限', value: 'permission', class: 'my-header-style' },
        { text: '編號', value: 'id', class: 'my-header-style' },
        { text: '名稱', value: 'name', class: 'my-header-style' },
        // { text: '信箱', value: 'email', class: 'my-header-style' },
        {
          text: '密碼',
          value: 'password',
          class: 'my-header-style pwd-hide',
          sortable: false,
          type: 'password',
        },
        { text: '建立時間', value: 'createdTime', class: 'my-header-style' },
        {
          text: '最後編輯時間',
          value: 'Last Modified',
          class: 'my-header-style',
        },
        {
          text: 'Action',
          value: 'actions',
          sortable: false,
          class: 'my-header-style',
        },
      ],
      // 搜尋
      search: '',
      // 分頁
      page: 1,
      pageCount: 0,
      itemsPerPage: 1,
      // 密碼
      show: false,
      loading: true,
      email: '',
      emailRules: [
        (v) => !!v || '有效的信箱',
        (v) => /.+@.+/.test(v) || '無效的信箱格式',
      ],
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
      return 'green'
    },
    getRedColor() {
      return 'red'
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
}
</style>
