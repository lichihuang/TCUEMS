<template>
  <div class="footer">
    <p class="mb-0">
      CopyRight © 2024 -
      <a href="index.html">Tzu Chi University Computer Center, All Right Reserved</a>.
    </p>
  </div>
</template>

<script>
export default {
  name: "CopyrightNotice",
};
</script>

<style scoped>
.footer {
  position: fixed;
  font-size: 0.7rem;
  text-align: center;
}
@media (min-width: 768px) {
  .footer {
    position: fixed;
    bottom: 1%;
    width: 100%;
  }
}
</style>
