<template>
    <div id="ButtonBav">
        <el-row class="footer" type="flex" justify="center">
            <el-col :span="18">
                <el-row class="list" type="flex" align="middle">
                    <el-col :span="6" style="text-align: center">
                        <h4>条目一</h4>
                        <div><el-link :underline="false">条目相关</el-link></div>
                        <div><el-link :underline="false">条目相关</el-link></div>
                        <div><el-link :underline="false">条目相关</el-link></div>
                    </el-col>

                    <el-col :span="6" style="text-align: center">
                        <h4>条目二</h4>
                        <div><el-link :underline="false">条目相关</el-link></div>
                        <div><el-link :underline="false">条目相关</el-link></div>
                        <div><el-link :underline="false">条目相关</el-link></div>
                    </el-col>

                    <el-col :span="6" style="text-align: center">
                        <h4>条目三</h4>
                        <div><el-link :underline="false">条目相关</el-link></div>
                        <div><el-link :underline="false">条目相关</el-link></div>
                        <div><el-link :underline="false">条目相关</el-link></div>
                    </el-col>

                    <el-col :span="6" style="text-align: center">
                        <h4>条目四</h4>
                        <div><el-link :underline="false">条目相关</el-link></div>
                        <div><el-link :underline="false">条目相关</el-link></div>
                        <div><el-link :underline="false">条目相关</el-link></div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "ButtonNav"
    }
</script>

<style scoped>
    .footer{
        background: #DCDFE6;
    }

    .list{
        height: 200px;
    }

    .list>.el-col>div{
        margin-top: 10px;
    }

    #ButtonBav{
        position: relative;
        left: 0;
        right:0;
        bottom:0;
    }
</style>