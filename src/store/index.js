import { createStore } from "vuex";

function getDefaultState() {
  return { listItem: [], editIndex: -1 };
}

export default createStore({
  state: getDefaultState(),
  mutations: {
    addListItem: (state, val) => state.listItem.push(val),
    setEditIndex: (state, val) => (state.editIndex = val),
    deleteEntry: (state, index) => state.listItem.splice(index, 1),
    resetState: (state) => Object.assign(state, getDefaultState()),
  },
  actions: {
    addListItem: ({ commit }, val) => commit("addListItem", { name: val }),
  },
});
