<template>
  <div className="test">
    <Empty class="empty-container"></Empty>
  </div>
</template>

<script>
import Empty from '@/components/Empty'

export default {
  components: {
    Empty,
  }
}
</script>

<style scoped lang="less">
.test {
  width: 500px;
  height: 500px;
  border: 1px solid black;
  margin: 100px auto;

}
</style>