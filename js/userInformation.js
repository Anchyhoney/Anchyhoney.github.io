;
(function($){
    // 点击导航切换对应出现的内容
    $(".tree-list").on('click','li',function(){
        // 获取点击li 的下标
        var i = $(this).index();
        $(this).children('a').addClass('current').end().siblings('li').children('a').removeClass('current');   
        $('.content-list .item').eq(i).show().siblings().hide();
        $('.title-list li').eq(i).addClass('active').siblings().removeClass('active');
    })
    // 是否有订单
    var length = $('.content-order .order').children('li').length;
    if(length > 0){
        $('.content-order').css({
            display:"block"
        });
        $('.order-content').css({
            display:"none"
        });
    } else if(length <= 0){
        $('.content-order').css({
            display:"none"
        });
        $('.order-content').css({
            display:"block"
        });
    }
    // 订单详情样式
    $('.detail-btn').on('mouseenter',function(){
        $(this).css({
            borderColor:"#d93732",
            color:"#d93732"
        })
    })
    $('.detail-btn').on('mouseleave',function(){
        $(this).css({
            borderColor:"#b1b1b1",
            color:"#333"
        })
    })
    // 收藏删除
    $('.favorite-list li').on('mouseenter',function(){
        $(this).css({
            borderColor:"#eee"
        })
        $(this).children('.icon-bgr').css({
            display:"block"
        })
    })
    $('.favorite-list li').on("mouseleave",function(){
        $(this).css({
            borderColor:"#fff"
        });
        $(this).children('.icon-bgr').css({
            display:"none"
        });
    })
    // 删除收藏  
    var LENGTH = $(".favorite-list").children('li').length;
    if(LENGTH > 0){
        $(document).on('click',".favorite-list .icon-bgr",function(){
           if(confirm("确定删除收藏的这个礼物？")){
            $(this).parents('.fl').remove();
            LENGTH--;
            if(LENGTH == 0){
                $(".collection").css({
                    display:"block"
                });
            }
           }
        })
        $(".collection").hide();
    } 
    if(LENGTH == 0){
        $(".collection").css({
            display:"block"
        });
    }
    // 新增收货地址
    $(document).on('click','#add_new',function(){
        $(".masking").show();
    })
    $(document).on('click','#type',function(){
        var $name = $('#name').children().val();
        var $number = $("#number").children().val();
        var $province = $("#province option:selected").text();
        var $downtown = $("#downtown option:selected").text();
        var $row = $("#row option:selected").text();
        var $site = $("#site").children().val();
        var html = "";
        var checked = $("input[type='checkbox']").is(":checked");
        var isEm = $('.default').is("em");
        if(!checked){
            html += '<li class="m-b-20 b-1 clearfix">'+'<div class="left fl">'+'<p class="p"><span>'+$name+'</span><span class="m-l-80">'+$number+'</span></p>'+'<p class="m-t-5">'+$province+'&nbsp;'+$downtown+'&nbsp;'+$row+'&nbsp'+$site+'</p>'+'</div>'+'<div class="right fr p-t-10"><a href="javascript:void(0)" class="alter">修改</a><a href="javascript:void(0)" class="delete">删除</a><a href="javascript:void(0)" class="set-default dn">设为默认</a></div>'+'</li>';
           
        }else if(checked){
            if(isEm){
                $('#address-list').find('em').remove();
                $('.right').html($set);
            }  
            html += '<li class="m-b-20 b-1 clearfix">'+'<div class="left fl">'+'<p class="p"><span>'+$name+'</span><span class="m-l-80">'+$number+'</span><em class="default dib lh1 m-l-40 bg-d1c0a5 f12 f-fff middle ">默认地址</em></p>'+'<p class="m-t-5">'+$province+'&nbsp;'+$downtown+'&nbsp;'+$row+'&nbsp'+$site+'</p>'+'</div>'+'<div class="right fr p-t-10"><a href="javascript:void(0)" class="alter">修改</a><a href="javascript:void(0)" class="delete">删除</a></div>'+'</li>';
        }
        var addressLength = $('.address-list').children('li').length + 1;
        if(addressLength > 20){
            confirm("最多添加20个地址！");
            $(".address-list li:last").remove();
        }
        $("#address-list").prepend(html);
        var addLength = $('#address-list').children('li').length;
        if(addLength){
            $('.address-content .add-time').text(addLength);
        }
        $(".masking").hide();
    })
    // 设置默认地址
    var $em = '<em class="default dib lh1 m-l-40 bg-d1c0a5 f12 f-fff middle ">默认地址</em>';
    var $set = '<a href="javascript:void(0)" class="alter">修改</a><a href="javascript:void(0)" class="delete">删除</a><a href="javascript:void(0)" class="set-default dn">设为默认</a>';
        $(document).on('click','.set-default',function(){  
            var $p = $(this).parents('li').children('.left').children('.p');
            var $default = $(this).parents('.b-1').siblings().children('.right').hasClass('.set-default');
            $p.append($em);
            $(this).parents('.b-1').siblings().children('.left').children('.p').children('em').remove();
           if(!$default){
                $(this).parents('.b-1').siblings().children('.right').html($set);
           }
            $(this).remove();
        })
    // 删除地址
    $(document).on('click','.right .delete',function(){   
        if(confirm("你确定删除这些地址吗？")){
            $(this).parents(".b-1").remove();
            var addLength = $('#address-list').children('li').length;
            $('.address-content .add-time').text(addLength);
        }
    })
    // 点击叉号关闭地址
    $('.mas-i').on('click',function(){
        $('.masking').hide();
    })
       //收货地址弹出框拖拽功能
       $(".site").on("mousedown",".move", function (e) {
        var parent = this.parentNode;
        move(parent, 270, e, 540, 500);
    })
       //拖拽封装函数
       function move(_this, oldLeft, e,Width,Heihth) {
        var $this = $(_this);
        var y = e.clientY - _this.offsetTop;
        var x = e.clientX - _this.offsetLeft;
        $(document).on("mousemove", function (e) {
            console.log(y, x)
            var left = e.clientX - x;
            var top = e.clientY - y;
            var $WIDTH = $(window).width();
            var $HEIGHT = $(window).height()
            if (left <= 0) {
                left = 0
            } else if (left > 0 && left < $WIDTH - Width) {
                left = e.clientX - x;
            } else {
                left = $WIDTH - Width;
            }
            if (top <= 0) {
                top = 0
            } else if (top > 0 && top < $HEIGHT - Heihth) {
                top = e.clientY - y;
            } else {
                top = $HEIGHT - Heihth
            }
            $this.css({ top: top });
            $this.css({ left: left + oldLeft });
            return false;
        })
        $(document).on("mouseup", function () {
            $(this).off("mousemove");
            $(this).off("mouseup");
        })
    }
}(jQuery))