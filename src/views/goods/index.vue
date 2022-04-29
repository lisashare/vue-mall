<template>
 <div class="goods">
   <div class="container py-48 md-py-24">
     <div class="row flex-col md-flex-row">
       <div class="col col-12 col-md-7">
        <thumbs-gallery></thumbs-gallery>
       </div>
       <div class="col col-12 col-md-5">
          <div class="flex py-24 w-full">
            <h1 class="type-lg" style="word-break: break-all;" v-if="goodsDetail.commoditySku">{{ goodsDetail.commoditySku.name }} {{ id }}</h1>
            <div class="flex-none mt-4 ml-10" @click="handleShowPoster"><van-icon name="share-o" size="1.4em" /></div>
          </div>
          <div class="goods-address p-12 text-sm"><van-icon name="location-o" class="mr-4" />地址</div>
          <div class="flex flex-col md-flex-row justify-center md-justify-between md-items-center my-12">
            <h2 class="goods-price goods-price-real type-xl">￥{{ goodsDetail.price }}</h2>
            <!-- <span class="goods-price-faux type-md line-through ml-10">￥212121.00</span> -->
            <div>开售时段：4月18日 13:00 ~ 4月18日 19:00</div>
          </div>
          <div class="btn-wrap">
            <div v-if="waitTime">距离开售 {{waitTime}}</div>
            <div v-else-if="!waitTime">
              <div>已结束</div><div>已购买</div>
            </div>
          </div>
          <div>
            <ProButton class="inline-block mr-20" @click="handleBuy"><van-icon name="cart-o" class="mr-4" />加入购物车</ProButton>
            <ProButton class="inline-block"><van-icon name="like-o" class="mr-4" />点赞</ProButton>
          </div>
          <div class="goods-intro text-sm my-24 p-12 md-p-20 text-grey-600">
            <div class="flex justify-between">
              <div class="">合约地址</div>
              <div v-if="goodsDetail.commoditySku" class="cursor-pointer text-blue-400 hover-text-blue-400" @click="execCopy(goodsDetail.commoditySku.nftId)">{{ mobileToStar(goodsDetail.commoditySku.nftId) }}<van-icon name="records" size="1.2em" /></div>
            </div>
            <div class="flex justify-between">
              <div class="">发行方</div>
              <div class="">发行方</div>
            </div>
            <div class="flex justify-between">
              <div class="">发行数量</div>
              <div class="">123</div>
            </div>
            <div class="flex justify-between">
              <div class="">作家</div>
              <div class="">123</div>
            </div>
          </div>
          <input id="copyNode" type="hidden">
       </div>
     </div>
    <div class="row items-center m-24 p-24 relative artist-bar">
      <div class="col-12 col-md-2 flex flex-row md-flex-col justify-between items-center px-24 md-px-3 text-center artist-bar-left">
        <div class="flex flex-col items-center">
          <div class="img-box"><img src="@/assets/images/1.png" alt=""></div>
          <div>艺术家</div>
        </div>
        <div><van-icon name="contact" />关注</div>
      </div>
      <div class="flex-1 text-sm text-grey-500 text-center h-full artist-bar-right">
        <p>这个艺术家什么也没有介绍，快去他的个人主页看看吧～</p>
        <router-link to="/user/123" class="btn-link-user">查看主页</router-link>
      </div> 
    </div>
     <div class="goods-content my-48 md-my-24">
       <div class="content py-24">
          <div class="goods-detail">
            <Comment />
          </div>
       </div>
     </div>
   </div>
  <QrcodePoster :show="showPoster" ref="dialogPoster" @closePosterDialog="closePosterDialog"></QrcodePoster>
 </div>
</template>

<script>
import ClipboardJS from 'clipboard'
import ProButton from '@/components/proComponents/button'
import Comment from './components/Comment'

import { detail } from '@/api/list'
import { mapGetters } from 'vuex'
import { parseTime, formatSeconds, mobileToStar } from '@/utils/util'

import QrcodePoster from '@/components/createPoster/QrcodePoster'
import ThumbsGallery from './components/ThumbsGallery'
export default {
  components: { ProButton, Comment, QrcodePoster, ThumbsGallery },
  data () {
    return {
      num: '0x8673a15fc31f5ccd8f5239fbf7ade88e65994b6d',
      showPoster: false,
      id: null,
      slides: [
        {
          id: 1,
          cover: require('@/assets/images/t1_16x9.png')
        },
        {
          id: 2,
          cover: require('@/assets/images/t2_16x9.png')
        },
        {
          id: 3,
          cover: require('@/assets/images/t3_16x9.png')
        },
        {
          id: 4,
          cover: require('@/assets/images/t4_16x9.png')
        },
        {
          id: 5,
          cover: require('@/assets/images/t5_16x9.png')
        },
        {
          id: 6,
          cover: require('@/assets/images/t6_16x9.png')
        }
      ],
      disabled: false,
      copyMessage: 'copyMessage',
      goodsDetail: {},
      currentTime: new Date().getTime(), // local 时间
      startTime: '2022-04-28 18:02:00', // 活动开始时间
      waitTime: '', // 活动倒计时时间 距离2小时的时候显示倒计时
      timer: null
    }
  },
  computed: {
    ...mapGetters(['systemTime', 'differTime'])
  },
  mounted () {
    let that = this
    const clipboard = new ClipboardJS('#copyNode', {
      text: trigger => {
        this.$notify({
          title: '成功',
          message: '代码已复制到剪切板，可粘贴。',
          type: 'success'
        })
        return that.copyMessage
      }
    })
    clipboard.on('error', e => {
      this.$toast.error('代码复制失败')
    })

    this.getGoodsDetail()
    this.initTime()
  },
  methods: {
    mobileToStar,
    closePosterDialog() {
      this.showPoster = false
    },
    handleShowPoster () {
      this.showPoster = true
      // this.$emit('getQrCode')
      // this.$nextTick(() => {
        this.$refs['dialogPoster'].show = true
        this.$refs['dialogPoster'].getQrCode()
      // })
    },
    // 时间计时器
    initTime() {
      this.getNowTime()
      if(this.timer) clearInterval(this.timer)
      this.timer = setInterval(() => {
        this.getNowTime()
      }, 1000)
      // this.timer = setTimeout(() => {
      //   this.getNowTime()
      // }, 1000)
    },
    getNowTime () {
      // let nowSeconds = moment().unix() * 1000  // 把当前时间转化为秒
      // // 真实时间 = 当前本地时间 + （服务器时间 - 当前时间之差）
      // this.currentTime = moment(nowSeconds).add(this.differTime, 'seconds').format('YYYY-MM-DD HH:mm:ss')
      let nowSeconds = new Date().getTime()
      this.currentTime = parseTime(nowSeconds + this.differTime)
      let diff = new Date(this.startTime) - new Date(this.currentTime)
      if ( diff <= 7200000 && diff >= 0 ) {
        this.waitTime = formatSeconds(diff)
      } else {
        if (this.timer) {
          clearInterval(this.timer)
          this.waitTime = ''
        }
      }
    },
    // 抢购开始时间倒计时
    // computedTime () {
    //   let du = moment.duration(moment(this.startTime) - moment(this.currentTime), 'ms'), //距离开始抢购剩余时分秒
    //       hours = du.get('hours'),
    //       mins = du.get('minutes'),
    //       ss = du.get('seconds');
    //       this.waitTime = PrefixInteger(hours, 2) + ':' + PrefixInteger(mins, 2) + ':' + PrefixInteger(ss, 2)
    // },
    //时间缺0 补0
    // PrefixInteger(){
    //    return (Array(n).join(0) + num).slice(-n);
    // },
    getGoodsDetail () {
      detail().then(res => {
        this.goodsDetail = res.data
      }).catch(error => {
        console.log(error)
      })
    },
    execCopy (data) {
      this.copyMessage = data
      document.getElementById('copyNode').click()
    },
    handleBuy () {
      this.$router.push('/buy/1')
    }
  },
  created () {
    this.id = this.$route.params.id
  },
  watch: {
    $route () {
      this.id = this.$route.params.id
    }
  }
}
</script>

<style lang="less" scoped>
// .goods-content {
// }
// .goods-price {
// }
.btn-link-user {
  position: absolute;
  right: 30px;
  bottom: 15px;
}
.artist-bar {
  min-height: 140px;
  border: 1px solid #8f959e;
  border-radius: 4px;
  // .artist-bar-left {
  // }
  .img-box {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid #8f959e;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.goods-intro {
  border: 1px solid #8f959e;
  border-radius: 4px;
}

.goods-price-real {
  color: var(--color-warning-600);
}

.goods-price-faux {
  color: var(--color-neutral-600);
}

.goods-address {
  width: 100%;
  border-radius: 3px;
  background-color: var(--color-neutral-200);
}
</style>
