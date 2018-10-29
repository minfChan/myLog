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
      <div>
        <el-button type="primary" @click="getData">下一首
          <i class="el-icon-arrow-right el-icon--right"></i>
        </el-button>
      </div>
    </div>
    <!-- 天气 -->
    <div class="editTitle">天气状况</div>
    <div class="getWeather">
      <div class="getWeather_content">
        <!-- <div class="getWeather_img"> 
           <img src="../images/duoyun2.png" />
        </div> -->
        <div>
          <table class="getWeather_table">
            <thead>
              <tr>
                <td>
                  <div class="getWeather_img"> 
                    <img src="../images/duoyun2.png" />
                  </div>
                </td>
                <td colspan="3">
                  <h1>
                    {{cityItem.currCity}}
                  </h1>
                </td>
              </tr>
              <tr>
                <td>日期</td>
                <td>天气类型</td>
                <td>温度</td>
                <td>风力</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(list ,idx) in weatherData" :Key="idx">
                <td>{{list.date | curDate}}</td>
                <td>{{list.type}}</td>
                <td>{{list.low | temperature}}~{{list.high | temperature}}</td>
                <td>{{list.fengli | windLevel}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <el-button @click="getWeather">按钮</el-button>
        <el-button @click="getCity">城市</el-button>
        <el-select v-model="cityItem.city" filterable placeholder="请选择">
          <el-option
            v-for="item in cityOptions"
            :key="item.cid"
            :label="item.location"
            :value="item.location">
          </el-option>
        </el-select>
        <el-button @click="test">test</el-button>
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

      cityItem: {
        city: '',
        currCity: '',
      },
      weatherData: [],
      cityList: [],
      cityOptions: []
    };
  },

  mounted() {
    this.init();
  },

  filters: {
    windLevel: function(res) {
      if (res.split('[')[2].indexOf('<') > -1) {
        return res.split('[')[2].substr(0,3)
      } else {
        return res.split('[')[2].substr(0,4)
      }
    },
    
    temperature: function(res) {
      return res.split(' ')[1]
    },
    
    curDate: function(res) {
      let time = new Date();
      return dayjs(time).format('YYYY年 MM月') + res
    }
  },

  methods: {
    test() {
      console.log(this.cityItem.city)
    },
  
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
    },

    getWeather() {
      this.$http.get(this.api.API_weather, {
         params: {
            city: this.cityItem.city,
         }
      })
      .then(res => {
        let data = res.data
        if (data.code == 201) {
          this.$message({
            type: 'error',
            message: '未查询到有关 ' + this.cityItem.city + ' 的天气情况!'
          });
        }

        this.cityItem.currCity = '当前城市: ' + data.data.city;
        this.weatherData = data.data.forecast; 

      })
      .catch(err => {
        
      })
    },

    getCity() {
      this.$http.get(this.api.API_city, {
         params: {
            group: 'cn'
         }
      })
      .then(res => {
        let data = res.data.HeWeather6[0].basic;
        this.cityOptions = data;
        data.forEach(res => {
          this.cityList.push(res.location)
        })

      })
      .catch(err => {

      })
    }
  }
};
</script>
