<script>
import Login from "./components/Login.vue";
import Header from "./components/Header.vue";
import Search from "./components/Search.vue";
import SearchMain from "./views/SearchMain.vue";
/*import 'lord-icon-element/lord-icon.js';*/

export default {
  name: "App",
  components: {
    Login,
    Header,
    Search,
    SearchMain,
  },
};
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
