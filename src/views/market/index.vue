<template>
  <div class="p-12 md-p-32 lg-p-48 pr-0 md-pr-20 lg-pr-36">
    <div class="row no-gutters">
      <div class="col-6 col-lg-3 col-xxl-2 md-pr-12" v-for="item in list" :key="item.id" v-if="list.length">
        <div class="single-goods overflow-hidden shadow--medium hover-shadow-lg transition-all duration-300 mb-24 rounded-lg rounded-t-none">
          <div class="image-box rounded-lg rounded-b-none overflow-hidden" @click="handleToGoods(item.id)">
            <img src="@/assets/images/t3_2x3.png" alt="">
            <div class="tag flex">
              <span class="ml-10"><van-icon name="award-o" /></span>
            </div>
          </div>
          <div class="desc px-8 md-px-24 pt-32 md-pt-36">
            <div class="desc-avatar" @click="handleToArtist(item.author.id)">
              <img src="@/assets/images/2.png" alt="">
            </div>
            <div class="desc-name">
              <div class="flex justify-between items-center">
                <div class="name text--1-line font-bold text-md opacity--hinted" v-if="item.author">{{item.author.nickname}}</div>
                <div class="flex-none">
                  <div class="price text-lg md-text-xl font-bold">￥<span class="inline-block" v-html="convertSup(item.price)"></span></div>
                </div>
              </div>
              <h2 class="title text--1-line font-bold text-md mt-6" v-if="item.topic">{{item.topic.name}}</h2>
              <p class="text--2-lines text-sm mt-6 opacity-75" v-if="item.topic">{{item.topic.description}}</p>
            </div>
            <ul class="clearfix border-top mt-12 py-12">
              <li class="float-left mr-12">
                <van-icon name="friends-o" />
                <span class="num">123</span>
              </li>
              <li class="float-left mr-12"> 
                <van-icon name="chat-o" />
                <span class="num">123</span>
              </li>
              <li class="float-right">
                <van-icon name="like-o" /> 
                <span class="num">123</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- <div class="col-6 col-lg-3 col-xxl-2 md-pr-12">
        <div class="single-goods overflow-hidden shadow--medium hover-shadow-lg transition-all duration-300 mb-24 rounded-lg rounded-t-none">
          <div class="image-box rounded-lg rounded-b-none overflow-hidden">
            <img src="@/assets/images/t3_2x3.png" alt="">
            <div class="tag flex">
              <span class="ml-10"><van-icon name="award-o" /></span>
            </div>
          </div>
          <div class="desc px-8 md-px-24 pt-32 md-pt-36">
            <div class="desc-avatar">
              <img src="@/assets/images/2.png" alt="">
            </div>
            <div class="desc-name">
              <div class="flex justify-between items-center">
                <div class="name text--1-line font-bold text-md opacity--hinted">名画戏仿系列，名画戏仿系列。经典的耶稣受难场景中，告</div>
                <div class="flex-none">
                  <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" size="small">FREE</van-button>
                </div>
              </div>
              <h2 class="title text--1-line font-bold text-md mt-6">名画戏仿系列，名画戏仿系列。经典的耶稣受难场景中，告诉我天使长圣拉斐尔穿的衣服是什么颜色。</h2>
              <p class="text--2-lines text-sm mt-6 opacity-75">名画戏仿系列。经典的耶稣受难场景中，告诉我天使长圣拉斐尔穿的衣服是什么颜色。经典的耶稣受难场景中，耶稣实际上长着约翰·列侬的面孔</p>
            </div>
            <ul class="clearfix border-top mt-12 py-12">
              <li class="float-left mr-12">
                <van-icon name="friends-o" />
                <span class="num">123</span>
              </li>
              <li class="float-left mr-12"> 
                <van-icon name="chat-o" />
                <span class="num">123</span>
              </li>
              <li class="float-right">
                <van-icon name="like-o" />
                <span class="num">123</span>
              </li>
            </ul>
          </div>
        </div>
      </div> -->
    </div>
  </div>
    
  </div>
</template>

<script>
import { convertSup } from '@/utils/util'
import { listTopic } from '@/api/list'

export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    convertSup,
    getListTopic () {
      listTopic().then(res => {
        console.log(res)
        this.list = res.data
      }).catch(error => {
        console.log(error)
      })
    },
    handleToArtist (id) {
      this.$router.push('/user/' + id)
    },
    handleToGoods (id) {
      this.$router.push('/goods/' + id)
    }
  },
  mounted () {
    this.getListTopic()
  }
}
</script>

<style lang="less" scoped>
.single-goods {
  margin-right: 12px;
  cursor: pointer;
  .image-box {
    position: relative;
    padding-top: 75%;
    overflow: hidden;
    img {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .desc {
    position: relative;
  }
  .desc-avatar {
    position: absolute;
    top: 0;
    left: 24px;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    border: 2px solid #fff;
    transform: translateY(-50%);
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .tag {
    position: absolute;
    right: 10px;
    bottom: 4px;
    color: #fff;
    z-index: 1;
  }
  .price {
    /deep/sup {
      position: relative;
      line-height: 0;
      top: -6px;
      font-size: 14px;
      vertical-align: baseline;
    }
  }
}

.single-goods:hover {
  .title {
    color: var(--color-primary-600)
  }
  transform: translateY(-10px);
}

@media (max-width: 768px) {
  .single-goods {
    .desc-avatar {
      left: 8px;
      width: 48px;
      height: 48px;
    }

    .price {
      /deep/sup {
        top: -4px;
      }
    }
  }
}
</style>
