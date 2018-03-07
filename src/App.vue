<script>
import MainHeader from "./components/MainHeader"

const navLinks = [
  {
    label: "Home"
  },
  {
    label: "CV"
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
    "main-header": MainHeader
  }
}
</script>

<template>
  <div id="app">
    <main-header :navLinks="navLinks" />
    Welcome to Joseph Kim's website!!! Please hold as we undergo construction <span><img alt="ðŸ™‚" class="_1ift _2560 img" src="https://static.xx.fbcdn.net/images/emoji.php/v9/z4c/1/16/1f642.png" /></span>
    <div v-for="_ in Array(100)">
      Lorem Ipsum
    </div>
  </div>
</template>

<style>
#app {
  font-family: 'Assistant', Helvetica, Arial, sans-serif;
  font-weight: 200;
}
</style>
