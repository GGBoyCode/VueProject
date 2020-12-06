<template>
    <div class="interview">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">热门</el-menu-item>
            <el-menu-item index="2">推荐</el-menu-item>
        </el-menu>
        <el-card class="box-card" shadow="hover" @click.native="toDetail">
            <template slot="header" >
                <table class="table-header">
                    <tr>
                        <td>
                            <el-avatar :size="25" icon="el-icon-user-solid"></el-avatar>
                        </td>
                        <td>
                            <el-link :underline="false">content</el-link>
                        </td>
                    </tr>
                </table>
            </template>
            <div v-for="o in 4" :key="o">
                {{'列表内容 ' + o }}
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "interview",
        data(){
            return {
                activeIndex: '1'
            };
        },
        methods:{
            toDetail(){
                this.$router.push('/forum/detail');
            }
        }
    }
</script>

<style scoped>
    .el-menu{
        margin-bottom: 15px
    }

    .el-menu-item{
        height: 50px
    }

    .el-avatar{
        display: block;
    }

    .table-header tr td{
        padding-right: 10px;
    }
</style>