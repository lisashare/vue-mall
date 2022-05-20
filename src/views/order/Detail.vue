<template>
  <div class="order-detail container py-48 md-py-24">
    <div class="row flex-col md-flex-row">
      <div class="col col-12 col-md-5">
        <div class="order-detail-image">
        <img src="@/assets/images/1.png" alt=""></div>
      </div>
      <div class="col col-12 col-md-7">
        <div class="p-12 md-py-24 w-full">
          <div class="order-detail-id">DD#65651661651655</div>
          <div class="order-detail-title text-lg font-bold mb-12">标题{{ id }}</div>
          <div class="order-detail-price text-lg font-bold mb-24">￥5000.00</div>
          <div class="order-detail-time">
            <span>订单时间：</span>
            <span>2022-03-16 15:30</span>
          </div>
          <div class="order-detail-paytime">
            <span>支付时间：</span>
            <span>2022-03-16 15:30</span>
          </div>
          <div class="order-detail-contractadres">
            <span>合约地址：</span>
            <span class="break-words">32esfdsssd82823jzjkjkzsdjkakjasdaksjaksdadjkadad</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
     id: ''
    }
  },
  mounted () {
    this.id = this.$route.params.id
    console.log(this.id)
  }
}
</script>

<style lang="less" scoped>
.order-detail {}
.order-detail-image {
  margin: auto;
  width: 327px;
  height: 327px;
  background-color: #ddd;
  border-radius: 5px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

</style>
