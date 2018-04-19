<template>
  <div id="app">
    <app-sidebar :navLinks="navLinks" />
    <div class="pusher">
      <app-header :navLinks="navLinks" />
      <div class="computer hidden only">
        <button class="right attached ui left floated icon button" id="sidebar-button">
          <i class="bars icon"></i>
        </button>
      </div>
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

<script>
import AppHeader from "./components/AppHeader"
import AppSidebar from "./components/AppSidebar"

const navLinks = [
  {
    label: "Home",
    route: "/"
  },
  {
    label: "Employment History",
    route: "/pastjobs"
  },
  {
    label: "Volunteering",
    route: "/volunteering"
  },
  {
    label: "Education",
    route: "/education"
  },
  {
    label: "Skills",
    route: "/skills"
  },
  {
    label: "Achievements",
    route: "/achievements"
  },
  {
    label: "Referees",
    route: "/referees"
  },
  {
    label: "Get in Touch",
    route: "/contact"
  }
]

export default {
  name: "App",
  data: function() {
    return {
      navLinks
    }
  },
  mounted: function() {
    $("#app-sidebar").sidebar({
      transition: "slide along",
      mobileTransition: "slide along",
      scrollLock: true,
    }).sidebar("attach events", "#sidebar-button").sidebar("attach events", "#app-sidebar .item")
  },
  components: {
    "app-header": AppHeader,
    "app-sidebar": AppSidebar
  }
}
</script>

<style>
#app {
  font-family: "Assistant", Helvetica, Arial, sans-serif;
  font-weight: 200;
}

#sidebar-button {
  top: 20px;
  position: fixed;
  z-index: 1;
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

/* Mobile */
@media only screen and (max-width: 767px) {
  [class*="mobile hidden"],
  [class*="tablet only"]:not(.mobile),
  [class*="computer only"]:not(.mobile),
  [class*="or lower hidden"] {
    display: none !important;
  }
}

/* Tablet / iPad Portrait */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  [class*="mobile only"]:not(.tablet),
  [class*="tablet hidden"],
  [class*="computer only"]:not(.tablet),
  [class*="or lower hidden"]:not(.mobile) {
    display: none !important;
  }
}

/* Computer / Desktop / iPad Landscape */
@media only screen and (min-width: 992px) {
  [class*="mobile only"]:not(.computer),
  [class*="tablet only"]:not(.computer),
  [class*="computer hidden"],
  [class*="or lower hidden"]:not(.tablet):not(.mobile) {
    display: none !important;
  }
}
</style>
