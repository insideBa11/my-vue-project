<template>
  <div class="siteAside-container">
    <Avatar class="avatar" :size="this.size"
            :url="url"></Avatar>
    <Menu class="menu"></Menu>
    <Contact class="contact"></Contact>
    <p class="footer">author:insideBa11</p>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar';
import Contact from '@/components/SiteAside/Contact';
import Menu from '@/components/SiteAside/Menu';

export default {
  name: "index",
  components: {
    Avatar,
    Contact,
    Menu
  },
  data() {
    return {
      size: 140,
      url: 'https://www.ghostoact.com/static/arts/img/pic/a9g4j1dhji34hy5btp8uz8vnud7ybsj0.jpg'
    };
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";

.siteAside-container {
  .self-fill(@pos:relative);
  width: 100%;
  height: 100vh;
  background: @dark;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  overflow: scroll;

  .avatar,
  .menu,
  .contact {
    flex-shrink: 0;
  }

  .footer {
    margin: 0;
    text-align: center;
    font-size: 12px;
  }
}
</style>