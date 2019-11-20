//过滤特殊字符：
export function stripscript(s) {
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&;—|{ }【】‘；：”“'。，、？]")
    var rs = "";
    for (var i = 0; i < s.length; i++) {
            rs = rs + s.substr(i, 1).replace(pattern, '');
        }
    return rs;
}
//验证邮箱
 export function validateUser  (value){
    var checkEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    if(checkEmail.test(value)){
        return true
    }else{
        return false
    }
};
//验证密码
export function validatePassword(value){
    var checkPass = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
    if(checkPass.test(value)){
        return true
    }else{
        return false
    }
}
//验证验证码
export function validateCode(value){
    var reg=/^[a-z0-9]{6}$/;
    if(reg.test(value)){
        return true
    }else{
        return false
    }
}

/*
export 导出可以一次导出多个声明，在需要使用的页面按照
 import {stripscript,validateUser,validatePassword,validateCode} from '@/utils/validate.js' 引入
*/