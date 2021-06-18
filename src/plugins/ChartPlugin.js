import Chart from 'chart.js';

export default {
  install(Vue) {
    Vue.prototype.$_Chart = Chart;
    console.log('chart plugin loaded');

    // App.vue
    // this.$_Chart;

    // LineChart.vue
    // this.$_Chart;
  },
};
