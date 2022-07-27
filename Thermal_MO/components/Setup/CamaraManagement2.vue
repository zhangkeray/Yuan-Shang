<template>
  <v-row>
    <v-col cols="12" lg="12" md="12">
      <v-card ref="form" class="my-6 mx-6 card" flat outlined height="48.5em">
        <v-card-title>
          <v-row>
            <v-col cols="12" class="pb-0">
              <h5 style="color: #4f5e62">相機管理</h5>
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

                <!-- 新增相機對話框 -->
                <v-dialog v-model="dialogForAddCam" max-width="720px">
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" outlined text color="#4f5e62">
                      <v-icon left>mdi-plus-circle-outline</v-icon>
                      <h5>新增相機</h5>
                    </v-btn>
                  </template>

                  <!-- <template v-slot:activator="{ item }">
                    <v-btn @click="showEditDialogForAddCam(item)"  outlined text color="#4f5e62">
                      <v-icon left >mdi-plus-circle-outline</v-icon>
                      <h5>新增相機</h5>
                    </v-btn>
                  </template> -->

                  <v-card>
                    <v-btn
                      x-small
                      color=""
                      icon
                      @click="dialogForAddCam = false"
                      style="
                        color: #4f5e62;
                        margin-top: 5px;
                        margin-left: 5px;
                        border: 1px solid rgba(0, 0, 0, 0.1);
                      "
                      ><v-icon small>mdi-close</v-icon></v-btn
                    >
                    <v-card-title class="py-0">
                      <h5>相機資訊</h5>
                    </v-card-title>
                    <v-card-text>
                      <v-row>
                        <v-col cols="12" md="12" class="ma-0 pb-0">
                          <v-card
                            ref="form"
                            class="my-0 ma-0 py-4 pl-3 pr-1"
                            flat
                            outlined
                          >
                            <v-row>
                              <v-col cols="6" class="d-flex pb-0">
                                <h7 class="mb-1 pb-0 font">系統編號</h7>
                                <v-spacer class="font mb-1 pb-0" />
                                <div cols="12" class="d-flex pb-0">
                                  <v-text-field
                                    outlined
                                    hide-details
                                    v-model="editedItem.cam_system_number"
                                    dense
                                    color="#4f5e62"
                                    style="color: #4f5e62"
                                    class="tiny_input pr-3"
                                    disabled
                                  ></v-text-field>
                                </div>
                              </v-col>

                              <v-col cols="6" class="d-flex pb-0">
                                <h7 class="mb-1 pb-0 font">名稱</h7>
                                <v-spacer class="font mb-1" />
                                <div cols="12" class="d-flex pb-0">
                                  <v-text-field
                                    outlined
                                    hide-details
                                    v-model="editedItem.cam_name"
                                    dense
                                    color="#4f5e62"
                                    style="color: #4f5e62"
                                    class="tiny_input pr-3"
                                    disabled
                                  ></v-text-field>
                                </div>
                              </v-col>

                              <v-col cols="6" class="d-flex py-0">
                                <h7 class="mb-1 pb-0 font">版本</h7>
                                <v-spacer class="font mb-1 pb-0" />
                                <div cols="12" class="d-flex pb-0">
                                  <v-text-field
                                    outlined
                                    hide-details
                                    v-model="editedItem.cam_version"
                                    dense
                                    color="#4f5e62"
                                    style="color: #4f5e62"
                                    class="tiny_input pr-3"
                                    disabled
                                  ></v-text-field>
                                </div>
                              </v-col>

                              <v-col cols="6" class="d-flex py-0">
                                <h7 class="mb-1 pb-0 font">品牌</h7>
                                <v-spacer class="font mb-1" />
                                <div cols="12" class="d-flex pb-0">
                                  <v-text-field
                                    outlined
                                    hide-details
                                    v-model="editedItem.cam_brand"
                                    dense
                                    color="#4f5e62"
                                    style="color: #4f5e62"
                                    class="tiny_input pr-3"
                                    disabled
                                  ></v-text-field>
                                </div>
                              </v-col>

                              <v-col cols="6" class="d-flex py-0">
                                <h7 class="mb-1 pb-0 font">型號</h7>
                                <v-spacer class="font mb-1" />
                                <div cols="12" class="d-flex pb-0">
                                  <v-select
                                    class="tiny_input_select pr-3"
                                    dense
                                    outlined
                                    ref=""
                                    hide-details
                                    :menu-props="{
                                      bottom: true,
                                      offsetY: true,
                                    }"
                                  ></v-select>
                                </div>
                              </v-col>

                              <v-col cols="6" class="d-flex py-0">
                                <h7 class="mb-1 pb-0 font"></h7>
                                <v-spacer class="font mb-1" />
                                <div cols="12" class="d-flex pb-0"></div>
                              </v-col>

                              <v-col cols="6" class="d-flex py-0">
                                <h7 class="mb-1 pb-0 font">位置</h7>
                                <v-spacer class="font mb-1" />
                                <div cols="12" class="d-flex pb-0">
                                  <!-- <v-text-field
                                    outlined
                                    hide-details
                                    dense
                                    color="#4f5e62"
                                    style="color: #4f5e62"
                                    class="tiny_input"
                                  ></v-text-field> -->

                                  <v-radio-group
                                    v-model="radio"
                                    mandatory
                                    dense
                                    class="small-radio px-0 pr-3"
                                  >
                                    <div class="d-flex">
                                      <v-radio
                                        label="當前位置 "
                                        value="radio-1"
                                        color="#4f5e62"
                                        class="small-radio pa-0"
                                      ></v-radio>
                                      <!-- <h7 class="mb-1 pb-0 font"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{
                                          editedItem.server_main_position
                                        }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;棟/&nbsp;&nbsp;&nbsp;{{
                                          editedItem.server_secondary_position
                                        }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;區</h7
                                      > -->
                                      <v-text-field
                                        outlined
                                        hide-details
                                        v-model="editedItem.cam_main_position"
                                        dense
                                        color="#4f5e62"
                                        style="color: #4f5e62"
                                        class="most_tiny_input_select ml-3"
                                        disabled
                                      ></v-text-field>
                                      <h7 class="mb-1 pb-0 font"></h7>
                                      <v-text-field
                                        outlined
                                        hide-details
                                        v-model="
                                          editedItem.cam_secondary_position
                                        "
                                        dense
                                        color="#4f5e62"
                                        style="color: #4f5e62"
                                        class="most_tiny_input_select"
                                        disabled
                                      ></v-text-field>
                                      <h7
                                        class="mb-1 pb-0 font"
                                        style="color: #4f5e62"
                                      ></h7>
                                    </div>
                                    <div class="d-flex">
                                      <v-radio
                                        label="其他位置"
                                        value="radio-2"
                                        color="#4f5e62"
                                        class="small-radio pa-0"
                                      ></v-radio>
                                      <v-select
                                        class="most_tiny_input_select ml-3"
                                        dense
                                        outlined
                                        ref=""
                                        hide-details
                                        :menu-props="{
                                          bottom: true,
                                          offsetY: true,
                                        }"
                                      ></v-select>
                                      <h7 class="mb-1 pb-0 font"></h7>
                                      <v-select
                                        class="most_tiny_input_select"
                                        dense
                                        outlined
                                        ref=""
                                        hide-details
                                        :menu-props="{
                                          bottom: true,
                                          offsetY: true,
                                        }"
                                      ></v-select>
                                      <h7
                                        class="mb-1 pb-0 font"
                                        style="color: #4f5e62"
                                      ></h7>
                                    </div>
                                  </v-radio-group>
                                </div>
                              </v-col>
                              <!-- 連接伺服主機 -->
                              <v-col cols="6" class="d-flex py-0">
                                <h7 class="mb-1 pb-0 font">連接伺服主機</h7>
                                <v-spacer class="font mb-1" />
                                <div cols="12" class="d-flex pb-0">
                                  <!-- <v-text-field
                                    outlined
                                    hide-details
                                    dense
                                    color="#4f5e62"
                                    style="color: #4f5e62"
                                    class="tiny_input"
                                  ></v-text-field> -->

                                  <v-radio-group
                                    v-model="radio"
                                    mandatory
                                    dense
                                    class="small-radio px-0 pr-3"
                                  >
                                    <div class="d-flex">
                                      <v-radio
                                        label="預設伺服主機"
                                        value="radio-1"
                                        color="#4f5e62"
                                        class="small-radio pa-0"
                                      ></v-radio>
                                      <v-text-field
                                        outlined
                                        hide-details
                                        v-model="editedItem.server_name"
                                        dense
                                        color="#4f5e62"
                                        style="color: #4f5e62"
                                        class="most_tiny_input_select ml-3"
                                        disabled
                                      ></v-text-field>
                                    </div>
                                    <div class="d-flex">
                                      <v-radio
                                        label="其他伺服主機"
                                        value="radio-2"
                                        color="#4f5e62"
                                        class="small-radio pa-0"
                                      ></v-radio>
                                      <v-select
                                        class="most_tiny_input_select ml-3"
                                        dense
                                        outlined
                                        ref=""
                                        hide-details
                                        :menu-props="{
                                          bottom: true,
                                          offsetY: true,
                                        }"
                                      ></v-select>
                                    </div>
                                  </v-radio-group>
                                </div>
                              </v-col>
                              <!-- 畫面位置 -->
                              <v-col cols="6" class="d-flex py-0">
                                <h7 class="mb-1 pb-0 font">畫面位置</h7>
                                <v-spacer class="font mb-1" />
                                <div cols="12" class="d-flex pb-0">
                                  <!-- <v-text-field
                                    outlined
                                    hide-details
                                    dense
                                    color="#4f5e62"
                                    style="color: #4f5e62"
                                    class="tiny_input"
                                  ></v-text-field> -->

                                  <v-radio-group
                                    v-model="radio"
                                    mandatory
                                    dense
                                    class="small-radio px-0 pr-3"
                                  >
                                    <div class="d-flex">
                                      <v-radio
                                        label="當前位置 "
                                        value="radio-1"
                                        color="#4f5e62"
                                        class="small-radio pa-0"
                                      ></v-radio>

                                      <v-text-field
                                        outlined
                                        hide-details
                                        v-model="editedItem.cam_screen_position"
                                        dense
                                        color="#4f5e62"
                                        style="color: #4f5e62"
                                        class="most_tiny_input_select ml-3"
                                        disabled
                                      ></v-text-field>
                                    </div>
                                    <div class="d-flex">
                                      <v-radio
                                        label="其他位置"
                                        value="radio-2"
                                        color="#4f5e62"
                                        class="small-radio pa-0"
                                      ></v-radio>
                                      <v-select
                                        class="most_tiny_input_select ml-3"
                                        dense
                                        outlined
                                        ref=""
                                        hide-details
                                        :menu-props="{
                                          bottom: true,
                                          offsetY: true,
                                        }"
                                      ></v-select>
                                    </div>
                                  </v-radio-group>
                                </div>
                              </v-col>
                              <!-- ---- -->

                              <v-col cols="6" class="d-flex py-0 my-0">
                                <h7 class="mb-0 pb-0 font">連線</h7>
                                <v-spacer class="font my-0" />
                                <div cols="12" class="d-flex pb-0 pt-0">
                                  <v-radio-group
                                    v-model="radio"
                                    mandatory
                                    dense
                                    class="small-radio pa-0 my-0 pr-3"
                                  >
                                    <v-radio
                                      label="ON"
                                      value="radio-1"
                                      color="#4f5e62"
                                      class="small-radio pa-0 my-0"
                                    ></v-radio>
                                    <v-radio
                                      label="OFF"
                                      value="radio-2"
                                      color="#4f5e62"
                                      class="small-radio pa-0 my-0"
                                    ></v-radio>
                                  </v-radio-group>
                                </div>
                              </v-col>
                            </v-row>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-card-text>
                    <v-card-title class="py-0">
                      <h5>登入位置</h5>
                    </v-card-title>
                    <v-card-text>
                      <v-row>
                        <v-col cols="12" md="12" class="pb-0">
                          <v-card
                            ref="form"
                            class="ma-0 py-4 pl-3 pr-1"
                            flat
                            outlined
                          >
                            <v-row>
                              <v-col cols="6" class="d-flex pb-0">
                                <h7 class="mb-1 pb-0 font">帳號</h7>
                                <v-spacer class="font mb-1 pb-0" />

                                <div cols="12" class="d-flex pb-0">
                                  <v-text-field
                                    outlined
                                    hide-details
                                    value="admin"
                                    dense
                                    color="#4f5e62"
                                    style="color: #4f5e62"
                                    class="tiny_input pr-3"
                                    disabled
                                  ></v-text-field>
                                </div>
                              </v-col>

                              <v-col cols="6" class="d-flex pb-0">
                                <h7 class="mb-1 pb-0 font">密碼</h7>
                                <v-spacer class="font mb-1" />

                                <div cols="12" class="d-flex pb-0">
                                  <v-text-field
                                    outlined
                                    hide-details
                                    value="a*****"
                                    dense
                                    color="#4f5e62"
                                    style="color: #4f5e62"
                                    class="tiny_input pr-3"
                                    disabled
                                  ></v-text-field>
                                </div>
                              </v-col>

                              <v-col cols="6" class="d-flex py-0">
                                <h7 class="mb-1 pb-0 font">位址遮罩</h7>
                                <v-spacer class="font mb-1" />

                                <div cols="12" class="d-flex pb-0">
                                  <v-text-field
                                    outlined
                                    hide-details
                                    value="255.255.0.0"
                                    dense
                                    color="#4f5e62"
                                    style="color: #4f5e62"
                                    class="tiny_input pr-3"
                                    disabled
                                  ></v-text-field>
                                </div>
                              </v-col>

                              <v-col cols="6" class="d-flex py-0">
                                <h7 class="mb-1 pb-0 font">IP位置</h7>
                                <v-spacer class="font mb-1 pb-0" />

                                <div cols="12" class="d-flex pb-0">
                                  <v-text-field
                                    outlined
                                    hide-details
                                    v-model="editedItem.cam_ip"
                                    dense
                                    color="#4f5e62"
                                    style="color: #4f5e62"
                                    class="tiny_input pb-0 pr-3"
                                  ></v-text-field>
                                  <!-- <v-btn x-small icon class="ml-1 pb-0"
                                    ><v-icon small style="padding-left: 1px"
                                      >mdi-reload</v-icon
                                    ></v-btn
                                  > -->
                                </div>
                              </v-col>

                              <v-col cols="6" class="d-flex py-0">
                                <h7 class="mb-0 pb-0 font">閘道器</h7>
                                <v-spacer class="font mb-0" />
                                <div cols="12" class="d-flex pb-0">
                                  <v-text-field
                                    outlined
                                    hide-details
                                    value="192.168.0.1"
                                    dense
                                    color="#4f5e62"
                                    style="color: #4f5e62"
                                    class="tiny_input pr-3"
                                    disabled
                                  ></v-text-field>
                                </div>
                              </v-col>

                              <v-col cols="6" class="d-flex py-0">
                                <h7 class="mb-0 pb-0 font">MAC位置</h7>
                                <v-spacer class="font mb-0" />
                                <div cols="12" class="d-flex pb-0">
                                  <v-text-field
                                    outlined
                                    hide-details
                                    value="00:40:7F:04:F7:23"
                                    dense
                                    color="#4f5e62"
                                    style="color: #4f5e62"
                                    class="tiny_input pr-3"
                                    disabled
                                  ></v-text-field>
                                </div>
                              </v-col>

                              <v-col cols="6" class="d-flex py-0">
                                <h7 class="my-0 py-0 font">連線</h7>
                                <v-spacer class="font my-0" />
                                <v-radio-group
                                  v-model="radio"
                                  mandatory
                                  dense
                                  class="small-radio"
                                >
                                  <div class="d-flex" style="padding-top: 2px">
                                    <v-radio
                                      label="DHCP"
                                      value="radio-1"
                                      color="#4f5e62"
                                      class="small-radio pa-0 my-0 pr-2"
                                    ></v-radio>
                                    <v-radio
                                      label="Manual"
                                      value="radio-2"
                                      color="#4f5e62"
                                      class="small-radio pa-0 my-0 pr-3"
                                    ></v-radio>
                                  </div>
                                </v-radio-group>
                              </v-col>
                            </v-row>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-card-text>
                    <v-card-title class="py-0">
                      <h5>相機功能</h5>
                    </v-card-title>
                    <v-card-text>
                      <v-row>
                        <v-col cols="12" md="12" class="pb-0">
                          <v-card
                            ref="form"
                            class="my-0 ma-0 pt-6 pb-1 pl-3 pr-1"
                            flat
                            outlined
                          >
                            <v-row>
                              <v-col cols="3" class="d-flex py-0 my-0">
                                <h7 class="mb-0 pb-0 font">RTSP</h7>
                                <v-spacer class="font mb-0" />
                                <div cols="12" class="d-flex pb-0">
                                  <v-checkbox
                                    label=""
                                    value=""
                                    dense
                                    class="tiny_checkbox py-0 my-0"
                                  ></v-checkbox>
                                </div>
                              </v-col>

                              <v-col cols="3" class="d-flex py-0">
                                <h7 class="mb-0 pb-0 font">MODBUS</h7>
                                <v-spacer class="font mb-0" />
                                <div cols="12" class="d-flex pb-0">
                                  <v-checkbox
                                    label=""
                                    value=""
                                    dense
                                    class="tiny_checkbox py-0 my-0"
                                  ></v-checkbox>
                                </div>
                              </v-col>

                              <v-col cols="3" class="d-flex py-0">
                                <h7 class="mb-0 pb-0 font">ONVIF</h7>
                                <v-spacer class="font mb-0" />
                                <div cols="12" class="d-flex pb-0">
                                  <v-checkbox
                                    label=""
                                    value=""
                                    dense
                                    class="tiny_checkbox py-0 my-0"
                                  ></v-checkbox>
                                </div>
                              </v-col>

                              <v-col cols="3" class="d-flex py-0">
                                <h7 class="mb-0 pb-0 font">DO輸出</h7>
                                <v-spacer class="font mb-0" />
                                <div cols="12" class="d-flex pb-0">
                                  <v-checkbox
                                    label=""
                                    value=""
                                    dense
                                    class="tiny_checkbox py-0 my-0"
                                  ></v-checkbox>
                                </div>
                              </v-col>
                            </v-row>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-card-text>
                    <v-card-title class="py-0">
                      <h5>相機參數</h5>
                    </v-card-title>
                    <v-card-text>
                      <v-row>
                        <v-col cols="12" md="12" class="ma-0">
                          <v-card
                            ref="form"
                            class="my-0 ma-0 pt-4 pb-1 pl-3 pr-1"
                            flat
                            outlined
                          >
                            <v-row>
                              <v-col cols="6" class="d-flex pb-0">
                                <h7 class="mb-1 pb-0 font">放射率</h7>
                                <v-spacer class="font mb-1 py-0" />

                                <div cols="12" class="d-flex pb-0">
                                  <v-text-field
                                    outlined
                                    hide-details
                                    value="0.95"
                                    dense
                                    color="#4f5e62"
                                    style="color: #4f5e62"
                                    class="tiny_input pr-3"
                                    disabled
                                  ></v-text-field>
                                </div>
                              </v-col>

                              <v-col cols="6" class="d-flex pb-0">
                                <h7 class="mb-1 pb-0 font">外窗穿透率</h7>
                                <v-spacer class="font mb-1" />

                                <div cols="12" class="d-flex pb-0">
                                  <v-text-field
                                    outlined
                                    hide-details
                                    value="50%"
                                    dense
                                    color="#4f5e62"
                                    style="color: #4f5e62"
                                    class="tiny_input pr-3"
                                    disabled
                                  ></v-text-field>
                                </div>
                              </v-col>

                              <v-col cols="6" class="d-flex py-0">
                                <h7 class="mb-1 pb-0 font">反射溫度</h7>
                                <v-spacer class="font mb-1" />

                                <div cols="12" class="d-flex pb-0">
                                  <v-text-field
                                    outlined
                                    hide-details
                                    value="30.0°C"
                                    dense
                                    color="#4f5e62"
                                    style="color: #4f5e62"
                                    class="tiny_input pr-3"
                                    disabled
                                  ></v-text-field>
                                </div>
                              </v-col>

                              <v-col cols="6" class="d-flex py-0">
                                <h7 class="mb-1 pb-0 font">外窗溫度</h7>
                                <v-spacer class="font mb-1 pb-0" />

                                <div cols="12" class="d-flex pb-0">
                                  <v-text-field
                                    outlined
                                    hide-details
                                    value="30.0°C"
                                    dense
                                    color="#4f5e62"
                                    style="color: #4f5e62"
                                    class="tiny_input pb-0 pr-3"
                                  ></v-text-field>
                                  <!-- <v-btn x-small icon class="ml-1 pb-0"
                                    ><v-icon small style="padding-left: 1px"
                                      >mdi-reload</v-icon
                                    ></v-btn
                                  > -->
                                </div>
                              </v-col>

                              <v-col cols="6" class="d-flex py-0">
                                <h7 class="mb-0 pb-0 font">量測距離</h7>
                                <v-spacer class="font mb-0" />
                                <div cols="12" class="d-flex pb-0">
                                  <v-text-field
                                    outlined
                                    hide-details
                                    value="5m"
                                    dense
                                    color="#4f5e62"
                                    style="color: #4f5e62"
                                    class="tiny_input pr-3"
                                    disabled
                                  ></v-text-field>
                                </div>
                              </v-col>

                              <v-col cols="6" class="d-flex py-0">
                                <h7 class="my-0 py-0 font">濕度</h7>
                                <v-spacer class="font my-0" />
                                <v-radio-group
                                  v-model="radio"
                                  mandatory
                                  dense
                                  class="small-radio"
                                >
                                  <div class="d-flex" style="padding-top: 2px">
                                    <v-text-field
                                      outlined
                                      hide-details
                                      value="50%"
                                      dense
                                      color="#4f5e62"
                                      style="color: #4f5e62"
                                      class="tiny_input pr-3"
                                      disabled
                                    ></v-text-field>
                                  </div>
                                </v-radio-group>
                              </v-col>

                              <v-col cols="6" class="d-flex py-0 my-0">
                                <h7 class="mb-0 pb-0 font">自動偵測溫度</h7>
                                <v-spacer class="font mb-0" />
                                <div cols="12" class="d-flex pb-0">
                                  <v-checkbox
                                    label=""
                                    value=""
                                    dense
                                    class="tiny_checkbox py-0 my-0"
                                  ></v-checkbox>
                                </div>
                              </v-col>

                              <v-col cols="6" class="d-flex py-0">
                                <h7 class="mb-0 pb-0 font">使用外部視窗</h7>
                                <v-spacer class="font mb-0" />
                                <div cols="12" class="d-flex pb-0">
                                  <v-checkbox
                                    label=""
                                    value=""
                                    dense
                                    class="tiny_checkbox py-0 my-0"
                                  ></v-checkbox>
                                </div>
                              </v-col>
                            </v-row>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-card-text>
                    <v-card-actions class="pt-0">
                      <v-spacer></v-spacer>
                      <v-btn
                        dark
                        color="#4f5e62"
                        @click="dialogForAddCam = false"
                        small
                        class="mb-4"
                      >
                        返回
                      </v-btn>
                      <v-btn
                        dark
                        color="#4f5e62"
                        @click="dialogForAddCam = false"
                        small
                        class="mr-2 mb-4"
                      >
                        確定
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <!-- 詳細資訊對話框 -->
                <v-dialog v-model="dialog" max-width="1200px">
                  <!-- <template v-slot:activator="{ on }">
                    <v-btn v-on="on" outlined text color="#4f5e62">
                      <v-icon left>mdi-plus-circle-outline</v-icon>
                      <h5>新增相機</h5>
                    </v-btn>
                  </template> -->

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
                      <h5>相機詳細資訊</h5>
                      <v-spacer />

                      <v-btn outlined small text color="#4f5e62">
                        <v-icon left> mdi-lightning-bolt-circle </v-icon>
                        連線
                      </v-btn>
                    </v-card-title>
                    <v-card-text>
                      <v-row>
                        <v-col cols="12" md="4" class="ma-0">
                          <v-card ref="form" class="my-0 ma-0 pa-0" flat>
                            <v-row>
                              <v-col cols="12" class="d-flex pb-0">
                                <v-img
                                  src="./HistoricalMonitoring/mockImg/tml.png"
                                  width="300px"
                                />
                              </v-col>
                              <v-col cols="12" class="d-flex pb-0">
                                <h7 class="mb-1 pl-3 pb-0 font_bg_color"
                                  >系統編號</h7
                                >
                                <v-spacer class="font_bg_color mb-1" />
                                <h7 class="mb-1 pr-7 pb-0 font_bg_color">{{
                                  editedItem.cam_system_number
                                }}</h7>
                              </v-col>

                              <v-col cols="12" class="d-flex py-0">
                                <h7 class="mb-1 pl-3 pb-0 font_bg_color"
                                  >名稱</h7
                                >
                                <v-spacer class="font_bg_color mb-1" />
                                <h7 class="mb-1 pr-7 pb-0 font_bg_color">{{
                                  editedItem.cam_name
                                }}</h7>
                              </v-col>

                              <v-col cols="12" class="d-flex py-0">
                                <h7 class="mb-1 pl-3 pb-0 font_bg_color"
                                  >品牌</h7
                                >
                                <v-spacer class="font_bg_color mb-1" />
                                <h7 class="mb-1 pr-7 pb-0 font_bg_color">{{
                                  editedItem.cam_type
                                }}</h7>
                              </v-col>

                              <v-col cols="12" class="d-flex py-0">
                                <h7 class="mb-1 pl-3 pb-0 font_bg_color"
                                  >型號</h7
                                >
                                <v-spacer class="font_bg_color mb-1" />
                                <h7 class="mb-1 pr-7 pb-0 font_bg_color">{{
                                  editedItem.cam_type
                                }}</h7>
                              </v-col>

                              <v-col cols="12" class="d-flex py-0">
                                <h7 class="mb-1 pl-3 pb-0 font_bg_color"
                                  >版本</h7
                                >
                                <v-spacer class="font_bg_color mb-1" />
                                <h7 class="mb-1 pr-7 pb-0 font_bg_color">{{
                                  editedItem.cam_version
                                }}</h7>
                              </v-col>

                              <v-col cols="12" class="d-flex py-0">
                                <h7 class="mb-1 pl-3 pb-0 font_bg_color"
                                  >溫度</h7
                                >
                                <v-spacer class="font_bg_color mb-1" />
                                <h7 class="mb-1 pr-7 pb-0 font_bg_color">{{
                                  editedItem.cam_temp
                                }}</h7>
                              </v-col>

                              <v-col cols="12" class="d-flex py-0">
                                <h7 class="mb-1 pl-3 pb-0 font_bg_color"
                                  >伺服器位置</h7
                                >
                                <v-spacer class="font_bg_color mb-1" />
                                <h7 class="mb-1 pr-7 pb-0 font_bg_color"
                                  >{{ editedItem.cam_main_position }}棟/{{
                                    editedItem.cam_secondary_position
                                  }}區</h7
                                >
                              </v-col>

                              <v-col cols="12" class="d-flex py-0">
                                <h7 class="mb-1 pl-3 pb-0 font_bg_color"
                                  >MAC位址</h7
                                >
                                <v-spacer class="font_bg_color mb-1" />
                                <h7 class="mb-1 pr-7 pb-0 font_bg_color">{{
                                  editedItem.cam_mac_address
                                }}</h7>
                              </v-col>

                              <v-col cols="12" class="d-flex py-0">
                                <h7 class="mb-1 pl-3 pb-0 font_bg_color"
                                  >上次更新時間</h7
                                >
                                <v-spacer class="font_bg_color mb-1" />
                                <h7 class="mb-1 pr-7 pb-0 font_bg_color">{{
                                  editedItem.cam_created_time
                                }}</h7>
                              </v-col>

                              <v-col cols="12" class="d-flex py-0 mb-2">
                                <h7 class="mb-1 pl-3 pb-0 font_bg_color"
                                  >主機建立時間</h7
                                >
                                <v-spacer class="font_bg_color mb-1" />
                                <h7 class="mb-1 pr-7 pb-0 font_bg_color">{{
                                  editedItem.cam_last_modified
                                }}</h7>
                              </v-col>
                            </v-row>
                          </v-card>
                        </v-col>
                        <v-col cols="12" md="8" class="ma-0">
                          <v-card ref="form" class="my-0 mx-0" flat>
                            <v-card-title class="py-0">
                              <h5>相機資訊</h5>
                              <v-btn icon small class="ml-1">
                                <v-icon small>mdi-pencil</v-icon>
                              </v-btn>
                            </v-card-title>
                            <v-card-text>
                              <v-row>
                                <v-col cols="12" md="12" class="ma-0 pb-0">
                                  <v-card
                                    ref="form"
                                    class="my-0 ma-0 py-4 pl-3 pr-1"
                                    flat
                                    outlined
                                  >
                                    <v-row>
                                      <v-col cols="6" class="d-flex pb-0">
                                        <h7 class="mb-1 pb-0 font">系統編號</h7>
                                        <v-spacer class="font mb-1 pb-0" />
                                        <div cols="12" class="d-flex pb-0">
                                          <v-text-field
                                            outlined
                                            hide-details
                                            v-model="
                                              editedItem.cam_system_number
                                            "
                                            dense
                                            color="#4f5e62"
                                            style="color: #4f5e62"
                                            class="tiny_input pr-3"
                                            disabled
                                          ></v-text-field>
                                        </div>
                                      </v-col>

                                      <v-col cols="6" class="d-flex pb-0">
                                        <h7 class="mb-1 pb-0 font">名稱</h7>
                                        <v-spacer class="font mb-1" />
                                        <div cols="12" class="d-flex pb-0">
                                          <v-text-field
                                            outlined
                                            hide-details
                                            v-model="editedItem.cam_name"
                                            dense
                                            color="#4f5e62"
                                            style="color: #4f5e62"
                                            class="tiny_input pr-3"
                                            disabled
                                          ></v-text-field>
                                        </div>
                                      </v-col>

                                      <v-col cols="6" class="d-flex py-0">
                                        <h7 class="mb-1 pb-0 font">版本</h7>
                                        <v-spacer class="font mb-1 pb-0" />
                                        <div cols="12" class="d-flex pb-0">
                                          <v-text-field
                                            outlined
                                            hide-details
                                            v-model="editedItem.cam_version"
                                            dense
                                            color="#4f5e62"
                                            style="color: #4f5e62"
                                            class="tiny_input pr-3"
                                            disabled
                                          ></v-text-field>
                                        </div>
                                      </v-col>

                                      <v-col cols="6" class="d-flex py-0">
                                        <h7 class="mb-1 pb-0 font">品牌</h7>
                                        <v-spacer class="font mb-1" />
                                        <div cols="12" class="d-flex pb-0">
                                          <v-text-field
                                            outlined
                                            hide-details
                                            v-model="editedItem.cam_brand"
                                            dense
                                            color="#4f5e62"
                                            style="color: #4f5e62"
                                            class="tiny_input pr-3"
                                            disabled
                                          ></v-text-field>
                                        </div>
                                      </v-col>

                                      <v-col cols="6" class="d-flex py-0">
                                        <h7 class="mb-1 pb-0 font">型號</h7>
                                        <v-spacer class="font mb-1" />
                                        <div cols="12" class="d-flex pb-0">
                                          <v-select
                                            class="tiny_input_select pr-3"
                                            dense
                                            outlined
                                            ref=""
                                            hide-details
                                            :menu-props="{
                                              bottom: true,
                                              offsetY: true,
                                            }"
                                          ></v-select>
                                        </div>
                                      </v-col>

                                      <v-col cols="6" class="d-flex py-0">
                                        <h7 class="mb-1 pb-0 font"></h7>
                                        <v-spacer class="font mb-1" />
                                        <div
                                          cols="12"
                                          class="d-flex pb-0"
                                        ></div>
                                      </v-col>

                                      <v-col cols="6" class="d-flex py-0">
                                        <h7 class="mb-1 pb-0 font">位置</h7>
                                        <v-spacer class="font mb-1" />
                                        <div cols="12" class="d-flex pb-0">
                                          <!-- <v-text-field
                                    outlined
                                    hide-details
                                    dense
                                    color="#4f5e62"
                                    style="color: #4f5e62"
                                    class="tiny_input"
                                  ></v-text-field> -->

                                          <v-radio-group
                                            v-model="radio"
                                            mandatory
                                            dense
                                            class="small-radio px-0 pr-3"
                                          >
                                            <div class="d-flex">
                                              <v-radio
                                                label="當前位置 "
                                                value="radio-1"
                                                color="#4f5e62"
                                                class="small-radio pa-0"
                                              ></v-radio>
                                              <!-- <h7 class="mb-1 pb-0 font"
                                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{
                                          editedItem.server_main_position
                                        }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;棟/&nbsp;&nbsp;&nbsp;{{
                                          editedItem.server_secondary_position
                                        }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;區</h7
                                      > -->
                                              <v-text-field
                                                outlined
                                                hide-details
                                                v-model="
                                                  editedItem.cam_main_position
                                                "
                                                dense
                                                color="#4f5e62"
                                                style="color: #4f5e62"
                                                class="most_tiny_input_select ml-3"
                                                disabled
                                              ></v-text-field>
                                              <h7 class="mb-1 pb-0 font"></h7>
                                              <v-text-field
                                                outlined
                                                hide-details
                                                v-model="
                                                  editedItem.cam_secondary_position
                                                "
                                                dense
                                                color="#4f5e62"
                                                style="color: #4f5e62"
                                                class="most_tiny_input_select"
                                                disabled
                                              ></v-text-field>
                                              <h7
                                                class="mb-1 pb-0 font"
                                                style="color: #4f5e62"
                                              ></h7>
                                            </div>
                                            <div class="d-flex">
                                              <v-radio
                                                label="其他位置"
                                                value="radio-2"
                                                color="#4f5e62"
                                                class="small-radio pa-0"
                                              ></v-radio>
                                              <v-select
                                                class="most_tiny_input_select ml-3"
                                                dense
                                                outlined
                                                ref=""
                                                hide-details
                                                :menu-props="{
                                                  bottom: true,
                                                  offsetY: true,
                                                }"
                                              ></v-select>
                                              <h7 class="mb-1 pb-0 font"></h7>
                                              <v-select
                                                class="most_tiny_input_select"
                                                dense
                                                outlined
                                                ref=""
                                                hide-details
                                                :menu-props="{
                                                  bottom: true,
                                                  offsetY: true,
                                                }"
                                              ></v-select>
                                              <h7
                                                class="mb-1 pb-0 font"
                                                style="color: #4f5e62"
                                              ></h7>
                                            </div>
                                          </v-radio-group>
                                        </div>
                                      </v-col>
                                      <!-- 連接伺服主機 -->
                                      <v-col cols="6" class="d-flex py-0">
                                        <h7 class="mb-1 pb-0 font"
                                          >連接伺服主機</h7
                                        >
                                        <v-spacer class="font mb-1" />
                                        <div cols="12" class="d-flex pb-0">
                                          <!-- <v-text-field
                                    outlined
                                    hide-details
                                    dense
                                    color="#4f5e62"
                                    style="color: #4f5e62"
                                    class="tiny_input"
                                  ></v-text-field> -->

                                          <v-radio-group
                                            v-model="radio"
                                            mandatory
                                            dense
                                            class="small-radio px-0 pr-3"
                                          >
                                            <div class="d-flex">
                                              <v-radio
                                                label="預設伺服主機"
                                                value="radio-1"
                                                color="#4f5e62"
                                                class="small-radio pa-0"
                                              ></v-radio>
                                              <v-text-field
                                                outlined
                                                hide-details
                                                v-model="editedItem.server_name"
                                                dense
                                                color="#4f5e62"
                                                style="color: #4f5e62"
                                                class="most_tiny_input_select ml-3"
                                                disabled
                                              ></v-text-field>
                                            </div>
                                            <div class="d-flex">
                                              <v-radio
                                                label="其他伺服主機"
                                                value="radio-2"
                                                color="#4f5e62"
                                                class="small-radio pa-0"
                                              ></v-radio>
                                              <v-select
                                                class="most_tiny_input_select ml-3"
                                                dense
                                                outlined
                                                ref=""
                                                hide-details
                                                :menu-props="{
                                                  bottom: true,
                                                  offsetY: true,
                                                }"
                                              ></v-select>
                                            </div>
                                          </v-radio-group>
                                        </div>
                                      </v-col>
                                      <!-- 畫面位置 -->
                                      <v-col cols="6" class="d-flex py-0">
                                        <h7 class="mb-1 pb-0 font">畫面位置</h7>
                                        <v-spacer class="font mb-1" />
                                        <div cols="12" class="d-flex pb-0">
                                          <!-- <v-text-field
                                    outlined
                                    hide-details
                                    dense
                                    color="#4f5e62"
                                    style="color: #4f5e62"
                                    class="tiny_input"
                                  ></v-text-field> -->

                                          <v-radio-group
                                            v-model="radio"
                                            mandatory
                                            dense
                                            class="small-radio px-0 pr-3"
                                          >
                                            <div class="d-flex">
                                              <v-radio
                                                label="當前位置 "
                                                value="radio-1"
                                                color="#4f5e62"
                                                class="small-radio pa-0"
                                              ></v-radio>

                                              <v-text-field
                                                outlined
                                                hide-details
                                                v-model="
                                                  editedItem.cam_screen_position
                                                "
                                                dense
                                                color="#4f5e62"
                                                style="color: #4f5e62"
                                                class="most_tiny_input_select ml-3"
                                                disabled
                                              ></v-text-field>
                                            </div>
                                            <div class="d-flex">
                                              <v-radio
                                                label="其他位置"
                                                value="radio-2"
                                                color="#4f5e62"
                                                class="small-radio pa-0"
                                              ></v-radio>
                                              <v-select
                                                class="most_tiny_input_select ml-3"
                                                dense
                                                outlined
                                                ref=""
                                                hide-details
                                                :menu-props="{
                                                  bottom: true,
                                                  offsetY: true,
                                                }"
                                              ></v-select>
                                            </div>
                                          </v-radio-group>
                                        </div>
                                      </v-col>
                                      <!-- ---- -->

                                      <v-col cols="6" class="d-flex py-0 my-0">
                                        <h7 class="mb-0 pb-0 font">連線</h7>
                                        <v-spacer class="font my-0" />
                                        <div cols="12" class="d-flex pb-0 pt-0">
                                          <v-radio-group
                                            v-model="radio"
                                            mandatory
                                            dense
                                            class="small-radio pa-0 my-0 pr-3"
                                          >
                                            <v-radio
                                              label="ON"
                                              value="radio-1"
                                              color="#4f5e62"
                                              class="small-radio pa-0 my-0"
                                            ></v-radio>
                                            <v-radio
                                              label="OFF"
                                              value="radio-2"
                                              color="#4f5e62"
                                              class="small-radio pa-0 my-0"
                                            ></v-radio>
                                          </v-radio-group>
                                        </div>
                                      </v-col>
                                    </v-row>
                                  </v-card>
                                </v-col>
                              </v-row>
                            </v-card-text>
                            <v-card-title class="py-0">
                              <h5>登入位置</h5>
                              <v-btn icon small class="ml-1">
                                <v-icon small>mdi-pencil</v-icon>
                              </v-btn>
                            </v-card-title>
                            <v-card-text>
                              <v-row>
                                <v-col cols="12" md="12" class="pb-0">
                                  <v-card
                                    ref="form"
                                    class="ma-0 py-4 pl-3 pr-1"
                                    flat
                                    outlined
                                  >
                                    <v-row>
                                      <v-col cols="6" class="d-flex pb-0">
                                        <h7 class="mb-1 pb-0 font">帳號</h7>
                                        <v-spacer class="font mb-1 pb-0" />

                                        <div cols="12" class="d-flex pb-0">
                                          <v-text-field
                                            outlined
                                            hide-details
                                            value="admin"
                                            dense
                                            color="#4f5e62"
                                            style="color: #4f5e62"
                                            class="tiny_input pr-3"
                                            disabled
                                          ></v-text-field>
                                        </div>
                                      </v-col>

                                      <v-col cols="6" class="d-flex pb-0">
                                        <h7 class="mb-1 pb-0 font">密碼</h7>
                                        <v-spacer class="font mb-1" />

                                        <div cols="12" class="d-flex pb-0">
                                          <v-text-field
                                            outlined
                                            hide-details
                                            value="a*****"
                                            dense
                                            color="#4f5e62"
                                            style="color: #4f5e62"
                                            class="tiny_input pr-3"
                                            disabled
                                          ></v-text-field>
                                        </div>
                                      </v-col>

                                      <v-col cols="6" class="d-flex py-0">
                                        <h7 class="mb-1 pb-0 font">位址遮罩</h7>
                                        <v-spacer class="font mb-1" />

                                        <div cols="12" class="d-flex pb-0">
                                          <v-text-field
                                            outlined
                                            hide-details
                                            value="255.255.0.0"
                                            dense
                                            color="#4f5e62"
                                            style="color: #4f5e62"
                                            class="tiny_input pr-3"
                                            disabled
                                          ></v-text-field>
                                        </div>
                                      </v-col>

                                      <v-col cols="6" class="d-flex py-0">
                                        <h7 class="mb-1 pb-0 font">IP位置</h7>
                                        <v-spacer class="font mb-1 pb-0" />

                                        <div cols="12" class="d-flex pb-0">
                                          <v-text-field
                                            outlined
                                            hide-details
                                            v-model="editedItem.cam_ip"
                                            dense
                                            color="#4f5e62"
                                            style="color: #4f5e62"
                                            class="tiny_input pb-0 pr-3"
                                          ></v-text-field>
                                          <!-- <v-btn x-small icon class="ml-1 pb-0"
                                    ><v-icon small style="padding-left: 1px"
                                      >mdi-reload</v-icon
                                    ></v-btn
                                  > -->
                                        </div>
                                      </v-col>

                                      <v-col cols="6" class="d-flex py-0">
                                        <h7 class="mb-0 pb-0 font">閘道器</h7>
                                        <v-spacer class="font mb-0" />
                                        <div cols="12" class="d-flex pb-0">
                                          <v-text-field
                                            outlined
                                            hide-details
                                            value="192.168.0.1"
                                            dense
                                            color="#4f5e62"
                                            style="color: #4f5e62"
                                            class="tiny_input pr-3"
                                            disabled
                                          ></v-text-field>
                                        </div>
                                      </v-col>

                                      <v-col cols="6" class="d-flex py-0">
                                        <h7 class="mb-0 pb-0 font">MAC位置</h7>
                                        <v-spacer class="font mb-0" />
                                        <div cols="12" class="d-flex pb-0">
                                          <v-text-field
                                            outlined
                                            hide-details
                                            value="00:40:7F:04:F7:23"
                                            dense
                                            color="#4f5e62"
                                            style="color: #4f5e62"
                                            class="tiny_input pr-3"
                                            disabled
                                          ></v-text-field>
                                        </div>
                                      </v-col>

                                      <v-col cols="6" class="d-flex py-0">
                                        <h7 class="my-0 py-0 font">連線</h7>
                                        <v-spacer class="font my-0" />
                                        <v-radio-group
                                          v-model="radio"
                                          mandatory
                                          dense
                                          class="small-radio"
                                        >
                                          <div
                                            class="d-flex"
                                            style="padding-top: 2px"
                                          >
                                            <v-radio
                                              label="DHCP"
                                              value="radio-1"
                                              color="#4f5e62"
                                              class="small-radio pa-0 my-0 pr-2"
                                            ></v-radio>
                                            <v-radio
                                              label="Manual"
                                              value="radio-2"
                                              color="#4f5e62"
                                              class="small-radio pa-0 my-0 pr-3"
                                            ></v-radio>
                                          </div>
                                        </v-radio-group>
                                      </v-col>
                                    </v-row>
                                  </v-card>
                                </v-col>
                              </v-row>
                            </v-card-text>
                            <v-card-title class="py-0">
                              <h5>相機功能</h5>
                              <v-btn icon small class="ml-1">
                                <v-icon small>mdi-pencil</v-icon>
                              </v-btn>
                            </v-card-title>
                            <v-card-text>
                              <v-row>
                                <v-col cols="12" md="12" class="pb-0">
                                  <v-card
                                    ref="form"
                                    class="my-0 ma-0 pt-6 pb-1 pl-3 pr-1"
                                    flat
                                    outlined
                                  >
                                    <v-row>
                                      <v-col cols="3" class="d-flex py-0 my-0">
                                        <h7 class="mb-0 pb-0 font">RTSP</h7>
                                        <v-spacer class="font mb-0" />
                                        <div cols="12" class="d-flex pb-0">
                                          <v-checkbox
                                            label=""
                                            value=""
                                            dense
                                            class="tiny_checkbox py-0 my-0"
                                          ></v-checkbox>
                                        </div>
                                      </v-col>

                                      <v-col cols="3" class="d-flex py-0">
                                        <h7 class="mb-0 pb-0 font">MODBUS</h7>
                                        <v-spacer class="font mb-0" />
                                        <div cols="12" class="d-flex pb-0">
                                          <v-checkbox
                                            label=""
                                            value=""
                                            dense
                                            class="tiny_checkbox py-0 my-0"
                                          ></v-checkbox>
                                        </div>
                                      </v-col>

                                      <v-col cols="3" class="d-flex py-0">
                                        <h7 class="mb-0 pb-0 font">ONVIF</h7>
                                        <v-spacer class="font mb-0" />
                                        <div cols="12" class="d-flex pb-0">
                                          <v-checkbox
                                            label=""
                                            value=""
                                            dense
                                            class="tiny_checkbox py-0 my-0"
                                          ></v-checkbox>
                                        </div>
                                      </v-col>

                                      <v-col cols="3" class="d-flex py-0">
                                        <h7 class="mb-0 pb-0 font">DO輸出</h7>
                                        <v-spacer class="font mb-0" />
                                        <div cols="12" class="d-flex pb-0">
                                          <v-checkbox
                                            label=""
                                            value=""
                                            dense
                                            class="tiny_checkbox py-0 my-0"
                                          ></v-checkbox>
                                        </div>
                                      </v-col>
                                    </v-row>
                                  </v-card>
                                </v-col>
                              </v-row>
                            </v-card-text>
                            <v-card-title class="py-0">
                              <h5>相機參數</h5>
                              <v-btn icon small class="ml-1">
                                <v-icon small>mdi-pencil</v-icon>
                              </v-btn>
                            </v-card-title>
                            <v-card-text>
                              <v-row>
                                <v-col cols="12" md="12" class="ma-0">
                                  <v-card
                                    ref="form"
                                    class="my-0 ma-0 pt-4 pb-1 pl-3 pr-1"
                                    flat
                                    outlined
                                  >
                                    <v-row>
                                      <v-col cols="6" class="d-flex pb-0">
                                        <h7 class="mb-1 pb-0 font">放射率</h7>
                                        <v-spacer class="font mb-1 py-0" />

                                        <div cols="12" class="d-flex pb-0">
                                          <v-text-field
                                            outlined
                                            hide-details
                                            value="0.95"
                                            dense
                                            color="#4f5e62"
                                            style="color: #4f5e62"
                                            class="tiny_input pr-3"
                                            disabled
                                          ></v-text-field>
                                        </div>
                                      </v-col>

                                      <v-col cols="6" class="d-flex pb-0">
                                        <h7 class="mb-1 pb-0 font"
                                          >外窗穿透率</h7
                                        >
                                        <v-spacer class="font mb-1" />

                                        <div cols="12" class="d-flex pb-0">
                                          <v-text-field
                                            outlined
                                            hide-details
                                            value="50%"
                                            dense
                                            color="#4f5e62"
                                            style="color: #4f5e62"
                                            class="tiny_input pr-3"
                                            disabled
                                          ></v-text-field>
                                        </div>
                                      </v-col>

                                      <v-col cols="6" class="d-flex py-0">
                                        <h7 class="mb-1 pb-0 font">反射溫度</h7>
                                        <v-spacer class="font mb-1" />

                                        <div cols="12" class="d-flex pb-0">
                                          <v-text-field
                                            outlined
                                            hide-details
                                            value="30.0°C"
                                            dense
                                            color="#4f5e62"
                                            style="color: #4f5e62"
                                            class="tiny_input pr-3"
                                            disabled
                                          ></v-text-field>
                                        </div>
                                      </v-col>

                                      <v-col cols="6" class="d-flex py-0">
                                        <h7 class="mb-1 pb-0 font">外窗溫度</h7>
                                        <v-spacer class="font mb-1 pb-0" />

                                        <div cols="12" class="d-flex pb-0">
                                          <v-text-field
                                            outlined
                                            hide-details
                                            value="30.0°C"
                                            dense
                                            color="#4f5e62"
                                            style="color: #4f5e62"
                                            class="tiny_input pb-0 pr-3"
                                          ></v-text-field>
                                          <!-- <v-btn x-small icon class="ml-1 pb-0"
                                    ><v-icon small style="padding-left: 1px"
                                      >mdi-reload</v-icon
                                    ></v-btn
                                  > -->
                                        </div>
                                      </v-col>

                                      <v-col cols="6" class="d-flex py-0">
                                        <h7 class="mb-0 pb-0 font">量測距離</h7>
                                        <v-spacer class="font mb-0" />
                                        <div cols="12" class="d-flex pb-0">
                                          <v-text-field
                                            outlined
                                            hide-details
                                            value="5m"
                                            dense
                                            color="#4f5e62"
                                            style="color: #4f5e62"
                                            class="tiny_input pr-3"
                                            disabled
                                          ></v-text-field>
                                        </div>
                                      </v-col>

                                      <v-col cols="6" class="d-flex py-0">
                                        <h7 class="my-0 py-0 font">濕度</h7>
                                        <v-spacer class="font my-0" />
                                        <v-radio-group
                                          v-model="radio"
                                          mandatory
                                          dense
                                          class="small-radio"
                                        >
                                          <div
                                            class="d-flex"
                                            style="padding-top: 2px"
                                          >
                                            <v-text-field
                                              outlined
                                              hide-details
                                              value="50%"
                                              dense
                                              color="#4f5e62"
                                              style="color: #4f5e62"
                                              class="tiny_input pr-3"
                                              disabled
                                            ></v-text-field>
                                          </div>
                                        </v-radio-group>
                                      </v-col>

                                      <v-col cols="6" class="d-flex py-0 my-0">
                                        <h7 class="mb-0 pb-0 font"
                                          >自動偵測溫度</h7
                                        >
                                        <v-spacer class="font mb-0" />
                                        <div cols="12" class="d-flex pb-0">
                                          <v-checkbox
                                            label=""
                                            value=""
                                            dense
                                            class="tiny_checkbox py-0 my-0"
                                          ></v-checkbox>
                                        </div>
                                      </v-col>

                                      <v-col cols="6" class="d-flex py-0">
                                        <h7 class="mb-0 pb-0 font"
                                          >使用外部視窗</h7
                                        >
                                        <v-spacer class="font mb-0" />
                                        <div cols="12" class="d-flex pb-0">
                                          <v-checkbox
                                            label=""
                                            value=""
                                            dense
                                            class="tiny_checkbox py-0 my-0"
                                          ></v-checkbox>
                                        </div>
                                      </v-col>
                                    </v-row>
                                  </v-card>
                                </v-col>
                              </v-row>
                            </v-card-text>
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
                      max="12"
                      class="item_per_page"
                      @input="itemsPerPage = parseInt($event, 10)"
                      style="margin-top: 5px; position: relative"
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
                    class="edit_pagination"
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
          :headers="headersForDialogCamTable"
          :items="itemsWithIndexForCamTsble"
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
          checkbox-color="#4f5e62"
        >
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
          <template v-slot:[`item.book_mark`]="{ item }">
            <v-btn icon v-if="item.book_mark === '0'">
              <v-icon>mdi-bookmark-outline</v-icon></v-btn
            >
          </template>
          <!-- 伺服器名稱 -->
          <template v-slot:[`item.server_name`]="{ item }">
            <td style="text-align: center">
              {{ item.server_name }}
            </td>
          </template>
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
          <!-- 相機狀態 -->
          <template v-slot:[`item.cam_status`]="csts">
            <v-icon
              v-if="csts.item.cam_status === '1'"
              :color="getGreenColor()"
              x-small
              >mdi-circle</v-icon
            >
            <v-icon v-else :color="getRedColor()" x-small>mdi-circle</v-icon>
          </template>
          <!-- 伺服器主位置 -->
          <template v-slot:[`item.cam_main_position`]="{ item }">
            <td style="text-align: center">{{ item.cam_main_position }}棟</td>
          </template>

          <!-- 伺服器次位置 -->
          <template v-slot:[`item.cam_secondary_position`]="{ item }">
            <td style="text-align: center">
              {{ item.cam_secondary_position }}區
            </td>
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
      headersForDialogCamTable: [
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
          text: '伺服主機名稱',
          value: 'server_name',
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
          text: '相機系統編號',
          value: 'cam_system_number',
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
          text: '相機畫面位置',
          value: 'cam_screen_position',
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
          text: '相機IP位置',
          value: 'cam_ip',
          align: 'center',
          class: 'my-header-style',
        },
        {
          text: '相機MAC位址',
          value: 'cam_mac_address',
          align: 'center',
          class: 'my-header-style',
        },
        {
          text: '上次更新時間',
          value: 'cam_last_modified',
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
      message: false,

      // 搜尋
      search: '',
      // 分頁
      page: 1,
      pageCount: 0,
      itemsPerPage: 12,
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
      dialogForAddCam: false,
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

    showEditDialogForAddCam(item) {
      this.editedItem = item || {}
      this.dialogForAddCam = !this.dialogForAddCam
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

