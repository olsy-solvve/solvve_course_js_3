<script>
export default {
  data() {
    return {
      menuItems: [
        { title: "Home", link: "/", icon: "" },
        { title: "My Dashboard", link: "/dashbord", icon: "" },
        { title: "Shop", link: "/shop", icon: "" },
      ],
      count: 0,
    };
  },

  mounted() {
    setTimeout(() => {
      this.menuItems.push({ title: "Shop2", link: "/shop2", icon: "" });
    }, 5000);
  },
};
</script>

<template>
  <header>
    <nav>
      <ul>
        <li v-for="(item, index) in menuItems" :key="index" @click="count++">
          {{ item.title }}
        </li>
      </ul>
    </nav>

    <b>{{ count }}</b>
  </header>
</template>

<style scoped>
ul {
  background-color: red;
}
</style>
