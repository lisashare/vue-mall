<template>
  <div class="about">
    <div class="about-banner" :style="{backgroundImage: 'url(' + require('@/assets/images/t2_16x9.png') + ')'}">

    </div>
  </div>
</template>

<style lang="less" scoped>
@import '../../assets/styles/_base.less';
.about-banner {
  height: 400px;
  .mixin_bg_img_cover();
}
</style>
