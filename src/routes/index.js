import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "./Home"

const CV = { template: '<div>This is the cv page</div>' }

Vue.use(VueRouter)

export default new VueRouter({
  mode: "history",
  linkActiveClass: "",
  linkExactActiveClass: "active",
  routes: [
    { path: '/', name: "Home", component: Home },
    { path: '/cv', name:"CV", component: CV }
  ]
})
