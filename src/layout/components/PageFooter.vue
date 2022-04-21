<template>
  <div class="page__footer">
    <div v-if="device === 'mobile'">
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item>
          <span>自定义</span>
          <template #icon="props">
            <img :src="props.active ? icon.active : icon.inactive" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item icon="award-o">标签</van-tabbar-item>
        <van-tabbar-item icon="diamond-o">标签</van-tabbar-item>
        <van-tabbar-item icon="contact">我的</van-tabbar-item>
      </van-tabbar>
    </div>
    <footer v-else class="desktop bg-f7 text-sm py-48">
      <div class="container">
        <div class="row text-center">
          <div class="col">
            <div class="mb-24">
              <h3 class="text-md opacity--hinted">热点介绍</h3>
            </div>
            <div class="mb-12">
              <router-link to="/articles">新闻动态</router-link>
            </div>
          </div>
          <div class="col">
            <div class="mb-24">
              <h3 class="text-md opacity--hinted">帮助中心</h3>
            </div>
            <div class="mb-12">
              <router-link to="/question">常见问题</router-link>
            </div>
            <div class="mb-12">
              <router-link to="/terms">用户协议</router-link>
            </div>
            <div class="mb-12">
              <router-link to="/policies">隐私政策</router-link>
            </div>
          </div>
          <div class="col">
            <div class="mb-24">
              <h3 class="text-md opacity--hinted">关于我们</h3>
            </div>
            <div class="mb-12">
              <router-link to="/about">关于我们</router-link>
            </div>
            <div class="text-sm mb-12">
              <router-link to="/join">加入我们</router-link>
            </div>
          </div>
          <div class="col">
            <div class="mb-24">
              <h3 class="text-md opacity--hinted">关注我们</h3>
            </div>
            <div class="mb-12">
              <a href="https://d.weibo.com/" target="_blank" rel="external nofollow noopener">新浪微博</a>
            </div>
            <div class="mb-12">
              <router-link to="/">官方微信</router-link>
            </div>
          </div>
          <div class="col hidden md-block">
            <van-image
              width="140"
              height="100"
              :src="require('@/assets/images/1.png')" />
          </div>
        </div>
      </div>
      <div class="copyright text-center mt-24">京ICP备 20220421xx 号 | xxxxxx</div>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      active: 0,
      icon: {
        active: 'https://img01.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img01.yzcdn.cn/vant/user-inactive.png',
      }
    }
  },
  computed: {
    ...mapGetters(['device'])
  }
}
</script>

<style lang="less">
.page__footer {
  .desktop {
    a:hover {
      text-decoration: underline;
      color: var(--color-primary-600);
    }
  }
}
</style>
