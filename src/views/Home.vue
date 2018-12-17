<template>
  <main>
    <div class="container">
      <h1>Browse Builds</h1>
      <div class="card" v-for="build in buildList" :key="build.id">
        <h2>{{build.name}}</h2>
        <h5>By: {{build.author.username}}</h5>
        <div class="build-info">
          <h4>Cost: {{calculateCost(build)}}</h4>
          <h4>Dificulty: {{"Beginner"}}</h4>
        </div>
        <!-- <div v-html="compileMarkdown(build.introduction_text)"></div> -->
      </div>
    </div>
  </main>
</template>

<script>
import marked from 'marked';

export default {
  data() {
    return {
      buildList: [],
    };
  },
  async mounted() {
    const { data } = await this.$http.get(
      'http://localhost:5000/api/users/admin/builds',
    );
    this.buildList = data;
  },
  methods: {
    compileMarkdown(text) {
      return marked(text, { sanitize: true });
    },
    calculateCost() {
      return '50ex';
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  padding-top: 1rem;
  overflow-y: auto;
}
.card {
  margin: 1rem;
  .build-info {
    color: #ffffff;
  }
}
</style>
