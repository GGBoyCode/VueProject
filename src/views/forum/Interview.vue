<template>
    <div class="interview">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">热门</el-menu-item>
            <el-menu-item index="2">推荐</el-menu-item>
            <div class="add-button">
                <el-button @click="drawer = true"  type="primary" size="small" round icon="el-icon-edit">发起讨论</el-button>
            </div>
        </el-menu>


        <el-drawer
            ref="drawer"
            class="drawer"
            title="我是标题"
            :visible.sync="drawer"
            size="50%"
            direction="btt"
            @opened="editorHeight">
            <template>
                <quill-editor
                    ref="myQuillEditor"
                    :style="{height: height + 'px'}"
                    v-model="content"
                    :options="editorOption">
                </quill-editor>
            </template>
        </el-drawer>

        <el-card class="box-card" shadow="hover" @click.native="toDetail">
            <template slot="header" >
                <table class="table-header">
                    <tr>
                        <td>
                            <el-avatar :size="25" icon="el-icon-user-solid"></el-avatar>
                        </td>
                        <td>
                            <el-link :underline="false">title</el-link>
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
                    <el-link type="info" :underline="false" icon="el-icon-view">12</el-link>
                </span>

                    <span class="icon-info">
                    <el-link type="info" :underline="false" icon="el-icon-chat-round">10</el-link>
                </span>

                    <span class="icon-info">
                    <el-link type="info" :underline="false" icon="el-icon-star-off">1</el-link>
                </span>
                </small>
            </div>
        </el-card>
    </div>
</template>

<script>
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
        name: "interview",
        data(){
            return {
                drawer: false,
                activeIndex: '1',
                content: '',
                height: 0,
                editorOption: {
                    //  富文本编辑器配置
                    modules: {
                        //工具栏定义的
                        toolbar: toolbarOptions
                    },
                    //主题
                    theme: "snow",
                    placeholder: "请输入正文"
                }
            };
        },

        methods: {
            toDetail(){
                this.$router.push('/forum/detail');
            },

            editorHeight() {
                console.log(this.$refs.drawer.$el.offsetHeight);
                this.height =  this.$refs.drawer.$el.offsetHeight - 75.2;
            }
        },

        computed : {

        },
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

    /deep/ :focus{
        outline:0;
    }

    /*/deep/ .el-drawer.btt{*/
    /*    overflow: scroll;*/
    /*}*/

    .editor {
        /*line-height: normal !important;*/
        height: 200px;
    }

    /* 编辑器内部出现滚动条 */
    /deep/ .ql-container{
        overflow-y:auto;
        height: 90%;
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
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
        content: "标题5";
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
        content: "标题6";
    }

    .ql-snow .ql-picker.ql-font .ql-picker-label::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item::before {
        content: "标准字体";
    }
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="serif"]::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="serif"]::before {
        content: "衬线字体";
    }
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="monospace"]::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="monospace"]::before {
        content: "等宽字体";
    }
</style>