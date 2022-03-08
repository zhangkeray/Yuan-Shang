import Vue from 'vue';
import echarts from 'echarts'; // 引入echarts 
function echartsInit(idname, option) {
  let myChart = echarts.init(document.getElementById(idname), 'macarons');
  myChart.setOption(option);
}
Vue.prototype.$echartsInit = echartsInit; // 引入组件（将echarts注册为全局）
