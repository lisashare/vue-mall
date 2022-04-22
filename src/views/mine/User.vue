<template>
  <div>
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
      <div class="container flex">
        <div class="sidebar-left">
          <van-sidebar>
            <van-sidebar-item title="个人中心" to="/mine" />
          </van-sidebar>
           <div>
            <h3>常用管理</h3>
            <div>
              <van-sidebar v-model="activeKey">
                <van-sidebar-item title="我的藏品" to="/mine/treasure" />
              </van-sidebar>
            </div>
            <div>
              <van-sidebar v-model="activeKey">
                <van-sidebar-item title="我的礼物" to="/mine/gift" />
              </van-sidebar>
            </div>
            <div>
              <van-sidebar v-model="activeKey">
                <van-sidebar-item title="赠与管理" to="/mine/gift" />
              </van-sidebar>
            </div>
          </div>
          <div>
            <h3>社交数据</h3>
            <van-sidebar v-model="activeKey">
              <van-sidebar-item title="我的关注" to="/mine/attention/follow" />
            </van-sidebar>
          </div>
          <div>
            <van-sidebar v-model="activeKey">
              <van-sidebar-item title="我的粉丝" to="/mine/attention/fans" />
            </van-sidebar>
          </div>
          <div>
            <van-sidebar v-model="activeKey">
              <van-sidebar-item title="我喜欢的" to="/mine/collect" />
            </van-sidebar>
          </div>
          <div>
            <h3>我的订单</h3>
            <van-sidebar v-model="activeKey">
              <van-sidebar-item title="我买到的" to="/mine/buy" />
            </van-sidebar>
          </div>
          <div>
            <van-sidebar v-model="activeKey">
              <van-sidebar-item title="我发布的" to="/mine/release" />
            </van-sidebar>
          </div>
          <div>
            <van-sidebar v-model="activeKey">
              <van-sidebar-item title="我卖出的" to="/mine/sold" />
            </van-sidebar>
          </div>
          <div>
            <h3>支付管理</h3>
            <van-sidebar v-model="activeKey">
              <van-sidebar-item title="支付总览" to="/mine/wallet" />
            </van-sidebar>
            <div>
              <van-sidebar v-model="activeKey">
                <van-sidebar-item title="银行卡绑定" to="/mine/wallet/bank" />
              </van-sidebar>
            </div>
          </div>
          <div>
            <h3>设置管理</h3>
            <van-sidebar v-model="activeKey">
              <van-sidebar-item title="个人设置" to="/mine/setting" />
            </van-sidebar>
          </div>
        </div>
        <div class="sidebar-right flex-1">
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
    ...mapGetters(['device', 'userinfo', 'username'])
  },
  methods: {
    handleShowEye () {
      this.showEye = !this.showEye
    }
  }
}
</script>

<style scoped lang="less">
.avatar {
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
}
</style>
