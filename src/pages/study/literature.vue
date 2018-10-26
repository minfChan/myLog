<template>
  <div>
    <div class="breadcrumbArea">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path:'/menu' }" >主页</el-breadcrumb-item>
        <el-breadcrumb-item>文学艺苑</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="editTitle">艺术图片</div>
    <div class="literature_content">
      <!-- 轮播图 -->
      <div class="literature_caroumap">
        <el-carousel :interval="4000" type="card" height="240px">
          <el-carousel-item v-for="item2 in list" :key="item2.pic">
            <h3><img :src="item2.src"/></h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 诗文 -->
      <div class="editTitle">诗文鉴赏</div>
      <div class="literature_poetry" v-loading="loading">
        <table class="literature_base">
          <thead>
            <tr>
              <td colspan="2">{{item.origin}}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{item.category}}</td>
              <td>{{item.author}}</td>
            </tr>
            <tr>
              <td colspan="2">{{item.content}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- literature -->
      <div>
        <el-button type="primary" @click="getData">下一首
          <i class="el-icon-arrow-right el-icon--right"></i>
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      list:[
        {pic: 1, src: require('../images/img_1.png')},
        {pic: 2, src: require('../images/img_1.png')},
        {pic: 3, src: require('../images/img_1.png')},
        {pic: 4, src: require('../images/img_2.png')},
        {pic: 5, src: require('../images/img_1.png')}
      ],
      
      loading: true,
      item: {
        origin: '',
        category: '',
        author: '',
        content: '',
      },

      testData: []
    };
  },

  mounted() {
    this.init();
  },

  methods: {
    init() {
      setTimeout(res => {
        this.loading = false;
        this.getData()
      }, 600)
    },

    getData() {
      // console.log(process.env.API_1);
      this.$http.get(this.api.API_singlePoetry)
      .then(res => {
        let data = res.data.result;
        this.item = data;
        this.item.origin = "《 " + data.origin + " 》"
        this.item.author = "作者: " + data.author
      })
      .catch(error => {
        this.$message.error("资源获取失败");
      })
    }
  }
};
</script>
