<template>
  <div class="buy">
    <div>
      <div class="container">
        <div class="flex p-12 md-p-32 lg-p-48">
          <div class="sidebar-left" v-if="device === 'desktop'">
            <div class="sidebar-nav">
              <div class="sidebar-nav-item i-mb-0">
                <h2><router-link to="/mine">个人中心</router-link></h2>
              </div>
              <div class="sidebar-nav-item">
                <h2>常用管理</h2>
                <ul class="text-sm">
                  <li><router-link to="/mine/treasure">我的藏品</router-link></li>
                  <li><router-link to="/mine/gift">我的礼物</router-link></li>
                  <li><router-link to="/mine/gift_management">赠与管理</router-link></li>
                </ul>
              </div>
              <div class="sidebar-nav-item">
                <h2>社交数据</h2>
                <ul class="text-sm">
                  <li><router-link to="/mine/attention/follow">我的关注</router-link></li>
                  <li><router-link to="/mine/attention/fans">我的粉丝</router-link></li>
                  <li><router-link to="/mine/collect">我喜欢的</router-link></li>
                </ul>
              </div>
              <div class="sidebar-nav-item">
                <h2>我的订单</h2>
                <ul class="text-sm">
                  <li><router-link to="/mine/buy">我买到的</router-link></li>
                  <li><router-link to="/mine/release">我发布的</router-link></li>
                  <li><router-link to="/mine/sold">我卖出的</router-link></li>
                </ul>
              </div>
              <div class="sidebar-nav-item">
                <h2>支付管理</h2>
                <ul class="text-sm">
                  <li><router-link to="/mine/wallet">支付总览</router-link></li>
                  <li><router-link to="/mine/wallet/bank">银行卡绑定</router-link></li>
                </ul>
              </div>
              <div class="sidebar-nav-item">
                <h2>设置管理</h2>
                <ul class="text-sm">
                  <li><router-link to="/mine/setting">个人设置</router-link></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="sidebar-right flex-1 px-0 md-px-32 lg-px-48">
            <div class="content">
              <van-tabs v-model="active" @click="onClick">
                <van-tab title="全部">
                  <div class="py-12 md-p-24">
                    <GoodsItem></GoodsItem>
                  </div>
                </van-tab>
                <van-tab title="待支付">
                  <div class="py-12 md-p-24">
                    <GoodsItem></GoodsItem>
                  </div>
                </van-tab>
                <van-tab title="已完成">
                  <div class="py-12 md-p-24">
                    <GoodsItem></GoodsItem>
                  </div>
                </van-tab>
                <van-tab title="已取消">
                  <div class="py-12 md-p-24">
                    <GoodsItem></GoodsItem>
                  </div>
                </van-tab>
              </van-tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex' 
import GoodsItem from '@/components/goodsItem/Item'
export default {
  components: { GoodsItem },
  data () {
    return {
      active: 0
    }
  },
  computed: {
    ...mapGetters(['device', 'userinfo', 'username'])
  },
  methods: {
    onClick (name, title) {
      console.log(name, title)
    }
  }
}
</script>

<style lang="less" scoped>
.buy /deep/.van-tabs__wrap {
  width: 350px;
}

@media (max-width: 768px) {
  .buy /deep/.van-tabs__wrap {
    width: 100%;
  }
}
</style>
