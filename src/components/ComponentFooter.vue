<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
      develepers: "develeper.name",
    };
  },
};
</script>

<template>
  <footer class = "footerTeams">
    Teams Pet Project    {{ year }}
  </footer>
</template>

<style scoped></style>
