<template>
  <div ref="mesageContainer" class="message-container" v-loading="!data">
    <MessageBoard v-if="data"
                  :list="data.rows"
                  title="评论列表"
                  :sub-title="data.total+''"
                  @submit="handleSubmit"></MessageBoard>
    <ToTop v-show="showToTop" @backScrollTop="handleBackScrollTop"></ToTop>
  </div>
</template>

<script>
import MessageBoard from "@/components/MessageBoard";
import {getComments, postComment} from '@/api/blog'
import fetchData from '@/mixins/fetchData'
import ToTop from "@/components/ToTop";

export default {
  name: "Message",
  components: {
    MessageBoard,
    ToTop
  },
  mixins: [fetchData],
  data() {
    return {
      showToTop: false,
      isShowToTopLimit: 300,
    }
  },
  methods: {
    async fetchData() {
      return await getComments();
    },
    handleSubmit(msg, callback) {
      postComment(msg).then(r => {
        this.data.rows.unshift(r);
        this.data.total++;
        callback('评论成功');
      })
    },
    handleBackScrollTop() {
      this.$refs.mesageContainer.scrollTop = 0;
    },
    changeShowToTop() {
      if(this.$refs.mesageContainer.scrollTop > this.isShowToTopLimit){
        this.showToTop = true;
      }else this.showToTop = false;
    }
  },
  mounted() {
    this.$refs.mesageContainer.addEventListener('scroll', this.changeShowToTop)
  },
  beforeDestroy(){
    this.$refs.mesageContainer.removeEventListener('scroll', this.changeShowToTop)
  }
}
</script>

<style lang="less" scoped>
.message-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 20px 0 50px 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

.message-board-container {
  width: 700px;
  margin: 0 auto;
}
</style>