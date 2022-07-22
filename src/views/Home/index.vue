<template>
  <div class="home-container" ref="container" :style="{top}" v-loading="isLoading">
    <ImageLoader
        v-for="item in data"
        :key="item.id"
        class="imgArea"
        :src="item.bigImg"
        :placeholder="item.midImg"
    ></ImageLoader>
    <!--    设置锚点div，切换图片    -->
    <ul class="anchor">
      <li
          v-for="(item, i) in data"
          :key="item.id"
          @click="toSwitch(i)"
          :class="{active:index === i}"
      ></li>
    </ul>
    <BGM v-drag></BGM>
  </div>
</template>

<script>
import ImageLoader from '@/components/ImageLoader'
import BGM from '@/components/BGM'
import drag from '@/directives/drag'
import {mapActions, mapState} from 'vuex'

export default {
  name: "index",
  components: {
    ImageLoader,
    BGM,
  },
  data() {
    return {
      containerHeight: 0,
      isWheel: false,
      index: 0, // 目前显示第几张照片
    }
  },
  mounted() {
    this.handleAsyncSetData()
    // 在生成DOM之后，记录下container的高度
    this.containerHeight = this.$refs.container.clientHeight

    // 给图片容器绑定 滑动切换图片事件
    this.$refs.container.addEventListener('wheel', this.handlerWheel)

    // 当页面大小发生改变时，更新容器高度
    window.addEventListener('resize', this.handlerResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handlerResize);
    this.$refs.container.removeEventListener('wheel', this.handlerWheel);
  },
  methods: {
    ...mapActions('banners', ['asyncSetData']),
    async handleAsyncSetData() {
      await this.asyncSetData();
    },
    toSwitch(i) {
      this.index = i;
    },
    handlerWheel(e) {
      const len = this.data.length;
      if (len < 2) return;
      if (this.index < len - 1 && e.deltaY > 5 && !this.isWheel) {
        this.index++;
        this.isWheel = true;
        setTimeout(() => {
          this.isWheel = false;
        }, 1100)
      }
      if (this.index > 0 && e.deltaY < -5 && !this.isWheel) {
        this.index--;
        this.isWheel = true;
        setTimeout(() => {
          this.isWheel = false;
        }, 1100)
      }
    },
    handlerResize() {
      this.containerHeight = this.$refs.container.clientHeight
    },
  },
  computed: {
    ...mapState('banners', ['data', 'isLoading']),
    // 控制container的滑动
    top() {
      return this.index * -this.containerHeight + 'px';
    },
  },
  directives: {
    drag,
  },
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";

.home-container {
  height: 100%;
  width: 100%;
  position: relative;
  transition: 1s;
  background-color: @dark;

  .imgArea {
    width: 110%;
    height: 100%;
  }

  .anchor {
    position: fixed;
    top: 40vh;
    right: 3vh;

    li {
      margin: 20px;
      width: 8px;
      height: 8px;
      border: 2px solid @words;
      background-color: @words;
      border-radius: 50%;
      transition: 1s;
      cursor: pointer;

      &:hover {
        background-color: @riceWhite;
        width: 15px;
        height: 15px;
      }

      &.active {
        border: 2px solid @riceWhite;
      }
    }
  }
}
</style>