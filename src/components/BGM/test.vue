<template>
  <div>
    <h1>App组件</h1>
    <BGM :top="100" v-drag :right="rightNum"></BGM>
  </div>
</template>

<script>
import BGM from '@/components/BGM'

export default {
  components: {
    BGM
  },
  data() {
    return {
      right: -90,
      isIN: 0,
      isUp: 0,
    }
  },
  computed: {
    rightNum() {
      console.log(this.right)
      return this.right;
    }
  },
  directives: {
    drag: function (el) {
      let dragBox = el;
      dragBox.onmousedown = e => {
        //算出鼠标相对元素的位置
        let disY = e.clientY - dragBox.offsetTop;
        document.onmousemove = e => {
          //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
          let top = e.clientY - disY;
          //移动当前元素
          dragBox.style.top = top + "px";
        };
        document.onmouseup = e => {
          //鼠标弹起来的时候不再移动
          document.onmousemove = null;
          //预防鼠标弹起来后还会循环（即预防鼠标放上去的时候还会移动）
          document.onmouseup = null;
        };
      };
    }
  },
}
</script>

<style scoped lang="less">
</style>


