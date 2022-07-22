<template>
  <div class="totop-container" @click="handleClick">
    <div class="text">
      TOP
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon';

export default {
  name: "index",
  components: {
    Icon,
  },
  methods: {
    handleClick: function () {
      this.$emit('backScrollTop')
    },
  },
}
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";

.totop-container {
  position: fixed;
  color: @riceWhite;
  bottom: 50px;
  right: 50px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  //border: 1px solid #000;
  cursor: pointer;
  z-index: 999;
  box-sizing: border-box;
  background-color: @lightWords;

  .text {
    .self-center()
  }

}
</style>