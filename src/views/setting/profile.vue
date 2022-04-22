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
          <div class="content">profile</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex' 
export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['device', 'userinfo', 'username'])
  },
  methods: {}
}
</script>

<style scoped>
</style>
