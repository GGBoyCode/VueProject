<template>
   <el-row type="flex" justify="center">
       <el-col :span="16">
           <el-container>
               <el-main>
                   <router-view></router-view>
               </el-main>
               <el-aside width="300px">
                   <el-card class="box-card" style="margin: 20px">
                       <div slot="header">
                           <span>卡片名称</span>
                       </div>
                       <div v-for="o in 4" :key="o" class="text item">
                           {{'列表内容 ' + o }}
                       </div>
                   </el-card>
               </el-aside>
           </el-container>
       </el-col>
   </el-row>
</template>

<script>
    export default {
        name: "Forum",
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    /*.el-aside {
        background-color: #D3DCE6;
        color: #333;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
    }*/

    /deep/ .el-card__header{
        padding-bottom: 10px;
    }

    /deep/ .el-card__body{
        padding-top: 10px;
    }
</style>