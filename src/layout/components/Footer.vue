<template>
  <div>
    <div v-if="device === 'mobile'">
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item>
          <span>自定义</span>
          <template #icon="props">
            <img :src="props.active ? icon.active : icon.inactive" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item icon="award-o">标签</van-tabbar-item>
        <van-tabbar-item icon="diamond-o">标签</van-tabbar-item>
        <van-tabbar-item icon="contact">标签</van-tabbar-item>
      </van-tabbar>
    </div>
    <div v-else>
      footer
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      active: 0,
      icon: {
        active: 'https://img01.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img01.yzcdn.cn/vant/user-inactive.png',
      }
    }
  },
  computed: {
    ...mapGetters(['device'])
  }
}
</script>

<style scoped>
</style>
