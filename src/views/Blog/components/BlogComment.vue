<template>
  <div class="blog-comment-container">
    <MessageBoard v-if="messageData"
                  :list="messageData.rows"
                  title="评论列表"
                  :sub-title="messageData.total+''"
                  @submit="handleSubmit"
    ></MessageBoard>
  </div>
</template>

<script>
import MessageBoard from '@/components/MessageBoard'
import {getComments, postComment} from '@/api/blog'
import fetchData from '@/mixins/fetchData'

export default {
  name: "BlogComment",
  components: {
    MessageBoard
  },
  mixins: [fetchData],
  methods: {
    async fetchData() {
      return await getComments()
    },
    handleSubmit(msg, callback) {
      postComment(msg).then(r => {
        this.data.rows.unshift(r);
        this.data.total++;
        callback('提交成功');
      })
    }
  },
  computed: {
    messageData() {
      if (this.data) return this.data;
      else return null;
    }
  }
}
</script>

<style lang="less" scoped>

</style>