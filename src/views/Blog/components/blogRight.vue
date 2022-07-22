<!-- 博客页右部 -->
<template>
  <div class="blog-right-container" v-loading="isLoading">
    <h2 @click="handlerClick" :class="{active:isActive}">全部文章<span class="allArticleCount">{{
        this.allArticleCount
      }}</span></h2>
    <sidebar-list :list="list" @select="handlerSelect"></sidebar-list>
  </div>
</template>

<script>
import sidebarList from '@/views/Blog/components/SidebarList'
import fetchData from '@/mixins/fetchData'
import {getBlogTypes} from '@/api/blog'

export default {
  name: "blogRight",
  components: {
    sidebarList
  },
  // 组件混入
  mixins: [fetchData],
  methods: {
    async fetchData() {
      return await getBlogTypes()
    },
    handlerClick() {
      this.$router.push({
        name: 'CategoryBlog',
        params: {categoryId: -1},
      })
    },
    handlerSelect(item) {
      this.$router.push({
        name:'CategoryBlog',
        params:{
          categoryId:item.id
        }
      })
    }
  },
  computed: {
    list() {
      if (this.data) {
        return this.data;
      } else return null;
    },
    isActive() {
      return !this.$route.params.categoryId || +this.$route.params.categoryId === -1
    },
    allArticleCount() {
      if (!this.list) return;
      let nums = 0;
      for (const item of this.list) {
        nums += item.articleCount;
      }
      return `${nums}篇`;
    }
  },
  watch: {
    ["$route.params.categoryId"]:{
      async handler(){
        this.isLoading = true;
        this.data = await this.fetchData();
        this.isLoading = false;
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.blog-right-container {
  padding: 20px 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
  position: relative;

  h2 {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 10px;
    cursor: pointer;
    padding-left: 0;

    &.active {
      color: @warn;
    }

    .allArticleCount {
      font-size: 16px;
      margin-left: 5px;
    }
  }
}
</style>