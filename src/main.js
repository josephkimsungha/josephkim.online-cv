// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import VueObserveVisibility from "vue-observe-visibility"
import App from "./App"
import router from "./routes"

Vue.config.productionTip = false
Vue.use(VueObserveVisibility)

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App />",
  router
})
