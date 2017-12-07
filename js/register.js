;(function($){
    $("#submit").on("click",function(){
        $("#register").submit();
    });
    $("#register").validate({
        errorPlacement:function(error,ele){
            ele.parent().next().append(error);
        },
        rules:{
            exend_field5:{
                required:true,
                isPhone:true,
            },
            password:{
                required:true,
                isPassword:true,
            },
            confirm_password:{
                required:true,
                equalTo:"[name='password']"
            }
        },
        messages:{
            exend_field5:{
                required:"请输入手机号号码"
            },
            password:{
                required:"请输入密码"
            },
            confirm_password:{
                required:"请再次输入密码",
                equalTo:"两次输入密码不一致"
            }
        },
        submitHandler:function(f){
            var $phone = $("#exend_field5").val();
            var $password = $("#password1").val();

            $.ajax({
                url:"./api/register.php",
                type:"POST",
                data:{
                    "phone":$phone,
                    "password":$password,
                },
                dataType:"JSON",
                success:function(data){
                    if(data.code == 200){
                        var $result = data.result;
                        var $userId = $result.userId;
                        var $username = $result.username;
                        
                        $.cookie("username",$username,{expires: 2,path:"/"});
                        $.cookie("userId",$userId,{expires: 2,path:"/"});
                    }
                }
            })
        }
    })
}(jQuery))