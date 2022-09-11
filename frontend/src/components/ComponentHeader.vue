<template>
  <div>
    <Menubar :model="items">
      <template #end>
        <p v-if="$store.state.data"> Welcome {{ }}! Turn to the Dark side!</p>
        <p v-if="!$store.state.data">May the Force be with you...</p>
      </template>
    </Menubar>
  </div>
</template>

<script>
import routers from "../plugins/router";
export default {
  created() {},
  computed: {
    items() {
      return routers.options.routes;
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
