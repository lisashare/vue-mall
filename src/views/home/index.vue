<template>
  <div class="home">
    <Swiper />
    <div class="module-one container py-24 md-py-48">
      <h2 class="module-title md-text-xl text-md text-center py-12">产品</h2>
      <div class="pt-24 md-pt-48">
        <GroupSwiper :slides="slides"></GroupSwiper>
      </div>
    </div>
    <div class="module-two container py-24 md-py-48">
      <h2 class="module-title md-text-xl text-md text-center py-12">艺术家</h2>
      <div class="py-24 md-py-48">
        <ResponseSwiper />
      </div>
    </div>
    <div class="module-three py-24 md-py-48">
      <div class="container row justify-around text-white text-center">
        <div class="col-12 col-md-3 p-24 md-p-32">
          <div class="panel-title text-lg mb-20">
            版权确权及溯源
          </div>
          <div class="panel-desc text-sm opacity--hinted">
            通过区块链技术来解决数字艺术品版权和溯源的问题，通过智能合约与业务应用层内实现逻辑处理和数据整合，让版权归属与收入分配的透明度达到新的台阶
          </div>
        </div>
        <div class="col-12 col-md-3 p-24 md-p-32">
          <div class="panel-title text-lg mb-20">
            为行业降本增效
          </div>
          <div class="panel-desc text-sm opacity--hinted">
            有效提高权属问题产生版权纠纷的解决效率，因版权区块链证据公信力强，可以减少大量诉讼周期和相关费用，普惠每一位创作者
          </div>
        </div>
        <div class="col-12 col-md-3 p-24 md-p-32">
          <div class="panel-title text-lg mb-20">
            透明式版权保护
          </div>
          <div class="panel-desc text-sm opacity--hinted">
            版权保护更加清晰透明，集权益存证、作品确权、数量控制以及盗版防范为一体，让原创者“不出门”实现版权保护
          </div>
        </div>
      </div>
    </div>
    <div class="module-four container py-24 md-py-48">内容four</div>
  </div>
</template>

<script>
// @ is an alias to /src
import Swiper from './components/Swiper'
import GroupSwiper from './components/GroupSwiper'
import ResponseSwiper from './components/ResponseSwiper'
export default {
  name: 'Home',
  components: { Swiper, GroupSwiper, ResponseSwiper },
  data () {
    return {
      slides: [
        {
          id: 1,
          cover: require('@/assets/images/t6_16x9.png')
        },
        {
          id: 2,
          cover: require('@/assets/images/t5_16x9.png')
        },
        {
          id: 3,
          cover: require('@/assets/images/t6_16x9.png')
        },
        {
          id: 4,
          cover: require('@/assets/images/t5_16x9.png')
        }
      ]
    }
  },
  mounted () {}
}
</script>

<style lang="less" scoped>


.module-three {
  background: url(../../assets/images/2.png) no-repeat center fixed;
  background-size: cover;
  position: relative;
  z-index: 0;
}

.module-three::before {
  content: "";
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: -1;
  background: linear-gradient(75deg, rgba(22, 37, 103, 79%) 10%, rgba(230, 2, 100, 68%));
}

.module-title {
  position: relative;
  color: var(--theme-color);
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 40px;
    margin-left: -20px;
    height: 4px;
    background-color: var(--setting-theme);
    border-radius: 3px;
  }
}
</style>
