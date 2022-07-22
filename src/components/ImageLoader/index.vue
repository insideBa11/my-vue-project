<template>
  <div class="ImageLoader-container">
    <img class="placeholder" v-if="placeholderShow" :src="placeholder">
    <img :src="src" :style="{opacity:originOpacity, transition: `${duration}ms`}" @load="isloaded">
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      placeholderShow: true,
      originShow: false,
    }
  },
  computed: {
    originOpacity() {
      return this.originShow ? 1 : 0;
    }
  },
  props: {
    src: {
      type: String,
      require: true
    },
    placeholder: {
      type: String,
      require: true
    },
    duration: {
      type: Number,
      default: 5000
    }
  },
  methods: {
    isloaded() {
      this.originShow = true;
      setTimeout(() => {
        this.placeholderShow = false;
        this.$emit("load");
      }, this.duration);
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";

.ImageLoader-container {

  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  img {
    .self-fill();
    object-fit: cover;
  }

  .placeholder {
    filter: blur(2vw);
  }

}
</style>