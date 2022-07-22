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
  components: {
    Avatar,
    Contact,
    Menu
  },
  data() {
    return {
      size: 140,
      url: 'https://img1.baidu.com/it/u=2323774323,1596640939&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500'
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";

.siteAside-container {
  .self-fill(@pos:relative);
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;

  .avatar {
    position: absolute;
    top: 4vh;
    margin: auto;
    left: 0;
    right: 0;
  }

  .menu {
    position: absolute;
    top: 27vh;
  }

  .contact {
    position: absolute;
    bottom: 9vh;
    padding-left: 20px;
  }

  .footer {
    width: 100%;
    position: absolute;
    text-align: center;
    font-size: 12px;
    bottom: 3vh;
  }
}
</style>