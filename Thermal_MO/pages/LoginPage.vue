<template lanf="html">
  <div>
    <v-text-field v-model="uid" label="Name"></v-text-field>
    <v-text-field v-model="passwd" label="Password" type="password"></v-text-field>
  <v-btn @click="handleLoginClick"> Login In </v-btn>
  </div>

</template>



<script>
  export default {
    layout: 'TheSession',
    data() {
      return {
        uid:'',
        passwd:''
      }  
    },
    methods: {
      async handleLoginClick(){
        try {
          const response = await this.$auth.loginwith('local', { 
            data: { uid: this.uid, passwd: this.passwd }
            })
            console.log(response)
        } catch(err) {
          console.log(err);
        }

      }
      
    }
  }
</script>