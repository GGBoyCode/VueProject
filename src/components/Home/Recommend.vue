<template>
    <div id="Recommend">
        <!--推荐-->
        <el-row type="flex" justify="center">
            <el-col :span="18">
                <!--导航栏-->
                <el-menu :default-active="rec" class="el-menu-demo rec-menu" mode="horizontal">
                    <el-menu-item class="rec-title-box"><h4 class="rec-title">{{title}}</h4></el-menu-item>
                    <el-menu-item index="1"  class="hidden-xs-only">推荐一</el-menu-item>
                    <el-menu-item index="2"  class="hidden-xs-only">推荐二</el-menu-item>
                    <el-menu-item index="3"  class="hidden-xs-only">推荐三</el-menu-item>
                    <el-menu-item index="4"  class="hidden-xs-only">推荐四</el-menu-item>
                    <div class="link"><el-link class="hidden-xs-only" :underline="false">更多<i class="el-icon-s-promotion"></i></el-link></div>
                </el-menu>

                <!--商品-->
                <el-row class="rec-body" :gutter="20">
                    <template v-for="n in 8">
                        <el-col :xs="12" :sm="8" :md="6">
                            <el-card :body-style="{ padding: '0px' }">
                                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                                <div style="padding: 14px;">
                                    <span>好吃的汉堡</span>
                                </div>
                            </el-card>
                        </el-col>
                    </template>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Recommend",
        props:{
            title:{
                type:String,
                default:'推荐'
            }
        },
        data(){
            return {
                rec:'1'
            }
        }
    }
</script>

<style scoped>
    .rec-menu {
        margin: 20px 0;
    }

    .rec-menu>.el-menu-item {
        height: 40px;
        line-height: 40px;
    }

    .rec-title-box {
        cursor: auto;
        width: 100px;
        text-align: center;
        padding: 0;
    }

    .rec-title {
        color: #F2F6FC;
        background: #409EFF;
    }

    .link {
        float:right;
        height: 40px;
        line-height: 40px;
    }

    .image {
        width: 100%;
        display: block;
    }

    .rec-body>.el-col {
        margin-bottom: 20px;
    }
</style>