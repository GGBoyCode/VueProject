<template>
    <el-main>
        <div style="border: 1px solid #E9E9E9">
            <el-row type="flex" class="header" align="middle">
                <el-col style="text-align: center;color: #959595" :span="16">信息</el-col>
                <el-col style="text-align: center;color: #959595" :span="8">日期</el-col>
            </el-row>

            <el-row type="flex" style="height: 50px;border-bottom: 1px solid #E9E9E9" align="middle" v-for="record in records">
                <el-col :offset="1" :span="15" style="color:#515151">{{record.message}}</el-col>
                <el-col style="text-align: center;color: #959595;font-size: 14px" :span="8">{{record.date}}</el-col>
            </el-row>

            <div class="page">
                <el-pagination
                        background
                        :page-size="10"
                        :current-page="1"
                        layout="prev, pager, next"
                        :total="records.length">
                </el-pagination>
            </div>

        </div>
        <!--<el-table
        :header-cell-style="{'background-color': '#f6f6f6'}"
        :data="tableInfo"
        style="width: 100%;box-shadow: 1px -1px 1px rgba(0,0,0,.5)">
            <el-table-column header-align="center" prop="message" label="信息" min-width="140"></el-table-column>
            <el-table-column header-align="center" align="center" prop="date" label="日期" min-width="70"></el-table-column>
        </el-table>-->
    </el-main>
</template>

<script>
    export default {
        name: "Message",
        data(){
            return {
                records: [
                    {message:'message',date:'2020-11-30'},
                    {message:'message',date:'2020-11-30'},
                    {message:'message',date:'2020-11-30'},
                    {message:'message',date:'2020-11-30'},
                    {message:'message',date:'2020-11-30'},
                    {message:'message',date:'2020-11-30'},
                    {message:'message',date:'2020-11-30'},
                    {message:'message',date:'2020-11-30'},
                    {message:'message',date:'2020-11-30'},
                    {message:'message',date:'2020-11-30'},
                ]
            };
        }
    }
</script>

<style scoped>
    .el-main{
        padding: 0;
    }

    .header{
        height: 30px;
        background-color: #f6f6f6;
        box-shadow: 0 0 1px rgba(0,0,0,0.3);
    }

    .page{
        width: 100%;
        text-align: center;
        margin-top: 20px;
        margin-bottom: 30px;
    }
</style>