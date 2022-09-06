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
<<<<<<< HEAD
  data() {
    return { items: [] };
  },
  created() {
    const root = "https://swapi.dev/api/";
    this.items.push({
      label: `Home`,
      icon: "pi pi-fw pi-box",
      url: `/`,
    });
    axios.get(root, {}, {}).then((res) => {
      Object.entries(res.data).forEach(([key, value]) => {
        let nameOfCategory = key.charAt(0).toUpperCase() + key.slice(1);
        this.items.push({
          label: nameOfCategory,
          icon: "pi pi-fw pi-box",
          url: `/${key}`,
        });
      });
    });
=======
  created() {},
  computed: {
    items() {
      return routers.options.routes;
    },
>>>>>>> e9b6f70a5bc889b9a0880c22f2571f5e0daa2832
  },
};
</script>

<style>
.style {
  margin-right: "auto";
}
</style>
