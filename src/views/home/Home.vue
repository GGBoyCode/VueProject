<template>
    <div id="Home">
        <!--走马灯——轮播图-->
        <el-carousel :interval="5000" arrow="always" height="500px">
            <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>

        <recommend title="热门推荐"></recommend>
        <el-divider></el-divider>
        <recommend title="最新上架"></recommend>
    </div>
</template>

<script>
    import Recommend from './Recommend'
    export default {
        name: "Home",
        data(){
            return {
                Hot:'1',
            }
        },
        components:{
            'recommend': Recommend
        }
    }
</script>

<style scoped>
    .hot-menu{
        margin: 20px 0;
    }

    .hot-menu>.el-menu-item{
        height: 40px;
        line-height: 40px;
    }

    .hot-title-box{
        cursor: auto;
        width: 100px;
        text-align: center;
        padding: 0;
    }

    .hot-title{
        color: #F2F6FC;
        background: #409EFF;
    }

    .textColor{
        color:#409EFF;
    }

    .image {
        width: 100%;
        display: block;
    }

    .hot-body>.el-col{
        margin-bottom: 20px;
    }
</style>