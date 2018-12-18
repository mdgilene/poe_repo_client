import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Build from "@/views/Build.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/view-build/:id",
      name: "build",
      component: Build
    }
  ]
});
