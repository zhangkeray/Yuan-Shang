<template>
<div id="app">
 <v-tabs
  v-model='tab'
  color="cyan"
  dark
  slider-color="yellow"
>
  <v-tab ripple href='#tab-1'>
    Item 1
  </v-tab>
  
  <v-tab ripple href='#tab-2'>
    Item 2
  </v-tab>

  <v-tab-item value='tab-1'> 
    <v-card flat>
      <v-btn @click="changeTab()">Go to item2</v-btn>
    </v-card>
  </v-tab-item>

  <v-tab-item value='tab-2'>
    <v-card flat>
      <v-card-text>Contents for Item 2 go here</v-card-text>
    </v-card> 
  </v-tab-item>  
</v-tabs>
</div>
</template>
<script>
export default {
  name: 'IndexPage',
  methods:{
    changeTab(){
     this.tab='tab-2'
    }
  },
  data () {
    return {
      tab: 'tab-1'
    }
  }
}
</script>
