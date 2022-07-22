<template>
  <div class="layout-container">
    <slot class="left" name="left"></slot>
    <slot class="mid"></slot>
    <slot class="right" name="right"></slot>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style lang="less" scoped>
.layout-container {
  width: 100%;
  height: 100%;
  display: flex;

  .left {
    flex: 0 0 250px;
  }

  .right {
    flex: 0 0 240px;
  }

  .mid {
    flex: 1 1 auto;
    width: auto;
    height: auto;
    position: absolute;
  }
}
</style>