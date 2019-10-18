<template>
<div id="login">
    <div id="login-wrap">
        <ul class="menu-tab">
            <li v-for="item in mentTab" :key='item.id' :class="{'current':item.current}" @click="changeTab(item)">{{item.text}}</li>
        </ul>
        <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="邮箱" prop="email":rules="[{ required: true, message: '年龄不能为空'},{ type: 'number', message: '年龄必须为数字值'}]"> </el-form-item>
        <el-input type="eamil" v-model.number="numberValidateForm.eamil" autocomplete="off"></el-input>
        <el-form-item label="密码" prop="password":rules="[{ required: true, message: '年龄不能为空'},{ type: 'number', message: '年龄必须为数字值'}]"> </el-form-item>
        <el-input type="password" v-model.number="numberValidateForm.password" autocomplete="off"></el-input>
        <el-form-item label="验证码" prop="code":rules="[{ required: true, message: '年龄不能为空'},{ type: 'number', message: '年龄必须为数字值'}]"> </el-form-item>
        <el-input type="code" v-model.number="numberValidateForm.code" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
            <el-button @click="resetForm('numberValidateForm')">重置</el-button>
        </el-form-item>
        </el-form>
    </div> 
</div>
</template>
<script>
    export default {
        data() {
        return {
            numberValidateForm: {
            eamil: '',
            password:'',
            code:''
            },
            mentTab:[
                {text:'登录',current:true},
                {text:'注册',current:false}
            ],
        };
        },
        created(){},
        mounted(){},
        methods: {
        changeTab(data){
            this.mentTab.forEach(elem=>{
                elem.current=false;
            })
            data.current=true;
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
        }
    }
</script>
<style scoped lang="scss">
    #login{
        background-color: #344a5f;
        height: 100vh;   
    }
    #login-wrap{
        width:333px;
        margin: auto;
    }
    .menu-tab{
        text-align:center;
        li{
            display:inline-block;
            width:88px;
            line-height:36px;
            color:white;
            font-size:14px;
            cursor: pointer;
        }
        .current{
            background-color: rgba(0,0,0,.1);
            border-radius: 2px;
        }
    }
    #login div{
        width:60%;
        margin:0 auto;
    }
    .el-form{
        width:100%;
        margin:0 auto;
    }
    .el-form-item{
        display: inline-block;
        vertical-align: middle;
        margin-bottom: 55px;
        color: white;
    }
    .el-input{
        display: inline-block;
        width:74%;
        vertical-align: middle;
        margin-bottom: 55px;
    }
 
</style>
<style>
   .el-form-item__label{
        color:white !important;
    }
</style>