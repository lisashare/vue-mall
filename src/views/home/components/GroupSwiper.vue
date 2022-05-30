<template>
  <div class="group-swiper swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="slide in slides" :key="slide.id">
        <router-link :to="'/goods/'+slide.id" class="tile-img rounded-lg overflow-hidden">
          <img :src="slide.cover" alt="">
        </router-link>
      </div>
    </div>
    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  props: {
    slides: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {

    }
  },
  mounted () {
    /* eslint-disable no-new */
    var mySwiper = new Swiper('.group-swiper', {
      // slidesPerView: 4,
      // spaceBetween: 30,
      // slidesPerGroup: 4,
      autoplay: {
        delay: 4000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      // autoplay: true,
      loop: true, // 循环模式选项
      observer: true,
      observeParents: true,
      // 如果需要前进后退按钮
      // navigation: {
      //   nextEl: '.group-swiper .swiper-button-next',
      //   prevEl: '.group-swiper .swiper-button-prev'
      // }

      // var swiper = new Swiper(".mySwiper", {
      //   slidesPerView: 1,
      //   spaceBetween: 10,
      //   pagination: {
      //     el: ".swiper-pagination",
      //     clickable: true,
      //   },
        breakpoints: {
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          997: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          2140: {
            slidesPerView: 4,
            spaceBetween: 50,
          }
        }
    
    })
  }
}
</script>
<style lang="less" scoped>
.group-swiper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .swiper-slide {
    height: 100%;
  }

  .swiper-button-next, .swiper-button-prev {
    color: #fff;
    width: 2.5em;
    height: 2.5em;
    background: rgba(51, 51, 51, .4);
    border-radius: 50%;
    transition: opacity .2s;
  }
  .swiper-button-next:after, .swiper-button-prev:after {
    font-size: 18px;
  }

  .swiper-button-next:hover, .swiper-button-prev:hover {
    opacity: .8;
  }

  .tile-img {
    display: block;
    position: relative;
    backface-visibility: hidden;
    transform: translateZ(0);
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .tile-img::before {
    content: "";
    display: block;
    padding-top: 66.67%; // 16x9 56.25%
    width: 100%;
  }
}

</style>
