<template>
  <main>
    <div class="container">
      <h1 class="page-header">Browse Builds</h1>
      <div v-if="!loading">
        <div class="card" v-for="build in buildList" :key="build.id">
          <div class="card-header">
            <div>
              <h2>{{ build.name }}</h2>
              <h5>By: {{ build.author.username }}</h5>
            </div>
            <div class="score">
              <button @click="updoot(build.id)"><fa-icon icon="arrow-up"></fa-icon></button>
              <span>{{ build.score }}</span>
              <button @click="downdoot(build.id)"><fa-icon icon="arrow-down"></fa-icon></button>
            </div>
          </div>
          <div class="card-body build-info">
            <h4>Cost: {{ calculateCost(build) }}</h4>
            <h4>Dificulty: {{ "Beginner" }}</h4>
          </div>
          <!-- <div v-html="compileMarkdown(build.introduction_text)"></div> -->
        </div>
      </div>
      <fa-icon v-if="loading" class="loading-spinner" icon="spinner" size="4x"></fa-icon>
      <div v-if="error" class="well error">
        <fa-icon icon="exclamation" size="lg"></fa-icon>
        <span>{{ error }}</span>
      </div>
    </div>
  </main>
</template>

<script>
import marked from "marked";

export default {
  data() {
    return {
      buildList: [],
      loading: false,
      error: ""
    };
  },
  async mounted() {
    try {
      this.loading = true;
      const { data } = await this.$http.get("http://localhost:5000/api/builds/popular");
      this.loading = false;
      this.buildList = data.builds;
    } catch (err) {
      this.loading = false;
      this.error = "Could not fetch builds. Try again later.";
    }
  },
  methods: {
    compileMarkdown(text) {
      return marked(text, { sanitize: true });
    },
    calculateCost() {
      return "50ex";
    },
    updoot(id) {
      console.log("updoot build " + id);
    },
    downdoot(id) {
      console.log("downdoot build " + id);
    }
  }
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
  .card-header {
    display: flex;
    justify-content: space-between;

    .score {
      display: flex;
      flex-direction: column;
      align-items: center;

      button {
        cursor: pointer;
        color: inherit;
        background: none;
        border: none;
      }

      span {
        margin: 0.1rem 0;
      }
    }
  }
}

@keyframes spinner {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.loading-spinner {
  margin: 3rem auto;
  width: 100%;
  animation: spinner 1s linear infinite;
}
.error.well {
  display: flex;
  align-items: center;
  font-size: 1.2rem;
}
.fa-exclamation {
  margin-right: 1rem;
}
.page-header {
  margin-bottom: 1rem;
}
</style>
