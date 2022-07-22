<template>
  <img class="avatar-container" :src="url" :style="styleObj">
</template>

<script>
export default {
  name: "Avatar",
  props: {
    url: {
      type: String,  // 指定属性类型
      required: true, // 是否为必填项
    },
    size: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      styleObj: {
        width: this.size + 'px',
        height: this.size + 'px'
      }
    }
  }
}
</script>

<style scoped lang="less">
.avatar-container {
  border-radius: 50%;
  object-fit: cover;
  display: block;
  border-radius: 50%;
}
</style>