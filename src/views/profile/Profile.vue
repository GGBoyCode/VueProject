<template>
    <div id="Profile">
        <el-row type="flex" justify="center">
            <el-col :span="16">
                <el-container>
                    <el-aside width="200px">
                        <profile-nav />
                    </el-aside>

                    <router-view></router-view>

                </el-container>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import ProfileNav from './ProfileNav';
    import AccountSetting from "./page/AccountSetting";
    export default {
        name: "Profile",
        components:{
            ProfileNav,
            AccountSetting
        },
    }
</script>

<style scoped>
    .el-container{
        margin: 20px 0;
    }
    .el-main{
        margin-left: 30px;
        box-shadow: 0 0 3px #909399;
        min-height: 600px;
    }
</style>