<template>
  <v-container fluid p-0>
    <v-card-title>
      <h5>權限管理</h5>
    </v-card-title>
    <v-data-iterator
      hide-default-footer
      :headers="headers"
      :items="items1"
      mobile-breakpoint="800"
      class="elevation-0 mx-6"
      :loading="loading ? '#828c8f' : null"
      loading-text="資料加載中... 請稍後"
      style="color: #828c8f"
    >
      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item"
            cols="12"
            sm="4"
            md="4"
            lg="4"
            style="margin: auto"
          >
            <v-card style="height: 45em">
              <v-card-title class="py-0 font-weight-bold my-header-style2">
                {{ item.name }}
              </v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item>
                  <v-list-item-content class="my-header-style"
                    >功能1</v-list-item-content
                  >
                  <!-- <v-list-item-content class="align-end my-header-style">
                    {{ item.used }}
                  </v-list-item-content> -->
                  <v-switch v-model="switch1"></v-switch>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content class="my-header-style"
                    >公能2:</v-list-item-content
                  >
                  <!-- <v-list-item-content class="align-end my-header-style">
                    {{ item.left }}
                  </v-list-item-content> -->
                  <v-switch v-model="switch1"></v-switch>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content class="my-header-style"
                    >功能3:</v-list-item-content
                  >
                  <!-- <v-list-item-content class="align-end my-header-style"> -->
                  <!-- {{ items.length }} -->
                  <!-- </v-list-item-content> -->
                  <v-switch v-model="switch1"></v-switch>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
export default {
  name: 'DeepLearningPage',
  // 權限數量管理
  data() {
    return {
      switch1: true,

      items1: [
        {
          name: 'user001',
          opened: 4,
          used: 2,
          left: 2,
        },
        {
          name: 'viewer001',
          opened: 4,
          used: 4,
          left: 3,
        },
        {
          name: 'admin001',
          used: 1,
          left: 0,
        },
      ],
    }
  },
}
</script>
<style scoped></style>
