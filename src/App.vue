<template>
  <BaseCounter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseCounter from "./components/BaseCounter.vue";

export default defineComponent({
  name: "App",
  components: {
    BaseCounter,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* XSTATE */
iframe {
  width: 100%;
  height: 100vh;
}
</style>
