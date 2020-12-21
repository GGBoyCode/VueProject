<template>
    <el-main>
        <div>
            <h4 style="color: rgb(57, 61, 73)">基本设置</h4>
            <!--头像设置-->
            <el-row style="height: 50px" type="flex" align="middle">
                <el-col :span="18">
                    <p style="color: #909399;font-size: 14px">头像</p>
                </el-col>
                <el-col :span="6"><el-button style="float: right;" size="mini" type="primary" @click="avatarVisible = true">修改头像</el-button></el-col>
            </el-row>
            <el-dialog
                    :visible.sync="avatarVisible"
                    width="30%"
                    :center="true"
                    @close="closeUpload"
            >
                <div style="text-align: center">
                    <p>请上传您的头像</p>
                    <el-upload
                            name="img"
                            :data="{username: this.$store.state.user.telephone}"
                            class="avatar-uploader"
                            drag
                            :action="$store.state.path + '/user/update/avatar'"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">

                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <template v-else>
                            <i class="el-icon-upload"></i>
                            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        </template>
                    </el-upload>
                </div>

                <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="submitUpload" style="width: 100%">确 定</el-button>
                </span>
            </el-dialog>
            <!--昵称设置-->
            <el-row style="height: 50px" type="flex" align="middle">
                <el-col :span="6">
                    <p style="color: #909399;font-size: 14px">昵称</p>
                </el-col>
                <el-col :span="12"v-if="settings.nickname">
                    <el-input ref="nickname" v-model="user.nickname" :clearable="true"></el-input>
                </el-col>
                <el-col :span="12"v-else>{{$store.state.user.nickname}}</el-col>
                <el-col :span="6"><el-button style="float: right;" size="mini" type="primary" @click="changeInformation('nickname')">{{settings.nickname?'保存':'修改昵称'}}</el-button></el-col>
            </el-row>
            <!--性别设置-->
            <el-row style="height: 50px" type="flex" align="middle">
                <el-col :span="18">
                    <p style="color: #909399;font-size: 14px">性别</p>
                </el-col>
                <el-col :span="6">
                    <el-switch
                            style="display: block;float: right;"
                            :value="$store.state.user.sex"
                            @change="changeSex"
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

                <el-col :span="12" v-if="settings.address">
                    <el-input ref="address" v-model="user.address" :clearable="true"></el-input>
                </el-col>
                <el-col :span="12" v-else>{{$store.state.user.address}}</el-col>

                <el-col :span="6">
                    <el-button style="float: right;" size="mini" type="primary" @click="changeInformation('address')">修改地址</el-button>
                </el-col>
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
                <el-col :span="6">
                    <el-button style="float: right;" size="mini" type="primary" @click="openDialog('绑定手机')">更换手机</el-button>
                </el-col>
            </el-row>

            <el-row style="height: 50px" type="flex" align="middle">
                <el-col :span="6">
                    <p style="color: #909399;font-size: 14px">绑定邮箱</p>
                </el-col>
                <el-col :span="12">
                    {{$store.state.user.email}}
                </el-col>
                <el-col :span="6">
                    <el-button style="float: right;" size="mini" type="primary" @click="openDialog('绑定邮箱')">更换邮箱</el-button>
                </el-col>
            </el-row>

            <el-row style="height: 50px" type="flex" align="middle">
                <el-col :span="6">
                    <p style="color: #909399;font-size: 14px">密码设置</p>
                </el-col>
                <el-col :span="12">&nbsp;</el-col>
                <el-col :span="6"><el-button style="float: right;" size="mini" type="primary" @click="openDialog('修改密码')">修改密码</el-button></el-col>
            </el-row>

            <el-dialog
                :visible.sync="visible"
                width="30%"
                @close="close('form')"
            >
                <span slot="title">{{title}}</span>
                <div class="dialog-body">
                    <p>为了保障您的账号安全，变更信息前需验证身份</p>
                    <el-form ref="form" :model="form" label-position="top" :rules="rules">
                        <el-form-item label="验证方式">
                            <el-select
                                v-model="form.region"
                                placeholder="请选择验证方式"
                                size="medium"
                            >
                                <el-option :label="telephone" value="shanghai"></el-option>
                                <el-option :label="email" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item prop="verify">
                            <el-row type="flex" justify="space-between">
                                <el-col :span="13">
                                    <el-input v-model="form.verify" autocomplete="off"></el-input>
                                </el-col>
                                <el-col :span="10">
                                    <el-button plain style="width: 100%">发送验证码</el-button>
                                </el-col>
                            </el-row>
                        </el-form-item>
                    </el-form>
                </div>

                <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="submit('form')" style="width: 100%">确 定</el-button>
                </span>
            </el-dialog>
        </div>
    </el-main>
</template>

<script>
    export default {
        name: "AccountSetting",
        data(){
            let validateVerify = function(rule, value, callback){
                if(value === ''){
                    callback(new Error('请填写验证码'));
                } else {
                    callback();
                }
            }
            return {
                imageUrl:'',
                avatarVisible: false,
                settings:{
                    nickname: false,
                    address: false,
                    telephone: false,
                    email: false
                },
                user: {
                    nickname: this.$store.state.user.nickname,
                    address: this.$store.state.user.address,
                },
                visible:false,
                form:{
                    region:'',
                    verify:''
                },
                rules:{
                    verify:[
                        { validator: validateVerify, trigger: 'blur' }
                    ]
                },
                title:''
            }
        },

        methods: {
            changeInformation(name) {
                if(this.settings[name]) {
                    this.$store.dispatch('updateUser',{key: name, value: this.$refs[name].value});
                }
                this.settings[name] = !this.settings[name];
            },

            changeSex(value) {
                this.$store.dispatch('updateUser',{key: "sex", value: value});
            },

            submit(name) {
                this.$refs[name].validate(valid => {
                   if(valid){
                       console.log('submit');
                       this.visible = false;
                   }
                });
            },

            close(name) {
                this.$refs[name].resetFields();
            },

            openDialog(title) {
                this.title = title;
                this.visible = true;
            },

            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
                console.log(this.$store.state.user);
                this.$store.dispatch("getUser", {username: this.$store.state.user.telephone});
            },

            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';

                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式或 png 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }

                return isJPG && isLt2M;
            },

            closeUpload() {
                this.imageUrl = '';
            },

            submitUpload() {
                if(this.imageUrl) {
                    this.avatarVisible = false;
                } else {
                    this.$message.error("请选择你想要上传的图片");
                }
            }
        },

        computed: {
            telephone() {
                return this.$store.state.user.telephone.replace(/(\d{3})\d{6}(\d{2})/, '$1****$2')+' 手机';
            },

            email() {
                return this.$store.state.user.email.replace(/(\w{3})(\w+)(\w{2})(@\w+\.[a-z]+(.[a-z]+)?)/, '$1****$3$4')+' 邮箱';
            }
        }
    }
</script>

<style scoped>
    .el-select{
        width: 100%;
    }

    /deep/ .el-dialog__body{
        padding-top: 10px;
    }

    /deep/ .el-dialog__footer{
        text-align: center;
    }

    /deep/ .el-form-item__label{
        font-weight: 600;
    }

    .el-form{
        padding-top: 10px;
    }

    .dialog-body{
        padding-left: 10px;
        padding-right: 10px
    }

    .dialog-footer{
        display: block;
        margin-left: 10px;
        margin-right: 10px
    }

    .avatar-uploader {
        margin-top: 20px;
    }

    /deep/ .el-upload-dragger {
        width: 200px;
        height: 200px;
    }

    .avatar {
        width: 200px;
        height: 200px;
        display: block;
    }
</style>