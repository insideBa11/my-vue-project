<template>
  <div class="blog-list-container" ref="container" v-loading="isLoading">
    <ul v-for="item in blogsData">
      <li>
        <div class="thumb" v-if="item.thumb">
          <router-link :to="{
            name:'Detail',
            params:{
              id:item.id
            }
          }">
            <img
                :src="item.thumb"
                :alt="item.title"
                :title="item.title"
            />
          </router-link>
        </div>
        <div class="main">
          <router-link :to="{
            name:'Detail',
            params:{
              id:item.id
            }
          }">
            <h2>{{ item.title }}</h2>
          </router-link>
          <div class="aside">
            <span>日期：{{ item.createDate }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论：{{ item.commentNumber }}</span>
            <router-link :to="{
              name:'CategoryBlog',
              params:{
                categoryId: item.category.id,
              }
            }" class="">{{ item.category.name }}
            </router-link>
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <Pager v-if="blogsData" :total="data.total" :limit="routeInfo.routeLimit" @change="handleChange"
           :current="routeInfo.routePage"/>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData';
import {getBlogs} from '@/api/blog';
import Pager from '@/components/Pager';

export default {
  name: "BlogList",
  components: {
    Pager
  },
  mixins: [fetchData],
  methods: {
    async fetchData() {
      return await getBlogs(this.routeInfo.routePage, this.routeInfo.routeLimit, this.routeInfo.blogCategory);
    },
    handleChange(newPage) {
      // 编程式导航
      // $router 控制页面跳转
      // 命名的路由，并加上参数，让路由建立 url
      // router.push({ name: 'user', params: { username: 'eduardo' },query: { plan: 'private' }})
      if (this.routeInfo.blogCategory === -1) {
        this.$router.push({name: 'Blog', query: {page: newPage + ""}});
      } else {
        this.$router.push({
          name: 'CategoryBlog',
          params: {cate: this.routeInfo.blogCategory + ""},
          query: {page: newPage + ""}
        });
      }
    }
  },
  computed: {
    blogsData() {
      if (this.data) return this.data.rows;
      else return null;
    },
    routeInfo() {
      const routePage = +this.$route.query.page || 1;
      const routeLimit = +this.$route.query.limit || 10;
      const blogCategory = +this.$route.params.categoryId || -1;
      return {
        routePage,
        routeLimit,
        blogCategory
      };
    }
  },
  // 监听
  watch: {
    // 写 $route ，则会监听 $route
    async $route() {
      this.isLoading = true;
      // 滚动高度设置为0
      this.$refs.container.scrollTop = 0;
      this.data = await this.fetchData();
      this.isLoading = false;
    }
    // $data(){} 监听 this.data
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.blog-list-container {
  flex: auto;
  line-height: 1.7;
  padding: 20px;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  scroll-behavior: smooth;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
  }
}

li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;

  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;

    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }

  .main {
    flex: 1 1 auto;

    h2 {
      margin: 0;
    }
  }

  .aside {
    font-size: 12px;
    color: @lightWords;

    span {
      margin-right: 15px;
    }
  }

  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>