<template>
  <div class="Module">
    <el-dialog
        class="my-dialog"
      :visible.sync="visible"
      width="25%"
      :show-close="false"
      @close="close"
      center>
        <span>
            <el-tabs :stretch="true" v-model="tabIndex" id="tab">
                <el-tab-pane label="登 录" name="first">
                    <sign-in ref="signIn"></sign-in>
                </el-tab-pane>

                <el-tab-pane label="注 册" name="second">
                    <sign-up ref="signUp"></sign-up>
                </el-tab-pane>
            </el-tabs>
        </span>
    </el-dialog>
  </div>
</template>

<script>
    import SignIn from "./SignIn";
    import SignUp from "./SignUp";

    export default {
        name: "Module",
        data:function () {
            return {
                tabIndex:'first',
                visible:false
            }
        },
        components:{
            'sign-in': SignIn,
            'sign-up': SignUp
        },
        watch:{
            tabIndex:function(){
                if(this.tabIndex === "first"){
                    this.$refs['signUp'].$children[0].resetFields();
                } else {
                    this.$refs['signIn'].$children[0].resetFields();
                }
            }
        },
        methods:{
            close(){
                this.$refs['signUp'].$children[0].resetFields();
                this.$refs['signIn'].$children[0].resetFields();
            }
        }
    }
</script>

<style scoped>
    .my-dialog /deep/ .el-dialog__header {
        padding: 0;
    }
</style>
