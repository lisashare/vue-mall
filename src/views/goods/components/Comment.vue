<template>
  <div class="comment md-px-48 px-12">
    <div class="comment-item py-24">
      <div class="comment-info flex justify-between">
        <div class="user flex">
          <div class="avatar rounded-circle overflow-hidden mr-10"><img class="w-full h-full" src="@/assets/images/1.png" alt=""></div>
          <div class="user-info">
            <div class="user-nickname text-md">昵称</div>
            <div class="publish-time text-grey-600 text-sm">时间</div>
          </div>
        </div>
        <div class="comment-stats flex text-grey-600 text-sm">
          <div class="likes mr-12">赞</div>
          <div class="reply-action">回复</div>
        </div>
      </div>
      <div class="comment-content pl-48 text-sm">
        <p class="py-12">查看更多评论</p>
        <div class="replies p-12">
          <div class="replay">
            <span class="replier">回复的人名字：</span>
            <span class="reply-content">回复的内容</span>
          </div>
        </div>
      </div>
    </div>
    <div class="comment-item py-24">
      <div class="comment-info flex justify-between">
        <div class="user flex">
          <div class="avatar rounded-circle overflow-hidden mr-10"><img class="w-full h-full" src="@/assets/images/1.png" alt=""></div>
          <div class="user-info">
            <div class="user-nickname text-md">昵称</div>
            <div class="publish-time text-grey-600 text-sm">时间</div>
          </div>
        </div>
        <div class="comment-stats flex text-grey-600 text-sm">
          <div class="likes mr-12">赞</div>
          <div class="reply-action">回复</div>
        </div>
      </div>
      <div class="comment-content pl-48 text-sm">
        <p class="py-12">查看更多评论</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      commentList: []
    }
  }
}
</script>

<style scoped lang="less">
.comment-item {
  border-bottom: 1px solid #eee;
}
.avatar {
  width: 38px;
  height: 38px;
}

.replies {
  background-color: var(--color-neutral-100);
}
</style>
