<template>
  <canvas ref="lineChart" id="lineChart"></canvas>
</template>

<script>
export default {
  mounted() {
    var chart = new this.$_Chart(this.$refs.lineChart, {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)'],
          },
        ],
      },
      options: {},
    });
  },
};
</script>

<style></style>
