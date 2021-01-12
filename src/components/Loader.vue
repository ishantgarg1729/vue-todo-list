<template>
  <div class="loader-container">
    <img :src="require('../assets/loaderr.gif')" />
  </div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style>
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex: 1;
  z-index: 500;
  background-color: transparent;
}
</style>
