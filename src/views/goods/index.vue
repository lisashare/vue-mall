<template>
  <div>
    goods {{ id }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: ''
    }
  },
  watch: {
    $route () {
      this.id = this.$route.query.id
    }
  },
  created () {
    this.id = this.$route.query.id
  }
}
</script>

<style scoped>
</style>
