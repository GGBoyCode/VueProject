<template>
    <div id="Home">
        <!--走马灯——轮播图-->
        <el-carousel :interval="5000" arrow="always" height="500px">
            <el-carousel-item v-for="item in list">
                <img :src="url + item" style="object-fit: cover;width: 100%;height: 100%;">
            </el-carousel-item>
        </el-carousel>

        <recommend :ware-list="hotList" title="热门推荐"></recommend>
        <el-divider></el-divider>
        <recommend :ware-list="recommendList" title="最新上架"></recommend>
    </div>
</template>

<script>
    import Recommend from './Recommend'
    import {getCarousels, getAllWare} from '../../network/api.js'
    export default {
        name: "Home",
        data(){
            return {
                Hot:'1',
                list:[],
                url:'/api/',
                hotList: [],
                recommendList: []
            }
        },

        components:{
            'recommend': Recommend
        },

        created() {
            getCarousels(null).then(res => {
                if(res.code == 20000) {
                    this.list = res.data;
                }
            }).catch(err => {
                this.$message.error("数据获取失败")
            });

            getAllWare().then(res => {
                if(res.code == 20000) {
                    res.data.forEach((value, index) => {
                        if(index < 8) {
                            this.hotList.push(value);
                        } else if(index < 16) {
                            this.recommendList.push(value);
                        }
                    });
                    console.log(this.hotList);
                    console.log(this.recommendList);
                }
            }).catch(err => {
                this.$message.error("数据获取失败")
            })
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