<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions" @slideChange="onSlideChange" class="bg-f7">
      <swiper-slide>
        <div class="img-box">
          <img src="@/assets/images/t1_16x9.png" alt="" class="">
        </div>
        <div class="slide-caption cursor-pointer">
          <div>
            <h2 class="md-text-xl text-md text-white">用创新点缀人生，让科技融入理想。</h2>
            <h3 class="md-text-lg text-sm text-white mt-12">用创新点缀人生，让科技融入理想。用创新点缀人生，让科技融入理想。用创新点缀人生，让科技融入理想。</h3>
            <!-- <button class="btn-explore mx-auto mt-24"></button> -->
            <div class="text-center mt-24">
              <van-button type="warning" class="mx-auto">探索更多</van-button>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="img-box">
          <img src="@/assets/images/t2_16x9.png" alt="" class="">
        </div>
        <div class="slide-caption container cursor-pointer">
          <h2 class="md-text-xl text-md text-white">用创新点缀人生，让科技融入理想。</h2>
          <h3 class="md-text-lg text-sm text-white mt-12">用创新点缀人生，让科技融入理想。用创新点缀人生，让科技融入理想。用创新点缀人生，让科技融入理想。</h3>
          <!-- <button class="btn-explore mx-auto mt-24"></button> -->
          <div class="text-center mt-24">
            <van-button type="warning" class="mx-auto">探索更多</van-button>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="img-box">
          <img src="@/assets/images/t3_16x9.png" alt="" class="">
        </div>
        <div class="slide-caption cursor-pointer">
          <h2 class="md-text-xl text-md text-white">用创新点缀人生，让科技融入理想。</h2>
          <h3 class="md-text-lg text-sm text-white mt-12">用创新点缀人生，让科技融入理想。用创新点缀人生，让科技融入理想。用创新点缀人生，让科技融入理想。</h3>
          <!-- <button class="btn-explore mx-auto mt-24"></button> -->
          <div class="text-center mt-24">
            <van-button type="warning" class="mx-auto">探索更多</van-button>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="img-box">
          <img src="@/assets/images/t4_16x9.png" alt="" class="">
        </div>
        <div class="slide-caption cursor-pointer">
          <h2 class="md-text-xl text-md text-white">用创新点缀人生，让科技融入理想。</h2>
          <h3 class="md-text-lg text-sm text-white mt-12">用创新点缀人生，让科技融入理想。用创新点缀人生，让科技融入理想。用创新点缀人生，让科技融入理想。</h3>
        </div>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-arrow-prev md-block hidden" slot="button-prev"><img src="@/assets/images/icons/arrows-line-left.png" alt=""></div>
      <div class="swiper-arrow-next md-block hidden" slot="button-next"><img src="@/assets/images/icons/arrows-line-right.png" alt=""></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      captionEl: [],
      swiperOptions: {
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          delay: 6000
        },
        navigation: {
          nextEl: '.swiper-arrow-next',
          prevEl: '.swiper-arrow-prev',
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  methods: {
    onSlideChange () {
      let index = this.swiper.activeIndex
      const caption = this.captionEl[index]
      let that = this
      this.$anime({
        targets: caption.children,
        opacity: [0, 1],
        duration: 400,
        easing: "linear",
        delay: that.$anime.stagger(400, {start: 300}),
        translateY: [that.$anime.stagger([40, 10]), 0]
      })
    }
  },
  mounted () {
    this.captionEl = document.querySelectorAll('.slide-caption'); 
  }
}
</script>

<style lang="less" scoped>

.swiper-container {
  height: 32vh;
}

.slide-caption {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {

  }
  h3 {

  }
}

.img-box {
  width: 100%;
  height: 100%;
  .mixin_img_cover()
}

@media (min-width: 768px) {
  .swiper-container {
    height: 32vw;
  }

  .slide-caption {
    width: 70%;
  }
}

.swiper-container {
  .swiper-arrow-prev {
    left: 6%;
  }
  
  .swiper-arrow-next {
    right: 6%;
  }
  .swiper-arrow-prev:hover {
    left: 5.5%;
    opacity: .8;
  }

  .swiper-arrow-next:hover {
    right: 5.5%;
    opacity: .8;
  }

  .swiper-arrow-prev.swiper-button-disabled {
    left: 7%;
  }
  .swiper-arrow-next.swiper-button-disabled {
    right: 7%;
  }

  .swiper-arrow-prev, .swiper-arrow-next {
    position: absolute;
    top: 50%;
    margin-top: -15px;
    width: 30px;
    height: 30px;
    z-index: 1;
    transition: all .3s;
    img {
      width: 100%;
      height: 100%;
    }
  }
}


</style>
