<template>
  <div class="menu-container">
    <router-link
        :exact="item.exact"
        class="link"
        v-for="item in items"
        :key="item.id"
        :to="{name:item.name}">
      <Icon class="icon" :type="item.icon"></Icon>
      <span>{{ item.title }}</span>
    </router-link>
  </div>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  name: "index",
  components: {
    Icon
  },
  data() {
    return {
      items: [
        {
          name:'Home',
          title: "首页",
          icon: "home",
          id: 1,
          exact: true
        },
        {
          name:'Blog',
          title: "文章",
          icon: "blog",
          exact: false,
          id: 2
        },
        // {
        //   name:'About',
        //   title: "关于我",
        //   icon: "about",
        //   exact: true,
        //   id: 3
        // },
        // {
        //   name:'Project',
        //   title: "项目&效果",
        //   icon: "code",
        //   exact: true,
        //   id: 4
        // },
        {
          name:'Message',
          title: "留言板",
          icon: "chat",
          exact: true,
          id: 5
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.menu-container {
  width: 100%;
  color: @lightWords;
  font-size: 17px;

  .link {
    padding-left: 50px;
    height: 45px;
    line-height: 45px;
    display: block;

    .icon {
      padding-right: 15px;
      font-size: 19px;
    }

  }

  .router-link-active {
    span {
      color: @gray;
    }

    background-color: @words;
  }
}
</style>