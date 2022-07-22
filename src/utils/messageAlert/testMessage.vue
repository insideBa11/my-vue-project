<template>
  <div class="testMessage-container">
    <button @click="handleClickSuccess" class="success">success</button>
    <button @click="handleClickError" class="wrong">error</button>
    <button @click="handleClickWarn" class="warn">warn</button>
  </div>
</template>

<script>
import showMessage from '@/utils/messageAlert/showMessage'

export default {
  name: "testMessage",
  methods: {
    handleClickSuccess() {
      const test = document.getElementsByClassName('testMessage-container')[0];
      showMessage('成功', 'success', 2000, test)
    } ,
    handleClickError() {
      const test = document.getElementsByClassName('testMessage-container')[0];
      showMessage('错误', 'error', 2000, test)
    },
    handleClickWarn() {
      const test = document.getElementsByClassName('testMessage-container')[0];
      showMessage('', 'warn', 2000, test)
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";

.testMessage-container {
  width: 300px;
  height: 400px;
  border: 1px solid black;
  box-sizing: border-box;
  background-color: #0077aa;
  .self-center();
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  button {
    height: 30px;
  }
}
</style>