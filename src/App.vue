<template>
  <ArticlePage />
</template>

<script>
import ArticlePage from "./components/ArticlePage.vue";
export default {
  name: "App",
  components: {
    ArticlePage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
