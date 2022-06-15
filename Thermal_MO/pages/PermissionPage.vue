<template>
  <div class="box">
    <section>
      <p>datetime range</p>
      <date-picker
        v-model="value1"
        type="datetime"
        range
        placeholder="Select datetime range"
      ></date-picker>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: [new Date(), new Date()],
    };
  },
};
</script>