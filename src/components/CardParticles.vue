<script>
const particle = function(size, canvasDimensions) {
  this.radius = Math.random() * (size * .25) + (size * .75)
  this.vr = Math.random() * size / 700 // NOTE need to change this number
  this.sizeIncreasing = true

  this.x = Math.random() * canvasDimensions.w
  this.y = Math.random() * canvasDimensions.h

  // NOTE skipping position checks - canvas and other particles

  this.vx = Math.random()-0.5
  this.vy = Math.random()-0.5
}

const animate = function(cardArray, maxSize, speed, ctx, canvasDimensions, eventValues) {
  // Updating particles
  for (let i = 0; i < cardArray.length; i++) {
    const card = cardArray[i]

    card.x += card.vx * speed
    card.x += card.vy * speed

    if (card.sizeIncreasing) {
      if (card.radius >= maxSize) {
        card.sizeIncreasing = false
      }
      card.radius += card.vr
    } else {
      if (card.radius <= maxSize * .75) {
        card.sizeIncreasing = true
      }
      card.radius -= card.vr
      if (card.radius < 0) {
        card.radius = 0
      }
    }

    // TODO implement ways to keep the cards on the page

    const eventDistance = maxSize * 5 // NOTE this number is bound to need changing
    const dxMouse = card.x - eventValues.mouseX
    const dyMouse = card.y - eventValues.mouseY
    const mouseDistance = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse)
    const ratio = 1 - mouseDistance / eventDistance

    card.colour = null
    if (mouseDistance <= eventDistance) {
      card.eventRadius = card.radius + (maxSize * ratio) // NOTE might want to change the maths
      if (mouseDistance <= card.eventRadius) {
        card.colour = "rgba(200, 200, 200, .7)"
      }
    }

    if (eventValues.status == "mouseleave") {
      card.eventRadius = null
    }

    // TODO implement interactions between particles
  }


  ctx.clearRect(0, 0, canvasDimensions.w, canvasDimensions.h)

  // Drawing particles
  for (let i = 0; i < cardArray.length; i++) {
    const card = cardArray[i]

    let radius = card.eventRadius ? card.eventRadius : card.radius

    ctx.fillStyle = card.colour ? card.colour : "rgba(0, 0, 0, 1)"
    ctx.beginPath()
    ctx.arc(card.x, card.y, radius, 0, Math.PI * 2, false)
    ctx.closePath()
    ctx.fill()
  }

  requestAnimationFrame(function() {animate(cardArray, maxSize, speed, ctx, canvasDimensions, eventValues)})
}

const setEventListeners = function(canvas, eventValues) {
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
}

export default {
  name: 'CardParticles',
  props: ["myCards"],
  data: function() {
    return {
      maxSize: 40,
      speed: 0.2,
      eventValues: {}
    }
  },
  mounted: function() {
    const myCards = this.myCards
    const maxSize = this.maxSize
    const speed = this.speed
    const eventValues = this.eventValues
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    const canvasWidth = canvas.width
    const canvasHeight = canvas.height

    setEventListeners(canvas, eventValues)

    // NOTE cardArray will one day need to be populated by cards
    const cardArray = []
    for (let i = 0; i < myCards.length; i++) {
      cardArray.push(new particle(maxSize, { w: canvasWidth, h: canvasHeight }))
    }

    animate(cardArray, maxSize, speed, ctx, { w: canvasWidth, h: canvasHeight }, eventValues)
  }
}
</script>

<template>
  <canvas id="canvas" width="1000" height="400" />
</template>

<style>
#canvas {
}
</style>
