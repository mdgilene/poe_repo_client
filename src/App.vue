<template>
  <div id="app">
    <Navbar />
    <router-view id="content" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto");
@import "style/index.scss";

* {
  margin: 0;
  padding: 0;
  font-family: "Roboto", "sans-serif";
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
}
</style>
