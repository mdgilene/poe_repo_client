<template>
  <div>
    <h1>{{ build.name }}</h1>
    <h3>Author: {{ build.author.username }}</h3>

    <h2>Introduction</h2>
    <p>{{ build.introduction_text }}</p>

    <h2>Cost</h2>
    <p>{{ build.cost_text }}</p>

    <h2>Items</h2>
    <p>{{ build.item_text }}</p>
    <div v-for="item in build.items" :key="item.id">{{ item }}</div>

    <h2>Gems</h2>
    <p>{{ build.gem_text || "This doesn't exist yet in the build model" }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      build: {}
    };
  },
  async mounted() {
    const { data } = await this.$http.get(
      `http://localhost:5000/api/builds/${this.$route.params.id}`
    );
    this.build = data;
  }
};
</script>

<style></style>
