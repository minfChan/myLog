<template>
  <div class="menuPage">
    <div class="breadcrumbArea">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item >主页</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <ul class="menuList clearfix">
      <li><el-button type="primary" @click="goPage('usersj')">用户管理</el-button></li>
      <li > <el-button type="primary" @click="goPage('goshop')">在线商城</el-button></li>
      <li> <el-button type="primary" @click="goPage('userPassword')">密码管理</el-button></li>
    </ul>
  </div>
</template>

<script>
import Session from '@/helper/Session'
export default {
  data() {
    return {

    }
  },

  created() {

  },

  methods: {
    goPage(name, query) {
      this.$router.push({
        name: name,
        query: query
      });
    }
  }
}
</script>

<style>

</style>
