<template>
  <div class="page_header">
    <header>
      <div class="container flex h-full text-sm">
        <h2 class="logo"><router-link to="/"><img src="@/assets/logo.png" alt=""></router-link></h2>
        <div class="md-hidden block flex-1">
          <div class="flex items-center justify-end h-full">
            <div class="text-xl mt-6 cursor-pointer" @click="handleShowSearchM"><van-icon name="search" /></div>
          </div>
        </div> 
        <div class="md-block hidden flex-1">
          <div class="flex flex-1 h-full overflow-hidden">
            <ul class="flex items-center flex-1 md-px-24 h-full">
              <li class="px-24"><router-link to="/" exact-active-class="homeNav">首页</router-link></li>
              <li class="px-24"><router-link to="/market" active-class="homeNav">产品</router-link></li>
              <li class="px-24"><router-link to="/artist" active-class="homeNav">艺术家</router-link></li>
              <li class="px-24"><router-link to="/hotspot" active-class="homeNav">热点</router-link></li>
            </ul>
            <div class="header-search relative flex items-center mx-16">
              <div class="search-wrap flex items-center" :class="showSearch ? 'showSearch': ''">
                <div class="text-xl mt-6 cursor-pointer" @click="handleShowSearch"><van-icon name="search" /></div>
                <div class="search-input text-sm mx-8">
                  <input type="text" v-model="keyWord" placeholder="请输入您想查找的内容" />
                </div>
                <div class="search-close text-lg cursor-pointer" @click="handleShowSearch"><van-icon name="cross" /></div>
              </div>
            </div>
            <div class="header-info flex items-center px-12" style="z-index:11">
              <van-switch class="mr-12" v-model="mode" :size="24" active-color="#444444" inactive-color="#dcdee0" @change="rootThemeChange" />
              <theme-picker class="mr-12" @change="themeChange" />
              <div class="cursor-pointer" v-if="!username" @click="handleLogin">登录</div>
              <div v-else class="flex items-center cursor-pointer">
                <router-link to="/mine" class="flex items-center">
                  <div class="avatar rounded-circle overflow-hidden flex-none">
                    <img :src="userinfo.avatar" alt="">
                  </div>
                  <div class="px-8">{{ userinfo.username }}</div>
                </router-link>
                <div @click="handleLogout">退出</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="m-search bg-white" v-if="showSearchM">
      <div class="m-search-header flex items-center">
        <div class="input-wrap relative m-12">
          <input type="text" v-model="mKeyWord" />
          <div class="btn-close text-lg" v-show="closeBtn" @click="mKeyWord = ''">
            <van-icon name="cross" />
          </div>
        </div>
        <div class="text-sm" @click="handleShowSearchM">取消</div>
      </div>
      <div class="m-search-result px-24 py-12" v-if="mKeyWord">
        <ul class="result-nav flex">
          <li :class="navActive === 1? 'active':''" @click="handleChangeNav(1)">藏品</li>
          <li :class="navActive === 2? 'active':''" @click="handleChangeNav(2)">创作者</li>
          <li class="slide-decorate"></li>
        </ul>
        <div class="m-result-content py-16">
          <div class="" v-show="navActive === 1">
            暂无该作品信息
          </div>
          <div v-show="navActive === 2">
            暂无该作家信息
          </div>
        </div>
      </div>
      <div class="m-search-recommend px-24 py-12" v-if="!mKeyWord">
        推荐一些作品
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ThemePicker from './ThemePicker'
let whiteList = ['/register', '/forget']
export default {
  components: { ThemePicker },
  data () {
    return {
      showSearchM: false,
      showSearch: false,
      keyWord: '',
      mKeyWord: '',
      mSearchResult: [],
      navActive: 1,
      closeBtn: false,
      theme: this.$store.state.settings.theme,
      mode: this.$store.state.settings.rootTheme === 'dark' ? true : false
    }
  },
  computed: {
    ...mapGetters(['userinfo', 'username'])
  },
  watch: {
    showSearch () {
      this.keyWord = ''
    },
    showSearchM () {
      this.mKeyWord = ''
      this.navActive = 1
    },
    mKeyWord (newVal, oldVal) {
      if (!newVal) {
        this.closeBtn = false
      } else {
        this.closeBtn = true
      }
    }
  },
  mounted () {
    window.document.documentElement.setAttribute('data-theme', this.$store.state.settings.rootTheme)
  },
  methods: {
    handleChangeNav (i) {
      this.navActive = i
    },
    handleShowSearchM () {
      this.showSearchM = !this.showSearchM
    },
    handleShowSearch () {
      this.showSearch = !this.showSearch
    },
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
    },
    themeChange (val) {
      this.$store.dispatch('settings/changeSetting', {
        key: 'theme',
        value: val
      })
      this.theme = val
      let value = this.mode ? 'dark' : 'light'

      localStorage.setItem(
        "layout-setting",
        `{
          "theme":"${this.theme}",
          "rootTheme":"${value}"
        }`
      )
    },
    rootThemeChange (val) {
      let value = val ? 'dark' : 'light'
      window.document.documentElement.setAttribute('data-theme', value)
      this.$store.dispatch('settings/changeSetting', {
        key: 'rootTheme',
        value
      })

      localStorage.setItem(
        "layout-setting",
        `{
          "theme":"${this.theme}",
          "rootTheme":"${value}"
        }`
      )
      }
  }
}
</script>

<style lang="less">
.homeNav {
  color: var(--setting-theme);
}
.page_header header {
  background-color: var(--theme-background)
}
.header-info, .header-search, .search-wrap {
  background-color: var(--theme-background);
  input {
    background-color: inherit
  }
}
.btn-close {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

.result-nav {
  position: relative;
  line-height: 2em;
  li:not(.slide-decorate) {
    margin: 0 12px;
    color: #666;
    transition: all .3s;
  }
  .slide-decorate {
    position: absolute;
    bottom: 0;
    left: 2rem;
    width: 3rem;
    height: 3px;
    background-color: red;
    border-radius: 3px;
    transition: all .3s;
  }
  li.active {
    color: #333;
    transform: scale(1.2);
  }
  li:nth-child(1).active + .slide-decorate {
    left: 15px;
  }
  li:nth-child(2).active + .slide-decorate {
    left: 80px;
  }
}

.m-search {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}

.m-search-header {
  .input-wrap {
    width: 82%;
    height: 40px;
    border: 1px solid #999;
    border-radius: 40px;
    overflow: hidden;
    input {
      padding-left: 16px;
      padding-right: 32px;
      width: 100%;
      height: 100%;
    }
  }
}

.search-wrap {
  position: absolute;
  left: -14px;
  transition: left .26s ease-out;
  z-index: 11;
}

.showSearch {
  left: -250px;
}

.search-input {
  width: 200px;
  input {
    width: 100%;
  }
}

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
