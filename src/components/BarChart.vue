<template>
  <div>
    <canvas ref="barChart" id="barChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
export default {
  props: ['propsdata'],
  mounted() {
    var chart = new this.$_Chart(this.$refs.barChart, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: this.propsdata,
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        onClick: function() {
          this.$emit('refrech:chart');
        },
      },
    });
  },
};
</script>

<style></style>
