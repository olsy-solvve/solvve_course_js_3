<script setup>
import ComponentHeader from "./components/ComponentHeader.vue";
import ComponentFooter from "./components/ComponentFooter.vue";
</script>

<template>
  <div class="container">
    <ComponentHeader></ComponentHeader>
    <router-view></router-view>
    <ComponentFooter></ComponentFooter>
  </div>
</template>
<style>
.container {
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>
