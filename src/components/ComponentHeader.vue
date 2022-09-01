<template>
  <div>
    <Menubar :model="items">
      <template #end>May the Force be with you</template>
    </Menubar>
  </div>
</template>

<script>
import routers from "../plugins/router";
export default {
  created() {},
  computed: {
    items() {
      console.log(routers);
      // routers
      return [
        {
          label: `Home`,
          icon: "pi pi-fw pi-box",
          to: `/`,
        },
      ];
    },
  },
};
</script>

<style>
.style {
  margin-right: "auto";
}
</style>
