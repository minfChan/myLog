<template>
  <div>
    <div class="breadcrumbArea">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path:'/menu' }" >主页</el-breadcrumb-item>
        <el-breadcrumb-item >用户数据</el-breadcrumb-item>
      </el-breadcrumb>
    </div>



  <div class="usersj_container">
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
              <el-button plain size="mini">编辑</el-button>
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
      <el-dialog title="用户信息新增" :visible.sync="item.dialogFormVisible">
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
          <el-button @click="item.dialogFormVisible = false">返 回</el-button>
          <el-button type="primary" @click="addUser('item')">新 增</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</div>
</template>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
export default {
  data() {
    return {
      formLabelWidth: '120px',
      eltable: [
        { prop:'id', label:'ID'},
        { prop:'name', label:'用户名'},
        { prop:'address', label:'地址'}
      ],

      tableData: [
        {
          id: 1,
          name: 'admin',
          address: '重庆九龙坡 113号'
        }, 
        {
          id: 2,
          name: 'google',
          address: '加利福尼亚 1024街'
        }, 
        {
          id: 3,
          name: 'baidu',
          address: '北京海淀区 1024号'
        }, 
        {
          id: 4,
          name: 'alibaba',
          address: '浙江杭州 1024 号'
        }
      ],

      item: {
        id: '',
        name: '',
        address: '',
        dialogFormVisible: false,
      },

      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        address: [
          { required: true, message: '请输入地址', trigger: 'blur' },
        ],
      },

      aa: ['1','','2','','3']
    }
  },

  created() {
    this.init()
  },

  methods: {
    init() {
      console.log(this.aa.filter(item => item))
    },

    doAdd() {  
      this.item = {
        id: this.tableData.length + 1,
        name: '',
        address: '',
        dialogFormVisible: false,
      };
      this.item.dialogFormVisible = true;
    },

    addUser(formName) { 
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          return
        }

        this.tableData.push(JSON.parse(JSON.stringify(this.item)));
        this.item.dialogFormVisible = false;
      });
    },

    Delete(index, rows) {
      this.$confirm('此操作将永久删除该条信息, 是否继续?', '提示', {
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
    }
  }
}
</script>