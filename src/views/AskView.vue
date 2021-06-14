<template>
  <div>
    <div v-for="item in ask">{{ item }}</div>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index.js';
export default {
  data() {
    return {
      ask: []
    }
  },
  created() {
    fetchAskList()
      .then(response => this.users = response.data)
      .catch(function(error) {
        console.error(error);
      });
  },
}
</script>

<style>

</style>