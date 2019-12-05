<template>
    <div>
       <div class='main-header'>
           <div class='style'>
                <span>类型：</span>
                <el-select v-model="categoryValue" >
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
           </div>
           <div class='date'>
                <span>日期：</span>
                <el-date-picker
                    v-model="dateValue"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    align="right">
                </el-date-picker>
           </div>
           <div class='keyWord'>
                <span>关键字：</span>
                <el-select v-model="keyValue">
                    <el-option
                    v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
           </div>
           <div class='inputContent'>
                <el-input v-model="input" placeholder="请输入内容" class='insert'></el-input>
           </div>
           <div>
                <el-button type="danger">搜索</el-button>
           </div>
           <div class='addButton'>
                <el-button type="danger" @click="dialogFormVisible = true">新增</el-button>
            </div>
        </div>
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
                    width="800">
                    <template slot-scope="scope">{{ scope.row.title }}</template>
                </el-table-column>
                <el-table-column
                    align=center
                    label="类别"
                    width="135">
                    <template slot-scope="scope">{{ scope.row.class }}</template>
                </el-table-column>
                <el-table-column
                    align=center
                    label="日期"
                    width="170"
                    show-overflow-tooltip>
                    <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                    align=center
                    label="管理人"
                    width="120"
                    show-overflow-tooltip>
                    <template slot-scope="scope">{{ scope.row.admin }}</template>
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
                       >编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div style="margin-top: 20px" class='delete'>
                <el-button @click="toggleSelection()">批量删除</el-button>
            </div>
            <div style="margin-top: 20px" id='page'>
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                background
                layout="prev, pager, next"
                :total="1000">
                </el-pagination>
            </div>
        </div>
        <!-- 新增信息窗口 -->
        <template>
            <el-dialog title="新增" :visible.sync="dialogFormVisible" width='580px' height='490px'>
                <el-form :model="form">
                    <el-form-item label="类别" :label-width="formLabelWidth">
                        <el-select v-model="form.region" placeholder="请选择活动区域">
                            <el-option label="国际信息" value="1"></el-option>
                            <el-option label="国内信息" value="2"></el-option>
                            <el-option label="行内信息" value="3"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="标题" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item> 
                    <el-form-item label="概况" :label-width="formLabelWidth">
                        <el-input type='textarea' v-model="form.name" autocomplete="off" placeholder="请输入内容"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">添加</el-button>
                </div>
            </el-dialog>
        </template>
    </div>
</template>
<script>
    export default{
        name:'index',
        data() {
            return {
                options: [{
                    value: '1',
                    label: '国际信息'
                    }, {
                    value: '2',
                    label: '国内信息',
                    }, {
                    value: '3',
                    label: '行业信息'
                    }],
                    categoryValue: '',
                options1: [{
                value: '1',
                label: 'ID'
                }, {
                value: '2',
                label: '标题',
                }],
                keyValue:'',
                value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
                dateValue: '',
                input:'',
                //数据表格
                tableData: [{
                    title: '纽约市长白思豪宣布退出总统竞选 特朗普发推回应',
                    class: '国内信息',
                    date: '2019-09-10 19:31:31',
                    admin:'管理员'
                    }, {
                    title: '习近平在中央政协工作会议暨庆祝中国人民政治协商会议成立70周年大会上发表重要讲话',
                    class: '国内信息',
                    date: '2019-09-10 19:31:31',
                    admin:'张三'
                    }, {
                    title: '基里巴斯与台当局"断交" 系蔡当局上台后断交第7国',
                    class: '国际信息',
                    date: '2019-09-10 19:31:31',
                    admin:'李四'
                    }],
                multipleSelection: [],
                //编辑表单
                dialogFormVisible: false,
                form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
                },
                formLabelWidth: '70px'
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
            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                this.$confirm('确定删除此信息?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }
    }
</script>
<style scoped lang='scss'>
.main-header{
  margin-bottom: 30px;
  div{display: inline-block}
  .addButton{float: right}
  .style,.date{margin-right: 55px}
  .keyWord{
    margin-right: 20px;
    div{width:105px !important}
  }
  .inputContent{margin-right: 20px}
}
#page{float: right;display: inline-block;}
.delete{display: inline-block;}
.insert{margin-right: 17px}
button{box-sizing: border-box}
/*提示框样式*/
.el-dialog__header{
    text-align: left;
}
.el-form-item{
    margin-bottom: 20px;
}
.el-dialog__footer{
    text-align: center !important;
}
</style>