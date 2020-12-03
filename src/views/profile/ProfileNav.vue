<template>
    <div id="Nav">
        <!--用户头像信息-->
        <div class="block" style="text-align: center;background-color:#545c64">
            <el-avatar :size="70" style="margin: 30px 0 20px 0">
                <i style="font-size: 30px;line-height: 70px" class="el-icon-user-solid"></i>
            </el-avatar>
            <h4 style="color: #fff">{{$store.state.user.nickname}}</h4>
        </div>
        <!--用户信息导航栏-->
        <el-menu
                :router="true"
                style="border: 0;padding-top: 20px"
                :default-active="activeIndex"
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-menu-item index="/profile/account">
                <i class="el-icon-setting"></i>
                <span>账号设置</span>
            </el-menu-item>
            <el-menu-item index="/profile/message">
                <i class="el-icon-message"></i>
                <span slot="title">消息中心</span>
            </el-menu-item>
            <el-menu-item index="/profile/collection">
                <i class="el-icon-star-off"></i>
                <span slot="title">我的收藏</span>
            </el-menu-item>
            <el-menu-item index="/profile/connect">
                <i class="el-icon-chat-dot-square"></i>
                <span slot="title">联系客服</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "Nav",
        data(){
            return {
            };
        },
        computed:{
            activeIndex(){
                return this.$route.path
            }
        }
    }
</script>

<style scoped>

</style>