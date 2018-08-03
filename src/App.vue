<template>
  <div id="app">
    <leftNav></leftNav>
    <!-- <layOut></layOut> -->
    <!-- <img src="./assets/logo.png"> -->
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import leftNav from '@/components/common/leftNav'
import layOut from '@/components/common/layout'
export default {
  name: 'App',
  components:{
    leftNav,
    layOut,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main{
  float: left;
  height: 100%;
  width: 95%;
  overflow: hidden;
  background-color: #EFF2F7;
}
</style>
