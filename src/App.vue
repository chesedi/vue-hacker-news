<template>
  <div id="app">
    <Spinner :loading="loadingStatus"></Spinner>
    <Toolbar></Toolbar>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Spinner from './components/Spinner.vue';
import Toolbar from './components/Toolbar.vue';
import bus from './utils/bus.js';

export default {
  name: 'App',
  components: {
    Toolbar,
    Spinner,
  },
  data() {
    return {
      loadingStatus: false,
    };
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);

    // 환경변수 실습
    console.log(process.env.VUE_APP_TITLE);
  },
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}

/* Router Transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter, .page-leave-to /* .page-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
