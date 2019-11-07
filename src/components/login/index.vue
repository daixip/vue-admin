<template>
<div id="login">
    <div id="login-wrap">
        <ul class="menu-tab">
            <li v-for="item in menuTab" :key='item.id' :class="{'current':item.current}" @click="changeTab(item)">{{item.text}}</li>
        </ul>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
            <el-form-item  prop="email">  
                <label>邮箱</label>
                <el-input type="text" v-model="ruleForm.email" autocomplete="off" ></el-input>
            </el-form-item>
            <el-form-item prop="pass" class='pass'>
                    <label>密码</label>
                    <el-input type="text" v-model="ruleForm.pass" autocomplete="off" minlength='6' maxlength='20'></el-input>
                </el-form-item>
            <el-form-item prop="checkPass" class='pass'>
                <label>重复密码</label>
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" minlength='6' maxlength='20'></el-input>
            </el-form-item>
            <el-form-item prop="code" class='code'>
                <label>验证码</label>
                <el-row :gutter="10">
                    <el-col :span="15">
                        <el-input v-model.number="ruleForm.code" minlength='6' maxlength='6'></el-input>
                    </el-col>
                    <el-col :span="9">
                        <el-button class='button' type='danger'>获取验证码</el-button>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item class="submit">
                <el-button type="success" @click="submitForm('ruleForm')" class='button'>提交</el-button>
            </el-form-item>
        </el-form>
    </div> 
</div>
</template>
<script>
import {stripscript,validateUser,validatePassword,validateCode} from '@/utils/validate.js'
export default {
    data() {
        //验证码
        var checkAge = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('请输入验证码'));
            }else{
                this.ruleForm.code=(stripscript(value));
                value=this.ruleForm.code;
                if(validateCode(value)){
                    callback()
                }else{
                    return callback(new Error('验证码格式不对'));
                }
            }
        };
        //邮箱
        var validateEmail = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入邮箱'));
                }else{    
                    if(validateUser(value)){
                       callback();
                    }else{
                        callback(new Error('邮箱格式不正确'));
                    }
                }
        };
        //密码
        var validatePass = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请输入密码'));
            } else{
                this.ruleForm.pass=(stripscript(value));//过滤特殊字符并且去掉输入框中的特殊字符
                value=this.ruleForm.pass;
                if(validatePassword(value)){
                    callback();
                }else{
                    callback(new Error('请输入6到20位字母加数字组成的密码'));
                }
            }
        };
        //重复密码
        var validatePass2 = (rule, value, callback) => {
            this.ruleForm.checkPass=(stripscript(value));
            value=this.ruleForm.checkPass
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.pass) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        }
        return {
            ruleForm: {
            email:'',
            pass: '',
            checkPass: '',
            code: ''
            },
            rules: {
            email: [
                { validator: validateEmail, trigger: 'blur' }
            ],
            pass: [
                { validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
                { validator: validatePass2, trigger: 'blur' }
            ],
            code: [
                { validator: checkAge, trigger: 'blur' }
            ]
            },
            menuTab:[
                {text:'登录',current:true},
                {text:'注册',current:false}
            ],
        }
    },
        methods: {
        changeTab(data){
            this.menuTab.forEach(elem=>{
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
    .demo-ruleForm{
        margin-top: 30px;
        label{color:#fff;}
        .button{display: block;width:100%;};
        .submit{margin-top: 40px;};
        .code{margin-top: 20px;}
        .pass{
            margin-top: 10px;
        }
    }
 
</style>
