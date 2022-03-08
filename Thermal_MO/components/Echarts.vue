<template>
<div id="echarts">
<div id="myChart"></div>
</div>
</template>
<script type="text/javascript">
export default {
name: "Echarts",
data() {
return {
area: [],
areaName: [],
areaConfirm: [],
areaNowConfirm: [],
};
},
methods: {
getData() {
this.$axios.get(`/api/g2/getOnsInfo?name=disease_h5`).then(({ data }) => {
console.log(JSON.parse(data.data.replace('\\"', "'")));
this.area = JSON.parse(
data.data.replace('\\"', "'")
).areaTree[0].children;
// 地區名
this.areaName = this.area.map((o) => {
return o.name;
});
// 總確診人數
this.areaConfirm = this.area.map((o) => {
return o.total.confirm;
});
console.log(this.areaConfirm);
// 目前確診人數
this.areaNowConfirm = this.area.map((o) => {
return o.total.nowConfirm;
});
this.echartsInit();
});
},
echartsInit() {
let myChart = this.$echarts.init(document.getElementById("myChart"));
myChart.setOption({
title: {
text: "echarts的柱狀圖來實現疫情統計",
textAlign: "auto",
left: 'center'
},
tooltip: {},
// 省份
xAxis: {
data: this.areaName,
type: "category",
axisLabel: {
rotate: -45, // 旋轉30度
show: true, //這行代碼控制著坐標軸x軸的文字是否顯示
},
},
yAxis: {},
// 確診數量
series: [
{
name: "總確診數量",
type: "bar",
data: this.areaConfirm,
},
],
});
},
},
mounted() {
this.getData();
this.echartsInit();
},
};
</script>
<style scoped>
#myChart {
width: 100%;
height: 300px;
margin-left: auto;
margin-right: auto;
}
</style>