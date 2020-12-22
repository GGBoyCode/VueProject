<template>
    <div class="detail">
        <ArticleCard
            :src="article.src"
            :title="article.title"
            :content="article.content"
            :name="$store.state.user.nickname"
            :good="article.goodCount"
            @click="openDrawer">
        </ArticleCard>

        <Editor
            :visible.sync="drawer"
            :title="false"
            button="回复讨论"
            @commit="commitComment">
        </Editor>

        <el-card class="pre-comment">
            <small style="color: rgba(191, 191, 191, 1)">共1评论</small>
        </el-card>

        <CommentCard></CommentCard>
    </div>
</template>

<script>
    import ArticleCard from "../../components/content/ArticleCard"
    import CommentCard from "../../components/content/CommentCard";
    import Editor from "../../components/content/Editor"
    import {addComment, getArticleById} from "../../network/api";

    export default {
        name: "Detail",
        data() {
            return {
                article: {},
                drawer:false,
            }
        },

        components:{
            ArticleCard,
            CommentCard,
            Editor
        },

        methods: {
            openDrawer() {
                if(this.$store.state.loading) {
                    this.drawer = true;
                } else {
                    this.$message.error("请先登录再评论");
                }
            },

            commitComment(comment) {
                if(!comment.content) {
                    this.$message.error("请输入评论内容");
                } else {
                    addComment({userId: this.$store.state.user.telephone, articleId: this.article.id, content: comment.content})
                        .then(res => {
                            if(res.code === 20000) {
                                this.$message({
                                    type: "success",
                                    message: '回复成功'
                                });
                            } else {
                                this.$message.error('回复失败');
                            }
                        })
                        .catch(err => {
                            this.$message.error('网络错误');
                        })

                    this.drawer = false;
                }
            }
        },

        created() {
            getArticleById({id: this.$route.query.id})
            .then(res => {
                if(res.code === 20000) {
                    this.article = res.data;
                } else {
                    this.$message.error("数据获取失败");
                }
            })
            .catch(err => {
                this.$message.error("数据获取失败");
            })
        }
    }
</script>

<style scoped>
    .pre-comment,.comment{
        margin-top: 10px;
    }

    .pre-comment /deep/ .el-card__body{
        padding: 5px 10px;
    }
</style>