<template>
  <div>
    <p>{{ apiData.message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apiData: {},
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetch(`${process.env.VUE_APP_API_URL}/api/SemesterWarning`)
        .then((response) => response.json())
        .then((data) => {
          this.apiData = data;
        })
        .catch((error) => console.error("Error fetching data:", error));
    },
  },
};
</script>

<style scoped></style>
