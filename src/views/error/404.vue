<template>
  <div class="errPage-container">
    <van-empty image="error" :image-size="300">
      <p class="text-md">{{ 404 }}</p>
    </van-empty>
  </div>
</template>

<script>
export default {
  name: 'Page404',
  data () {
    return {}
  }
}
</script>

<style scoped>
</style>
