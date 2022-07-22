<template>
  <div class="contact-container">
    <ul class="contact-ul">
      <li>
        <a href="https://github.com/insideBa11?tab=repositories">
          <Icon class="icon" type="github"></Icon>
          <span>insideBa11</span>
        </a>
      </li>
      <li>
        <a href="mailto:1070681937@qq.com">
          <Icon class="icon" type="mail"></Icon>
          <span>1070681937@qq.com</span>
        </a>
      </li>
      <li>
        <a href="tencent://message/?Menu=yes&uin=1070681937&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45">
          <Icon class="icon" type="qq"></Icon>
          <span>1070681937</span>
        </a>
      </li>
      <li>
        <a>
          <Icon class="icon" type="weixin"></Icon>
          <span>Insideball</span>
          <div class="img weixin">
            <img src="./img/weixin.jpeg" alt="">
          </div>
        </a>
      </li>
      <li>
        <a href="https://blog.csdn.net/m0_58398070?spm=1010.2135.3001.5421" target="_blank">
          <Icon class="icon" type="csdn"></Icon>
          <span>insideBa11</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  name: "index",
  components: {
    Icon
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.contact-container {
  width: 100%;
  ul {
    padding: 0;

    li {
      padding: 7px 0;
      width: 100%;
      height: 30px;
      line-height: 30px;

      a {
        color: @lightWords;
        transition: 0.5s;
        position: relative;
        height: 30px;
        line-height: 30px;
        font-size: 14px;

        &:hover {
          color: @primary;

          .weixin {
            transform: scaleY(1);
          }
        }

        .icon {
          padding: 0 5px;
          font-size: 22px;
          width: 36px;
        }

        .weixin {
          background-color: #fff;
          padding: 9px 9px 1px 9px;
          text-align: center;
          //width: 150px;
          //height: 150px;
          border-radius: 5%;
          position: absolute;
          top: -200px;
          left: 10px;
          transform: scaleY(0);
          transform-origin: center bottom;
          transition: 0.3s;

          &::after {
            content: "";
            display: block;
            background-color: inherit;
            width: 7px;
            height: 7px;
            position: absolute;
            transform: rotate(45deg);
            right: 50%;
            bottom: -4px;
          }

          img {
            height: 170px;
            width: 170px;
          }
        }
      }
    }

  }
}
</style>