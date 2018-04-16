<template>
  <canvas id="canvas" />
</template>

<script>
const particle = function(size, canvas) {
  this.radius = Math.random() * (size * .25) + (size * .75)
  this.vr = Math.random() * size / 700 // NOTE need to change this number
  this.sizeIncreasing = true

  this.x = Math.random() * canvas.width
  this.y = Math.random() * canvas.height

  // NOTE skipping position checks - canvas and other particles

  this.vx = Math.random() - 0.5
  this.vy = Math.random() - 0.5
}

export default {
  name: 'CardParticles',
  props: ["myCards"],
  data: function() {
    return {
      cardArray: [],
      eventValues: {},
      canvas: null,
      ctx: null,

      maxSize: null, // responsively set through resetSizes()
      speed: 2,
      linkDistance: null, // responsively set through resetSizes()
      linkMaxOpacity: .7
    }
  },
  methods: {
    resetSizes() {
      this.maxSize = Math.min(this.canvas.width, this.canvas.height) / 20
      this.linkDistance = Math.min(this.canvas.width, this.canvas.height) / 1.5
    },

    resetCardArray() {
      // NOTE cardArray will one day need to be populated by cards
      this.cardArray.length = 0
      for (let i = 0; i < this.myCards.length; i++) {
        this.cardArray.push(new particle(this.maxSize, this.canvas))
      }
    },

    setEventListeners() {
      const { canvas, eventValues, resetSizes, resetCardArray } = this

      window.addEventListener("resize", function(e) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight - document.getElementById("app-header").offsetHeight

        resetSizes()
        resetCardArray()
      })
      canvas.addEventListener("mousemove", function(e) {
        eventValues.mouseX = e.offsetX || e.clientX
        eventValues.mouseY = e.offsetY || e.clientY
        eventValues.status = "mousemove"
      })
      canvas.addEventListener("mouseleave", function(e) {
        eventValues.mouseX = null;
        eventValues.mouseY = null;
        eventValues.status = "mouseleave"
      })
    },

    linkParticles(first, second) {
      const { linkDistance, linkMaxOpacity, ctx } = this

      const dx = first.x - second.x
      const dy = first.y - second.y
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist < linkDistance) {
        const opacity = linkMaxOpacity * (1 - dist / linkDistance)
        ctx.strokeStyle = `rgba(0, 0, 0, ${opacity})`
        ctx.lineWidth = 1 // NOTE might need changing

        ctx.beginPath()
        ctx.moveTo(first.x, first.y)
        ctx.lineTo(second.x, second.y)
        ctx.stroke()
        ctx.closePath()
      }
    },

    animate() {
      const { cardArray, canvas, ctx, eventValues, ...options } = this
      // Updating particles
      for (let i = 0; i < cardArray.length; i++) {
        const card = cardArray[i]

        // Particle movement
        card.x += card.vx * options.speed
        card.y += card.vy * options.speed

        // Particle size
        if (card.sizeIncreasing) {
          if (card.radius >= options.maxSize) {
            card.sizeIncreasing = false
          }
          card.radius += card.vr
        } else {
          if (card.radius <= options.maxSize * .75) {
            card.sizeIncreasing = true
          }
          card.radius -= card.vr
          if (card.radius < 0) {
            card.radius = 0
          }
        }

        // Particle-mouse interaction
        const eventDistance = options.maxSize * 5 // NOTE this number is bound to need changing
        const dxMouse = card.x - eventValues.mouseX
        const dyMouse = card.y - eventValues.mouseY
        const mouseDistance = card.x && card.y ? Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse) : null
        const ratio = 1 - mouseDistance / eventDistance

        card.colour = null
        if (mouseDistance && mouseDistance <= eventDistance) {
          card.eventRadius = card.radius + (options.maxSize * ratio) // NOTE might want to change the maths
          if (mouseDistance <= card.eventRadius) {
            card.colour = "rgba(200, 200, 200, .7)"
          }
        }

        if (eventValues.status == "mouseleave" || mouseDistance > eventDistance) {
          card.eventRadius = null
        }

        // Particle-canvas interaction
        const radius = card.eventRadius ? card.eventRadius : card.radius
        if (card.x - radius < 0) {
          card.vx = Math.abs(card.vx)
        } else if (card.x + radius > canvas.width) {
          card.vx = -Math.abs(card.vx)
        }
        if (card.y - radius < 0) {
          card.vy = Math.abs(card.vy)
        } else if (card.y + radius > canvas.height) {
          card.vy = -Math.abs(card.vy)
        }
      }


      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Drawing particles
      for (let i = 0; i < cardArray.length; i++) {
        const card = cardArray[i]

        const radius = card.eventRadius ? card.eventRadius : card.radius

        ctx.fillStyle = card.colour ? card.colour : "rgba(0, 0, 0, 1)"
        ctx.beginPath()
        ctx.arc(card.x, card.y, radius, 0, Math.PI * 2, false)
        ctx.closePath()
        ctx.fill()

        // Particle-particle interaction
        for (let j = i + 1; j < cardArray.length; j++) {
          const card2 = cardArray[j]

          this.linkParticles(card, card2)
        }
      }

      requestAnimationFrame(this.animate)
    }
  },
  mounted: function() {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight - (document.getElementById("app-header").offsetHeight || document.getElementById("app-header").clientHeight)

    this.setEventListeners()

    this.resetSizes()
    this.resetCardArray()

    this.animate()
  }
}
</script>

<style>
#canvas {
}
</style>
