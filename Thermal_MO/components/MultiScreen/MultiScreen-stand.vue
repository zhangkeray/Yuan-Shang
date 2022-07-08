<template>
  <div>
    <v-btn @click="test()">BACK</v-btn>
    output:{{ id }}
  </div>
</template>
<script>
export default {
  name: 'MultiScreen-standPage',
  data: () => ({}),
  props: [
    'id',
  ],
  mounted() {
    // this.wrapper1()
  },
  methods: {
    test(){
      this.$emit('VideoActive','tab-1')
    }
  },
}
</script>
<style scoped>
</style>