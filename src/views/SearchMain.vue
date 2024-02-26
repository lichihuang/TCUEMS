<template>
  <div>
    <BoxModelComponent />
    <Header />
    <Search />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Search from "../components/Search.vue";
import BoxModelComponent from "../components/BoxModelComponent.vue";

export default {
  name: "SearchMain",
  components: {
    Header,
    Search,
    BoxModelComponent,
  },
};
</script>

<style></style>
