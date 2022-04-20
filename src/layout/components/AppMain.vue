<template>
  <section class="app-main">
    <keep-alive :include="cachedViews">
      <router-view :key="key" />
    </keep-alive>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    cachedViews () {
      return this.$store.state.app.cachedViews
    },
    key () {
      return this.$route.path
    }
  },
  mounted () {
    console.log(this.$router, this.$route)
    console.log(this.addTags())
  },
  methods: {
    addTags () {
      const { name } = this.$route
      if (name) {
        this.$store.dispatch('app/addView', this.$route)
      }
      return false
    }
  }
}
</script>

<style lang="less">
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}

.fixed-header+.app-main {
  padding-top: 50px;
}

.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh - 84px);
  }

  .fixed-header+.app-main {
    padding-top: 84px;
  }
}
</style>
