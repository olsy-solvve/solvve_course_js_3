<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<template>
  <footer>
    {{ year }}
  </footer>
</template>

<style></style>
