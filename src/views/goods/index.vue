<template>
 <div class="goods">
   <div class="container py-48 md-py-24">
     <div class="row">
       <div class="col col-7">
         banner
       </div>
       <div class="col col-5">
          <h1 class="type-lg py-24">Lorem ipsum dolor sit amet {{ id }}</h1>
          <div>
            <span class="goods-price goods-price-real type-xl">￥12121.00</span>
            <span class="goods-price-faux type-md line-through ml-10">￥212121.00</span>
          </div>
          <div class="goods-address my-24 p-12 text-sm">地址</div>
          <ProButton class="inline-block mr-20" @click="handleBuy">加入购物车</ProButton>
          <ProButton class="inline-block">收藏</ProButton>
          <button @click="execCopy">复制</button>
          <input id="copyNode" type="hidden">
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
 </div>
</template>

<script>
import ClipboardJS from 'clipboard'
import ProButton from '@/components/proComponents/button'
import Comment from './components/Comment'
export default {
  components: { ProButton, Comment },
  data () {
    return {
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
      copyMessage: 'copyMessage'
    }
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
  },
  methods: {
    execCopy (data) {
      document.getElementById('copyNode').click()
    },
    handleBuy () {
      this.$router.push('/buy/1')
    }
  },
  created () {
    this.id = this.$route.query.id
  },
  watch: {
    $route () {
      this.id = this.$route.query.id
    }
  }
}
</script>

<style scoped lang="less">
// .goods-content {
// }
// .goods-price {
// }
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
