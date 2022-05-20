<template>
  <div>
    <template v-if="!blocked">
      
    <div v-if="device === 'mobile'">
      <div class="container">
        <div class="mine">
          <div class="mine-info flex items-center p-12">
            <div class="avatar"><img :src="userinfo.avatar" alt=""></div>
            <div class="username ml-12">{{userinfo.username}}</div>
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
              <van-grid-item icon="photo-o" text="赠与管理" to="/mine/gift_management" />
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
        <div class="flex p-12 md-p-32 lg-p-48">
          <div class="sidebar-left">
            <div class="sidebar-nav">
              <div class="sidebar-nav-item i-mb-0">
                <h2><router-link to="/mine">个人中心</router-link></h2>
              </div>
              <div class="sidebar-nav-item">
                <h2>常用管理</h2>
                <ul class="text-sm">
                  <li><router-link to="/mine/treasure">我的藏品</router-link></li>
                  <li><router-link to="/mine/gift">我的礼物</router-link></li>
                  <li><router-link to="/mine/gift_management">赠与管理</router-link></li>
                </ul>
              </div>
              <div class="sidebar-nav-item">
                <h2>社交数据</h2>
                <ul class="text-sm">
                  <li><router-link to="/mine/attention/follow">我的关注</router-link></li>
                  <li><router-link to="/mine/attention/fans">我的粉丝</router-link></li>
                  <li><router-link to="/mine/collect">我喜欢的</router-link></li>
                </ul>
              </div>
              <div class="sidebar-nav-item">
                <h2>我的订单</h2>
                <ul class="text-sm">
                  <li><router-link to="/mine/buy">我买到的</router-link></li>
                  <li><router-link to="/mine/release">我发布的</router-link></li>
                  <li><router-link to="/mine/sold">我卖出的</router-link></li>
                </ul>
              </div>
              <div class="sidebar-nav-item">
                <h2>支付管理</h2>
                <ul class="text-sm">
                  <li><router-link to="/mine/wallet">支付总览</router-link></li>
                  <li><router-link to="/mine/wallet/bank">银行卡绑定</router-link></li>
                </ul>
              </div>
              <div class="sidebar-nav-item">
                <h2>设置管理</h2>
                <ul class="text-sm">
                  <li><router-link to="/mine/setting">个人设置</router-link></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="sidebar-right flex-1 px-0 md-px-32 lg-px-48">
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
    <template v-else>
      <div class="container">你的账号已被封禁</div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex' 
export default {
  data () {
    return {
      showEye: false,
      price: '￥0.00',
      activeKey: 999
    }
  },
  computed: {
    ...mapGetters(['device', 'userinfo', 'username', 'blocked'])
  },
  methods: {
    handleShowEye () {
      this.showEye = !this.showEye
    }
  }
}
</script>

<style scoped lang="less">
.mine /deep/.van-grid-item__text {
  font-size: 14px;
}
</style>
