<template>
  <div class="box-model-container">
    <!-- Your content goes here -->
  </div>
</template>

<script>
export default {
  name: "BoxModelComponent",
  // Add any component-specific logic here
};
</script>

<style scoped>
.box-model-container {
  width: 100%; /* Set your desired width */
  padding: 20px; /* Set your desired padding */
  margin: -40px; /* Set your desired margin */
  border: 1px solid #ddd; /* Set your desired border */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
}
</style>
