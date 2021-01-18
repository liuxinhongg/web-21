<template>
  <div>
    <div ref="echarts" style="width: 600px; height: 400px"></div>
  </div>
</template>

<script>
export default {
  methods: {
    echartData() {
        // this.generateData()
      let initEchart = this.$echarts.init(this.$refs.echarts);
      var data = [];

for (var i = 0; i <= 100; i++) {
    var theta = i / 100 * 360;
    var r = 5 * (1 + Math.sin(theta / 180 * Math.PI));
    data.push([r, theta]);
}
      let option = {
         title: {
        text: '极坐标双数值轴'
    },
    legend: {
        data: ['line']
    },
    polar: {},
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    angleAxis: {
        type: 'value',
        startAngle: 0
    },
    radiusAxis: {
    },
    series: [{
        coordinateSystem: 'polar',
        name: 'line',
        type: 'line',
        data: data
    }]
      };
      initEchart.setOption(option);
    },
   
  },
  mounted() {
    this.echartData();
    
  },
};
</script>

<style lang="sass" scoped>
</style>