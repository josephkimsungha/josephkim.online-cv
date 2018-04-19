import Vue from 'vue'
import VueRouter from 'vue-router'
import Achievements from "./Achievements"
import Contact from "./Contact"
import Education from "./Education"
import Home from "./Home"
import PastJobs from "./PastJobs"
import Referees from "./Referees"
import Skills from "./Skills"
import Volunteering from "./Volunteering"

const CV = { template: '<div class="ui container">This is the cv page</div>' }

Vue.use(VueRouter)

export default new VueRouter({
  mode: "history",
  linkActiveClass: "",
  linkExactActiveClass: "active",
  routes: [
    { path: '/', name: "Home", component: Home },
    { path: '/pastjobs', name:"PastJobs", component: PastJobs },
    { path: '/volunteering', name:"Volunteering", component: Volunteering },
    { path: '/education', name:"Education", component: Education },
    { path: '/skills', name:"Skills", component: Skills },
    { path: '/achievements', name:"Achievements", component: Achievements },
    { path: '/referees', name:"Referees", component: Referees },
    { path: '/contact', name:"Contact", component: Contact }
  ]
})
