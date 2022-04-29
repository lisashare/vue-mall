<template>
  <div class="user">
    <!-- ：style = ' { backgroundImage : " url ( " + item.img + " ) " } ' -->
    <div class="user-banner" :style="{backgroundImage: 'url(' + require('../../assets/images/t3_16x9.png') + ')'}"></div>

    <div class="p-12 md-p-24">
      <div class="container" v-if="user.userUuid">
        <!-- <van-image
          width="10rem"
          height="10rem"
          :round="true"
          fit="cover"
          :src="user.avatar"
        /> -->

        <div class="user-main flex flex-col items-center pb-24">
          <div class="img-box"><img src="@/assets/images/1.png" alt=""></div>
          <div class="py-24 mb-24">{{ user.nickname }}</div>
          <div class="mb-12">个人描述 {{ user.introduce }}</div>
          <div class="text-center mb-48">
            <div class="flex text-center mb-12">
              <div class="mx-12 md-mx-24">
                <div class="text-sm">粉丝</div>
                <div>{{ convertNum(user.passiveNum) }}</div>
              </div>
              <div class="mx-12 md-mx-24">
                <div class="text-sm">获赞</div>
                <div>{{ user.likeNum || '-' }}</div>
              </div>
            </div>
            <van-button type="danger" size="small"><van-icon name="contact" class="mr-4" />关注</van-button>
          </div>
          <div> 
            <module-title title="个人简介" />
            <div class="text-sm text-grey-500 p-24">{{ user.artDetail }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { userAttribute } from '@/api/list'
import { convertNum } from '@/utils/util'
import ModuleTitle from '@/components/ModuleTitle'
export default {
  components: { ModuleTitle },
  data () {
    return {
      user: {}
    }
  },
  methods: {
    convertNum,
    getUserInfo () {
      userAttribute().then(res => {
        let data = res.data
        this.user = data
      }).catch(error => {
        console.log(error)
      })
    }
  },
  mounted () {
    this.getUserInfo()
  }
}
</script>

<style lang="less" scoped>
.user-banner {
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.img-box {
  width: 112px;
  height: 112px;
  border-radius: 50%;
  border: 2px solid #fff;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.user-main {
  position: relative;
  margin-top: -78px;
}
</style>
