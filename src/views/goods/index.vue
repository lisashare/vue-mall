<template>
 <div class="goods">
   <div class="container py-48 md-py-24">
     <div class="row flex-col md-flex-row">
       <div class="col col-12 col-md-6">
        <thumbs-gallery></thumbs-gallery>
       </div>
       <div class="col col-12 col-md-5 offset-md-1">
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
            <ProButton class="inline-block mr-20" @click="handleCart"><van-icon name="cart-o" class="mr-4" />加入购物车</ProButton>
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
     <div class="my-48 md-my-24">
      <h3>购买须知</h3>
      <p>1.中签后，针对数字藏品您将获得一个下载地址，从此地址您可下载一份所购数字藏品的电子源文件以及若干其他质量的媒体文件以满足您的各种使用目的；实物藏品根据销售主体要求获取。</p>
      <p>2.“合约地址”内提供的合约地址保证了数字藏品独一无二的数字身份。</p>
      <p>3.艺术家可自由决定发售模式。若采用竞价方式，买家一旦成功中签但未支付尾款的，将扣取本次竞价起拍价作为违约金。</p>
      <p>4.作品购买成功并支付全部费用后，销售主体将于3个工作日内针对数字藏品发货，针对实物藏品以实际通知为准。可在“个人中心”“已购作品”复制链接下载数字藏品。</p>
      <p>5.首发市场每个ID限购次数不同，具体见作品交易详情；二手市场支持多次购买。</p>
      <p>6.买到的作品支持在台二手市场进行转卖增值，二手市场的定价不取决于购买价，可自由定价（特殊作品除外，部分作品应销售主体要求可能对转卖家有特别规定，详见二手市场作品交易详情）。</p>
      <p>7.平台不承诺任何回购行为，下单之后您所购买的数字藏品只能用于「授权须知」里明确的权利。平台有二手市场提供转卖支撑。</p>
      <p>8.您如果想将手里所购的数字藏品卖出去，请放到平台二手市场进行合理定价，耐心等待买家购买。</p>
      <p>9.因为国家资金监管政策，提现必须提供实名验证才能进行操作。</p>
      <p>10.如同时下单成功同一数字藏品，则作品归属于订单实际付款时间最早的用户，付款时间以系统记录时间为准，最终解释权归平台所有。</p>
      <p>11.用户须知：仅向您提供平台服务，您了解平台上的作品系分馆自行发布，且相关作品权益由分馆自行执行。平台将监督监察分馆的诚信经营，尽可能保障您在平台上的合法权益及良好体验。</p>
      <p>12.郑重声明：平台禁止未成年人买卖数字藏品、禁止贷款买卖数字藏品，且不承诺数字藏品的保值和增值，请谨慎购买，防范数字藏品过度炒作，共建和谐、健康的数字藏品生态。</p>
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
    handleCart () {
      this.$router.push('/cart')
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
