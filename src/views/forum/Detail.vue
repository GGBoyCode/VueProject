<template>
    <div class="detail">
        <ArticleCard
            :src="url"
            :title="article.title"
            :content="article.content"
            :name="name"
            :good="article.goodCount"
            :publish="new Date(article.publishTime).toString()"
            @click="openDrawer">
        </ArticleCard>

        <Editor
            :visible.sync="drawer"
            :title="false"
            button="回复讨论"
            @commit="commitComment">
        </Editor>

        <el-card class="pre-comment">
            <small style="color: rgba(191, 191, 191, 1)">共{{total}}评论</small>
        </el-card>

        <CommentCard
            v-for="comment in comments"
            :url="comment.user.userPicture"
            :content="comment.content"
            :name="comment.user.name"
            :good="comment.goodCount"
            :time="new Date(comment.publishTime).toString()">
        </CommentCard>

        <el-pagination
            @size-change="sizeChange"
            @current-change="currentChange"
            :page-sizes="[10, 20, 30]"
            :page-size.sync="limit"
            :current-page.sync="page"
            layout="sizes, prev, pager, next"
            :total="total"
            :hide-on-single-page="true">
        </el-pagination>
    </div>
</template>

<script>
    import ArticleCard from "../../components/content/ArticleCard"
    import CommentCard from "../../components/content/CommentCard";
    import Editor from "../../components/content/Editor"
    import {addComment, getArticleById, getComment, getCommentCount} from "../../network/api";

    export default {
        name: "Detail",
        data() {
            return {
                article: {},
                comments: [],
                url:'',
                name:'',
                drawer:false,
                page: 0,
                limit: 10,
                total: 0
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

            sizeChange(val) {
                console.log(val);
                console.log(this.limit);
            },

            currentChange(val) {
                console.log(val);
                console.log(this.page);
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
                    this.url = this.article.user['userPicture'];
                    this.name = this.article.user.name;
                } else {
                    this.$message.error("数据获取失败");
                }
            })
            .catch(err => {
                this.$message.error("数据获取失败");
            });
            getComment({articleId: this.$route.query.id, page: 0, limit: 10})
                .then(res => {
                    if(res.code === 20000) {
                        this.comments = res.data;
                    } else {
                        this.$message.error("数据获取失败");
                    }
                })
                .catch(err => {
                    this.$message.error("数据获取失败");
                });
            getCommentCount({articleId: this.$route.query.id})
                .then(res => {
                    if(res.code === 20000) {
                        this.total = res.data;
                    } else {
                        this.$message.error("数据获取失败");
                    }
                })
                .catch(err => {
                    this.$message.error("数据获取失败");
                });
        }
    }
</script>

<style scoped>
    .pre-comment{
        margin-top: 10px;
    }

    .pre-comment /deep/ .el-card__body{
        padding: 5px 10px;
    }
</style>