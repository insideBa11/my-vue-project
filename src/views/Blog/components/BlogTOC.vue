<!-- 博客目录 -->
<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <sidebarList ref="test" :list="this.tocWithSelect" @select="handlerSelect"></sidebarList>
  </div>
</template>

<script>
import sidebarList from '@/views/Blog/components/SidebarList';
import eventBus from '@/eventBus'
import debounce from '@/utils/debounce';

export default {
  name: "BlogTOC",
  props: {
    tocData: {
      type: Array,
      require: true,
    },
  },
  components: {
    sidebarList,
  },
  data() {
    return {
      activeAnchor: "",
      doms: [],
      dis: 210, // 标题距离视口顶端多远触发select
    };
  },
  methods: {
    handlerSelect(item) {
      // 锚链接无刷新跳转
      location.hash = '';
      location.hash = item.anchor;
      // setTimeout(() => {
      //   this.activeAnchor = item.anchor;
      // }, 500)
    },
    setSelected() {
      this.activeAnchor = "";
      for (const dom of this.doms) {
        if (dom.getBoundingClientRect().top > 0 && dom.getBoundingClientRect().top <= this.dis) {
          this.activeAnchor = dom.id;
          return;
        } else if (dom.getBoundingClientRect().top > this.dis) {
          return;
        } else if (dom.getBoundingClientRect().top < 0) {
          this.activeAnchor = dom.id;
        }
      }
    },
  },
  created() {
    // 获取dom
    const getIdDoms = (data) => {
      for (const item of data) {
        this.doms.push(document.getElementById(item.anchor));
        if (item.children) {
          getIdDoms(item.children);
        }
      }
    };
    getIdDoms(this.tocData);

    // 给组件绑定 blogScroll 事件
    this.setSelectedDebounce = debounce(this.setSelected, 50);
    eventBus.$on('blogScroll', this.setSelectedDebounce);
  },
  destroyed() {
    eventBus.$off('blogScroll', this.setSelectedDebounce);
  },
  computed: {
    // isWithSelectedData() {
    //   const selectedData = this.tocData;
    //   const addSelected = (data) => {
    //     for (const item of data) {
    //       item.selected = item.anchor === this.activeAnchor;
    //       if (item.children) {
    //         addSelected(item.children);
    //       }
    //     }
    //   };
    //   addSelected(selectedData);
    //   console.log(selectedData)
    //   return selectedData;
    // },
    // 根据toc属性以及activeAnchor得到带有isSelect属性的toc数组
    tocWithSelect() {
      const getTOC = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          selected: t.anchor === this.activeAnchor,
          children: getTOC(t.children),
        }));
      };
      return getTOC(this.tocData);
    },
  },
};
</script>

<style lang="less" scoped>

.blog-toc-container {
  margin-top: 25px;

  h2 {
    letter-spacing: 2px;
    padding-left: 0;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 10px;
    cursor: pointer;
  }

  ul {
    //transform: translateX(5px);
  }
}
</style>