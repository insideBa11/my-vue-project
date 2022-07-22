<template>
  <div class="test">
    <Menu></Menu>
  </div>
</template>

<script>
import Menu from '@/components/SiteAside/Menu/index';
import Contact from '@/components/SiteAside/Contact'

export default {
  components: {
    Menu,
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.test {
  padding-top: 100px;
  width: 300px;
  height: 400px;
  background-color: @dark;
  //border: 1px solid #000;
  margin: 100px auto;
}
</style>