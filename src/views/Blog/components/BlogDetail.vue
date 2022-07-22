<!-- 博客详情 -->
<template>
  <div class="blog-detail-container">
    <h1>{{ blogData.title }}</h1>
    <div class="aside">
      <span>日期: {{ blogData.createDate }}</span>
      <span>浏览: {{ blogData.scanNumber }}</span>
      <a @click="skipComment">评论: {{ blogData.commentNumber }}</a>
      <router-link :to="{
        name:'CategoryBlog',
        params:{
          categoryId:blogData.category.id
        }
      }">{{ blogData.category.name }}
      </router-link>
    </div>
    <div v-html="blogData.htmlContent" class="markdown-body"></div>
  </div>
</template>

<script>
import Markdown from '@/styles/MarkDown.css'
import loading from '@/directives/Loading'

export default {
  name: "BlogDetail",
  props: {
    blogData: {
      type: Object,
      require: true,
    },
  },
  methods: {
    skipComment() {
      this.$emit('skipComment')
    },
  },
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.blog-detail-container {


  .aside {
    font-size: 12px;
    color: @lightWords;

    span,
    a {
      margin-right: 15px;
      cursor: pointer;
    }
  }

  .markdown-body {
    margin: 2em 0;
  }
}
</style>