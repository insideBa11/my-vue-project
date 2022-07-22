<template>
  <div class="blog-container">
    <layout>
      <blogList></blogList>
      <template #right>
        <div class="right">
          <blogRight></blogRight>
        </div>
      </template>
    </layout>
  </div>
</template>

<script>
import layout from '@/components/Layout'
import blogList from '@/views/Blog/components/BlogList'
import blogRight from '@/views/Blog/components/blogRight'

export default {
  name: "Blog",
  components: {
    layout,
    blogList,
    blogRight, // 右区域
  },
}
</script>

<style lang="less" scoped>
.blog-container {
  height: 100%;
}
</style>