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
</style>