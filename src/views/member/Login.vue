<template>
  <div class="login w-full">
    <div class="container">
      <div class="login-box login-box-mobile">
        <div class="login-blocks login-switch-tab">
          <a href="javascript:void(0);" :class="[cur === 1?'active':'']" @click="tabSubmitFn(1)">密码登陆</a>
          <a href="javascript:void(0);" :class="[cur === 2?'active':'']" @click="tabSubmitFn(2)">短信登陆</a>
        </div>
        <form class="login-form" v-show="cur === 1">
          <div class="fm-field">
            <div class="form-item">
              <div class="form-group">
                <label><i class="fa fa-user-o"></i></label>
                <div class="control control-username">
                  <input
                    type="text"
                    class="fm-text"
                    id="fm-login-id"
                    placeholder="会员名/邮箱/手机号"
                    autocapitalize="off"
                    maxlength="60"
                    v-model="username"
                    @input="msg.username = ''"
                    autocomplete
                  />
                </div>
              </div>
              <p class="n-msg n-msg-username">{{msg.username}}</p>
            </div>
            <div class="form-item">
              <div class="form-group">
                <label><i class="fa fa-lock"></i></label>
                <div class="control control-password">
                  <input
                    type="password"
                    class="fm-text"
                    id="fm-login-password"
                    placeholder="请输入登陆密码"
                    autocapitalize="off"
                    maxlength="60"
                    v-model="password"
                    @input="msg.password = ''"
                    autocomplete
                  />
                </div>
              </div>
              <p class="n-msg n-msg-username">{{msg.password}}</p>
            </div>
          </div>
          <div class="fm-btn">
            <!-- <button type="button" class="fm-button fm-submit password-login" >登录</button> -->
            <van-button type="danger" class="w-full" :round="true" @click.prevent="handleLogin">登录</van-button>
          </div>
          <div class="login-links text-right">
            <router-link :to="{path: '/forget', query: { redirect: $route.query.redirect }}" target="_blank" class="forgot-password-a-link">忘记密码</router-link>
            <router-link :to="{path: '/register', query: { redirect: $route.query.redirect }}" target="_blank" class="register-a-link">免费注册</router-link>
          </div>
        </form>
        <form class="login-form" v-show="cur === 2">
          <div class="fm-field">
            <div class="form-item">
              <div class="form-group">
                <label><i class="fa fa-lg fa-mobile"></i></label>
                <div class="control control-username">
                  <input
                    type="text"
                    class="fm-text"
                    id="fm-sms-login-id"
                    placeholder="请输入手机号"
                    autocapitalize="off"
                    maxlength="11"
                    v-model="mobile"
                    @input="msg.mobile = ''"
                    autocomplete
                  />
                </div>
              </div>
              <p class="n-msg n-msg-username">{{msg.mobile}}</p>
            </div>
            <div class="form-item">
              <div class="form-group">
                <label><i class="fa fa-keyboard-o"></i></label>
                <button class="btn-smscode" type="button" :disabled="disabled" @click="getCode">{{ smsCode }}</button>
                <div class="control control-password">
                  <input
                    type="text"
                    class="fm-text"
                    id="fm-smscode"
                    placeholder="请输入验证码"
                    autocapitalize="off"
                    maxlength="6"
                    v-model="code"
                    @input="msg.code = ''"
                    autocomplete
                  />
                </div>
              </div>
              <p class="n-msg n-msg-username">{{msg.code}}</p>
            </div>
          </div>
          <div class="fm-btn">
            <!-- <button type="button" class="fm-button fm-submit sms-login" @click="handleLoginSms">登录</button> -->
            <van-button type="danger" class="w-full" :round="true" @click.prevent="handleLoginSms">登录</van-button>
          </div>
          <div class="login-links text-right">
            <router-link :to="{path: '/register', query: { redirect: $route.query.redirect }}" target="_blank" class="register-a-link">免费注册</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      cur: 1, // 密码登陆与验证码登陆tab
      username: '',
      password: '',
      mobile: '',
      code: '',
      timer: null,
      smsCode: '获取验证码',
      disabled: false,
      msg: { // 提示信息
        username: '',
        password: '',
        mobile: '',
        code: ''
      }
    }
  },
  mounted () {
  },
  methods: {
    ...mapActions({
      login: 'user/Login'
    }),
    // 验证手机号
    validMobile() {
      const reg = /^\d{11}$/
      if (reg.test(this.mobile)) {
        return true
      } else {
        this.msg.mobile = '请输入正确的手机号'
        return false
      }
    },
    // 验证验证码
    validCaptcha() {
      var reg = /\d{6}/
      if (reg.test(this.code)) {
        return true
      } else {
        this.msg.code = '请输入正确的验证码'
        return false
      }
    },
    async handleLogin () {
      if (!/^\S{6,}/.test(this.username)) {
        this.msg.username = '请输入正确的帐户名'
        return false
      }
      if (!/^\S{6,}/.test(this.password)) {
        this.msg.password = '请输入正确的密码'
        return false
      }

      this.login({username: this.username, password: this.password}).then(() => {
        console.log('登录成功')
        this.$router.replace({ path: '/' })
      })
    },
    handleLoginSms () {
      if (!this.validMobile()) return false
      if (!this.validCaptcha()) return false
      
      // 登录成功 重定向跳转
      this.$toast('登录成功');
      setTimeout(() => {
        this.$router.replace({ path: this.$route.query.redirect || '/' })
      }, 1000)
    },
    getCode () {
      if (!this.validMobile()) return false
      if (this.disabled) return false
      this.disabled = true

      const TIME_COUNT = 10
      this.smsCode = TIME_COUNT + 's'
      this.timer = setInterval(() => {
        TIME_COUNT -= 1
        this.smsCode = TIME_COUNT + 's'
        if (TIME_COUNT === -1) {
          clearInterval(this.timer)
          this.timer = null
          this.smsCode = '重新发送'
          this.disabled = false
        }
      }, 1000)
    },
    tabSubmitFn (i) {
      if (this.cur === i) return
      this.cur = i
      this.username = ''
      this.password = ''
      this.mobile = ''
      this.code = ''
      this.msg.username = ''
      this.msg.password = ''
      this.msg.mobile = ''
      this.msg.code = ''

      this.smsCode = '获取验证码'
      if (this.timer) clearInterval(this.timer)
      if (this.disabled) this.disabled = false
    }
  },
  watch: {
    mobile () {
      this.mobile = this.mobile.replace(/[^\d]/g, '')
    },
    code () {
      this.code = this.code.replace(/[^\d]/g, '')
    }
  }
}
</script>
<style lang="less">
@import './index.less';
</style>
