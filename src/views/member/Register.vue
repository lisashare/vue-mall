<template>
  <div class="login">
    <div class="container">
      <div class="login-box login-box-mobile">
        <div class="login-blocks login-switch-tab">
          <span class="active">用户注册</span>
        </div>
        <form class="login-form">
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
            <!-- <button type="button" class="fm-button fm-submit sms-login" @click="handleRegister">注册</button> -->
            <van-button type="danger" class="w-full" :round="true" @click.prevent="handleRegister">确定</van-button>
          </div>
          <div class="login-links register-links text-left">
             <pro-checkbox v-model="checked">已阅读并同意以下协议<router-link to="/policies" target="_blank" class="register-a-link">隐私政策</router-link>、<router-link to="/terms" target="_blank" class="register-a-link">用户协议</router-link></pro-checkbox>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import ProCheckbox from '@/components/proComponents/checkbox'
export default {
  name: 'Register',
  components: { ProCheckbox },
  data () {
    return {
      checked: false,
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
  methods: {
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
    handleRegister () {
      if (!this.validMobile()) return false
      if (!this.validCaptcha()) return false

      if (!this.checked) {
        return false
      }
      setTimeout(() => {
        this.$router.replace({ path: '/login', query: { redirect: this.$route.query.redirect } })
      }, 1000)
    },
    getCode () {
      if (!this.validMobile()) return false
      
      if (this.disabled) return false
      this.disabled = true

      let TIME = 10
      this.smsCode = TIME + 's'
      this.timer = setInterval(() => {
        TIME -= 1
        this.smsCode = TIME + 's'
        if (TIME === -1) {
          clearInterval(this.timer)
          this.smsCode = '重新发送'
          this.disabled = false
        }
      }, 1000)
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
