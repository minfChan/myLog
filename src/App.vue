<template>
  <div id="app">
    <transition name="fade" mode="in-out">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
