<template>
  
  <div class="gHeader clearfix">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :default-active="defaultActive">
      <el-menu-item index="1" @click="goPage('menu')">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">用户管理</template>
        <el-menu-item index="2-1" @click="goPage('usersj')">用户数据</el-menu-item>
        <el-menu-item index="2-2" @click="goPage('userll')">用户浏览</el-menu-item>

        <!-- <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu> -->
      </el-submenu>
      <el-menu-item index="3" @click="goPage('goshop')">在线商城</el-menu-item>
      <el-menu-item index="4" @click="goPage('userPassword')">密码管理</el-menu-item>
    </el-menu>
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      defaultActive: '0'
    }
  },

  watch: {
    '$route' (to, from) {
      this.initCurrent();
    }
  },

  created() {
    this.initCurrent();
  },

  methods: {
    initCurrent() {
      let route = this.$route;
      let query = route.query;
      if (route.name == 'menu') {
        this.defaultActive = '1';
      } else if (route.name == 'usersj') {
        this.defaultActive = '2-1';
      } else if (route.name == 'userll') {
        if (query.id) {
          this.defaultActive = '2-1';
        } else {
          this.defaultActive = '2-2';
        }
      } else if (route.name == 'goshop') {
        this.defaultActive = '3';
      } else if (route.name == 'userPassword') {
        this.defaultActive = '4';
      }
    },

    goPage(name, query) {
      this.$router.push({
        name: name,
        query: query
      });
    }
  }
}
</script>