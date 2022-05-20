<template>
  <div>
    <div class="order-item flex" @click="linkDetail">
      <div class="order-image mr-12 md-mr-24"><img src="@/assets/images/1.png" alt=""></div>
      <div class="order-right flex-1">
        <div class="order-id text-sm mb-12">DD#65651661651655</div>
        <div class="order-title text--1-lines font-bold mb-8">标题</div>
        <div class="order-price font-bold mb-12">￥5000.00</div>
        <div class="flex justify-between text-sm">
          <div class="order-time flex-none">2022-03-16 15:30</div>
          <div class="order-status">已完成</div>
          <!-- <div class="order-status">待支付</div>
          <div class="order-status">已取消</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
     
    }
  },
  methods: {
    linkDetail () {
      this.$router.push('/order/' + 1)
    }
  }
}
</script>

<style lang="less" scoped>
.order-item {
  width: 100%;
}

.order-image {
  width: 120px;
  background: #ddd;
  border-radius: 5px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
