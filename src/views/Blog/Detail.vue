<!-- 文章页细节 -->
<template>
  <div class="detail-container">
    <Layout>
      <div class="mid" ref="mid">
        <div class="blog-detail-container" v-loading="isLoading">
          <BlogDetail ref="blogDetail" v-if="blogData" :blog-data="blogData"
                      @skipComment="handleSkipComment"></BlogDetail>
        </div>
        <hr v-if="blogData">
        <div class="blog-comment-container">
          <BlogComment v-if="blogData"></BlogComment>
        </div>
      </div>
      <template #right>
        <div class="right" v-loading="isLoading">
          <BlogTOC v-if="blogData" :toc-data="blogData.toc"></BlogTOC>
        </div>
      </template>
      <ToTop v-if="showToTop" class="totop" @backScrollTop="handleTopScroll"></ToTop>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout';
import BlogTOC from '@/views/Blog/components/BlogTOC';
import BlogDetail from '@/views/Blog/components/BlogDetail';
import fetchData from '@/mixins/fetchData';
import {getBlog, getComments} from '@/api/blog';
import BlogComment from '@/views/Blog/components/BlogComment';
import eventBus from '@/eventBus'
import ToTop from '@/components/ToTop';

export default {
  name: "Detail",
  components: {
    Layout,
    BlogTOC,
    BlogDetail,
    BlogComment,
    ToTop,
  },
  mixins: [fetchData],
  data() {
    return {
      // scrollTop: 0,
      showToTop: false,
      isShowToTopLimit: 500,
    };
  },
  computed: {
    blogData() {
      if (this.data) {
        document.title = this.$route.meta.title + ' - ' + this.data.title;
        return this.data
      } else return null;
    },
  },
  methods: {
    async fetchData() {
      return await getBlog();
    },
    handleScroll() {
      // eventBus.$on('blogScroll',)
      eventBus.$emit('blogScroll');
    },
    // 点击评论，页面下滑到评论组件
    handleSkipComment() {
      const blogDetailContainer = document.getElementsByClassName('blog-detail-container')[0]
      const scrollTargetTop = blogDetailContainer.getBoundingClientRect().bottom;
      this.$refs.mid.scrollTop = scrollTargetTop
    },
    handleTopScroll() {
      this.$refs.mid.scrollTop = 0;
    },
    isShowToTop() {
      this.showToTop = this.$refs.mid.scrollTop > this.isShowToTopLimit
    },
    handleIsShowToTop() {
      eventBus.$on('blogScroll', this.isShowToTop)
    },
  },
  mounted() {
    this.$refs.mid.addEventListener("scroll", this.handleScroll)
    this.handleIsShowToTop();
  },
  beforeDestroy() {
    this.$refs.mid.removeEventListener("scroll", this.handleScroll)
  },
};
</script>

<style lang="less" scoped>
.detail-container {
  height: 100%;
  overflow: hidden;

  .mid {
    flex: auto;
    padding: 0 20px;
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    position: relative;
    scroll-behavior: smooth;
  }

  .right {
    width: 100%;
    position: relative;
  }

  .blog-comment-container {
    margin-bottom: 100px;
  }

}
</style>