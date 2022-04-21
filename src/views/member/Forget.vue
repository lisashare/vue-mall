<template>
  <div class="login">
    <div class="container">
      <div class="login-box login-box-mobile">
        <div class="login-blocks login-switch-tab">
          <a href="javascript:void(0);" class="active">忘记密码</a>
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
            <div class="form-item">
              <div class="form-group">
                <label><i class="fa fa-lg fa-mobile"></i></label>
                <div class="control control-username">
                  <input
                    type="text"
                    class="fm-text"
                    id="fm-sms-login-id"
                    placeholder="请输入新密码"
                    autocapitalize="off"
                    maxlength="11"
                    v-model="password"
                    @input="msg.password = ''"
                    autocomplete
                  />
                </div>
              </div>
              <p class="n-msg n-msg-username">{{msg.password}}</p>
            </div>
            <div class="form-item">
              <div class="form-group">
                <label><i class="fa fa-lg fa-mobile"></i></label>
                <div class="control control-username">
                  <input
                    type="text"
                    class="fm-text"
                    id="fm-sms-login-id"
                    placeholder="请重新输入"
                    autocapitalize="off"
                    maxlength="11"
                    v-model="confirm"
                    @input="msg.confirm = ''"
                    autocomplete
                  />
                </div>
              </div>
              <p class="n-msg n-msg-username">{{msg.confirm}}</p>
            </div>
          </div>
          <div class="fm-btn">
            <!-- <button type="button" class="fm-button fm-submit sms-login" @click="handleForget">确定</button> -->
            <van-button type="danger" class="w-full" :round="true" @click.prevent="handleForget">确定</van-button>
          </div>
          <div class="login-links text-right">
            <router-link :to="{path: '/login', query: { redirect: $route.query.redirect }}">去登录</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Forget',
  data () {
    return {
      confirm: '',
      password: '',
      mobile: '',
      code: '',
      timer: null,
      smsCode: '获取验证码',
      disabled: false,
      msg: { // 提示信息
        confirm: '',
        password: '',
        mobile: '',
        code: ''
      }
    }
  },
  methods: {
    handleForget () {
      if (!/^\S{11,}/.test(this.mobile)) {
        this.msg.mobile = '请输入正确的手机号'
        return false
      }

      if (!/^\S{6,}/.test(this.code)) {
        this.msg.code = '请输入正确的验证码'
        return false
      }

      if (!/^\S{6,}/.test(this.password)) {
        this.msg.password = '请输入正确的密码'
        return false
      }

      if (!/^\S{6,}/.test(this.confirm)) {
        this.msg.confirm = '请输入正确的密码'
        return false
      }

      setTimeout(() => {
        this.$router.replace({ path: '/login', query: { redirect: this.$route.query.redirect } })
      }, 1000)
    },
    getCode () {
      if (!/^\S{11,}/.test(this.mobile)) {
        this.msg.mobile = '请输入正确的手机号'
        return false
      }
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

