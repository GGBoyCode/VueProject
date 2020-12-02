<template>
    <el-main>
        <el-row type="flex" align="middle">
            <el-col :span="18">
                <h4 style="color: rgb(57, 61, 73)">反馈记录</h4>
            </el-col>
            <el-col :span="6">
                <el-button style="float: right;" size="mini" type="primary" @click="visible = true">提交反馈</el-button>
            </el-col>
        </el-row>

        <el-dialog class="dialog" width="35%" title="收货地址" :center="true" :visible.sync="visible" @close="reset('feedbackForm')">
            <div class="dialog-body">
                <el-form ref="feedbackForm" :model="feedbackFrom" :rules="rules">
                    <el-form-item label="联系邮箱" prop="email" label-width="70px">
                        <el-input v-model="feedbackFrom.email" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="问题内容" prop="content" label-width="70px">
                        <el-input
                            type="textarea"
                            :rows="4"
                            v-model="feedbackFrom.content">
                        </el-input>
                    </el-form-item>
                </el-form>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="visible = false">取 消</el-button>
                <el-button type="primary" @click="submit('feedbackForm')">确 定</el-button>
            </div>
        </el-dialog>

        <el-row type="flex" class="header" align="middle">
            <el-col class="header-col" :span="6">编号</el-col>
            <el-col class="header-col" :span="6">问题内容</el-col>
            <el-col class="header-col" :span="6">创建时间</el-col>
            <el-col class="header-col" :span="6">状态</el-col>
        </el-row>

        <el-row class="body" type="flex" align="middle" v-for="feed in feedback">
            <el-col class="body-col" :span="6">{{feed.id}}</el-col>
            <el-col class="body-col" :span="6">{{feed.content}}</el-col>
            <el-col class="body-col" :span="6">{{feed.createTime}}</el-col>
            <el-col class="body-col" :span="6">{{feed.state}}</el-col>
        </el-row>
    </el-main>
</template>

<script>
    export default {
        name: "Connect",
        data(){
            let validateEmail = function (rule, value, callback) {
                if(value === ''){
                  callback(new Error('请填写您的邮箱'))
                } else if(!value.match(/^[a-z0-9]+([._\\\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/)){
                    callback(new Error('请填写正确的邮箱'));
                } else {
                    callback();
                }
            }

            let validateTextarea = function(rule, value, callback) {
                if(value === ''){
                    callback(new Error('请填写问题内容'));
                } else {
                    callback();
                }
            }

            return {
                visible:false,
                feedback:[
                    {id:'#001', content:'content', createTime:'2020-12-1', state: '处理中'}
                ],
                feedbackFrom:{
                    email: '',
                    content: ''
                },
                rules: {
                    email: [
                        { validator: validateEmail, trigger: 'blur' }
                    ],
                    content: [
                        { validator: validateTextarea, trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
            submit(formName){
                this.$refs[formName].validate(valid => {
                    if(valid){
                        console.log('submit');
                        this.visible = false;
                    }
                });
            },

            reset(formName){
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>
    .header{
        margin-top: 20px;
        height: 30px;
        background-color: #f6f6f6;
        box-shadow: 0 0 1px rgba(0,0,0,0.3);
    }

    .header-col{
        text-align: center;
        color: #959595
    }

    .dialog /deep/ .el-dialog__body{
        display: flex;
        justify-content: center;
    }

    .dialog-body{
        width: 90%;
    }

    .body{
        height: 50px;
        border-bottom: 1px solid #E9E9E9;
    }

    .body-col{
        color: #515151;
        text-align: center
    }
</style>