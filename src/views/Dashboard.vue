<template>
  <loader v-if="loading" />
  <todo-list />
  <add-to-list />
  <input type="submit" @click="saveData()" value="Save" />
  <input type="submit" @click="logout()" value="logout" />
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import AddToList from "../components/AddToList.vue";
import TodoList from "../components/TodoList.vue";
import APICaller from "../utils/APICaller";
import Loader from "../components/Loader";

export default {
  name: "Dashboard",
  data() {
    return { loading: false };
  },
  setup() {
    const store = useStore();
    const list = computed(() => store.state.listItem);
    function addListItem(val) {
      store.dispatch("addListItem", val);
    }
    function resetStore() {
      store.commit("resetState");
    }
    return { list, addListItem, resetStore };
  },
  components: {
    AddToList,
    TodoList,
    loader: Loader,
  },
  methods: {
    async saveData() {
      try {
        this.loading = true;
        const response = await APICaller({
          url: "/users/dashboard",
          method: "POST",
          data: {
            list: [...this.list].map((item) => item.name),
          },
        });
        console.log("response ---", response);
        this.loading = false;
      } catch (error) {
        this.loading = false;
        console.log("error ------", error);
      }
    },
    logout() {
      localStorage.clear();
      this.resetStore();
      this.$router.push({ name: "login" });
    },
  },
  async created() {
    try {
      this.loading = true;
      const response = await APICaller({
        url: "/users/dashboard",
        method: "GET",
      });
      this.loading = false;
      const { list } = response;
      list.map((item) => this.addListItem(item));
    } catch (error) {
      this.loading = false;
      console.log("error -----", error);
    }
  },
};
</script>

<style></style>
