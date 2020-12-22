<template>
    <el-card class="ArticleCard">
        <table class="table-header">
            <tr>
                <td>
                    <el-avatar :size="30" :src="src === undefined || src === ''?'':this.$store.state.path + '/' + this.src" icon="el-icon-user-solid"></el-avatar>
                </td>
                <td>
                    <el-link :underline="false">{{title}}</el-link>
                </td>
            </tr>
        </table>
        <small style="color: rgba(191, 191, 191, 1)">{{name + ' ' + publish}}</small>
        <article style="margin: 0 20px" v-html="content">
        </article>

        <div style="margin-top: 10px">
            <small>
                <span class="icon-info">
                    <el-link type="info" :underline="false" icon="el-icon-position">{{good}}</el-link>
                </span>

                <span class="icon-info">
                    <el-link type="info" :underline="false" icon="el-icon-star-off">收藏</el-link>
                </span>

                <el-button @click="$emit('click')" style="float: right" type="primary" size="mini" icon="el-icon-edit">回复讨论</el-button>
            </small>
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "ArticleCard",
        props:{
            src: {
                type: String,
                default: undefined
            },
            title: {
                type: String,
                default: 'title'
            },
            content: {
                type: String,
                default: 'this is content'
            },
            name: {
                type: String,
                default: 'name'
            },
            publish: {
                type: String,
                default: new Date().toString()
            },
            good: {
                type: Number,
                default: 0
            },
        },
        data() {
            return {

            }
        },
    }
</script>

<style scoped>
    .el-avatar{
        display: block;
    }

    .table-header tr td{
        padding-right: 10px;
    }

    .icon-info {
        margin-right: 20px;
        color: rgb(140, 140, 140);
    }
</style>