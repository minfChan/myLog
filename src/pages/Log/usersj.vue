<template>
  <div>
    <div>用户管理</div>

    <div>
      <ul>
        <li>111</li>
        <li>222</li>
        <li v-for="(list,idx) in item" :key="idx">
          <br />
          <div v-for="(list, idx) in item2" :key="idx">{{list}}</div>
          <div>{{list}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: 'hello',
      item:['vue','java','javascript','python','c++'],

      item2: ['1','2','3']
    }
  }
}
</script>
