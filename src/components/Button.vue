<template>
  <router-link
    v-if="link"
    :to="link"
    class="button"
  >
    {{ text }}
  </router-link>
  <button v-else>
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: null,
    },
  },
};
</script>

<style>
</style>
