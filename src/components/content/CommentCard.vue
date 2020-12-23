<template>
    <el-card class="comment">
        <template slot="header" >
            <table class="table-header">
                <tr>
                    <td>
                        <el-avatar style=" vertical-align:middle;" :size="25" :src="url === undefined || url === ''?'':$store.state.path + '/' + url" icon="el-icon-user-solid"></el-avatar>
                    </td>
                    <td width="30%">
                        <el-link :underline="false">{{name}}</el-link>
                    </td>
                    <td width="70%" align="right" style="color: rgb(191, 191, 191)"><small>{{time}}</small></td>
                </tr>
            </table>
        </template>

        <article v-html="content"></article>

        <div style="margin-top: 10px">
            <small>
                <span class="icon-info">
                    <el-link type="info" :underline="false" icon="el-icon-position">{{good}}</el-link>
                </span>

                <span class="icon-info">
                    <el-link type="info" :underline="false" icon="el-icon-chat-round">回复 10</el-link>
                </span>

                <span class="icon-info">
                    <el-link type="info" :underline="false" icon="el-icon-star-off">收藏 1</el-link>
                </span>
            </small>
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "CommentCard",
        props: {
            url: {
                type: String,
                default: undefined
            },
            name: {
                type: String,
                default: 'username'
            },
            time: {
                type: String,
                default: new Date().toString()
            },
            content: {
                type: String,
                default: 'this is content'
            },
            good: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {

            }
        },
    }
</script>

<style scoped>
    .comment{
        margin-top: 10px;
    }

    /deep/ .el-card__body{
        padding: 5px 10px;
    }

    .table-header tr td{
        padding-right: 10px;
    }

    .icon-info {
        margin-right: 20px;
        color: rgb(140, 140, 140);
    }
</style>