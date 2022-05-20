<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions" class="artist-wrap">
      <swiper-slide>
        <div class="artist-content flex md-flex-row items-center justify-center flex-col-reverse">
          <div class="artist-left overflow-hidden py-24 px-32 md-px-80 md-py-48">
            <div class="mb-16 text-md">
              插画师及视觉设计师，毕业于东华大学。多次在国内各大展览中参加群展，鲜明的视觉色彩、扁平夸化的人物形体以及趣味的几何图形组合构成了其鲜明独特的创作风格。 擅长运用现代流行的扁平艺术风格表现画作，《世界名画》系列，是其较为标志性的代表作之一，通过鲜明大胆的色彩与几何艺术二次重构，重新诠释世界古典名画，赋予其新时代下的活力与趣味。
            </div>
            <div class="text-sm">
              <label class="font-bold mr-8">作者插画师</label><label class="opacity--muted">毕业于东华大学</label>
            </div>
          </div>
          <div class="artist-right overflow-hidden">
            <div class="tile--poster">
              <div class="tile__content">
               <img src="@/assets/images/t4_2x3.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="artist-content flex md-flex-row items-center justify-center flex-col-reverse">
          <div class="artist-left flex flex-col justify-center overflow-hidden py-24 px-32 md-px-80 md-py-48">
            <div class="mb-16 text-md">
              插画师及视觉设计师，毕业于东华大学。多次在国内各大展览中参加群展，鲜明的视觉色彩、扁平夸化的人物形体以及趣味的几何图形组合构成了其鲜明独特的创作风格。
            </div>
            <div class="text-sm">
              <label class="font-bold mr-8">作者插画师</label><label class="opacity--muted">毕业于东华大学</label>
            </div>
          </div>
          <div class="artist-right overflow-hidden">
            <div class="tile--poster">
              <div class="tile__content">
               <img src="@/assets/images/t3_2x3.png" alt="">
              </div>
            </div>
          </div>
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
      swiperOptions: {
        effect: 'fade',
        loop: true,
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
    
  }
}
</script>

<style lang="less" scoped>

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
    left: 1%;
  }
  
  .swiper-arrow-next {
    right: 1%;
  }
  .swiper-arrow-prev:hover {
    opacity: .8;
  }

  .swiper-arrow-next:hover {
    opacity: .8;
  }
  
  .swiper-arrow-prev, .swiper-arrow-next {
    position: absolute;
    top: 50%;
    margin-top: -20px;
    width: 40px;
    height: 40px;
    z-index: 1;
    background-color: var(--theme-color);
    transition: all .3s;
    border-radius: 50%;
    text-align: center;
    padding-top: 8px;
    img {
      width: 24px;
      height: 24px;
    }
  }
}

.artist-wrap {
  /deep/.swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    border-radius: 6px;
    transition: background .25s ease,width .5s ease;
    pointer-events: none;
    // background-color: #596170;
    background-color: var(--theme-color);
  }
  /deep/.swiper-pagination-bullet-active {
    width: 20px;
    background-color: var(--theme-color);
  }
}

.artist-left {
  position: relative;
  left: 0;
  width: 100%;
  min-height: 300px;
  background-color: var(--theme-form-border);
  z-index: 1;
  border-radius: 0 0 .75rem .75rem;
}

.artist-right {
  position: relative;
  width: 100%;
  left: 0;
  z-index: 0;
  .tile(66.66%);
  border-radius: .75rem .75rem 0 0;
}

@media (min-width: 768px) {
  .artist-left {
    left: 30px;
    width: 612px;
    // height: 330px;
    min-height: 300px;
    z-index: 1;
    border-radius: .75rem;
  }

  .artist-right {
    width: 336px;
    left: -40px;
    z-index: 0;
    border-radius: .75rem;
    .tile(133.33%);
  }
}
</style>
