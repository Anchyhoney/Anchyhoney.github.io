//选择款式
$(function () {
    $(".bear").on("click", function () {
        var index = $(this).index();
        $(".bear").removeClass("style-active").eq(index - 1).addClass("style-active");
    })
    $(".eye").on("click", function () {
        $(".eye").removeClass("style-active");
        $(this).addClass("style-active");
        if ($(this).hasClass("custom")) {
            $(".btn-show").hide();
            $(".btn-hide").show();
        } else {
            $(".btn-show").show();
            $(".btn-hide").hide();
        }
        if($(this).is("[data-bear]")){
            $(".price").hide();
            $("#"+$(this).data("bear")).show();
        }
    })
    $(".no").on("click", function () {
        $(".no").removeClass("style-active");
        $(this).addClass("style-active");
        if($(this).is("[data-bear]")){
            $(".price").hide();
            $("#"+$(this).data("bear")).show();
        }
    })
    $('.btn-buy').on("click", function (event) {
        if (!($(".bear").hasClass("style-active") && $(".eye").hasClass("style-active") && $(".no").hasClass("style-active"))) {
            alert("请选择规格");
            event.preventDefault();
        }
    })
    $('.btn-lamp').on("click", function (event) {
        if (!($(".bear").hasClass("style-active") && $(".eye").hasClass("style-active"))) {
            alert("请选择规格");
            event.preventDefault();
        }
    })
})
//定制购买
$(function(){
    $(".btn-hide").on("click", function () {
        scroll(".aui_content"); //调用滚动函数
        click(); //调用点击函数
    })
    $(".right-btn").on("click","[data-a]", function () {
        scroll(".aui_content");
        click();   
    })
    $(".btn-visi").on("click", function () {
        scroll(".aui_content");
        click();
    })
    close(".aui_content");    //调用关闭事件
})
//移入换图
$(function () {
    $(".goods-mid img").first().show();
    $(".goods-left img").hover(function () {
        var index = $(this).index();
        $(".goods-left img").removeClass("left-imgs").eq(index).addClass("left-imgs");
        $(".goods-mid img").hide().eq(index).show();
    })
})
//lamp中点击换图
$("[data-lamp]").on("click",function(){
    $(".goods-left img").removeClass("left-imgs");
    $("."+$(this).data("lamp")).addClass("left-imgs");
    $(".goods-mid img").hide().filter($("."+$(this).data("lamp"))).show();
})
//收藏
$(".btn-hurt").on('click', function () {
    $(".icon-xin").toggleClass("xin");
})
// 固定nav栏
$(function () {
    var $goodsHeight = $(".goods").outerHeight(true);
    var $bgHeight = $(".bg").outerHeight(true);
    var $height = $goodsHeight + $bgHeight;

    var $dcHeight = $(".detail-content").outerHeight(true);
    var $mHeight = $height + $dcHeight - 100;
    // console.log($dcHeight);
    var $tipsHeight = $(".goods-tips").outerHeight(true);
    var $propHeight = $(".goods-prop").outerHeight(true);
    var $pmHeight = $mHeight + $tipsHeight + $propHeight;

    var $ordHeight = $(".comment-orders").outerHeight(true);
    var $oHeight = $pmHeight + $tipsHeight + $ordHeight;
    $(window).on("scroll", function () {
        if ($(this).scrollTop() >= $height) {
            $('.detail-title').addClass("detail-nav");
            $(".detail-current").show();
        } else {
            $(".detail-title").removeClass('detail-nav');
            $(".detail-current").hide();
        }
        if ($(this).scrollTop() >= $mHeight && $(this).scrollTop() < $pmHeight) {
            $(".fix a").removeClass("focus").eq(1).addClass("focus");
        } else if ($(this).scrollTop() >= $pmHeight && $(this).scrollTop() < $oHeight) {
            $(".fix a").removeClass("focus").eq(2).addClass("focus");
        } else if ($(this).scrollTop() >= $oHeight) {
            $(".fix a").removeClass("focus").eq(3).addClass("focus");
        } else { 
            $(".fix a").removeClass("focus").eq(0).addClass("focus");
        }
    })
})
//comment
$(function () {
    $(".totals a").on("click", function () {
        var count = $(this).index();
        $(".totals a").removeClass("all");
        $(this).addClass("all");
        $(".comment-list").each(function (index) {
            if (count == 0) {
                $(".comment-list").hide().eq(0).show();
                $(".page").hide().eq(0).show();
            } else if (count == 2) {
                $(".comment-list").hide().eq(1).show();
                $(".page").hide().eq(1).show();
            }
        })
    })
})
//page 分页
$(function () {
    $(".page-list").on("click", "a", function () {
        var index = $(this).index();
        $(".page-list a").removeClass("hover");
        $(this).addClass("hover");
    })
    $(".icon-left").on("click", function () {
        var index = $(this).siblings(".hover").index();
        index--;
        if (index == 0) {
            index = 1;
        }
        $(this).siblings().removeClass("hover").eq(index-1).addClass("hover");
    })
    $(".icon-right").on("click", function () {
        var index = $(this).siblings(".hover").index();
        index++;
        if (index == $(this).index()) {
            index = $(this).index()-1; 
        }
        $(this).siblings().removeClass("hover").eq(index).addClass("hover");
    })  
})
//有晒单的评价
$(function () {
    //点击弹出框
    var count = 0;
    $(".order-pics span").on("click", function () {
        count = $(this).index();
        var order = $(this).parent();
        var img = order.find("img");
        var arr = [];
        img.each(function(index,value){
            var arr1 = value.src.split("/");
            console.log(value.src)
            var length = arr1.length;
            arr.push(arr1[length-1]);
        });
        var imgs = $("#goods-pics").find("img");
        imgs.each(function(index,value){
            value.src = "./img/" + arr[index];
        });
        var imgsBottom = $("#state-bottom").find("img");
        imgsBottom.each(function(index,value){
            value.src = "./img/" + arr[index];
        });
        var index = $(this).index();
        $(".goods-pics img").hide().eq(index).show();
        $(".state-bottom img").removeClass("state-current").eq(index).addClass("state-current")
        scroll("#state_focus");//弹出框在中间，调用函数
        $(".masking").fadeIn(function () {
            $(".state_focus").fadeIn();
        });
    })
    close(".state_focus"); //调用关闭函数
    $(".goods-pics img").hide().first().show();
   
    $(".state-bottom img").on("click", function () {
        var index = $(this).index();
        $(".state-bottom img").removeClass("state-current").eq(index).addClass("state-current");
        $(".goods-pics img").hide().eq(index).fadeIn();
    })
    // 左右箭头
    $(".arrow-right").on("click", function () {
        count++;
        if (count == 3) {
            count = 0;
        }
        console.log(count);
        $(".goods-pics img").hide().eq(count).fadeIn();
        $(".state-bottom img").removeClass("state-current").eq(count).addClass("state-current")
    })
    $(".arrow-left").on("click", function () {
        count--;
        if (count == -1) {
            count = 2;
        }
        $(".goods-pics img").hide().eq(count).fadeIn();
        $(".state-bottom img").removeClass("state-current").eq(count).addClass("state-current")
    })
})
//函数封装
function click(){
    if (($(".bear").hasClass("style-active") && $(".eye").hasClass("style-active"))) {
        $(".masking").fadeIn(function () {
            $(".aui_content").fadeIn()
        })
    } 
}
function scroll(obj){
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    var top = scrollTop + 200 + "px";
    $(obj).css("top", top);
}
function close(ele){
    $(".state-close").on("click", function () {
        $(ele).fadeOut(function () {
            $(".masking").fadeOut();
        });
    })
}
