import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Readme from "../views/Readme.vue";
import Login from "../views/Login.vue";
import NotFound from "../views/Notfound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/project/:uri",
    name: "readme",
    component: Readme
  },
  {
    path :'*',
    component:NotFound
}
];

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
