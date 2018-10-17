import MyLoading from './Loading.vue'

const Loading = {
  install: function(Vue){
    Vue.component('Loading', MyLoading)
  }
}

export default Loading