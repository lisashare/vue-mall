<template>
  <div>
    订单信息 
    <van-stepper v-model="value" @change="onChange" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 1
    }
  },
  created () {
    this.id = this.$route.query.id
  },
  methods: {
    onChange () {
      console.log(this.value, 'change')
    }
  },
  watch: {
    $route () {
      this.id = this.$route.query.id
    }
  }
}
</script>

<style scoped>
</style>
