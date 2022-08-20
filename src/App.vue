<script setup>
import ComponentHeader from "./components/ComponentHeader.vue";
import ComponentFooter from "./components/ComponentFooter.vue";
</script>

<template>
  <div>
    <ComponentHeader></ComponentHeader>
    <router-view></router-view>
    <ComponentFooter></ComponentFooter>
  </div>
</template>

<style scoped></style>
