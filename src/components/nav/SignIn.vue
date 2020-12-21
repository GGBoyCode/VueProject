<template>
    <div class="SignIn">
        <el-form ref="signInForm" :rules="rules" label-position="left" :model="signInForm" label-width="70px">
            <el-form-item label="用户名" prop="phone">
                <el-input placeholder="请输入用户名" v-model="signInForm.phone" clearable></el-input>
            </el-form-item>

            <el-form-item label="密 码" prop="password">
                <el-input placeholder="请输入密码" v-model="signInForm.password" show-password></el-input>
            </el-form-item>

            <el-form-item style="text-align: left;" label="记住密码">
                <el-switch v-model="signInForm.delivery"></el-switch>
                <el-link style="float:right" :underline="false">忘记密码
                    <i class="el-icon-question"></i>
                </el-link>
            </el-form-item>

            <div style="text-align: center;">
                <el-button style="width: 50%;" round type="primary" @click="submit('signInForm')">登 录</el-button>
            </div>
        </el-form>
    </div>
</template>

<script>
    import {signIn} from "../../network/api";

    export default {
        name: "SignIn",
        data:function () {
            let validateTel = (rule,value,callback) => {
                if(value === ''){
                    callback(new Error('请输入手机号码'));
                }else if(!value.match(/1[3456789][0-9]{9}/)){
                    callback(new Error('请输入正确的手机号码'))
                }else{
                    callback();
                }
            }

            let validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else if(value.length < 6){
                    callback(new Error('密码必须大于6位'))
                } else {
                    callback();
                }
            };

            return {
                signInForm:{
                    phone:'',
                    password:'',
                    delivery:''
                },
                rules:{
                    phone:[
                        { validator:validateTel,trigger:'blur' }
                    ],
                    password:[
                        { validator:validatePass,trigger:'blur' }
                    ],
                }
            }
        },

        methods:{
            submit(formName){
                this.$refs[formName].validate((valid) => {
                    if(valid){
                        signIn({username: this.signInForm.phone, password: this.signInForm.password})
                        .then(res => {
                            console.log(res);
                            if(res.code === 20000) {
                                this.$store.commit('updateLoading', {loading: true});
                            } else {
                                this.$message.error('账号密码错误');
                                this.signInForm.password = '';
                            }
                        })
                        .catch(err => {
                            console.log(err);
                            this.$message.error('网络请求错误');
                        })
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>