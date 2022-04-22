<template>
  <div>
    <div>
      <div class="container flex">
        <div class="sidebar-left" v-if="device === 'desktop'">
          <div>
            <router-link to="/mine">个人中心</router-link>
          </div>
          <div>
            <router-link to="/mine/attention/follow">我的关注</router-link>
          </div>
          <div>
            <router-link to="/mine/attention/fans">我的粉丝</router-link>
          </div>
          <div>
            <router-link to="/mine/collect">我的收藏</router-link>
          </div>
          <div>
            <router-link to="/mine/gift">我的礼物</router-link>
          </div>
          <div>
            <router-link to="/mine/gift">赠与管理</router-link>
          </div>
          <div>
            <router-link to="/mine/treasure">我的藏品</router-link>
          </div>
          <div>
            <router-link to="/mine/wallet">支付管理</router-link>
          </div>
          <div>
            <router-link to="/mine/setting">个人设置</router-link>
          </div>
          <div>
            <router-link to="/mine/buy">我买到的</router-link>
          </div>
           <div>
            <router-link to="/mine/release">我发布的</router-link>
          </div>
           <div>
            <router-link to="/mine/sold">我卖出的</router-link>
          </div>
        </div>
        <div class="sidebar-right flex-1">
          <div class="user-wallet">
            <div class="flex justify-between">
              <div>我的钱包</div>
              <div class="cursor-pointer" @click="handleShowEye">
                <van-icon name="eye-o" v-show="showEye" />
                <van-icon name="closed-eye" v-show="!showEye" />
              </div>
            </div>
            <div>
              <div class="content">
                <div class="flex">
                  <div class="flex-1 text-center">
                    <p>金额</p>
                    <div v-text="showEye ? price:'***'"></div>
                  </div>
                  <div class="flex-1 text-center">
                    <p>金额</p>
                    <div v-text="showEye ? price:'***'"></div>
                  </div>
                  <div class="flex-1 text-center">
                    <p>金额</p>
                    <div v-text="showEye ? price:'***'"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex' 
export default {
  data () {
    return {
      showEye: false,
      price: '￥0.00'
    }
  },
  computed: {
    ...mapGetters(['device', 'userinfo', 'username'])
  },
  methods: {
    handleShowEye () {
      this.showEye = !this.showEye
    }
  }
}
</script>

<style scoped>
</style>
