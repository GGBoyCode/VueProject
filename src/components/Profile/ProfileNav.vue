<template>
    <div id="Nav">
        <!--用户头像信息-->
        <div class="block" style="text-align: center;background-color:#545c64">
            <el-avatar :size="70" style="margin: 30px 0 20px 0">
                <i style="font-size: 30px;line-height: 70px" class="el-icon-user-solid"></i>
            </el-avatar>
            <h4 style="color: #fff">用户名</h4>
        </div>
        <!--用户信息导航栏-->
        <el-menu
                style="border: 0;padding-top: 20px"
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-menu-item index="1">
                <i class="el-icon-setting"></i>
                <span>账号设置</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-location"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "Nav"
    }
</script>

<style scoped>

</style>