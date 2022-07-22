<template>
  <svg class="icon icon-container" aria-hidden="true">
    <use :xlink:href="'#'+fontClass"></use>
  </svg>
</template>

<script>
const classMap = {
  home: "icon-zhuye",
  success: "icon-chenggong",
  error: "icon-ddfdf",
  close: "icon-guanbi",
  warn: "icon-jinggao1",
  info: "icon-weibiaoti-",
  blog: "icon-boke",
  code: "icon-code",
  about: "icon-about",
  weixin: "icon-weixin",
  mail: "icon-youxiang",
  github: "icon-github1",
  qq: "icon-qq",
  arrowUp: "icon-jiantou",
  arrowDown: "icon-jiantouxia",
  empty: "icon-iconfontinbox",
  chat: "icon-liuyan",
  csdn: 'icon-csdn',
  music: 'icon-yinle',
  moreInfo:'icon-gengduoxinxi',
  play:'icon-zanting_',
  pause:'icon-bofang_'
};
export default {
  name: "Icon",
  props: {
    type: {
      type: String,
      require: true
    }
  },
  computed: {
    fontClass() {
      return classMap[this.type];
    }
  }
}
</script>

<style type="text/css">
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>