<template>
  <div>
    <Header />
    <Search />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Search from "../components/Search.vue";

export default {
  name: "SearchMain",
  components: {
    Header,
    Search,
  },
};
</script>

<style></style>
