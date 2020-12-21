<template>
  <div id="app">
    <nav-bar></nav-bar>
        <div class="main">
          <keep-alive>
          <router-view></router-view>
          </keep-alive>
        </div>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
  import NavBar from "./components/nav/NavBar";
  import BottomNav from './components/bottomNav/BottomNav';

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

  html,body{
    height: 100%;
  }

  #app{
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .main{
    flex: 1 0 auto;
  }
</style>
