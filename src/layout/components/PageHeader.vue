<template>
  <div class="page_header">
    <header>
      <div class="container flex justify-between h-full text-sm">
        <h2 class="logo"><router-link to="/"><img src="@/assets/logo.png" alt=""></router-link></h2>
        <div class="flex">
          <!-- <ul class="flex">
            <li>登录</li>
            <li>登录</li>
          </ul> -->
          <div class="flex items-center">
            <div class="cursor-pointer" v-if="!username" @click="handleLogin">登录</div>
            <div v-else class="flex items-center cursor-pointer">
              <router-link to="/mine" class="flex items-center">
                <div class="avatar rounded-circle overflow-hidden">
                  <img :src="userinfo.avatar" alt="">
                </div>
                <div class="px-8">{{ userinfo.username }}</div>
              </router-link>
              <div @click="handleLogout">退出</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
let whiteList = ['/register', '/forget']
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['userinfo', 'username'])
  },
  methods: {
    ...mapActions({'resetToken': 'user/resetToken'}),
    handleLogout() {
      this.resetToken()
      console.log('退出登录')
    },
    handleLogin () {
      let $route = this.$route
      if ($route.path !== '/login') {
        if ($route.fullPath !== '/404') {
          if ($route.query.redirect) {
            this.$router.replace(`/login?redirect=${$route.query.redirect}`)
          } else if (whiteList.indexOf($route.path) !== -1) {
            this.$router.replace(`/login`)
          } else {
            this.$router.replace(`/login?redirect=${$route.fullPath}`)
          }
        } else {
          this.$router.replace(`/login`)
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.page_header {
  box-sizing: content-box;
  position: relative;
  height: 65px;
  z-index: 11;
}

header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 65px;
  background-color: var(--color-neutral-90);
  border-bottom: 1px solid var(--color-neutral-200);
  box-shadow: 0 2px 10px 0 rgba(87, 87, 87, .1);
  .avatar {
    width: 40px;
    height: 40px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.logo {
  width: 40px;
  height: 40px;
  margin-top: 12px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
