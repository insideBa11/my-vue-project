<template>
  <div class="bgm-container"
       :style="{top: top + 'px'}">
    <div class="switch-area">
      <div class="isPlay" @click="changePlay">
        <Icon class="iconIsPlay" :type="iconStyle"></Icon>
      </div>
      <div class="bgm-msg">
        <Icon class="iconMoreInfo" type="moreInfo"></Icon>
        <div class="msg">MappleZS：痛苦之村列瑟芬
        </div>
      </div>

    </div>
    <div class="icon-area">
      <Icon class="iconMusice" type="music"></Icon>
    </div>
    <audio autoplay id="msc" loop src="./Music/MappleZS.mp3"></audio>
  </div>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  name: "BGM",
  props: {
    top: {
      type: Number,
      default: 600
    },
    right: {
      type: Number,
      default: -90
    }
  },
  components: {
    Icon
  },
  data() {
    return {
      key: true,
      iconStyle: 'pause',
    }
  },
  methods: {
    // 控制 audio 元素的播放/暂停
    changePlay() {
      const msc = document.getElementById('msc')
      if (this.key) {
        msc.pause();
        this.iconStyle = 'play'
        this.key = !this.key;
      } else {
        msc.play();
        this.iconStyle = 'pause'
        this.key = !this.key;
      }
    },
  },
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.bgm-container {
  //float: right;
  position: fixed;
  right: -90px; // -90
  transition: right .5s;

  &::after {
    content: "";
    display: block;
    clear: both;
  }

  &:hover {
    right: 0;
  }

  &:active {
    right: 0;
  }

  .icon-area {
    width: 45px;
    height: 45px;
    background-color: @primary;
    display: flex;
    align-items: center;
    justify-content: center;
    float: right;
    opacity: 0.4;
    transition: 0.8s;
    border-radius: 15px;

    .iconMusice {
      width: 40px;
      height: 40px;
      animation: rotate 20s infinite linear;
    }
  }

  &:hover {
    .icon-area {
      opacity: 1;
      border-radius: 0;
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }


  .switch-area {
    width: 90px;
    height: 45px;
    float: right;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid @dark;
    box-sizing: border-box;
    background-color: @gray;

    .isPlay {

      .iconIsPlay {
        display: flex;
        align-items: center;
        width: 30px;
        height: 30px;
      }
    }

    .bgm-msg {
      box-sizing: border-box;
      margin-left: 10%;

      &:hover {
        .msg {
          transform: scaleY(1);
        }
      }

      .msg {
        width: 170px;
        height: 30px;
        position: absolute;
        top: -38px;
        box-sizing: border-box;
        border-radius: 10%;
        font-size: 7px;
        right: 0;
        text-align: center;
        line-height: 30px;
        background-color: @gray;
        color: @lightWords;
        transform: scaleY(0);
        transform-origin: center bottom;
        transition: 0.4s;

        &::after {
          content: "";
          position: absolute;
          right: 20px;
          bottom: -4px;
          width: 7px;
          height: 7px;
          background-color: inherit;
          transform: rotate(45deg);
        }
      }
    }
  }
}

</style>