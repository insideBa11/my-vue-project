<template>
  <div class="test">
    <ImageLoader
        src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
        placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
        @load="loadCompleted"
    />
  </div>
</template>

<script>
import ImageLoader from '@/components/ImageLoader'
export default {
  components:{
    ImageLoader,
  },
  methods:{
    loadCompleted() {
      console.log('img is loadding completed')
    }
  }
}
</script>

<style scoped lang="less">
.test{
  width: 700px;
  height: 500px;
  border: 1px solid #000;
  margin: 100px auto;
}
</style>