<template>
    <div class="interview">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">热门</el-menu-item>
            <el-menu-item index="2">推荐</el-menu-item>
            <div class="add-button">
                <el-button @click="openDrawer" type="primary" size="small" round icon="el-icon-edit">发起讨论</el-button>
            </div>
        </el-menu>

        <Editor
            :visible.sync="drawer"
            :title="true"
            button="发起讨论"
            @commit="commitArticle">
        </Editor>

        <el-card class="box-card" v-for="Article in ArticleList" shadow="hover" style="margin-bottom: 10px" @click.native="toDetail(Article.id)">
            <template slot="header" >
                <table class="table-header">
                    <tr>
                        <td>
                            <el-avatar :size="25" :src="Article.url" icon="el-icon-user-solid"></el-avatar>
                        </td>
                        <td>
                            <el-link :underline="false">{{Article.title}}</el-link>
                        </td>
                    </tr>
                </table>
            </template>
            <div class="content">
                <p>{{ToText(Article.content)}}</p>
            </div>
            <div style="margin-top: 10px">
                <small>
                <span class="icon-info">
                    <el-link type="info" :underline="false" icon="el-icon-position">{{Article.goodCount}}</el-link>
                </span>

                    <span class="icon-info">
                    <el-link type="info" :underline="false" icon="el-icon-view">12</el-link>
                </span>

                    <span class="icon-info">
                    <el-link type="info" :underline="false" icon="el-icon-chat-round">10</el-link>
                </span>

                    <span class="icon-info">
                    <el-link type="info" :underline="false" icon="el-icon-star-off">{{Article.collectionCount}}</el-link>
                </span>
                </small>
            </div>
        </el-card>
    </div>
</template>

<script>
    import Editor from "../../components/content/Editor"
    import {addArticle, getArticle, getUserInfo} from "../../network/api";

    export default {
        name: "interview",
        data(){
            return {
                ArticleList:[],
                activeIndex: '1',
                drawer:false
            };
        },
        components: {
            Editor
        },

        methods: {
            toDetail(id) {
                this.$router.push({
                    path: '/forum/detail',
                    query: {
                        id: id
                    }
                });
            },

            openDrawer() {
                if(this.$store.state.loading) {
                    this.drawer = true;
                } else {
                    this.$message.error("请先登录再评论");
                }
            },

            ToText(HTML) {
                return HTML.replace(/<(style|script|iframe)[^>]*?>[\s\S]+?<\/\1\s*>/gi,'').replace(/<[^>]+?>/g,'').replace(/\s+/g,' ').replace(/ /g,' ').replace(/>/g,' ');
            },

            commitArticle(article) {
                console.log(article);
                if(!article.title) {
                    this.$message.error("标题不能为空");
                } else if(!article.content) {
                    this.$message.error("请输入文章内容");
                } else {
                    addArticle({userId: this.$store.state.user.telephone, title: article.title, content: article.content})
                        .then(res => {
                            if(res.code === 20000) {
                                this.$message({
                                    type: "success",
                                    message: '上传成功'
                                });
                            } else {
                                this.$message.error('上传失败');
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
            getArticle()
            .then(res => {
                if(res.code === 20000) {
                    let data = res.data;
                    for(let Article of data){
                        //获取用户信息
                        getUserInfo({username: Article.userId})
                        .then(res => {
                            if(res.code === 20000) {
                                Article.url = this.$store.state.path + '/' + res.data.userPicture;
                            } else {
                                Article.url = '';
                            }
                            this.ArticleList.push(Article);
                        })
                    }
                } else {
                    this.$message.error("数据获取错误");
                }
            })
            .catch(err => {
                this.$message.error("数据获取错误");
            })
        }
    }
</script>

<style scoped>
    .el-menu{
        margin-bottom: 15px
    }

    /deep/ .el-menu.el-menu--horizontal {
        border-bottom: none;
    }

    .el-menu-item{
        height: 50px
    }

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

    .add-button {
        float: right;
        line-height: 50px
    }

    .content {
        width:100%;
        color: rgb(89, 89, 89);
        word-break:break-all;
        display:-webkit-box;/**对象作为伸缩盒子模型展示**/
        -webkit-box-orient:vertical;/**设置或检索伸缩盒子对象的子元素的排列方式**/
        -webkit-line-clamp:2;/**显示的行数**/
        overflow:hidden;/**隐藏超出的内容**/
    }
</style>