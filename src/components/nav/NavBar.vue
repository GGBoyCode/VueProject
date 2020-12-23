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
            :router="true"
            :default-active="navIndexOfPc"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            style="border: none"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/mall">商场</el-menu-item>
            <el-menu-item index="/forum">论坛</el-menu-item>
            <template v-if="$store.state.loading">
              <el-menu-item @click="toProfile" style="float: right" v-popover:box key="user">
                <el-avatar :size="40" :src="$store.state.user.url?$store.state.path + $store.state.user.url:$store.state.user.url" icon="el-icon-user-solid"></el-avatar>
                <span style="margin-left: 10px">{{$store.state.user.nickname}}</span>
              </el-menu-item>
              <el-menu-item style="float: right" index="/cart">购物车</el-menu-item>
              <el-popover
                ref="box"
                placement="top-start"
                width="200"
                trigger="hover"
                :visible-arrow="false"
              >
                <div class="popover-body">
                  <el-avatar :size="60" :src="$store.state.user.url?$store.state.path + $store.state.user.url:$store.state.user.url" icon="el-icon-user-solid"></el-avatar>
                  <p>{{$store.state.user.nickname}}</p>
                  <small>{{$store.state.user.email}}</small>
                  <p style="margin-top: 10px"><el-link :underline="false" type="primary" @click="logout">注销</el-link></p>
                </div>
              </el-popover>
            </template>
          <template v-else>
              <el-menu-item key="sign" style="cursor: auto;float: right" @click="$refs.mod.visible = true">登录/注册</el-menu-item>
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
        navIndexOfPho:'1',
        paths: ["/", "/forum", '/mall', '/cart'],
        visible: false,
        sign:false
      }
    },

    computed: {
      navIndexOfPc() {
        return this.paths.filter(value => {
          return value === this.$route.path;
        })[0];
      }
    },

    components: {
      'module': Module
    },

    methods: {
      toProfile() {
        if(this.$route.path !== '/profile/account') {
          this.$router.push('/profile');
        }
      },

      logout() {
        this.$store.commit("updateLoading", {loading: false});
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /deep/ .el-menu-item i{
    margin:0;
  }

  .popover-body{
    text-align: center;
  }

  .popover-body p{
    font-size: 16px;
    color: rgb(57, 61, 73)
  }
</style>
