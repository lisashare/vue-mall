<template>
  <div class="user">
    <div class="container" v-if="user.userUuid">
      <!-- <van-image
        width="10rem"
        height="10rem"
        :round="true"
        fit="cover"
        :src="user.avatar"
      /> -->
      <div class="">{{ user.nickname }}</div>
      <div class="">个人描述 {{ user.introduce }}</div>
      <div class="">个人介绍<div class="text-sm text-grey-500">{{ user.artDetail }}</div></div>
      <div class="">粉丝 {{ user.passiveNum }}</div>
      <div class="">获赞 {{ user.likeNum }}</div>
      <button>关注</button> 
    </div>
  </div>
</template>

<script>
import { userAttribute } from '@/api/list'
export default {
  data () {
    return {
      user: {}
    }
  },
  methods: {
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

<style scoped>
</style>
