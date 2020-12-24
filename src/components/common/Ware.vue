<template>
    <div @click="$emit('click')">
        <el-card style="margin: 0 10px 10px 0" :body-style="{ padding: '0px' }">
            <el-image
                    style="width: 100%;height: 250px"
                    :src="src"
                    fit="cover">
                <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                </div>
            </el-image>
            <div style="padding: 5px;">
                <el-row style="padding-bottom: 5px">
                    <el-col :span="12" style="font-size: 18px;color: red">
                        <span>￥</span>
                        <strong>{{price.toFixed(2)}}</strong>
                    </el-col>
                    <el-col :span="12" style="text-align: right;font-size: 12px;color: #888">0人付款</el-col>
                </el-row>
                <p style="color: #3d3d3d;font-size: 12px;padding-bottom: 10px">{{title}}</p>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "Ware",
        props: {
            src: {
                type: String,
                default: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
            },
            price: {
                type: Number,
                default: 0
            },
            title: {
                type: String,
                default: 'title'
            }
        }
    }
</script>

<style scoped>

</style>