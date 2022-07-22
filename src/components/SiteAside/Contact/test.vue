<template>
  <div class="test">
    <Contact></Contact>
  </div>
</template>

<script>
import Contact from '@/components/SiteAside/Contact/index'

export default {
  components: {
    Contact
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
  border: 1px solid #000;
  margin: 100px auto;
}
</style>