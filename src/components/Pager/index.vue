<template>
  <div class="pager-container" v-if="pageNumber > 1">
    <a @click="changePage(1)" :class="current === 1 ? 'disabled' : ''" class="symbol">|&lt;&lt;</a>
    <a @click="changePage(current - 1)" :class="current === 1 ? 'disabled' : ''" class="symbol">&lt;&lt;</a>
    <a @click="changePage(n)" v-for="(n, i) of pages" :keys="i" :class="{active : current === n}">{{ n }}</a>
    <a @click="changePage(current + 1)" :class="current === pageNumber ? 'disabled' : ''" class="symbol">&gt;&gt;</a>
    <a @click="changePage(pageNumber)" :class="current === pageNumber ? 'disabled' : ''" class="symbol">&gt;&gt;|</a>
  </div>
</template>

<script>
export default {
  name: "pager",
  props: {
    // 当前页码
    current: {
      type: Number,
      default: 1
    },
    // 总数据量
    total: {
      type: Number,
      default: 100
    },
    // 页容量
    limit: {
      type: Number,
      default: 10
    },
    // 可见页码数
    visibleNumber: {
      type: Number,
      default: 11
    }
  },
  methods: {
    changePage(newPage) {
      if (newPage <= 1) newPage = 1;
      if (newPage >= this.pageNumber) newPage = this.pageNumber;
      if (newPage === this.current) return;
      this.$emit('change', newPage);
    }
  },
  computed: {
    // 页码数的最大值
    pageNumber() {
      return Math.ceil(this.total / this.limit)
    },
    // 显示的页码列表
    pages() {
      let min = this.visibleMin;
      if (this.pageNumber > this.visibleNumber && this.visibleMax - min < this.visibleNumber - 1) {
        min = this.visibleMax - this.visibleNumber + 1
      }
      const arr = [];
      for (let i = min; i <= this.visibleMax; i++) {
        arr.push(i)
      }
      return arr;
    },
    // 最小页码数
    visibleMin() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      return min = min <= 1 ? 1 : min;
    },
    // 最大页码数
    visibleMax() {
      let max = this.visibleMin + this.visibleNumber - 1;
      return max >= this.pageNumber ? this.pageNumber : max;
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;

  a {
    padding: 5px;
    text-align: center;
    width: 25px;
    height: 25px;
    line-height: 25px;
    cursor: pointer;
    margin: 0 5px;
    color: @primary;
    border: 1px solid @gray;

    &:hover {
      font-weight: bold;
    }
  }


  .disabled {
    color: @lightWords;
    cursor: not-allowed;

    &:hover {
      font-weight: normal;
    }
  }

  .active {
    border: none;
    color: @words;
    font-weight: bold;
    cursor: text;
  }

  .symbol {
    border: none;
  }
}
</style>
