;(function($){
    $.validator.addMethod("isPhone",function(value,ele){
        var reg = /^1[3|4|5|8][0-9]\d{8}$/;
        return this.optional(ele) || !!value.match(reg);
    },"手机号码格式错误");

    $.validator.addMethod("isPassword",function(value,ele){
        var reg = /^\S{6,12}$/;
        return this.optional(ele) || !!value.match(reg);
    },"密码为6-12位");
}(jQuery))