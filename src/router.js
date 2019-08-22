import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Contact from "./views/Contact.vue";
import Products from "./views/Products.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "index",
      component: Index
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/products",
      name: "products",
      component: Products
    }
  ]
});
