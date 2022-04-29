<template>
  <div class="module-title">
    <h2 class="text-center">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
     
    }
  }
}
</script>

<style scoped>
</style>
