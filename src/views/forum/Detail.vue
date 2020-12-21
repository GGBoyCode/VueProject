<template>
    <div class="detail">
        <el-card>
            <table class="table-header">
                <tr>
                    <td>
                        <el-avatar :size="30" icon="el-icon-user-solid"></el-avatar>
                    </td>
                    <td>
                        <el-link :underline="false">title</el-link>
                    </td>
                </tr>
            </table>
            <small style="color: rgba(191, 191, 191, 1)">username time</small>
            <article>
                <p>content</p>
            </article>

            <div style="margin-top: 10px">
                <small>
                    <span class="icon-info">
                        <el-link type="info" :underline="false" icon="el-icon-position">8</el-link>
                    </span>

                    <span class="icon-info">
                        <el-link type="info" :underline="false" icon="el-icon-star-off">收藏</el-link>
                    </span>

                    <el-button style="float: right" type="primary" size="mini" icon="el-icon-edit">回复讨论</el-button>
                </small>
            </div>
        </el-card>

        <el-card class="pre-comment">
            <small style="color: rgba(191, 191, 191, 1)">共1评论</small>
        </el-card>

        <el-card class="comment">
            <template slot="header" >
                <table class="table-header">
                    <tr>
                        <td>
                            <el-avatar :size="25" icon="el-icon-user-solid"></el-avatar>
                        </td>
                        <td>
                            <el-link :underline="false">username</el-link>
                        </td>
                    </tr>
                </table>
            </template>
            <div v-for="o in 4" :key="o">
                {{'列表内容 ' + o }}
            </div>

            <div style="margin-top: 10px">
                <small>
                <span class="icon-info">
                    <el-link type="info" :underline="false" icon="el-icon-position">8</el-link>
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
    </div>
</template>

<script>
    export default {
        name: "Detail"
    }
</script>

<style scoped>
    .el-avatar{
        display: block;
    }

    .table-header tr td{
        padding-right: 10px;
    }

    .pre-comment,.comment{
        margin-top: 10px;
    }

    .pre-comment /deep/ .el-card__body{
        padding: 5px 10px;
    }

    .icon-info {
        margin-right: 20px;
        color: rgb(140, 140, 140);
    }
</style>