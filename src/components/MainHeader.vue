<script>
export default {
  name: 'MainHeader',
  props: ["navLinks"]
}
</script>

<template>
  <div id="main-header">
    <div class="ui basic inverted segment">
      <div class="ui container">
        <div class="ui inverted secondary pointing menu">
          <a v-for="link of navLinks" class="item">{{ link.label }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#main-header {
}
</style>
