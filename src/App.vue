<template>
  <div id="app">
    <nav-bar></nav-bar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
  import NavBar from "./components/Nav/NavBar";
  import BottomNav from './components/BottomNav/BottomNav';

  export default {
    name:'app',
    components:{
      'nav-bar': NavBar,
      'bottom-nav':BottomNav
    }
  }
</script>
<style>
  *{
    padding: 0;
    margin: 0;
  }
  .el-dialog__header{
    padding: 0;
  }
</style>
