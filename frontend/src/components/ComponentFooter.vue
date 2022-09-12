<template>
  <footer class="p-dock p-dock-bottom">
    <a class="p-dock-bottom">Team Pet Project {{ year }}</a>
    <Dock :model="items">
      <template #item="{ item }">
        <a :href="item.link">{{ item.name }}</a>
      </template>
    </Dock>
  </footer>
</template>

<script>
export default {
  //name: "ComponentFooter",
  data() {
    return {
      year: new Date().getFullYear(),
      items: [
        {
          name: "Oleksiy",
          link: "https://github.com/AlekseyGusar",
        },
        {
          name: "Andriy",
          link: "https://github.com/Rockwell2022",
        },
        {
          name: "Serhii",
          link: "https://github.com/KarunaGray",
        },
        {
          name: "Oleksiy",
          link: "https://github.com/hristinson",
        },
      ],
    };
  },
};
</script>
<style>
.p-dock {
  position: relative !important;
}
.p-dock-bottom {
  margin: 1em 0.5em;
}
</style>
