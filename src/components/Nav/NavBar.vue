<template>
  <div class="NavBar">
    <el-row type="flex" justify="center" style="background-color:#545c64;">

     <el-col :span="24" class="hidden-sm-and-up">
          <el-menu
            :default-active="navIndexOfPho"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            style="border: none"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
      </el-col>
      <el-col :xl="16" :lg="17" :md="18" :sm="20" class="hidden-xs-only">
        <div>
          <el-menu
            :default-active="navIndexOfPc"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            style="border: none"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1" @click="linkReplace('/')">模块一</el-menu-item>
            <el-submenu index="2">
              <template slot="title">模块二</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
              <el-menu-item index="2-4">选项4</el-menu-item>
            </el-submenu>
            <el-menu-item index="3" disabled>模块三</el-menu-item>
            <el-menu-item index="4"><a href="javascript:;">模块四</a></el-menu-item>
            <template v-if="true">
              <el-submenu style="float: right" index="5">
                <template slot="title">模块五</template>
                <el-menu-item index="5-1">选项1</el-menu-item>
                <el-menu-item index="5-2">选项2</el-menu-item>
                <el-menu-item index="5-3">选项3</el-menu-item>
                <el-menu-item index="5-4">选项4</el-menu-item>
              </el-submenu>
              <el-menu-item style="float: right" index="6">模块六</el-menu-item>
              <el-menu-item style="float: right" index="7" @click="linkReplace('/profile')">模块七</el-menu-item>
            </template>
          <template v-else>
              <el-menu-item style="cursor: auto;float: right" @click="$refs.mod.visible = true">登录/注册</el-menu-item>
              <module ref = "mod"></module>
            </template>
          </el-menu>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Module from './Module';

  export default {
    name: 'NavBar',
    data() {
      return {
        navIndexOfPc: '1',
        navIndexOfPho:'1',
        visible: false
      }
    },
    components:{
      'module': Module
    },
    methods:{
      link(url){
        this.$router.push(url);
      },
      linkReplace(url,index){
        if(this.$route.path != url){
          this.$router.replace(url);
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
