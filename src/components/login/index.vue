<template>
<div id="login">
    <div>
        <el-row>
            <el-button>登录</el-button>
            <el-button>注册</el-button>
        </el-row>
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
            }
        };
        },
        methods: {
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
<style scoped>
    #login{
        background-color: #344a5f;
        height: 100vh;   
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
    .el-form-item__label{
        color:white !important;
    }
</style>