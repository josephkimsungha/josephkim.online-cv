<script>
import AppHeader from "./components/AppHeader"

const navLinks = [
  {
    label: "Home",
    route: "/"
  },
  {
    label: "CV",
    route: "/cv"
  }
]

export default {
  name: 'App',
  data: function() {
    return {
      navLinks
    }
  },
  components: {
    "app-header": AppHeader
  }
}
</script>

<template>
  <div id="app">
    <app-header :navLinks="navLinks" />

    <div class="ui container">
      <transition
        name="fixed-header-transition"
        enter-active-class="animated fadeInRight"
        leave-active-class="animated fadeOutLeft"
        mode="out-in"
      >
        <router-view />
      </transition>
    </div>
  </div>
</template>

<style>
#app {
  font-family: 'Assistant', Helvetica, Arial, sans-serif;
  font-weight: 200;
}

.fadeInRight {
  -webkit-animation: fadeInRight .5s;
  -moz-animation:    fadeInRight .5s;
  -o-animation:      fadeInRight .5s;
  animation:         fadeInRight .5s;
}

.fadeOutLeft {
  -webkit-animation: fadeOutLeft .5s;
  -moz-animation:    fadeOutLeft .5s;
  -o-animation:      fadeOutLeft .5s;
  animation:         fadeOutLeft .5s;
}
</style>
