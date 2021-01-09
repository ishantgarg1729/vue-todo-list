<template>
  <div class="loader-container">
    <img :src="Loader" />
  </div>
</template>

<script>
import Loader from "../assets/loaderr.gif";
export default {
  name: "Loader",
  data() {
    return { loader: Loader };
  },
};
</script>

<style>
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  z-index: 2000;
  background-color: rgba(255, 255, 255, 0.7);
}
</style>
