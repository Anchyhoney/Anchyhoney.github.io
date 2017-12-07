;(function($){
    $("#submit").on("click",function(){
        var $phone = $("[name='username']").val();
        var $password = $("[name='password']").val();
        var $remember = $("#remember")[0].checked;
        
        $.ajax({
            url:"./api/login.php",
            type:"POST",
            data:{
                "phone":$phone,
                "password":$password,
            },
            dataType:"JSON",
            success:function(data){
                if(data.code == 200){
                    var $result = data.result;
                    var $userId = $result.id;
                    var $username = $result.username;
                    var time = 1;
                    if($remember){
                        time = 30;
                    }
                    $.cookie("username",$username,{expires: time,path:"/"});
                    $.cookie("userId",$userId,{expires: time,path:"/"});
                }else{

                }
            }
        })
    })
}(jQuery))