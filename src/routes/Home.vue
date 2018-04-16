<template>
  <div id="home">
    <card-particles :myCards="myCards" />
  </div>
</template>

<script>
import CardParticles from "../components/CardParticles"

const myCards = new Array(20)

export default {
  name: 'Home',
  data: function() {
    return {
      myCards
    }
  },
  components: {
    "card-particles": CardParticles
  }
}
</script>

<style>
#home {
}
</style>
