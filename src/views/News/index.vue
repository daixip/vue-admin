<template>
    <div>
       <el-row class='main-header'>
           <el-col :span='5'>
               <div>
                    <span>类型：</span>
                    <el-select v-model="value" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
               </div>
           </el-col>
           <el-col :span='10'>
               <div>
                <span>日期：</span>
                    <el-date-picker
                        v-model="value2"
                        type="datetimerange"
                        :picker-options="pickerOptions"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        align="right">
                    </el-date-picker>
                </div>
           </el-col>
           <el-col :span='2'>
                <div>
                    <span>关键字：</span>
                    <span>ID</span>
                </div>
           </el-col>
           <el-col :span='7'>
               <div>
                    <el-input v-model="input" placeholder="请输入内容" class='insert'></el-input>
                    <el-button type="danger">危险按钮</el-button>
               </div>
           </el-col>
        </el-row>
        <div>
            <el-table
          border
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
                <el-table-column
                    align=center
                    type="selection"
                    width="40">
                </el-table-column>
                <el-table-column
                    align=center
                    label="标题"
                    width="830">
                    <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                    align=center
                    label="类别"
                    width="135">
                    <template slot-scope="scope">{{ scope.row.name }}</template>
                </el-table-column>
                <el-table-column
                    align=center
                    label="日期"
                    width="140"
                    show-overflow-tooltip>
                    <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                    align=center
                    label="管理人"
                    width="120"
                    show-overflow-tooltip>
                    <template slot-scope="scope">{{ scope.row.address }}</template>
                </el-table-column>
                <el-table-column label="操作"  align=center>
                        <template slot-scope="scope">
                        <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        <el-button
                            size="mini"
                            type="success"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        </template>
                </el-table-column>
            </el-table>
            <div style="margin-top: 20px" class='delete'>
                <el-button @click="toggleSelection()">取消选择</el-button>
            </div>
            <div style="margin-top: 20px" id='page'>
                <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:'index',
        data() {
            return {
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                    }, {
                    value: '选项2',
                    label: '双皮奶',
                    disabled: true
                    }, {
                    value: '选项3',
                    label: '蚵仔煎'
                    }, {
                    value: '选项4',
                    label: '龙须面'
                    }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: '',
                pickerOptions: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
                value2: '',
                input:'',
                tableData: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                multipleSelection: []
            }
        },
        methods:{
            toggleSelection(rows) {
                if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
                } else {
                this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            }
        }
    }
</script>
<style scoped lang='scss'>
.main-header{
   padding-right: 295px;
   .el-col-2{line-height: 42px;}
}
#page{float: right;display: inline-block;}
.delete{display: inline-block;}
.insert{margin-right: 17px}
button{box-sizing: border-box}
</style>