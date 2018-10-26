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
      <el-menu-item index="5" @click="goPage('literature')">文学艺苑</el-menu-item>
      <el-menu-item index="3" @click="goPage('goshop')">在线商城</el-menu-item>
      <el-menu-item index="4" @click="goPage('userPassword')">密码管理</el-menu-item>
      
      <div class="gHeader_user">
        <i class="el-icon-time">{{currTime}}</i>
        <i class="el-icon-setting"> {{currUser}}</i>
        <i @click="loginOut" class="el-icon-circle-close icon_loginout"></i>
      </div>
    </el-menu>
  </div>
</template>


<script>
import localStorage from '@/helper/Session'

export default {
  data() {
    return {
      currUser: localStorage.getS('username'),
      defaultActive: '0',
      currTime: ''
    }
  },

  watch: {
    '$route' (to, from) {
      this.initCurrent();
    }
  },

  created() {
    this.initCurrent();
    this.timeUser();
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
      } else if (route.name == 'literature') {
        this.defaultActive = '5';
      }
    },

    timeUser() {
      this.currTime = dayjs(new Date()).format('HH:mm:ss')
      setInterval(res => {
        this.currTime = dayjs(new Date()).format('HH:mm:ss')
      },1000)
    },

    loginOut() {
      alert(1)
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