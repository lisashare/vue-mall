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
          <div class="fm-field fm-field-mobile">
            <div class="form-item">
              <div class="form-group">
                <label><i class="fa fa-lg fa-mobile"></i></label>
                <div class="control control-username">
                  <div class="country-select">
                    <van-popover v-model="showCountryCode" trigger="click" get-container="#app">
                      <div class="country-select-list">
                        <van-index-bar :index-list="computedFullLetter" sticky>
                          <div v-for="(item, index) in dataList" :key="index">
                            <van-index-anchor :index="item.title" />
                            <div class="cell country-select-list-item" v-for="(cell, n) in item.data" :key="n" @click="handleChangeCode(cell)" :class="{'active': selectedItem.code === cell.code && selectedItem.cn === cell.cn}">
                              <span>{{ cell.cn }}</span>
                              <span>{{ cell.code }}</span>
                            </div>
                          </div>
                        </van-index-bar>
                      </div>
            
                      <template #reference>
                        <div class="area-code">{{ selectedCode }}</div>
                      </template>
                    </van-popover>
                  </div>
                  <!-- <div class="country-select">
                    <div class="country-code" @click="handleCountryCode">
                      <div class="area-name"></div>
                      <div class="area-code">
                        +86
                        <div class="select-arrow"></div>
                      </div>
                    </div>
                    <div class="country-select-list" v-show="showCountryCode">
                      <div class="country-select-list-item">
                        <span>中国大陆</span>
                        <span>+86</span>
                      </div>
                      <van-index-bar :index-list="indexList" sticky>
                        <div v-for="(item, index) in dataList" :key="index">
                          <van-index-anchor :index="item.title" />
                          <div class="cell country-select-list-item" v-for="(cell, n) in item.data" :key="n">
                            <span>{{ cell.cn }}</span>
                            <span>{{ cell.code }}</span>
                          </div>
                        </div>
                      </van-index-bar>
                    </div>
                  </div> -->
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

    <van-overlay :show="showVerify" :z-index="99">
      <div class="verify-wrapper " @click.stop>
        <div class="verify-content" id="verify"></div>
      </div>
    </van-overlay>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { countryCode } from '@/assets/js/country-code'
import '@/assets/js/graphicVerificationCode/jigsaw.js'
import '@/assets/js/graphicVerificationCode/jigsaw.css'

export default {
  name: 'Login',
  data () {
    return {
      showVerify: false,
      selectedCode: '+86',
      selectedItem: {
        "en": "China",
        "cn": "中国",
        "code": "+86"
      },
      fullLetter: [],
      indexList: ["+", "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "W", "X", "Y", "Z"],
      dataList: [
        {
          title: '热门',
          data: [
            {
              "en": "China",
              "cn": "中国",
              "code": "+86"
            },
            {
              "en": "Hongkong",
              "cn": "香港",
              "code": "+852"
            },
            {
              "en": "Macao",
              "cn": "澳门",
              "code": "+853"
            },
            {
              "en": "Taiwan",
              "cn": "台湾省",
              "code": "+886"
            },
            {
              "en": "United States of America",
              "cn": "美国",
              "code": "+1"
            },
            {
              "en": "Canada",
              "cn": "加拿大",
              "code": "+1"
            },
            {
              "en": "United Kiongdom",
              "cn": "英国",
              "code": "+44"
            },
            {
              "en": "Australia",
              "cn": "澳大利亚",
              "code": "+61"
            },
            {
              "en": "Japan",
              "cn": "日本",
              "code": "+81"
            },
            {
              "en": "Korea",
              "cn": "韩国",
              "code": "+82"
            }
          ]
        }
      ],
      showCountryCode: false,
      cur: 2, // 密码登陆与验证码登陆tab
      username: '',
      password: '',
      mobile: '',
      code: '',
      timer: null,
      TIME_COUNT: 10,
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
  computed: {
    computedFullLetter () {
      let arr = ['+']
      for (let i = 0, len = countryCode.length;i < len;i++) {
        let letter = countryCode[i].en.slice(0,1)
        if (arr.indexOf(letter) === -1) {
          arr.push(letter)
        }
      }
      this.indexList = arr
      return arr
    }
  },
  mounted () {
    this.handleList()

    let that = this;
    jigsaw.init({
      el: document.getElementById('verify'),
      width: 310, // 可选, 默认310
      height: 155, // 可选, 默认155
      onSuccess: function() {
        that.verifySuccess()
        setTimeout(() => {
          this.reset()
        }, 1000)
      },
      onFail: function () { },
      onRefresh: function () { }
    })
  },
  methods: {
    handleChangeCode (item) {
      this.selectedItem = item
      this.selectedCode = item.code
      this.showCountryCode = false
    },
    handleList () {
      let dataList = []
      let arr = this.indexList.slice(1)
      for (let k = 0, length = arr.length; k < length;k++) {
        let tempDataList = {
          title: arr[k],
          data: []
        }
        for (let i = 0, len = countryCode.length;i < len;i++) {
          let letter = countryCode[i].en.slice(0,1)
          if (arr[k] === letter ) {
            tempDataList.data.push(countryCode[i])
          }
        }
        dataList.push(tempDataList)
      }
      this.dataList.push(...dataList)
    },
    ...mapActions({
      login: 'user/Login'
    }),
    // handleCountryCode () {
    //   this.showCountryCode = !this.showCountryCode
    // },
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
      // 
      this.showVerify = true

      
    },
    verifySuccess () {
      this.showVerify = false
      if (this.disabled) return false
        this.disabled = true

        let time_count = this.TIME_COUNT
        this.smsCode = time_count + 's'
        this.timer = setInterval(() => {
          time_count -= 1
          this.smsCode = time_count + 's'
          if (time_count === -1) {
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

.verify-wrapper {
  position: absolute;
  top: 49%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 5px;
  background-color: #fff;
}

.fm-field-mobile .control-username {
  .fm-text {
    padding-left: 100px;
  }
}
.country-select {
  position: absolute;
  top: 0;
  left: 40px;
  width: 60px;
  text-align: center;
  height: 100%;
  line-height: 42px;
  font-size: 14px;
  cursor: pointer;
}
.country-select-list {
  width: 200px;
  height: 400px;
  font-size: 14px;
  overflow-y: scroll;
  .van-index-bar__sidebar {
    position: absolute;
    // right: 16px;
  }
  .active {
    color: red;
  }
}
.country-select-list-item {
  display: flex;
  justify-content: space-between;
  padding: 0 26px 0 16px;
  cursor: pointer;
}
</style>
