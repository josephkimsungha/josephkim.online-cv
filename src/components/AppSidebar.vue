<template>
  <div class="ui sidebar inverted vertical menu" id="app-sidebar">
    <router-link
      v-for="link of navLinks"
      :to="link.route"
      :key="link.route"
      class="item"
    >
      {{ link.label }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "AppSidebar",
  props: ["navLinks"]
}
</script>

<style>
#app-sidebar .menu {
  font-family: "Assistant", Helvetica, Arial, sans-serif;
}
</style>
