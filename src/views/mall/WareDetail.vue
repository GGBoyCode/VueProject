<template>
    <div style="margin: 20px 0;">
        <el-row type="flex" justify="center">
            <el-col :span="16">
                <el-row type="flex" justify="space-around">
                    <el-col :span="10">
                        <el-image
                            style="width: 100%; height: 100%;"
                            :src="ware.url === undefined?'':$store.state.path + '/' + ware.url"
                            fit="cover">
                            <div slot="error" class="image-slot">
                                <i class="el-icon-picture-outline"></i>
                            </div>
                        </el-image>
                    </el-col>
                    <el-col :span="12">
                        <div class="title">
                            <h1 class="title-font">{{ware.name}}</h1>
                        </div>

                        <div class="description">
                            <p class="description-font">{{ware.description}}</p>
                        </div>

                        <table>
                            <tr>
                                <td class="label" width="50px">价格</td>
                                <td>
                                    <p class="price-font"><span class="symbol">￥</span>{{ware.price}}</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="label" width="50px">数量</td>
                                <td>
                                    <el-input-number size="mini" v-model="num" controls-position="right" :min="1" :max="10"></el-input-number>
                                </td>
                            </tr>
                        </table>
                        <div class="row">
                            <el-button type="danger" plain>立刻购买</el-button>

                            <el-button @click="addCart" type="danger" icon="el-icon-shopping-cart-2">加入购物车</el-button>

                            <el-button type="danger" icon="el-icon-star-off" circle></el-button>
                        </div>
                    </el-col>
                </el-row>

                <el-row type="flex" justify="center" style="margin-top: 40px">
                    <el-col :span="23">
                        <el-tabs>
                            <el-tab-pane label="商品描述">{{ware.description}}</el-tab-pane>
                            <el-tab-pane label="评论">
                                <CommentCard></CommentCard>
                            </el-tab-pane>
                        </el-tabs>

                        <h1 class="love-font">猜您喜欢</h1>
                        <el-divider></el-divider>
                        <swiper :options="swiperOption"
                                ref="mySwiper">

                            <!-- slides -->
                            <template v-for="l in list">
                                <swiper-slide>
                                    <ware
                                        :src="$store.state.path + '/' + l.url"
                                        :title="l.name"
                                        :price="l.price">
                                    </ware>
                                </swiper-slide>
                            </template>
                            <div class="swiper-button-prev" slot="button-prev"></div>
                            <div class="swiper-button-next" slot="button-next"></div>
                        </swiper>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import CommentCard from "../../components/content/CommentCard";
    import Ware from "../../components/common/Ware";
    import {getAllWare, getWareById, addWareToCart} from '../../network/api'
    export default {
        name: "WareDetail",
        data() {
            return {
                num: 1,
                ware: {},
                list:[],
                swiperOption:{
                    slidesPerView: 4,  //一行显示3个
                    freeMode: true,
                    speed: 1000,   //滑动速度
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                },
            }
        },

        components: {
            CommentCard,
            Ware
        },

        methods: {
            addCart() {
                if(this.$store.state.loading) {
                    addWareToCart({userId: this.$store.state.user.telephone, wareId: this.$route.query.id})
                        .then(res => {
                            if(res.code === 20000) {
                                this.$message({
                                    type: 'success',
                                    message: '添加成功'
                                });
                            } else {
                                this.$message.error("添加失败")
                            }
                        })
                        .catch(err => {
                            this.$message.error("网络错误")
                        })
                } else {
                    this.$message.error("请先登录在加入购物车");
                }
            }
        },

        created() {
            getWareById({id: this.$route.query.id}).then(res => {
                console.log(res)
                if(res.code === 20000) {
                    this.ware = res.date;
                }
            }).catch(err => {
                this.$message.error("数据获取错误");
            });

            getAllWare().then(res => {
                if(res.code === 20000) {
                    res.data.forEach(value => {
                        if(this.list.length !== 6 && value.id != this.$route.query.id) {
                            this.list.push(value);
                        }
                    });
                }
            }).catch(err => {
                this.$message.error("数据获取失败")
            })
        }
    }
</script>

<style scoped>
    .title, .description {
        margin-bottom: 10px;
    }

    .title-font {
        font-size: 16px;
        font-weight: 700;
    }

    .description-font {
        font-size: 14px;
        color: #777777;
        line-height: 24px;
    }

    table{
        border-collapse: separate;
        border-spacing: 5px 10px;
    }

    .label {
        font-size: 12px;
        color:#838383;
    }

    .symbol {
        color: #FF0036;
        font-size: 18px;
        font-family: Arial;
    }

    .price-font {
        font-size: 30px;
        color: #FF0036;
        font-weight: bolder;
        font-family: Arial;
    }

    .row {
        margin-top: 20px;
        /*width: inherit;*/
    }

    .love-font {
        font-size: 20px;
        line-height: 22px;
        color: #242424;
        font-weight: 500;
        margin-top: 40px
    }
</style>