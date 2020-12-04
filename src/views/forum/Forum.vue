<template>
   <el-row type="flex" justify="center">
       <el-col :span="16">
           <el-container>
               <el-main>
                    <el-tabs v-model="activeName">
                       <el-tab-pane label="热门" name="first">
                           <el-card class="box-card" shadow="hover">
                               <template slot="header" >
                                   <table class="table-header">
                                       <tr>
                                           <td>
                                               <el-avatar :size="25" icon="el-icon-user-solid"></el-avatar>
                                           </td>
                                           <td>
                                               <p>{{$store.state.user.nickname}}</p>
                                           </td>
                                       </tr>
                                   </table>
                               </template>
                               <div v-for="o in 4" :key="o" class="text item">
                                   {{'列表内容 ' + o }}
                               </div>
                           </el-card>
                       </el-tab-pane>
                       <el-tab-pane label="推荐" name="second">推荐</el-tab-pane>
                    </el-tabs>
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
                activeName:'first'
            }
        }
    }
</script>

<style scoped>
    .el-aside {
        background-color: #D3DCE6;
        color: #333;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
    }

    .el-avatar{
        display: block;
    }

    .table-header tr td{
        padding-right: 10px;
    }

    /deep/ .el-card__header{
        padding-bottom: 10px;
    }

    /deep/ .el-card__body{
        padding-top: 10px;
    }
</style>