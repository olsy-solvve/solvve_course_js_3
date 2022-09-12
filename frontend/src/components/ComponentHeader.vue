<template>
  <div>
    <Menubar :model="items">
      <template #end>
        <p v-if="$store.state.data">Welcome User! Turn to the Dark side!</p>
        <p v-if="!$store.state.data">May the Force be with you...</p>
      </template>
    </Menubar>
  </div>
</template>

<script>
import routers from "../plugins/router";
export default {
  data() {
    return {
      username: localStorage.username,
    };
  },
  created() {},
  computed: {
    items() {
      return routers.options.routes.filter((item) => item.meta);
    },
  },
};
</script>

<style>
.style {
  margin-right: "auto";
}
.p-menubar {
  margin: 0 0.5em;
}
</style>
