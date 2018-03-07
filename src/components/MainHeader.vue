<script>
export default {
  name: 'MainHeader',
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

<template>
  <div id="main-header">
    <div class="ui basic inverted segment header">
      <div class="ui container">
        <div class="ui inverted secondary pointing menu" v-observe-visibility="fixMenu">
          <a v-for="link of navLinks" class="item">{{ link.label }}</a>
        </div>
      </div>
    </div>

    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOutUp"
    >
      <div v-if="fixed" class="ui menu fixed">
        <div class="ui container">
          <a v-for="link of navLinks" class="item">{{ link.label }}</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<style>
#main-header .header {
  padding-top: 0;
  padding-bottom: 0;
  margin-bottom: 1em;
}
</style>
