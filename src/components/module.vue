<template>
  <div class="module">
   <el-button id="but" type="text" @click="isModuleOpen = true">登录/注册</el-button>
    <el-dialog
      :visible.sync="isModuleOpen"
      width="25%"
      :show-close="false"
      center>
        <span>
            <el-tabs :stretch="true" v-model="tabIndex" id="tab">
                <el-tab-pane label="登 录" name="first">
                   <el-form ref="signInForm" label-position="left" :model="signInForm" label-width="70px">
                        <el-form-item label="用户名">
                            <el-input placeholder="请输入用户名" v-model="signInForm.phone" clearable></el-input>
                        </el-form-item>

                        <el-form-item label="密 码">
                            <el-input placeholder="请输入密码" v-model="signInForm.password" show-password></el-input>
                        </el-form-item>

                        <el-form-item style="text-align: left;" label="记住密码">
                            <el-switch v-model="signInForm.delivery"></el-switch>
                            <el-link style="float:right" :underline="false">忘记密码
                              <i class="el-icon-question"></i>
                            </el-link>
                        </el-form-item>

                        <div style="text-align: center;">
                            <el-button style="width: 50%;" round type="primary" @click="isModuleOpen = false">登 录</el-button>
                        </div>
                    </el-form>
                </el-tab-pane>

                <el-tab-pane label="注 册" name="second">
                    <el-form ref="signUpForm" :rules="rules" label-position="left" :model="signUpForm" label-width="70px">
                        <el-form-item label="手机号码" prop="phone">
                            <el-input  placeholder="请输入手机号码" v-model="signUpForm.phone" clearable></el-input>
                        </el-form-item>

                        <el-form-item label="密 码" prop="password">
                            <el-input placeholder="请输入密码" v-model="signUpForm.password" show-password></el-input>
                        </el-form-item>

                        <el-form-item label="确认密码" prop="password2">
                            <el-input placeholder="请确认密码" v-model="signUpForm.password2" show-password></el-input>
                        </el-form-item>

                        <el-form-item label="验证码">
                            <el-input placeholder="请输入验证码" v-model="signUpForm.verify" class="input-with-select">
                                <el-button type="primary" slot="append" @click="signUpForm.verify = '123456'">获取验证码</el-button>
                            </el-input>
                        </el-form-item>

                        <div style="text-align: center;">
                            <el-button style="width: 50%;" round type="primary" @click="isModuleOpen = false">注册</el-button>
                        </div>
                    </el-form>
                </el-tab-pane>
            </el-tabs>
        </span>
    </el-dialog>
  </div>
</template>

<script>
    export default {
        name: "module",
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
                console.log(value);
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else if(value.length < 6){
                    callback(new Error('密码必须大于6位'))
                } else {
                    if (this.signUpForm.password2 !== '') {
                        this.$refs.signUpForm.validateField('password2');
                    }
                    callback();
                }
            };

            let validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.signUpForm.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                isModuleOpen:false,
                tabIndex:'first',
                signInForm:{
                    phone:'',
                    password:'',
                    delivery:''
                },
                signUpForm:{
                    phone:'',
                    password:'',
                    password2:'',
                    verify:''
                },
                rules:{
                    phone:[
                        { validator:validateTel,trigger:'blur' }
                    ],
                    password:[
                        { validator:validatePass,trigger:'blur' }
                    ],
                    password2:[
                        { validator:validatePass2,trigger:'blur' }
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>
