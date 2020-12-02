<template>
    <el-main>
        <div>
            <h4 style="color: rgb(57, 61, 73)">基本设置</h4>
            <!--头像设置-->
            <el-row style="height: 50px" type="flex" align="middle">
                <el-col :span="6">
                    <p style="color: #909399;font-size: 14px">头像</p>
                </el-col>
                <el-col :span="12">
                    <el-avatar :size="50" >
                        <i style="font-size: 20px;line-height: 50px" class="el-icon-user-solid"></i>
                    </el-avatar>
                </el-col>
                <el-col :span="6"><el-button style="float: right;" size="mini" type="primary">修改头像</el-button></el-col>
            </el-row>
            <!--昵称设置-->
            <el-row style="height: 50px" type="flex" align="middle">
                <el-col :span="6">
                    <p style="color: #909399;font-size: 14px">昵称</p>
                </el-col>
                <el-col :span="12"v-if="settings.nickname">
                    <el-input :value="$store.state.user.nickname" @input="changeInformation" :clearable="true"></el-input>
                </el-col>
                <el-col :span="12"v-else>{{$store.state.user.nickname}}</el-col>
                <el-col :span="6"><el-button style="float: right;" size="mini" type="primary" @click="settings.nickname = !settings.nickname">{{settings.nickname?'保存':'修改昵称'}}</el-button></el-col>
            </el-row>
            <!--性别设置-->
            <el-row style="height: 50px" type="flex" align="middle">
                <el-col :span="6">
                    <p style="color: #909399;font-size: 14px">性别</p>
                </el-col>
                <el-col :span="18">
                    <el-switch
                            style="display: block;"
                            :value="$store.state.user.sex"
                            active-color="#13ce66"
                            inactive-color="#ff4949"
                            active-text="男"
                            inactive-text="女">
                    </el-switch>
                </el-col>
            </el-row>
            <!--地址设置-->
            <el-row style="height: 50px" type="flex" align="middle">
                <el-col :span="6">
                    <p style="color: #909399;font-size: 14px">我的地址</p>
                </el-col>
                <el-col :span="12">{{$store.state.user.address}}</el-col>
                <el-col :span="6"><el-button style="float: right;" size="mini" type="primary">修改地址</el-button></el-col>
            </el-row>
        </div>

        <div style="margin-top: 20px">
            <h4 style="color: rgb(57, 61, 73)">安全设置</h4>
            <el-row style="height: 50px" type="flex" align="middle">
                <el-col :span="6">
                    <p style="color: #909399;font-size: 14px">手机账号</p>
                </el-col>
                <el-col :span="12">
                    {{$store.state.user.telephone}}
                </el-col>
                <el-col :span="6"><el-button style="float: right;" size="mini" type="primary">更换手机</el-button></el-col>
            </el-row>

            <el-row style="height: 50px" type="flex" align="middle">
                <el-col :span="6">
                    <p style="color: #909399;font-size: 14px">绑定邮箱</p>
                </el-col>
                <el-col :span="12">
                    {{$store.state.user.email}}
                </el-col>
                <el-col :span="6"><el-button style="float: right;" size="mini" type="primary">更换邮箱</el-button></el-col>
            </el-row>

            <el-row style="height: 50px" type="flex" align="middle">
                <el-col :span="6">
                    <p style="color: #909399;font-size: 14px">密码设置</p>
                </el-col>
                <el-col :span="12">&nbsp;</el-col>
                <el-col :span="6"><el-button style="float: right;" size="mini" type="primary">修改密码</el-button></el-col>
            </el-row>
        </div>
    </el-main>
</template>

<script>
    export default {
        name: "AccountSetting",
        data(){
            return {
                sex:true,
                settings:{
                    nickname: false,
                    address: false,
                    telephone: false,
                    email: false
                }
            }
        },

        methods: {
            changeInformation(value){
                this.$store.commit('changeNickname',value);
            }
        }
    }
</script>

<style scoped>

</style>