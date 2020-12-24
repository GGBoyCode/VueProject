<template>
    <el-card shadow="never" class="cartList">
        <el-row>
            <el-col :span="3">
                <div style="display: flex">
                    <el-checkbox :label="id" style="padding: 0 10px"></el-checkbox>
                    <el-image
                        style="width: 100%; height: 100%;padding-right: 10px"
                        :src="url"
                        fit="cover">
                        <div slot="error" class="image-slot">
                            <i class="el-icon-picture-outline"></i>
                        </div>
                    </el-image>
                </div>
            </el-col>
            <el-col class="column" :span="9">
                {{title}}
            </el-col>
            <el-col class="column" :span="3" style="font-weight: 600">
                {{'￥' + price.toFixed(2)}}
            </el-col>
            <el-col :span="3">
                <el-input-number @change="$emit('change')" v-model="number" size="mini" :min="1" :max="10"></el-input-number>
            </el-col>
            <el-col class="column" :span="3" style="font-weight: 600;color: red">
                {{'￥' + (price * number).toFixed(2)}}
            </el-col>
            <el-col :span="3">
                <el-link class="link" :underline="false">添加到喜欢</el-link>
                <el-link @click="$emit('delete')" class="link" :underline="false">删除</el-link>
            </el-col>
        </el-row>
    </el-card>
</template>

<script>
    export default {
        name: "CartList",
        props: {
            id: {
                type:Number,
                required: true
            },
            url: {
                type: String,
                default: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
            },
            title: {
                type: String,
                default: 'title'
            },
            price: {
                type: Number,
                default: 1.00
            },
        },
        data() {
            return {
                number: 1
            }
        }
    }
</script>

<style scoped>
    /deep/ .el-card__body {
        padding: 20px 0;
    }

    .cartList {
        margin-top: 10px;
        border: 1px solid #ccc;
    }

    .column {
        font-size: 12px;
    }

    .link {
        font-size:12px;
        display: block;
        padding-bottom: 5px;
    }

    /deep/ .el-checkbox__label {
        display: none;
    }
</style>