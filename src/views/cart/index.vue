<template>
  <div class="px-0 py-12 md-p-48">
    <div class="container">
      <div class="order-table text-sm">
        <div class="order-header text-md font-bold">
          <div class="order-tr flex mb-12 md-mb-24">
            <div class="order-item col-2 col-md-1 i-p-0">
              <div class="pt-2"><van-checkbox shape="square" @click="handleCheckAll" :value="isCheckedAll">全选</van-checkbox></div>
            </div>
            <div class="order-item col-3 col-md-2 i-p-0">商品图片</div> 
            <div class="order-item col-4 col-md-4">商品信息</div>
            <div class="order-item col-1">单价</div>
            <div class="order-item col-1 hidden md-block i-p-0">数量</div>
            <div class="order-item col-1 hidden md-block">金额</div>
            <div class="order-item col-1 hidden md-block">操作</div>
          </div>
        </div>
        <div class="order-body">
           <div class="order-tr flex mb-12 md-mb-24" v-for="item in cartList" :key="item.id">
            <div class="order-item col-2 col-md-1 i-p-0">
              <div><van-checkbox v-model="item.checked" @click="handleCheckItem(item.id)" shape="square"></van-checkbox></div>
            </div>
            <div class="order-item col-3 col-md-2 i-p-0"><router-link to="/goods/1"><div class="order-img-box"><img src="@/assets/images/1.png" alt=""></div></router-link></div>
            <div class="order-item col-4 col-md-4">{{ item.name }}</div>
            <div class="order-item col-1">￥{{ item.price }}</div>
            <div class="order-item col-1 absolute-stepper i-p-0"><van-stepper @change="handleChangeNum($event, item)" v-model="item.goodsNum" /></div>
            <div class="order-item col-1 hidden md-block">￥{{ item.price * item.goodsNum }}</div>
            <div class="order-item col-1 hidden md-block">
              <div>移入收藏夹</div>
              <div @click="handleDelGoods(item.id)">删除</div>
            </div>
          </div>
        </div>
      </div>
      <div class="order-footer flex container justify-end">
        <div class="mr-12">已选商品<span class="mx-6 text-xl font-bold">{{ totalPrice.num }}</span>件</div>
        <div class="mr-12">合计<span class="mx-6 text-xl font-bold">￥{{ totalPrice.price }}</span></div>
        <!--  -->
        <div v-if="!totalPrice.price">
          <van-popover v-model="showPopover" trigger="click" placement="top">
            <div class="text-sm px-8 py-6">请勾选您需要结算的宝贝</div>
            <template #reference>
              <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" :disabled="!totalPrice.price">结算</van-button>
            </template>
          </van-popover>
        </div>
        <div class="" v-else>
          <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" :disabled="!totalPrice.price">结算</van-button>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
import { goodsList } from '@/api/list'
export default {
  data () {
    return {
      showPopover: false,
      value: 1,
      // isCheckedAll: false,
      checked: false,
      cartList: [], // 购物车的数据
      selectList: [] // 选中的数据
    }
  },
  created () {
    this.id = this.$route.query.id
  },
  computed: {
    totalPrice () {
      let total = {
        num: 0,
        price: 0
      }
      this.cartList.forEach(v => {
        if (v.checked) {
          total.num += parseInt(v.goodsNum)
          total.price += v.goodsNum * v.price
        }
      })
      return total
    },
    isCheckedAll () {
      return this.cartList.length == this.selectList.length;
    }
  },
  methods: {
    handleCheckItem (id) {
      let i = this.selectList.indexOf(id)
      if (i > -1) {
        this.selectList.splice(i, 1)
        return false
      }
      this.selectList.push(id)
    },
    handleCheckAll () {
      console.log(this.isCheckedAll)
      if (!this.isCheckedAll) {
        this.selectList = this.cartList.map((v) => {
          v.checked = true;
          return v.id;
        });
      } else {
        this.cartList.forEach((v) => {
          v.checked = false;
        });
        this.selectList = [];
      }
    },
    onChange () {
      console.log(this.value, 'change')
    },
    getGoodsList () {
      goodsList().then(res => {
        console.log(res)
        let list = res.data.records
        list.forEach((v) => {
          v["checked"] = true;
          this.selectList.push(v.id);
        });
        this.cartList = list
        console.log(this.cartList)
      }).catch(error => {
        console.log(error)
      })
    },
    handleChangeNum (value, item) {
      console.log(value, item)
      
    },
    handleChangeNum2 (value, item) {
      console.log(value, item)
    },
    handleDelGoods (id) {
    
      // if (this.selectList.length === 0) {
      //   this.$notify('请选择商品')
      //   return false
      // }

      this.$dialog.confirm({
        message: '确定要删除商品吗？'
      })
      .then(() => {
        // on confirm

        // this.cartList.filter((v) => {
        //   return this.selectList.indexOf(v.id) == -1
        // });
        console.log(11)
        this.cartList = this.cartList.filter(v => {
          console.log(v)
          if(v.id !== id) {
            return v
          }
        })
       
        let i = this.selectList.indexOf(id)
        if (i > -1) {
          this.selectList.splice(i, 1)
          return false
        }

        this.handleCheckAll()

      })
      .catch(() => {
        // on cancel
      });
      
    }
  },
  mounted () {
    this.getGoodsList()
  },
  watch: {
    $route () {
      this.id = this.$route.query.id
    }
  }
}
</script>

<style scoped lang="less">
// .order-header, .order-body {
  // .order-item:nth-child(1) { width: 80px; }
  // .order-item:nth-child(2) { width: 10%; }
  // .order-item:nth-child(3) { width: 30%; }
  // .order-item:nth-child(4) { width: 10%; }
  // .order-item:nth-child(5) { min-width: 60px; }
  // .order-item:nth-child(6) { width: 10%; }
  // .order-item:nth-child(7) { width: 10%; }
// }

// .order-body {

// }

@media (max-width: 768px) {
  .absolute-stepper {
    position: absolute;
    right: -15px;
    bottom: 10px;
    z-index: 1;
  }
}

.order-tr {
  position: relative;
  .order-item { min-width: 70px; }
  .order-item:nth-child(4) { min-width: 125px; }
  .order-item:nth-child(5) { min-width: 125px; }
}

.order-footer {
  position: absolute;
  bottom: 0;
  left: 0;right: 0;
  width: 100%;
}

.order-img-box {
  width: 90px;
  height: 90px;
  border-radius: 5px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
