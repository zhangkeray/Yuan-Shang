<template>
  <v-app>
    <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <!-- <v-list-item-title class="text-h6">
            Application
          </v-list-item-title> -->
          <v-list-item-subtitle> 監測工具 </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav>
          <v-list-item-content>
            <v-btn block><v-icon small>mdi-cog</v-icon>測量點</v-btn>
            <v-btn block><v-icon small>mdi-cog</v-icon>測量線</v-btn>
            <v-btn block><v-icon small>mdi-cog</v-icon>測量矩形</v-btn>
          </v-list-item-content>
      </v-list>
        <v-divider></v-divider>
              <v-list-item>
        <v-list-item-content>
          <!-- <v-list-item-title class="text-h6">
            Application
          </v-list-item-title> -->
          <v-list-item-subtitle> 資料呈現 </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
       <v-divider></v-divider>
      <v-list dense nav>
          <v-list-item-content>
            <v-btn block><v-icon small>mdi-cog</v-icon>影像模式</v-btn>
            <v-btn block><v-icon small>mdi-cog</v-icon>色譜模式</v-btn>
          </v-list-item-content>
      </v-list>
              <v-divider></v-divider>
              <v-list-item>
        <v-list-item-content>
          <!-- <v-list-item-title class="text-h6">
            Application
          </v-list-item-title> -->
          <v-list-item-subtitle> 資料呈現 </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
       <v-divider></v-divider>
      <v-list dense nav>
          <v-list-item-content>
            <v-btn block><v-icon small>mdi-cog</v-icon>照明|OFF</v-btn>
            <v-btn block><v-icon small>mdi-cog</v-icon>自動對焦</v-btn>
          </v-list-item-content>
      </v-list>
    </v-navigation-drawer>
    <div>
      <v-img
  lazy-src="https://picsum.photos/id/11/10/6"
  max-height="150"
  max-width="250"
  src="https://picsum.photos/id/11/500/300"
></v-img>
    </div>
  </v-app>
</template>
<script>
export default {
  name: 'IndexPage'
}
</script>
