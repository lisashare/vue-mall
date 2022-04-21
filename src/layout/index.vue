<template>
  <div class="app-wrapper">
    <Header />
    <app-main />
    <Footer />
  </div>
</template>

<script>
import { AppMain, Header, Footer } from './components'
import ResizeMixin from './mixin/ResizeHandler'
import { mapState } from 'vuex'

export default {
  name: 'Layout',
  components: { AppMain, Header, Footer },
  mixins: [ResizeMixin],
  data () {
    return {
     
    }
  },
  computed: {
    currentRoute () {
      return this.$router.currentRoute
    },
    ...mapState({
      device: state => state.app.device
    })
  },
  mounted () {}
}
</script>

<style lang="less">
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
