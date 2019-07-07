import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  // mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      redirect: "/"
    },
    {
      path: "/",
      name: "home",
      meta: {
        id: "home"
      },
      component: Home
    },
    {
      path: "/about",
      name: "about",
      meta: {
        id: "about"
      },
      component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/works",
      component: () => import(/* webpackChunkName: "work" */ "./views/Works.vue"),
      children: [
        {
          path: "/",
          meta: {
            id: "works"
          },
          component: () => import(/* webpackChunkName: "work" */ "./views/works/home.vue")
        },
        {
          path: "/works/f2e/:id",
          meta: {
            id: "works"
          },
          component: () => import(/* webpackChunkName: "f2e" */ "./views/works/F2E.vue")
        }
      ]
    }
  ]
});
