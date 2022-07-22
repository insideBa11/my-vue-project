<template>
  <div class="empty-container">
    <Icon class="empty" type="empty"></Icon>
    <span class="text">{{ text }}</span>
  </div>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  name: "index",
  components: {
    Icon
  },
  props: {
    text: {
      type: String,
      default: '无数据'
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.empty-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: @lightWords;

  .empty {
    width: 60%;
    height: 60%;
    margin: -5% auto 0;
  }

  .text {
    margin: -5% auto 0;
    font-size: 20px;
  }
}

</style>