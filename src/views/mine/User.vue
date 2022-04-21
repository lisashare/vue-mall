<template>
  <div>
        <div v-if="device === 'mobile'">
      <div class="container">
        <div class="mine">
          <div class="mine-info">
            <div class="avatar"><img :src="userinfo.avatar" alt=""></div>
            <div class="username">{{userinfo.username}}</div>
          </div>
          <div>
            <van-grid :column-num="3">
              <van-grid-item icon="photo-o" text="我的关注" to="/mine/attention/follow" />
              <van-grid-item icon="photo-o" text="我的粉丝" to="/mine/attention/fans" />
              <van-grid-item icon="photo-o" text="我的收藏" to="/mine/collect"/>
            </van-grid>
          </div>
          <div>
            <van-grid :column-num="3">
              <van-grid-item icon="photo-o" text="我的礼物" to="/mine/gift" />
              <van-grid-item icon="photo-o" text="赠与管理" to="/mine/gift" />
              <van-grid-item icon="photo-o" text="我的藏品" to="/mine/treasure" />
              <van-grid-item icon="photo-o" text="支付管理" to="/mine/wallet" />
              <van-grid-item icon="photo-o" text="个人设置" to="/mine/setting" />
            </van-grid>
          </div>
          <div class="mine-order">
            <van-grid :column-num="3">
              <van-grid-item icon="photo-o" text="我买到的" to="/mine/buy" />
              <van-grid-item icon="photo-o" text="我发布的" to="/mine/release" />
              <van-grid-item icon="photo-o" text="我卖出的" to="/mine/sold" />
            </van-grid>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="container">
        侧边栏
      </div>
    </div>
    <van-icon name="closed-eye" />
    <van-icon name="eye-o" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex' 
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['device', 'userinfo', 'username'])
  }
}
</script>

<style scoped>
</style>
