<template>
  <button
    :style="cssVars"
    @mousemove="recordMouseCoords"
  >
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
  },
  data() {
    return {
      height: 0,
      mouseCoords: [0, 0],
      width: 0,
    };
  },
  computed: {
    cssVars() {
      const transformRotateX = this.mouseCoords[0] - (this.width / 2);
      const transformRotateY = (this.height / 2) - this.mouseCoords[1];
      return {
        "--mouse-x": this.mouseCoords[0],
        "--mouse-y": this.mouseCoords[1],
        "--hover-transform-rotate-x": transformRotateX,
        "--hover-transform-rotate-y": transformRotateY,
      };
    },
  },
  mounted() {
    const { scrollHeight, scrollWidth } = this.$el;
    this.height = scrollHeight;
    this.width = scrollWidth;
  },
  methods: {
    recordMouseCoords: function(event) {
      const thisEl = this.$el;
      this.mouseCoords = [
        event.pageX - thisEl.offsetLeft - 4,
        event.pageY - thisEl.offsetTop - 4,
      ];
    },
  },
};
</script>

<style scoped>
button {
  background-color: #393e41;
  border: 0;
  border-radius: 20px 12px;
  color: #e2c044;
  margin-inline-end: 12px;
  padding: 12px 16px;
  font: 500 16px/20px "Montserrat", sans-serif;
  transition: filter 0.5s ease 0s, transform 0.5s ease 0s;
}

button:hover {
  animation: hover 0.5s linear 0s 1 normal forwards;
  cursor: pointer;
  filter: brightness(125%) drop-shadow(2px 4px);
  transform: rotate3d(
    var(--hover-transform-rotate-y),
    var(--hover-transform-rotate-x),
    0, 15deg
  );
}

button:hover::before {
  --hover-before-border-width: 4px;
  --hover-before-padding: 4px;
  --hover-before-radius: calc(
    var(--hover-before-border-width) + var(--hover-before-padding)
  );
  border: var(--hover-before-border-width) #e2c04444 solid;
  border-radius: 2px;
  content: "";
  filter: brightness(150%) blur(8px);
  left: calc(var(--mouse-x) * 1px - var(--hover-before-radius));
  padding: var(--hover-before-padding);
  pointer-events: none;
  position: absolute;
  top: calc(var(--mouse-y) * 1px - var(--hover-before-radius));
  transform: rotateZ(45deg);
}
</style>
