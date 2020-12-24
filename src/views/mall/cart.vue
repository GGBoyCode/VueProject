<template>
    <div style="margin-top: 20px">
        <el-row type="flex" justify="center">
            <el-col :span="18">
                <el-menu default-active="1" class="el-menu-demo" mode="horizontal">
                    <el-menu-item index="1">全部商品</el-menu-item>
                    <div class="btn">
                        <small>已选商品（不含运费）</small>
                        <small style="color: red;font-weight: 600;padding: 0 10px">{{sum.toFixed(2)}}</small>
                        <el-button v-if="checkedList.length > 0" size="mini" type="danger">结算</el-button>
                        <el-button v-else size="mini" type="info" disabled>结算</el-button>
                    </div>
                </el-menu>

                <!--表头-->
                <el-row style="margin-top: 20px">
                    <template v-for="header in tableHeaders">
                        <el-col class="header" :span="header.size">
                            <template v-if="header.title === '全选'">
                                <el-checkbox v-model="allChecked" @change="handleCheckAllChange" style="padding-left: 10px">{{header.title}}</el-checkbox>
                            </template>
                            <template v-else>{{header.title}}</template>
                        </el-col>
                    </template>
                </el-row>

                <!--购物车列表-->
                <el-checkbox-group
                    v-model="checkedList"
                    @change="handleCheckedChange">
                    <!--:ref="'list' + ware.id"-->
                    <CartList
                        v-for="ware in list"
                        ref="list"
                        :url="$store.state.path + '/' + ware.url"
                        :id="ware.id"
                        :price="ware.price"
                        :title="ware.name"
                        @change="getSum"
                        @delete="deleteWare(ware.id)"
                    ></CartList>
                </el-checkbox-group>


                <div style="width: 100%;height: 40px;background-color: #e5e5e5;margin: 20px 0">
                    <el-checkbox v-model="allChecked" @change="handleCheckAllChange" style="padding-left: 10px" class="footer">全选</el-checkbox>
                    <el-link class="footer" @click="addLove" :underline="false">添加到喜欢</el-link>
                    <el-link class="footer" @click="deleteCart" :underline="false">删除</el-link>
                    <el-button v-if="checkedList.length > 0" style="float: right;height: 40px" size="medium" type="danger">结算</el-button>
                    <el-button v-else style="float: right;height: 40px" size="medium" type="info" disabled>结算</el-button>
                    <span style="float: right;line-height:40px;font-size:18px;font-weight: 600;color: red;padding-right: 5px">{{sum.toFixed(2)}}</span>
                    <span class="footer" style="float: right;padding: 0">
                        已选商品1件合计（不含运费）：
                    </span>
                    <span class="footer" style="float: right">
                        已选商品<span style="font-weight: 600;color: red;padding: 0 5px">{{number}}</span>件
                    </span>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import CartList from "../../components/content/CartList";
    import {getWareByCart,deleteWareByCart} from '../../network/api'
    export default {
        name:'Cart',
        data() {
            return {
                tableHeaders: [
                    { size: 3, title: '全选' },
                    { size: 9, title: '商品信息' },
                    { size: 3, title: '单价' },
                    { size: 3, title: '数量' },
                    { size: 3, title: '金额' },
                    { size: 3, title: '操作' },
                ],
                allChecked: false,
                checkedList:[],
                list:[],
                sum: 0
            }
        },

        components: {
            CartList
        },

        computed: {
            Ids() {
                let ids = [];
                this.list.forEach(value => {
                    ids.push(value.id);
                })
                return ids;
            },
            number() {
                return this.checkedList.length;
            }
        },

       watch: {
            checkedList(val) {
                this.sum = 0;
                val.forEach(id => {
                    let ware = this.$refs.list.find(value => value.id === id);
                    this.sum += ware.price * ware.number;
                })
            }
        },
        methods: {
            handleCheckAllChange(val) {
                this.checkedList = val?this.Ids:[];
            },

            handleCheckedChange(val) {
                this.allChecked = val.length === this.list.length;
            },

            getWare() {
                getWareByCart({ userId: this.$store.state.user.telephone }).then(res => {
                    if(res.code === 20000) {
                        this.list = res.data;
                    }
                }).catch(err => {
                    this.$message.error("数据获取失败")
                })
            },

            deleteWare(id) {
                deleteWareByCart({ userId: this.$store.state.user.telephone, wareId: id}).then(res => {
                    if(res.code === 20000) {
                        this.$message({
                            type: "success",
                            message: "删除成功"
                        });
                        this.getWare();
                    } else {
                        this.$message.error("删除失败")
                    }
                }).catch(err => {
                    this.$message.error("网络错误")
                });
            },

            addLove() {
                if(this.checkedList.length === 0) {
                    this.$message.error("请选择宝贝");
                }
            },

            deleteCart() {
                if(this.checkedList.length === 0) {
                    this.$message.error("请选择宝贝");
                }
            },

            getSum() {
                this.sum = 0;
                this.checkedList.forEach(id => {
                    let ware = this.$refs.list.find(value => value.id === id);
                    this.sum += ware.price * ware.number;
                })
            }
        },
        created() {
            this.getWare()
        }
    }
</script>

<style scoped>
    /deep/ .el-menu-item {
        float: left;
        height: 50px;
        line-height: 50px;
    }

    .btn {
        float: right;
        height: 50px;
        line-height: 50px;
    }

    .header {
        font-size: 14px;
        color: #606266;
        font-weight: 500;
    }

    /deep/ .el-checkbox__label {
        font-size: 12px
    }

    .footer {
        font-size: 12px;
        color: #3c3c3c;
        padding-right: 30px;
        line-height: 40px;
    }
</style>