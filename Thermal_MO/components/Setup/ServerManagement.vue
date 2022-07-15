<template>
  <v-row>
    <v-col cols="12" lg="12" md="12">
      <v-card ref="form" class="my-6 mx-6 card" flat outlined height="48.5em">
        <v-card-title>
          <v-row>
            <v-col cols="12" class="pb-0">
              <h5 style="color: #4f5e62">伺服器主機管理</h5>
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
                    placeholder="主位置"
                    hide-details
                    :menu-props="{ bottom: true, offsetY: true }"
                  ></v-select>
                  <v-select
                    class="classification input mr-2"
                    dense
                    outlined
                    ref=""
                    :items="repeat_transmission"
                    placeholder="次位置"
                    hide-details
                    :menu-props="{ bottom: true, offsetY: true }"
                  ></v-select>
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
                </div>
                <v-spacer />

                <v-dialog v-model="dialog" max-width="1000px">
                  <template v-slot:activator="{ on }">
                    <v-btn color="#4f5e62" v-on="on" outlined>
                      <v-icon small>mdi-plus-circle-outline</v-icon>
                      <h5>新增相機</h5>
                    </v-btn>
                  </template>

                  <v-card>
                    <v-btn
                      x-small
                      color=""
                      icon
                      @click="showEditDialog()"
                      style="
                        color: #4f5e62;
                        margin-top: 5px;
                        margin-left: 5px;
                        border: 1px solid rgba(0, 0, 0, 0.1);
                      "
                      ><v-icon small>mdi-close</v-icon></v-btn
                    >
                    <v-card-title class="pt-0">
                      <h5 v-if="editedItem.id">伺服器詳細資訊</h5>
                      <h5 v-else>新增</h5>
                      <v-spacer />
                      <v-btn color="success">
                        <v-icon left> mdi-lightning-bolt-circle </v-icon>
                        移動伺服器主機位置
                      </v-btn>

                      <v-btn color="success">
                        <v-icon left> mdi-compass-outline </v-icon>
                        連線
                      </v-btn>
                    </v-card-title>
                    <v-card-text>
                      <v-row>
                        <v-col cols="12" md="4" class="pa-0 ma-0">
                          <v-card
                            ref="form"
                            class="my-0 ma-0 pa-5"
                            flat
                            outlined
                          >
                            <v-row>
                              <v-col cols="12" class="d-flex pb-0">
                                <h7 class="mb-1 pl-8 pb-0 font_bg_color"
                                  >伺服器系統編號</h7
                                >
                                <v-spacer class="font_bg_color mb-1" />
                                <h7 class="mb-1 pr-8 pb-0 font_bg_color">{{
                                  editedItem.server_system_number
                                }}</h7>
                              </v-col>

                              <v-col cols="12" class="d-flex py-0">
                                <h7 class="mb-1 pl-8 pb-0 font_bg_color"
                                  >伺服器名稱</h7
                                >
                                <v-spacer class="font_bg_color mb-1" />
                                <h7 class="mb-1 pr-8 pb-0 font_bg_color">{{
                                  editedItem.server_name
                                }}</h7>
                              </v-col>

                              <v-col cols="12" class="d-flex py-0">
                                <h7 class="mb-1 pl-8 pb-0 font_bg_color"
                                  >伺服器型號</h7
                                >
                                <v-spacer class="font_bg_color mb-1" />
                                <h7 class="mb-1 pr-8 pb-0 font_bg_color">{{
                                  editedItem.server_type
                                }}</h7>
                              </v-col>

                              <v-col cols="12" class="d-flex py-0">
                                <h7 class="mb-1 pl-8 pb-0 font_bg_color"
                                  >伺服器位置</h7
                                >
                                <v-spacer class="font_bg_color mb-1" />
                                <h7 class="mb-1 pr-8 pb-0 font_bg_color"
                                  >{{ editedItem.server_main_position }}棟/{{
                                    editedItem.server_secondary_position
                                  }}區</h7
                                >
                              </v-col>

                              <v-col cols="12" class="d-flex py-0">
                                <h7 class="mb-1 pl-8 pb-0 font_bg_color"
                                  >伺服器IP位址</h7
                                >
                                <v-spacer class="font_bg_color mb-1" />
                                <h7 class="mb-1 pr-8 pb-0 font_bg_color">{{
                                  editedItem.server_ip
                                }}</h7>
                              </v-col>

                              <v-col cols="12" class="d-flex py-0">
                                <h7 class="mb-1 pl-8 pb-0 font_bg_color"
                                  >伺服器Mac位址</h7
                                >
                                <v-spacer class="font_bg_color mb-1" />
                                <h7 class="mb-1 pr-8 pb-0 font_bg_color">{{
                                  editedItem.server_mac_address
                                }}</h7>
                              </v-col>

                              <!-- ---- -->
                              <v-col cols="12">
                                <!-- 伺服器使用量 -->
                                <v-expansion-panels
                                  v-model="panel"
                                  :readonly="readonly"
                                  multiple
                                  class="d-flex py-0"
                                >
                                  <v-expansion-panel class="pa-0 ma-0">
                                    <v-expansion-panel-header class="pa-0 ma-0">
                                      <v-col cols="12" class="d-flex py-0">
                                        <h7 class="my-0 py-0 font_bg_color"
                                          >伺服器硬碟使用量</h7
                                        >
                                        <v-spacer />
                                        <h7 class="my-0 py-0 font_bg_color"
                                          >{{
                                            editedItem.server_usage_percent
                                          }}%</h7
                                        >
                                      </v-col>
                                    </v-expansion-panel-header>
                                    <!-- <v-expansion-panel-content>
                                      <v-col cols="12" md="6" class="pa-0 ma-0">
                                        <h7 class="">伺服器硬碟使用量</h7>
                                      </v-col>
                                      <v-col cols="12" md="6">
                                        <h7>{{
                                          editedItem.server_usage_percent
                                        }}</h7>
                                      </v-col>
                                    </v-expansion-panel-content> -->
                                    <v-expansion-panel-content
                                      class="font_bg_color"
                                    >
                                      <v-row>
                                        <v-col cols="6">
                                          <v-progress-circular
                                            class=""
                                            :rotate="-90"
                                            :size="95"
                                            :width="10"
                                            :value="
                                              editedItem.server_usage_percent
                                            "
                                            color="#828c8f"
                                            backgroud
                                          >
                                            <h3>
                                              {{
                                                editedItem.server_usage_percent
                                              }}
                                            </h3>
                                          </v-progress-circular>
                                        </v-col>
                                        <v-col cols="6" class="mt-6">
                                          <v-row>
                                            <v-col
                                              cols="12"
                                              class="d-flex py-0"
                                            >
                                              <h7
                                                class="my-0 py-0 font_bg_color"
                                                >剩餘空間</h7
                                              >
                                              <v-spacer />
                                              <h7
                                                class="my-0 py-0 font_bg_color"
                                                >{{
                                                  editedItem.server_usage_spare_capacity
                                                }}GB</h7
                                              >
                                            </v-col>

                                            <v-col
                                              cols="12"
                                              class="d-flex py-0"
                                            >
                                              <h7
                                                class="my-0 py-0 font_bg_color"
                                                >已使用</h7
                                              >
                                              <v-spacer />
                                              <h7
                                                class="my-0 py-0 font_bg_color"
                                                >{{
                                                  editedItem.server_usage_capacity
                                                }}GB</h7
                                              >
                                            </v-col>

                                            <v-col
                                              cols="12"
                                              class="d-flex py-0"
                                            >
                                              <h7
                                                class="my-0 py-0 font_bg_color"
                                                >總容量</h7
                                              >
                                              <v-spacer />
                                              <h7
                                                class="my-0 py-0 font_bg_color"
                                                >{{
                                                  editedItem.server_usage_total_capacity
                                                }}GB</h7
                                              >
                                            </v-col>
                                          </v-row>
                                        </v-col>
                                      </v-row>
                                    </v-expansion-panel-content>
                                  </v-expansion-panel>

                                  <v-expansion-panel class="pa-0 ma-0">
                                    <v-expansion-panel-header class="pa-0 ma-0">
                                      <v-col cols="12" class="d-flex py-0">
                                        <h7 class="my-0 py-0 font_bg_color"
                                          >伺服器狀態</h7
                                        >
                                        <v-spacer />
                                        <h7 class="my-0 py-0 font_bg_color"
                                          >{{ editedItem.server_status }}%</h7
                                        >
                                      </v-col>
                                    </v-expansion-panel-header>

                                    <v-expansion-panel-content
                                      class="font_bg_color"
                                    >
                                      <v-row>
                                        <v-col cols="12" class="d-flex py-0">
                                          <h7 class="my-0 py-0 font_bg_color"
                                            >傳輸速率</h7
                                          >
                                          <v-spacer />
                                          <h7 class="my-0 py-0 font_bg_color"
                                            >{{
                                              editedItem.server_usage_spare_capacity
                                            }}GB</h7
                                          >
                                        </v-col>

                                        <v-col cols="12" class="d-flex py-0">
                                          <h7 class="my-0 py-0 font_bg_color"
                                            >已接收</h7
                                          >
                                          <v-spacer />
                                          <h7 class="my-0 py-0 font_bg_color"
                                            >{{
                                              editedItem.server_status_received
                                            }}MB</h7
                                          >
                                        </v-col>

                                        <v-col cols="12" class="d-flex py-0">
                                          <h7 class="my-0 py-0 font_bg_color"
                                            >已傳輸</h7
                                          >
                                          <v-spacer />
                                          <h7 class="my-0 py-0 font_bg_color"
                                            >{{
                                              editedItem.server_status_transferred
                                            }}MB</h7
                                          >
                                        </v-col>

                                        <v-col cols="12" class="d-flex py-0">
                                          <h7 class="my-0 py-0 font_bg_color"
                                            >錯誤/中斷</h7
                                          >
                                          <v-spacer />
                                          <h7 class="my-0 py-0 font_bg_color"
                                            >{{
                                              editedItem.server_status_error
                                            }}/{{
                                              editedItem.server_status_error
                                            }}</h7
                                          >
                                        </v-col>
                                      </v-row>
                                    </v-expansion-panel-content>
                                  </v-expansion-panel>
                                </v-expansion-panels>
                              </v-col>

                              <v-col cols="12" class="d-flex py-0">
                                <h7 class="mb-1 pl-7 pb-0 font_bg_color"
                                  >上次更新時間</h7
                                >
                                <v-spacer class="font_bg_color mb-1" />
                                <h7 class="mb-1 pr-7 pb-0 font_bg_color">{{
                                  editedItem.server_created_time
                                }}</h7>
                              </v-col>

                              <v-col cols="12" class="d-flex py-0">
                                <h7 class="mb-1 pl-7 pb-0 font_bg_color"
                                  >主機建立時間</h7
                                >
                                <v-spacer class="font_bg_color mb-1" />
                                <h7 class="mb-1 pr-7 pb-0 font_bg_color">{{
                                  editedItem.server_last_modified
                                }}</h7>
                              </v-col>
                            </v-row>
                          </v-card>
                        </v-col>
                        <v-col cols="12" md="8" class="pa-0 ma-0">
                          <v-card ref="form" class="my-0 mx-0" flat outlined>
                            <!-- 相機表格 -->
                            <div class="d-flex">
                              <v-spacer />
                              <v-card-subtitle>掛載相機</v-card-subtitle>
                              <v-select
                                class="classification input mr-2"
                                dense
                                outlined
                                ref=""
                                :items="repeat_transmission"
                                placeholder="主位置"
                                hide-details
                                :menu-props="{ bottom: true, offsetY: true }"
                              ></v-select>
                              <v-select
                                class="classification input mr-2"
                                dense
                                outlined
                                ref=""
                                :items="repeat_transmission"
                                placeholder="次位置"
                                hide-details
                                :menu-props="{ bottom: true, offsetY: true }"
                              ></v-select>
                            </div>

                            <v-data-table
                              :headers="headersForDialogCamTable"
                              :items="itemsWithIndexForCamTsble"
                              mobile-breakpoint="800"
                              :loading="loading ? '#4f5e62' : null"
                              loading-text="資料加載中... 請稍後"
                              style="color: #4f5e62"
                              hide-default-footer
                              fixed-header
                              class="mx-4"
                              color="#4f5e62"
                            >
                              <!-- 複選框 -->
                              <template v-slot:[``]="{ isSaved, save }">
                                <v-simple-checkbox
                                  :value="isSaved"
                                  @input="save($event)"
                                  color="#4f5e62"
                                  class="pl-4"
                                ></v-simple-checkbox>
                              </template>
                              <!-- 複選框 -->
                              <template
                                v-slot:[`item.data-table-select`]="{
                                  isSelected,
                                  select,
                                }"
                              >
                                <v-simple-checkbox
                                  :value="isSelected"
                                  @input="select($event)"
                                  color="#4f5e62"
                                  class="pl-4"
                                ></v-simple-checkbox>
                              </template>

                              <!-- 相機狀態 -->
                              <template v-slot:[`item.cam_status`]="ssts">
                                <v-icon
                                  v-if="ssts.item.cam_status === '1'"
                                  :color="getGreenColor()"
                                  x-small
                                  >mdi-circle</v-icon
                                >
                                <v-icon v-else :color="getRedColor()" x-small
                                  >mdi-circle</v-icon
                                >
                              </template>

                              <!-- 相機主位置 -->
                              <template
                                v-slot:[`item.cam_main_position`]="{ item }"
                              >
                                <td style="text-align: center">
                                  {{ item.cam_main_position }}棟
                                </td>
                              </template>

                              <!-- 相機次位置 -->
                              <template
                                v-slot:[`item.cam_secondary_position`]="{
                                  item,
                                }"
                              >
                                <td style="text-align: center">
                                  {{ item.cam_secondary_position }}區
                                </td>
                              </template>

                              <!-- 查看更多 -->
                              <template v-slot:[`item.learn_more`]="{ item }">
                                <v-btn @click="item">查看更多 </v-btn>
                              </template>
                            </v-data-table>
                            <!-- ----- -->
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-dialog>
              </div>
            </v-col>
            <v-col cols="12" md="12" class="pb-0 pt-1 my-0 pr-0">
              <div class="d-flex">
                <div class="d-flex">
                  <v-btn
                    icon
                    @click="buttonCallback"
                    style="
                      color: #4f5e62;
                      margin-right: 8px;
                      margin-top: 5px;
                      border: 1px solid rgba(0, 0, 0, 0.1);
                    "
                  >
                    <v-icon style="padding-left: 1.6px">mdi-reload</v-icon>
                  </v-btn>
                  <v-btn
                    icon
                    @click="buttonCallback"
                    outlined
                    style="
                      color: #4f5e62;
                      margin-right: 8px;
                      margin-top: 5px;
                      border: 1px solid rgba(0, 0, 0, 0.1);
                    "
                  >
                    <v-icon>mdi-eye</v-icon>
                  </v-btn>
                  <v-btn
                    icon
                    @click="buttonCallback"
                    outlined
                    style="
                      color: #4f5e62;
                      margin-right: 8px;
                      margin-top: 5px;
                      border: 1px solid rgba(0, 0, 0, 0.1);
                    "
                  >
                    <v-icon>mdi-bookmark-outline</v-icon>
                  </v-btn>
                  <v-btn
                    icon
                    @click="buttonCallback"
                    outlined
                    style="
                      color: #4f5e62;
                      margin-right: 8px;
                      margin-top: 5px;
                      border: 1px solid rgba(0, 0, 0, 0.1);
                    "
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                  <v-btn
                    icon
                    @click="buttonCallback"
                    outlined
                    style="
                      color: #4f5e62;
                      margin-right: 8px;
                      margin-top: 5px;
                      border: 1px solid rgba(0, 0, 0, 0.1);
                    "
                  >
                    <v-icon>mdi-lightning-bolt-circle</v-icon>
                  </v-btn>
                </div>
                <v-spacer />
                <div class="d-flex">
                  <div class="d-flex">
                    <v-text-field
                      label="顯示筆數"
                      :value="itemsPerPage"
                      outlined
                      hide-details
                      type="number"
                      dense
                      min="-1"
                      max="10"
                      class="item_per_page"
                      @input="itemsPerPage = parseInt($event, 10)"
                      style="margin-right: 8px; margin-top: 5px"
                    ></v-text-field>
                  </div>

                  <!-- <v-pagination
                    v-model="page"
                    :length="pageCount"
                    :total-visible="10"
                    class="custom"
                    style="padding-right: 2px"
                  ></v-pagination> -->
                  <Pagination
                    :totle="pageCount"
                    width="477px"
                    @toggle="setPage"
                    pagClass="asdas"
                  />
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card-title>
        <v-divider class="mx-4"></v-divider>

        <!-- this dialog is used for both create and update -->
        <!-- 表格 -->

        <v-data-table
          :search="search"
          :headers="headers"
          :items="itemsWithIndex"
          mobile-breakpoint="800"
          :loading="loading ? '#4f5e62' : null"
          loading-text="資料加載中... 請稍後"
          style="color: #4f5e62"
          hide-default-footer
          v-model="selected"
          show-select
          :page.sync="page"
          @page-count="pageCount = $event"
          :items-per-page="itemsPerPage"
          fixed-header
          class="mx-4"
          color="#4f5e62"
        >
          <!-- 複選框 -->
          <template v-slot:[``]="{ isSaved, save }">
            <v-simple-checkbox
              :value="isSaved"
              @input="save($event)"
              color="#4f5e62"
              class="pl-4"
            ></v-simple-checkbox>
          </template>
          <!-- 複選框 -->
          <template v-slot:[`item.data-table-select`]="{ isSelected, select }">
            <v-simple-checkbox
              :value="isSelected"
              @input="select($event)"
              color="#4f5e62"
              class="pl-4"
            ></v-simple-checkbox>
          </template>

          <!-- 書籤 -->
          <!-- <template v-slot:[`item.book_mark`]="{ item }">
            <v-btn icon v-if="item.book_mark === '0'">
              <v-icon>mdi-bookmark-outline</v-icon></v-btn
            >
            <v-btn icon v-if="item.book_mark === '1'">
              <v-icon>mdi-bookmark</v-icon></v-btn
            >
          </template> -->
          <!-- 伺服器狀態 -->
          <template v-slot:[`item.server_status`]="ssts">
            <v-icon
              v-if="ssts.item.server_status === '1'"
              :color="getGreenColor()"
              x-small
              >mdi-circle</v-icon
            >
            <v-icon v-else :color="getRedColor()" x-small>mdi-circle</v-icon>
          </template>

          <!-- 伺服器主位置 -->
          <template v-slot:[`item.server_main_position`]="{ item }">
            <td style="text-align: center">
              {{ item.server_main_position }}棟
            </td>
          </template>

          <!-- 伺服器次位置 -->
          <template v-slot:[`item.server_secondary_position`]="{ item }">
            <td style="text-align: center">
              {{ item.server_secondary_position }}區
            </td>
          </template>

          <!-- 伺服器使用量 -->
          <template v-slot:[`item.server_usage_percent`]="{ item }">
            <td style="text-align: center">{{ item.server_usage_percent }}%</td>
          </template>

          <!-- 詳細資訊 -->
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon @click="showEditDialog(item)" color="#4f5e62">
              mdi-information-outline
            </v-icon>
          </template>
        </v-data-table>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import axios from 'axios'
// import TheTab2 from '../components/Permission/TheTab2.vue'
import Pagination from '../Pagination/CustomPagination.vue'

const apiToken = 'keywVOqtjDGyPhH76'
const airTableApp = 'appcP7dbIjYmTEvhg'
const airTableName = 'Table%201'

export default {
  components: {
    Pagination,
  },

  data() {
    return {
      expanded: [],
      singleExpand: false,
      selected: [],
      n: 0,
      headers: [
        {
          text: '項次',
          value: 'index',
          align: 'center',
          class: 'my-header-style',
        },
        {
          text: '書籤',
          value: 'book_mark',
          align: 'center',
          class: 'my-header-style',
        },
        {
          text: '伺服器系統編號',
          value: 'server_system_number',
          align: 'center',
          class: 'my-header-style',
        },
        {
          text: '伺服器名稱',
          value: 'server_name',
          align: 'center',
          class: 'my-header-style',
        },
        {
          text: '伺服器狀態',
          value: 'server_status',
          align: 'center',
          class: 'my-header-style',
        },
        {
          text: '掛載相機數量',
          value: 'cam_quantity',
          align: 'center',
          class: 'my-header-style',
        },
        {
          text: '伺服器主位置',
          value: 'server_main_position',
          align: 'center',
          class: 'my-header-style',
        },
        {
          text: '伺服器次位置',
          value: 'server_secondary_position',
          align: 'center',
          class: 'my-header-style',
        },
        {
          text: '伺服器IP位置',
          value: 'server_ip',
          align: 'center',
          class: 'my-header-style',
        },
        {
          text: '伺服器Mac位址',
          value: 'server_mac_address',
          align: 'center',
          class: 'my-header-style',
        },
        {
          text: '伺服器使用量',
          value: 'server_usage_percent',
          align: 'center',
          class: 'my-header-style',
        },
        {
          text: '上次更新時間',
          value: 'server_last_modified',
          align: 'center',
          class: 'my-header-style',
        },
        // {
        //   text: '主機建立時間',
        //   value: 'server_created_time',
        //   align: 'center',
        //   class: 'my-header-style',
        // },
        {
          text: '詳細資訊',
          value: 'actions',
          sortable: false,
          align: 'center',
          class: 'my-header-style',
        },
      ],

      headersForDialogCamTable: [
        {
          text: '項次',
          value: 'index',
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
          text: '相機主位置',
          value: 'cam_main_position',
          align: 'center',
          class: 'my-header-style',
        },
        {
          text: '相機次位置',
          value: 'cam_secondary_position',
          align: 'center',
          class: 'my-header-style',
        },
        {
          text: '',
          value: 'learn_more',
          sortable: false,
          align: 'center',
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
      itemsForCamTable: [],

      status: ['enable', 'disable'],
      itemsSelect: ['user', 'viewer', 'admin'],
      dialog: false,
      editedItem: {},
    }
  },
  computed: {
    itemsWithIndex() {
      return this.items.map((items, index) => ({
        ...items,
        index: index + 1,
      }))
    },

    itemsWithIndexForCamTsble() {
      return this.itemsForCamTable.map((itemsForCamTable, index) => ({
        ...itemsForCamTable,
        index: index + 1,
      }))
    },
  },
  mounted() {
    this.loadItems()
    this.loadItemsCam()
  },
  methods: {
    setPage(data) {
      this.page = data
    },
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
    // sever's api
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
              server_created_time: item.created_time,
              server_last_modified: item.server_last_modified,
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
        delete data.fields.server_created_time
        delete data.fields.server_last_modified
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
    // cam's api
    loadItemsCam() {
      this.loading = true
      this.itemsForCamTable = []
      axios
        .get(`https://api.airtable.com/v0/appxyftNJN3Ry2NPa/${airTableName}`, {
          headers: { Authorization: 'Bearer ' + apiToken },
        })
        .then((response) => {
          this.itemsForCamTable = response.data.records.map((item) => {
            return {
              id: item.id,
              createdTime: item.createdTime,
              server_created_time: item.created_time,
              server_last_modified: item.server_last_modified,
              ...item.fields,
            }
          })
          this.loading = false
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>
<style scoped>
.bgimg {
  position: absolute;
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
  color: #4f5e62 !important;
  font-size: 9px;
}

.my-header-style2 {
  color: #4f5e62 !important;
  font-size: 16px;
}

.my-footer-style {
  color: #4f5e62 !important;
}

.v-data-footer .v-icon {
  color: #4f5e62;
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
  min-height: 36px !important;
  width: 10em !important;
  font-size: 13px;

  max-height: 36px !important;
  // color: red;
  display: flex !important;
  align-items: left !important;
  // padding: 0px 0px 0px 0px;
}

.classification .v-input__slot .v-icon {
  font-size: 20px;
}

.classification .v-input__slot .v-label {
  font-size: 13px;
}
// 分頁
.custom {
  width: auto;
  margin-right: auto;
}
.custom .v-pagination__navigation {
  height: 36px !important;
  width: 36px !important;
  color: #4f5e62;
}
.custom .v-pagination__navigation .v-icon {
  font-size: 16px !important;
  box-shadow: none;
  color: #4f5e62 !important;
}
.custom .v-pagination__navigation {
  box-shadow: none;
  border: rgba(0, 0, 0, 0.1) solid 1px;
}
.custom .v-pagination__item {
  height: 36px !important;
  min-width: 36px !important;
  font-size: 0.85rem !important;
  line-height: 0.8rem;
  border: rgba(0, 0, 0, 0.1) solid 1px;
  box-shadow: none;
  color: #4f5e62 !important;
}
.custom .theme--light.v-pagination .v-pagination__item--active {
  color: #ffffff !important;
}

.theme--light.classification.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state)
  > .v-input__control
  > .v-input__slot
  fieldset {
  color: rgba(0, 0, 0, 0.1);
}
// 顯示筆數
.item_per_page .v-input__slot {
  min-height: 36px !important;
  // width: 5.3em !important;
  width: 100px !important;
  font-size: 13px;
}

.item_per_page input {
  color: #4f5e62 !important;
}
.item_per_page .v-input__slot .v-icon {
  font-size: 20px;
}

.item_per_page .v-input__slot .v-label {
  font-size: 14px;
  // padding: 0px 0px 0px 0px;
}

.item_per_page.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state)
  > .v-input__control
  > .v-input__slot
  fieldset {
  color: rgba(0, 0, 0, 0.1);
}

// table
// .v-data-table > .v-data-table__wrapper > table > tbody > tr > td, .v-data-table > .v-data-table__wrapper > table > tbody > tr > th, .v-data-table > .v-data-table__wrapper > table > thead > tr > td, .v-data-table > .v-data-table__wrapper > table > thead > tr > th, .v-data-table > .v-data-table__wrapper > table > tfoot > tr > td, .v-data-table > .v-data-table__wrapper > table > tfoot > tr > th {
//      padding: 0 16px;
//     transition: height 0.2s cubic-bezier(0.4, 0, 0.6, 1);
// }

.item.data-table-select {
  padding: 0 16px;
}

.font_bg_color {
  background-color: #f0f2f3;
  font-size: 9px;
}
</style>
