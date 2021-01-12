<template>
  <ul>
    <li v-for="(item, index) in list" :key="index">
      {{ item.name }}
      <input type="submit" value="X" @click="deleteEntry(index)" />
      <input
        v-if="editIndex === -1"
        type="submit"
        value="Edit"
        @click="editEntry(index)"
      />
      <input
        v-if="editIndex === index"
        type="text"
        v-model="list[index].name"
      />
      <input
        v-if="editIndex === index"
        type="submit"
        value="done!"
        @click="editEntry(-1)"
      />
    </li>
  </ul>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "todoList",
  setup() {
    const store = useStore();
    const list = computed(() => store.state.listItem);
    const editIndex = computed(() => store.state.editIndex);
    function editEntry(index) {
      store.commit("setEditIndex", index);
    }
    function deleteEntry(index) {
      store.commit("deleteEntry", index);
    }
    return { list, editIndex, editEntry, deleteEntry };
  },
};
</script>

<style></style>
