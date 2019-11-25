<template>
<div id="login">
    <div id="login-wrap">
        <ul class="menu-tab">
            <li v-for="item in menuTab" :key='item.id' :class="{'current':item.current}" @click="changeTab(item,ruleForm)">{{item.text}}</li>
        </ul>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
            <el-form-item  prop="email">  
                <label>邮箱</label>
                <el-input type="text" v-model="ruleForm.email" autocomplete="off" prop='email'></el-input>
            </el-form-item>
            <el-form-item prop="pass" class='pass'>
                <label>密码</label>
                <el-input type="text" v-model="ruleForm.pass" autocomplete="off" minlength='6' maxlength='20' prop="pass"></el-input>
            </el-form-item>
            <el-form-item prop="checkPass" class='pass' v-if="model==='reg'">
                <label>重复密码</label>
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" minlength='6' maxlength='20' prop="checkPass"></el-input>
            </el-form-item>
            <el-form-item prop="code" class='code'>
                <label>验证码</label>
                <el-row :gutter="10">
                    <el-col :span="15">
                        <el-input v-model="ruleForm.code" minlength='6' maxlength='6' prop="code"></el-input>
                    </el-col>
                    <el-col :span="9">
                        <el-button class='button' type='success' @click='getCode(ruleForm)' id="getCodeButton" :disabled="buttonStatus.status">{{buttonStatus.text}}</el-button>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item class="submit">
                <el-button type="danger" @click="submitForm('ruleForm')" class='button' :disabled='canClick''>{{model==='login'?'登录':'注册'}}</el-button>
            </el-form-item>
        </el-form>
    </div> 
</div>
</template>
<script>
import {getSms,register,login} from '@/api/login.js'
import {stripscript,validateUser,validatePassword,validateCode} from '@/utils/validate.js'
import $ from 'jquery'
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
        };
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
                {text:'登录',current:true,type:'login'},
                {text:'注册',current:false,type:'reg'}
            ],
            model:'login',
            buttonStatus:{
                status:false,text:'获取验证码'
            },
            canClick:true,
            timer:'',
            comeDown:''
        }
    },
    created(){
      
    },
    methods: {
    //切换面板
    changeTab(data,ruleForm){
        this.menuTab.forEach(elem=>{
            elem.current=false;
        })
        data.current=true;
        this.model=data.type;
        this.$refs.ruleForm.resetFields();
        //切换面板清除倒计时
        this.clearComeDown()
    },
    //清除验证码倒计时
    clearComeDown(){
        this.buttonStatus.status=false;
        this.buttonStatus.text='获取验证码';
        this.canClick=true;
        clearInterval(this.comeDown)
    },
    //获取验证码
    getCode(ruleForm){
        let _this=this;
        var data={
            username: _this.ruleForm.email,
            module:this.model
        };
        //注册.登录获取验证码，首先判断邮箱不能为空
        if(data.username!=''){
            //网络延时处理
            this.buttonStatus.status=true;
            this.buttonStatus.text='发送中';
            getSms(data).then((response=>{
                var result=response.data;
                console.log(data)
                this.$message({
                    message: result.message,
                    type: 'success'
                });
                if(result.resCode===0){
                    //启用登录或者注册按钮
                    this.canClick=false;
                     //调用定时器
                    const TIME_COUNT = 60;
                    if(!this.comeDown){
                        this.timer=TIME_COUNT;
                        this.comeDown=setInterval(()=>{
                            if(this.timer>0&&this.timer <= TIME_COUNT){
                                this.timer--;
                                this.buttonStatus.text=`倒计时${this.timer}秒`;
                            }else{
                                this.buttonStatus.status=false;
                                this.buttonStatus.text='再次获取';
                                clearInterval(this.comeDown)
                                this.comeDown=null
                            }
                        },1000)
                    }
                }else{
                   //登录提示未注册跳转到注册页面
                   this.changeTab(this.menuTab[1])
                }
            })).catch((error)=>{
                console.log(error)
                
            });
        }else{
            this.$message.error('邮箱不能为空！')
        }
    },
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
        if (valid) {
            var data={
                username:this.ruleForm.email,
                password:this.ruleForm.pass,
                code:this.ruleForm.code,
            }
            if(this.model==='reg'){
                register(data).then(response=>{
                    this.$message({
                        message: response.data.message,
                        type: 'success'
                    });
                //注册成功，跳转到登录页面
                this.changeTab(this.menuTab[0])
                }).catch(error=>{
                    console.log(error)
                })
            }else{
                this.$store.dispatch('user/Login',data).then(response=>{
                    this.$message({
                        message:response.data.message,
                        type:'success'
                    })
                    console.log(response)
                    //将用户信息存入session
                    localStorage.setItem('username',this.ruleForm.email)
                    console.log(localStorage.getItem('username'))
                    //跳转页面
                    this.$router.push({name:'console'})
                    //this.$router.push('/console')
                }).catch(error=>{
                    console.log(error)
                })
            }   
        } else {
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
