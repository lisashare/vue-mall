<template>
  <div class="artist">
    <ModuleTitle title="艺术家"></ModuleTitle>
    <div class="container p-12 md-p-32 lg-p-48 pr-0 md-pr-20 lg-pr-36">
      <div class="artist-wrap row no-gutters">
        <div class="col-12 col-md-6 col-lg-3 mb-24 md-i-p-0 lg-i-px-15" v-for="item in list" :key="item.uuid">
          <div class="artist-item mx-8 p-24 mb-24 cursor-pointer">
            <div class="artist-info flex items-center mb-12">
              <div class="artist-avatar mr-12"><img :src="item.avatar" alt=""></div>
              <div>
                <div class="artist-name">{{ item.nickname }}</div>
                <div class="artist-fans text-sm">{{ convertNum(item.passiveNum) }} 粉丝</div>
              </div>
            </div>
            <div class="artist-desc text--2-lines mb-12 text-sm">
              朝辞白帝彩云间，千里江陵一日还。两岸猿声啼不住，轻舟已过万重山。
            </div>
            <div class="tile">
              <div class="img-wrap" v-if="item.commodityVO">
                <img :src="item.commodityVO.cover" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    <pagination v-show="total>0" :total="total" :page.sync="pageNum" :limit.sync="pageSize" />
    </div>
  </div>
</template>

<script>
import ModuleTitle from '@/components/ModuleTitle/index.vue'
import { getUser } from '@/api/list' 
import { convertNum } from '@/utils/util'
export default {
  components: { ModuleTitle },
  data () {
    return {
       // 表格数据
      list: [],
      // 总条数
      total: 0,
      pageNum: 1,
      pageSize: 10
    }
  },
  mounted () {
    this.getUser()
  },
  methods: {
    convertNum,
    getUser () {
      getUser().then(res => {
        this.list = res.data.records
        this.total = res.data.total
      })
    }
  }
}
</script>

<style lang="less" scoped>
.artist-item {
  box-shadow: 0 0 5px #e5e5e5;
}
.artist-avatar {
  .rem(width, 54);
  .rem(height, 54);
  border-radius: 50%;
  box-shadow: 0 0 5px #e5e5e5;
  .mixin_img_cover();
  img {
    border-radius: 50%;
  }
}

.artist {
  .img-wrap {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    overflow: hidden;
    transition: transform .5s ease-in-out;
    .mixin_img_cover();
  }

  .tile {
    position: relative;
    padding-top: 100%;
    border-radius: 5px;
    overflow: hidden;
  }

  .artist-item:hover {
    .img-wrap {
      transform: scale(1.6);
    }
  }
}
</style>
