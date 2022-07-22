<!-- 侧边栏列表 -->
<template>
  <ul class="sidebarList-container">
    <li v-for="(item,i) in list" :key="i">
      <span class="articleCate" @click="handlerClick(item)"
            :class="{active:cate === item.id || item.selected}">{{ item.name }}</span>
      <span class="articleCount" v-if="item.articleCount"
            :class="{active:cate === item.id || item.selected}">{{ item.articleCount }}篇</span>
      <sidebarList :list="item.children" @select="handlerClick"></sidebarList>
    </li>
  </ul>
</template>

<script>

export default {
  name: "sidebarList",
  props: {
    list: {
      // type: Array,
      default: () => []
    }
  },
  computed: {
    cate() {
      return +this.$route.params.categoryId;
    },

  },
  methods: {
    handlerClick(item) {
      if (this.cate !== item.id) {
        this.$emit("select", item);
      }
    },
  },
  updated() {
    // console.log(this.list);
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.sidebarList-container {
  transform: translateX(10px);
  height: 100%;
  padding-left: 5px;
  line-height: 2.2em;
  font-size: 15px;

  .active {
    color: @warn;
  }

  .articleCate {
    cursor: pointer;
    margin-right: 3px;
  }

  .articleCount {
    font-size: 10px;
  }
}
</style>