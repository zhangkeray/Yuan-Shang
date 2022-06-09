<template>
  <div>
    <input type="text" name="datetimes" style="width:400px"/>
  </div>
</template>
<script>
export default {
    head: {
    title: '即時監控',
    link: [

      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css' },
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js',
        type: 'text/javascript',
      },
      {
        src: 'https://cdn.jsdelivr.net/momentjs/latest/moment.min.js',
        type: 'text/javascript',
      },
      {
        src: 'https://cdn.jsdelivr.net/jquery/latest/jquery.min.js',
        type: 'text/javascript',
      },
    ],
  },
  mounted(){
    $(function() {
  $('input[name="datetimes"]').daterangepicker({
    timePicker: true,
    showSecond: true,

    startDate: moment().startOf('hour'),
    endDate: moment().startOf('hour').add(32, 'hour'),
    locale: {
      format: 'YYYY/MM/DD hh:mm:ss AA'
    }
  });
});
  }
}
