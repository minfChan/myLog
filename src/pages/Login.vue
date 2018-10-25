<template>
  <div class="login_interface">
    <div class="login_interface2">
      <div class="login_interface3">
        <div class="login_interface3_001">
          <label>用户名:</label>
        </div>
        <div class="login_interface3_002">
          <el-input v-model="item.username" placeholder="请输入用户名" @keyup.enter.native="login"></el-input>
        </div>
      </div>
      <div class="login_interface3">
        <div class="login_interface3_001">
          <label>密 码:</label>
        </div>
        <div class="login_interface3_002">
          <el-input type="password" v-model="item.password" placeholder="请输入密码" @keyup.enter.native="login"></el-input>
        </div>
      </div>
      <div class="login_interface3 login_interface4">
        <el-button @click="login">登录</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import String from '@/helper/String'
import Session from '@/helper/Session'

export default {
  data() {
    return {
      item: {
        username: '',
        password: ''
      },

      userData: [
        { username: 'admin', password: 'admin'}
      ]
    }
  },
  
  created() {
    this.init()
  },

  methods: {
    init() {

    },

    login() {
      let msg = '', msge = '';
      if (this.item.username == '') {
        msg += '用户名为空' + '\n'
      }
      if (this.item.password == '') {
        msg += '密码为空' + '\n'
      }
      if (this.item.username != this.userData[0].username ||
          this.item.password != this.userData[0].password) {
        msge += '账号错误'
      }
      
      if (msg) {
        this.$message({
          type: 'warning',
          message: msg
        });
        return
      } else {
        if (msge) {
          this.$message({
            type: 'error',
            message: msge
          });
          return
        } else {
          this.$message({
            type: 'success',
            message: '登录成功'
          });
        }
      }

      Session.doLogin(this.userData[0].username);
      this.$router.push('menu')
    }
  }
}
</script>