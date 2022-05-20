<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['blocked'])
  },
  mounted () {
    if (this.blocked && this.$route.path !== '/mine' ) {
      this.$router.replace('/mine')
    }
  }
}
</script>

<style lang="less">
.mine .avatar {
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
}

.sidebar-left {
  min-width: 140px;
  .router-link-active {
    color: var(--color-red);
  }
}
.sidebar-nav {
  .sidebar-nav-item {
    margin-bottom: 16px;
    h2 {
      line-height: 2.4em;
      font-weight: bold;
    }
    li {
      margin-top: 8px;
    }
  }
}
</style>
