<template>
    <el-main>
        <h4 style="color: rgb(57, 61, 73)">我的收藏</h4>

        <!--<el-row type="flex" style="margin-top: 20px;" justify="space-between" align="middle">-->
        <el-row style="margin-top: 20px;" :gutter="20">
            <template v-for="n in 8">
                <el-col :span="8" style="margin-top: 20px;">
                    <el-card :body-style="{ padding: '0px' }">
                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                        <div style="padding: 10px;">
                            <span>好吃的汉堡</span>
                            <div class="bottom">
                                <time class="time">{{ currentDate }}</time>
                                <el-button type="text" class="button">操作按钮</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </template>
        </el-row>
    </el-main>
</template>

<script>
    export default {
        name: "Collection",
        data(){
            return {
              currentDate:new Date().toDateString()
            };
        }
    }
</script>

<style scoped>
    .time {
        font-size: 13px;
        color: #999;
    }

    .image{
        object-fit:cover;
        height: 119px;
        width: 100%;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }
</style>