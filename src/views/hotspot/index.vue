<template>
  <div class="container">
    <div class="vertial-nav">
      <div class="gradient-division gradient-division-top"></div>
      <div class="arrow-up"><van-icon name="arrow-up" /></div>
      <ul>
        <li v-for="(tab, index) in tabNav" :key="index" @click="changeTabNav(index)">{{ tab.item }}</li>
      </ul>
      <div class="arrow-down"><van-icon name="arrow-down" /></div>
      <div class="gradient-division gradient-division-bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabNav: [
        {item: '垂直'},
        {item: '竖直123'},
        {item: 'world'},
        {item: '垂直world'},
      ]
    }
  },
  methods: {
    changeTabNav (index) {
      
    }
  }
}
</script>

<style lang="less" scoped>
.arrow-up {
  position: absolute;
  top: 10px;
  width: 100%;
  z-index: 2;
  font-size: 26px;
  text-align: center;
  cursor: pointer;
}
.arrow-down {
  position: absolute;
  bottom: 10px;
  width: 100%;
  z-index: 2;
  font-size: 26px;
  text-align: center;
  cursor: pointer;
}
.vertial-nav {
  position: absolute;
  display: inline-block;
  height: 100%;
  padding: 40px 0;
  overflow: hidden;
  .gradient-division {
    height: 40px;
    pointer-events: none;
    z-index: 1;
  }
  .gradient-division-top {
    position: sticky;
    background: linear-gradient(rgb(255, 255, 255), rgba(255, 255, 255, .5));
  }
  .gradient-division-bottom {
    position: relative;
    margin-top: -40px;
    background: linear-gradient(rgba(255, 255, 255, .5), rgb(255, 255, 255));
  }
  ul {
    margin-top: -40px;
    height: 100%;
    padding: 40px 20px;
    // overflow-y: auto;
    // overflow-x: hidden;
    overflow: hidden;
  }
  li {
    width: 28px;
    border-radius: 7px;
    background-color: #fff;
    min-height: 40px;
    font-size: 14px;
    text-align: center;
    padding: 6px 4px;
    margin-bottom: 10px;
    word-break: break-all;
    cursor: pointer;
    box-shadow: 0 6px 12px rgba(0, 0, 0, .2);
  }
}
</style>
