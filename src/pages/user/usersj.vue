<template>
<transition name="fade">
  <div>
    <div class="breadcrumbArea">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path:'/menu' }" >主页</el-breadcrumb-item>
        <el-breadcrumb-item >用户数据</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="usersj_container" v-if="show">
      <div>
      </div>
      <div>
        <div class="usersj">
          <el-table
            :data="tableData"
            border
            stripe>
            <el-table-column
              v-for="(list, idx) in eltable"
              :key="idx"
              :prop="list.prop"
              :label="list.label"
              >
            </el-table-column>
            <el-table-column prop="操作">
              <template slot-scope="scope">
                <el-button @click.native.prevent="userEdit(scope.$index, tableData)" plain size="mini">编辑</el-button>
                <el-button @click.native.prevent="Delete(scope.$index, tableData)" type="danger" size="mini">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="usersj_add">
          <el-button @click="doAdd" plain type="primary" size="small ">新增</el-button>
        </div>
      </div>
      
      <div>
        <el-dialog :title="item.curId > this.tableData[this.tableData.length - 1]? '用户信息编辑' : '用户信息新增'" :visible.sync="dialogFormVisible">
          <el-form :model="item" :rules="rules" ref="item">
            <el-form-item label="ID" :label-width="formLabelWidth">
              <div style="text-align: left">{{item.id}}</div>
            </el-form-item>
            <el-form-item label="用户名" :label-width="formLabelWidth" prop="name">
              <el-input v-model="item.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="地址" :label-width="formLabelWidth" prop="address">
              <el-input v-model="item.address" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">返 回</el-button>
            <el-button type="primary" @click="addUser('item')">新 增</el-button>
          </div>
        </el-dialog>
      </div>
    </div>
  </div>
  </transition>
</template>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
export default {
  data() {
    return {
      show: false,
      dialogFormVisible: false,
      curId: '',
      formLabelWidth: '120px',
      eltable: [
        { prop:'id', label:'ID'},
        { prop:'name', label:'用户名'},
        { prop:'address', label:'地址'}
      ],

      tableData: this.Strings.Labels.TABELDATA,

      item: {
        id: '',
        name: '',
        address: ''
      },

      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        address: [
          { required: true, message: '请输入地址', trigger: 'blur' },
        ],
      },
    }
  },

  mounted() {
    this.fadeinn()
  },

  created() {
    this.init()
  },

  methods: {
    init() {

    },

    doAdd() { 
      this.item = {
        id: this.tableData[this.tableData.length - 1].id + 1,
        name: '',
        address: '',
        dialogFormVisible: false,
      };
      this.dialogFormVisible = true;
    },

    addUser(formName) { 
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          return
        }

        this.tableData.push(JSON.parse(JSON.stringify(this.item)));
        this.dialogFormVisible = false;
      });
    },

    userEdit(idx, tal) {
      this.curId = idx;
      this.dialogFormVisible = true;
      this.item = JSON.parse(JSON.stringify(this.tableData[idx]));
    },

    Delete(index, rows) {
      let user = rows[index].name;
      this.$confirm('此操作将永久删除用户 ' + user + ' 的所有信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
        rows.splice(index, 1);
      }).catch(() => {
       
      });
    },

    fadeinn() {
      this.show = true
    },
  }
}
</script>