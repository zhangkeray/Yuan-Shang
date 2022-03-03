<template lanf="html">
  <div>
    <v-text-field v-model="name" label="Name"></v-text-field>
    <v-text-field v-model="password" label="Password" type="password"></v-text-field>
  <v-btn @click="handleLoginClick"> Login In </v-btn>
  </div>

</template>



<script>
  export default {
    layout: 'TheSession',
    data() {
      return {
        name:'',
        password:''
      }  
    },
    methods: {
  
      
    }
  }
</script>