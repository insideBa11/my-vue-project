<template>
  <div>
    <Pager :total="total" :limit="limit" :visible-number="visibleNumber" :current="current" @change="handleChange"/>
  </div>
</template>

<script>
import Pager from '@/components/Pager'

export default {
  components: {
    Pager
  },
  methods: {
    handleChange(newPage) {
      this.current = newPage;
    }
  },
  data() {
    return {
      total: 1000,
      limit: 20,
      visibleNumber: 9,
      current: 1
    }
  }
}
</script>

<style scoped lang="less">
</style>


