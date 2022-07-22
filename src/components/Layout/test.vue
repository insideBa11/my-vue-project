<template>
  <div class="test">
    <Layout>
      <template #left>
        <div class="left">
          <site-aside></site-aside>
        </div>
      </template>
      <div class="mid"></div>
      <template #right>
        <div class="right"></div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout';
import SiteAside from '@/components/SiteAside'

export default {
  components: {
    Layout,
    SiteAside
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.test {
  width: 100%;
  height: 100vh;
  background-color: black;
  //margin: 100px auto;
}
</style>