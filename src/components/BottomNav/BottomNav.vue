<template>
    <div id="ButtonBav">
        <el-row class="footer" type="flex" justify="center">
            <el-col :span="18">
                <el-row class="list" type="flex" align="middle">
                    <el-col :span="6" style="text-align: center" v-for="title in titles">
                        <h4 style="color: #ffffff">{{title}}</h4>
                        <div><link-text href="#" :underline=true>条目相关</link-text></div>
                        <div><link-text href="#" :underline=true>条目相关</link-text></div>
                        <div><link-text href="#" :underline=true>条目相关</link-text></div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import LinkText from "./LinkText";
    export default {
        name: "ButtonNav",
        data(){
            return {
                titles:['条目一','条目二','条目三','条目四']
            };
        },
        components:{
            LinkText
        }
    }
</script>

<style scoped>
    .footer{
        background: rgb(84, 92, 100);
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