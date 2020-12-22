<template>
    <el-drawer
            ref="drawer"
            class="drawer"
            :visible.sync="visible"
            :size="size"
            direction="btt"
            :show-close = "false"
            :wrapperClosable="false"
            @opened="editorSize">
        <template v-slot:title>
            <el-row type="flex" justify="space-between" align="middle">
                <el-row style="padding-right: 20px;">
                    <el-col :span="24"></el-col>
                </el-row>
                <span style="float: right;width: 180px">
                    <el-link @click="fullScreen" style="float: right;font-size: 12px;margin-left: 10px" :underline="false" icon="el-icon-full-screen">
                        {{size === '50%'?'全屏':'退出全屏'}}
                    </el-link>
                     <el-link @click="look = !look" style="float: right;font-size: 12px;margin-left: 10px" :underline="false" icon="el-icon-view">
                            {{look?'编辑':'预览'}}
                     </el-link>
               </span>
            </el-row>
        </template>
        <template v-if="!look">
            <el-row type="flex" justify="space-between" align="middle" style="margin: 0 20px 5px">
                <el-col :span="20">
                    <el-input
                        v-if="title"
                        placeholder="请输入内容"
                        v-model="article.title">
                    </el-input>
                </el-col>
                <el-col :span="4">
                    <el-button style="float: right;" @click="$emit('commit', article)" type="primary" size="mini">{{button}}</el-button>
                    <el-button style="float: right;margin-right: 10px" @click="closeDrawer" size="mini">取消</el-button>
                </el-col>
            </el-row>

            <quill-editor
                    ref="myQuillEditor"
                    :style="{height: height + 'px'}"
                    v-model="article.content"
                    :options="editorOption">
            </quill-editor>
        </template>
        <template v-else>
            <el-row type="flex" justify="center">
                <el-col :span="16">
                    <ArticleCard
                        v-if="title"
                        :src="$store.state.user.url?$store.state.path + $store.state.user.url:$store.state.user.url"
                        :title="article.title"
                        :content="article.content"
                        :name="$store.state.user.nickname">
                    </ArticleCard>
                    <CommentCard
                        v-else
                        :url="$store.state.user.url?$store.state.path + $store.state.user.url:$store.state.user.url"
                        :content="article.content"
                        :name="$store.state.user.nickname">
                    </CommentCard>
                </el-col>
            </el-row>
        </template>
    </el-drawer>
</template>

<script>
    import ArticleCard from "./ArticleCard";
    import CommentCard from "./CommentCard";

    // 工具栏配置
    const toolbarOptions = [
        ["bold", "italic", "underline", "strike"], // 加粗 斜体 下划线 删除线 -----['bold', 'italic', 'underline', 'strike']
        ["blockquote", "code-block"], // 引用  代码块-----['blockquote', 'code-block']
        [{ header: 1 }, { header: 2 }], // 1、2 级标题-----[{ header: 1 }, { header: 2 }]
        [{ list: "ordered" }, { list: "bullet" }], // 有序、无序列表-----[{ list: 'ordered' }, { list: 'bullet' }]
        [{ script: "sub" }, { script: "super" }], // 上标/下标-----[{ script: 'sub' }, { script: 'super' }]
        [{ indent: "-1" }, { indent: "+1" }], // 缩进-----[{ indent: '-1' }, { indent: '+1' }]
        [{ direction: "rtl" }], // 文本方向-----[{'direction': 'rtl'}]
        [{ size: ["small", false, "large", "huge"] }], // 字体大小-----[{ size: ['small', false, 'large', 'huge'] }]
        [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题-----[{ header: [1, 2, 3, 4, 5, 6, false] }]
        [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色-----[{ color: [] }, { background: [] }]
        [{ font: [] }], // 字体种类-----[{ font: [] }]
        [{ align: [] }], // 对齐方式-----[{ align: [] }]
        ["clean"], // 清除文本格式-----['clean']
        ["image", "video"] // 链接、图片、视频-----['link', 'image', 'video']
    ];

    export default {
        name: "Editor",
        props:{
            visible: {
                type: Boolean,
                default: false
            },
            title: {
                type: Boolean,
                default: false
            },
            button: {
                type: String,
                required: true
            }
        },
        components:{
            ArticleCard,
            CommentCard
        },
        data() {
            return {
                // 文章信息
                article: {
                    title:'',
                    content: '',
                },
                look:false,  // 预览
                size:'50%', // drawer大小
                height: 0,
                editorOption: {
                    //  富文本编辑器配置
                    modules: {
                        imageDrop: true,
                        imageResize: {
                            displayStyles: {
                                backgroundColor: "black",
                                border: "none",
                                color: "white"
                            },
                            modules: ["Resize", "DisplaySize", "Toolbar"]
                        },
                        //工具栏定义的
                        toolbar: toolbarOptions
                    },
                    //主题
                    theme: "snow",
                    placeholder: "请输入正文"
                }
            }
        },

        methods: {
            editorSize() {
                if(this.size === '50%') {
                    this.height =  document.documentElement.clientHeight * 0.5 - 82;
                } else {
                    this.height =  document.documentElement.clientHeight - 82;
                    console.log(this.height);
                }
            },

            closeDrawer() {
                this.$emit('update:visible', false);
            },

            fullScreen() {
                this.size = this.size === '50%'?'100%':'50%';
                this.editorSize();
            },
        }
    }
</script>

<style scoped>
    /*显示滚动条：当内容超出容器的时候，可以拖动：*/
    /deep/.el-drawer__body {
        overflow: auto;
    }

    /*隐藏滚动条，太丑了*/
    /deep/.el-drawer__container ::-webkit-scrollbar{
        display: none;
    }

    /deep/ .el-drawer__header {
        margin-bottom: 6px;
        display: block;
        padding: 10px 20px 0;
    }

    /deep/ .el-input__inner {
        border: none;
        font-weight: 600;
    }

    /deep/ :focus{
        outline:0;
    }

    /* 编辑器内部出现滚动条 */
    /deep/ .ql-container{
        overflow-y:auto;
        height: 85%;
    }

    /*滚动条整体样式*/
    /deep/ .ql-container ::-webkit-scrollbar{
        width: 10px;/*竖向滚动条的宽度*/
        height: 10px;/*横向滚动条的高度*/
    }
    /deep/ .ql-container ::-webkit-scrollbar-thumb{/*滚动条里面的小方块*/
        background: #666666;
        border-radius: 5px;
    }
    /deep/ .ql-container ::-webkit-scrollbar-track{/*滚动条轨道的样式*/
        background: #ccc;
        border-radius: 5px;
    }
    /deep/ .ql-snow .ql-tooltip[data-mode="link"]::before {
        content: "请输入链接地址:";
    }
    /deep/ .ql-snow .ql-tooltip.ql-editing a.ql-action::after {
        border-right: 0px;
        content: "保存";
        padding-right: 0px;
    }

    /deep/ .ql-snow .ql-tooltip[data-mode="video"]::before {
        content: "请输入视频地址:";
    }

    /deep/ .ql-snow .ql-picker.ql-size .ql-picker-label::before,
    /deep/ .ql-snow .ql-picker.ql-size .ql-picker-item::before {
        content: "14px";
    }
    /deep/ .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="small"]::before,
    /deep/ .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="small"]::before {
        content: "10px";
    }
    /deep/ .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="large"]::before,
    /deep/ .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="large"]::before {
        content: "18px";
    }
    /deep/ .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="huge"]::before,
    /deep/ .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="huge"]::before {
        content: "32px";
    }

    /deep/ .ql-snow .ql-picker.ql-header .ql-picker-label::before,
    /deep/ .ql-snow .ql-picker.ql-header .ql-picker-item::before {
        content: "文本";
    }
    /deep/ .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,
    /deep/ .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
        content: "标题1";
    }
    /deep/ .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,
    /deep/ .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
        content: "标题2";
    }
    /deep/ .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,
    /deep/ .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
        content: "标题3";
    }
    /deep/ .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,
    /deep/ .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
        content: "标题4";
    }
    /deep/ .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,
    /deep/ .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
        content: "标题5";
    }
    /deep/ .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,
    /deep/ .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
        content: "标题6";
    }

    /deep/ .ql-snow .ql-picker.ql-font .ql-picker-label::before,
    /deep/ .ql-snow .ql-picker.ql-font .ql-picker-item::before {
        content: "标准字体";
    }
    /deep/ .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="serif"]::before,
    /deep/ .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="serif"]::before {
        content: "衬线字体";
    }
    /deep/ .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="monospace"]::before,
    /deep/ .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="monospace"]::before {
        content: "等宽字体";
    }
</style>