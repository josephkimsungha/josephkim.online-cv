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

<template>
  <div id="home">
      Welcome to Joseph Kim's website!!! Please hold as we undergo construction <span><img alt="ðŸ™‚" class="_1ift _2560 img" src="https://static.xx.fbcdn.net/images/emoji.php/v9/z4c/1/16/1f642.png" /></span>

      <card-particles :myCards="myCards" />
    </div>
  </div>
</template>

<style>
#home {
}
</style>
