<template>
  <div>
    {{ type }}
  </div>
</template>

<script>
export default {
  data () {
    return {
     type: 'fans'
    }
  },
  mounted () {
    this.type = this.$route.params.type
  }
}
</script>

<style scoped>
</style>
