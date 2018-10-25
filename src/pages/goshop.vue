<template>
  <div>
    <div>api</div>
    <div>
      <button type="button" @click="getData">获取API数据</button>
      <button type="button" @click="jjsion">JSON</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testData: [],
    }
  },

  mounted() {
    this.init()
  },

  methods: {
    init() {
      
    },

    jjsion() {
    },

    getData() {
      // console.log(process.env.API_1)
      this.$http.get(this.api.API_singlePoetry)
      .then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      });
    }
  }
}
</script>
