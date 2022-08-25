<template>
  <div>
    <Menubar :model="items">
      <template #end>May the Force be with you</template>
    </Menubar>
  </div>
</template>

<script>
import axios from "axios";
export default {
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
  },
};
</script>

<style>
.style {
  margin-right: "auto";
}
</style>
