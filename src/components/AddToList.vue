<template>
  <input v-model="item" type="text" placeholder="edit me!" />
  <input type="submit" @click="addData()" value="+ Add" />
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "addToList",
  setup() {
    const store = useStore();
    function addToList(data) {
      store.dispatch("addListItem", data);
    }
    return { addToList };
  },
  data() {
    return {
      item: "",
    };
  },
  methods: {
    addData() {
      this.addToList(this.item);
      this.item = "";
    },
  },
};
</script>

<style></style>
