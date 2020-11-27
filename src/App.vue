<template>
  <div id="app">
    <navBar></navBar>
    <module></module>
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>-->
  </div>
</template>

<script>
  import navBar from "./components/navBar";
  import module from "./components/module";
  export default {
    name:'app',
    components:{
      navBar,
      module
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
