<template>
  <div>
    <div v-if="preloader">loading...</div>
  </div>
</template>

<script>
export default {
  name: "PreLoader",
  props: {
    preloader: {
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped></style>
