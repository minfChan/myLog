<template>
  <div>
    <div class="breadcrumbArea">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path:'/menu' }" >主页</el-breadcrumb-item>
        <el-breadcrumb-item >密码管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div id="container">

    </div>

    <div>
      <el-button @click="test">默认按钮</el-button>
    </div>
  </div>
</template>
<style>
#container {
  margin: 0 auto;
  width: 300px;
  height: 300px;
  border: 2px solid rgb(7, 137, 189);
}
</style>

<script>


export default {
  data() {
    return {
      map: null
    }
  },

  created() {
    this.init();
  },

  mounted() {
    this.map = new AMap.Map('container', {
        center: [106.484374, 29.527945],
        zoom: 15
    });
  },

  methods: {
    init() {
      
    },
    
    test() {
      this.$http.get(this.api.API_city, {
         params: {
            group: 'cn'
         }
      })
      .then(res => {
        console.log(res)
      })
      .catch(err => {


      })
    }


    // //封装一个限制字数方法
    //     var checkStrLengths = function (str, maxLength) {
    //         var maxLength = maxLength;
    //         var result = 0;
    //         if (str && str.length > maxLength) {
    //             result = maxLength;
    //         } else {
    //             result = str.length;
    //         }
    //         return result;
    //     }

    //     //监听输入
    //     $(".form-control").on('input propertychange', function () {
    //         //获取输入内容
    //         var userDesc = $(this).val();
    //         //判断字数
    //         var len;
    //         if (userDesc) {
    //             len = checkStrLengths(userDesc, 15);
    //         } else {
    //             len = 0
    //         }
    //         if (userDesc.length > 5) {
    //             $(".form-control").html(userDesc.substr(0,5))
    //             console.log($(this).val())
    //             // $(this).val() = userDesc.substr(0,5)
    //         }
    //         $(".wordsNum").html(len + '/15');
    //     });



  }
}
</script>
