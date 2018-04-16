<template>
  <div id="app-header">
    <div class="ui basic inverted segment header">
      <div class="ui container">
        <div class="ui inverted secondary pointing huge menu" v-observe-visibility="fixMenu">
          <router-link
            v-for="link of navLinks"
            :to="link.route"
            :key="link.route"
            class="item"
          >
            {{ link.label }}
          </router-link>
        </div>
      </div>
    </div>



    <transition
      name="fixed-header-transition"
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOutUp"
    >
      <div v-if="fixed" class="ui huge menu fixed">
        <div class="ui container">
          <router-link
            v-for="link of navLinks"
            :to="link.route"
            :key="link.route"
            class="item"
          >
            {{ link.label }}
          </router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  props: ["navLinks"],
  data: function() {
    return {
      fixed: false
    }
  },
  methods: {
    fixMenu(isVisible, entry) {
      this.fixed = !isVisible
    }
  }
}
</script>

<style>
#app-header .header {
  padding-top: 0;
  padding-bottom: 0;
}
#app-header .menu {
  font-family: 'Assistant', Helvetica, Arial, sans-serif;
}
</style>
