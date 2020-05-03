<template>
  <div id="app">
    <v-button
      text="wow"
      link="/"
    />
    <v-button
      text="two"
      link="/two"
    />
    <v-button
      text="three"
    />
    <router-view />
  </div>
</template>

<script>
import Button from "./components/Button";

export default {
  name: "App",
  components: {
    "v-button": Button,
  },
};
</script>

<style>
</style>
