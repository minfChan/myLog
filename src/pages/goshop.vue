<template>
  <div>
    <div>api</div>
    <div>

      <div>
          
      </div>

      <div>
        <el-button @click="getWeather">按钮</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: '重庆'
    };
  },

  mounted() {
    this.init();
  },

  // API_weather
  methods: {
    init() {

    },

    getWeather() {
      this.$http.get(this.api.API_weather, {
         params: {
            city: this.city,
         }
      })
      .then(res => {
        let data = res.data
        if (data.code == 201) {
          this.$message({
            type: 'error',
            message: '未查询到有关 ' + this.city + ' 的天气情况!'
          });
        }
        console.log(data.data)
      })
      .catch(err => {
        
      })
    }
  }
};
</script>
