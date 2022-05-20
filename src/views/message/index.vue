<template>
  <div class="message container">
    <div class="message-list">
      <div class="message-item">
        <div class="message-title">
          <h2>标题</h2>
          <div class="message-time">2022-05-05 16:30:30</div>
        </div>
        <div class="message-content mb-12 text--2-lines">
          持有版权艺术品的用户，你有一份
        </div>
        <div class="btn-message-detail text-right cursor-pointer">查看详情</div>
      </div>
      <div class="message-item">
        <div class="message-title">
          <h2>标题</h2>
          <div class="message-time">2022-05-05 16:30:30</div>
        </div>
        <div class="message-content mb-12 text--2-lines">
          持有版权艺术品的用户，你有一份
        </div>
        <div class="btn-message-detail text-right cursor-pointer">查看详情</div>
      </div>
      <div class="message-item">
        <div class="message-title">
          <h2>标题</h2>
          <div class="message-time">2022-05-05 16:30:30</div>
        </div>
        <div class="message-content mb-12 text--2-lines">
          持有版权艺术品的用户，你有一份
        </div>
        <div class="btn-message-detail text-right cursor-pointer">查看详情</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
     
    }
  }
}
</script>

<style lang="less" scoped>

.message-item {
  margin: 30px 20px;
  padding: 20px;
  font-size: 14px;
  overflow: hidden;
  border-radius: 5px;
  border: 1px solid #ddd;
}

.message-title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  h2 {
    font-size: 16px;
  }
  .message-time {
    flex: none;
  }
}
</style>
