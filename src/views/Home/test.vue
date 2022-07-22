<template>
  <div>
    <div ref="test"></div>
    <h1 ref="title">Home{{ count }}</h1>
    <button @click="count++">count+1</button>
  </div>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      count: 0,
    }
  },
  beforeCreate() {
    console.log('beforeCreate', this.banners)
  },
  created() {
    console.log('create', this.banners)
  },
  beforeMount() {
    console.log('beforeMount', this.$refs.test)
  },
  mounted() {
    console.log('mounted', this.$refs.test)
  },
  // beforeUpdate绑定的数据需要被页面所使用，如果绑定的数据没被使用，则不会建立依赖，就算数据改动也不会出发函数
  beforeUpdate() {
    console.log('beforeUpdate', this.$refs.title.innerText)
  },
  updated() {
    console.log('upDate', this.$refs.title.innerText)
  },
  beforeDestroy() {
    console.log('beforeDestroy')
  },
  destroyed() {
    console.log('destroyed')
  }
}
</script>

<style scoped>

</style>