// 头部nav
;(function($){
    var userTimeout = null;
    var cartTimeout = null;

    //个人中心
    $("#user").hover(function(){
        clearTimeout(userTimeout);
        $("#user-box").fadeIn();
        $("#cart-box").hide();
    },function(){
        userTimeout = setTimeout(function(){
            $("#user-box").fadeOut();
        },700);
    });
    $("#user-box").hover(function(){
        clearTimeout(userTimeout);
        $("#user-box").show();
    },function(){
        userTimeout = setTimeout(function(){
            $("#user-box").fadeOut();
        },700);
    });

    //购物车
    $("#cart").hover(function(){
        clearTimeout(cartTimeout);
        $("#user-box").hide();
        $("#cart-box").fadeIn();
    },function(){
        cartTimeout = setTimeout(function(){
            $("#cart-box").fadeOut();
        },700);
    });
    $("#cart-box").hover(function(){
        clearTimeout(cartTimeout);
        $("#cart-box").show();
    },function(){
        cartTimeout = setTimeout(function(){
            $("#cart-box").fadeOut();
        },700);
    });

    //购物车删除
    $("#cart-box .remove_item").on("click",function(){
        $(this).parents("tr").remove();
        $count = +$("#shopCount").text() -1;
        if($count){
            $("#shopCount").text($count);
            $("#cart").children("span").text($count);
            $("#allPrice").text("￥"+allPrice());
        }else{
            $("#cart-box").children("table").remove();
            $("#cart-box").children("p").show();
            $("#cart").children("span").remove();
        }
        
    });
    $("#allPrice").text("￥"+allPrice());
    function allPrice(){
        var $all = 0;
        $("#cart-box tr").each(function(){
            var price = +$(this).find(".price").text();
            var count = +$(this).find(".count").text();
            $all += price*count;
        })
        return $all;
    }

    //送礼导航
    var queryBoxTimeout = null;
    $("#queryBoxIndex").hover(function(){
        clearTimeout(queryBoxTimeout);
        $("#queryBox").show();
    },function(){
        queryBoxTimeout = setTimeout(function(){
            $("#queryBox").hide();
        },700);
    });
    $("#queryBox").hover(function(){
        clearTimeout(queryBoxTimeout);
        $(this).show();
    },function(){
        queryBoxTimeout = setTimeout(function(){
            $("#queryBox").hide();
        },700);
    });

    $("#queryBoxIndex").on("click","a",function(){
        $(this).parents("ul").find("a").removeClass("focus");
        $(this).addClass("focus");
    })
}(jQuery));