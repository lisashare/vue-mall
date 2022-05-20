<template>
  <div class="module-title">
    <h2 class="text-center text-lg">{{ title }}</h2>
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

<style lang="less" scoped>
.module-title {
  .rem-tblr(padding, 36, 0);
}
</style>
