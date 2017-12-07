$(function() {
    var nameNew, phoneNew,$id = 1;
    stepGet();
    //收货地址
    $(document).on("click", ".addnew", function() {
            $(".masking").show();
            $("#newTitle").text("新增收货地址");
            $("#type").text("新增");
            $("#name input").val("");
            $("#number input").val("");
            $("#province").val(1);
            $("#downtown").val(1);
            $("#row").val(1);
            $("#site textarea").val("");
            
        })
    //点击关闭收货地址
    $(document).on("click", ".mas-i", function() {
        $(".masking").hide();
    })


    // 显示收货地址下的  修改和删除
    $(document).on("mouseenter", "#address_list a", function() {
        $(this).find(".operate").fadeIn(300);
    })
    $(document).on("mouseleave", "#address_list a", function() {
            $(this).find(".operate").fadeOut(300);
        })
    //修改收货地址 
    $(document).on("click", "#revise", function() {
        console.log($id);
            $(".masking").show();
            $("#newTitle").text("编辑收货地址");
            $("#type").text("修改");
            var $info = $(this).parents("a");
            console.log($info);
            $id = $info.data("id");
        
            var $first = $info.children().first();
            var $second = $info.children().eq(1);
            var $last = $info.children().last();

            var $name = $first.children().first().text();
            var $num = $first.children().eq(1).text();
            var $province = $second.children().first().text();
            var $downtown = $second.children().eq(1).text();
            var $row = $second.children().eq(2).text();
            var $site = $second.children().last().text();
            var $state = $("#inp").is(":checked");
            
            console.log($name + "手机号" + $num + "省" + $province + "市" + $downtown + "区" + $row + "地址" +$site + "id" + $id);
            $("#name input").val($name);
            $("#number input").val($num)
            $("#province option[info='"+$province+"']").attr("selected",true);
            $("#downtown option[info='"+$downtown+"']").attr("selected",true);
            $("#row option[info='"+$row+"']").attr("selected",true);
            $("#site textarea").val($site);

        })

    //修改收货地址到页面上
    $(document).on("click","#type",function(){
        if($(this).text() == "修改"){
            console.log($id);
            var local = "#info" + $id;
            var $info = $(local);

            var $first = $info.children().first();
            var $second = $info.children().eq(1);
            var $last = $info.children().last();

            var $name = $("#name").children().val();
            var $num = $("#number").children().val();
            var $province = $("#province option:selected").text();
            var $downtown = $("#downtown option:selected").text();
            var $row = $("#row option:selected").text();
            var $site = $("#site").children().val();
            var $state = $("#inp").is(":checked");

            $.ajax({
                url:"./api/stepupdate.php",
                type:"POST",
                dataType:"JSON",
                data:{
                  "id":$id,
                  "name":$name,
                  "phone":$num,
                  "province":$province,
                  "city":$downtown,
                  "area":$row,
                  "address":$site,
                  "state": $state?1:0,
                  "userId": 1,
                },
                success:function(data){
                    console.log(data)
                    if(data.code == 200){
                        // console.log($name + "手机号" + $num + "省" + $province + "市" + $downtown + "区" + $row + "地址" +$site + "id" + $id);
                        $first.children().first().text($name);
                        $first.children().eq(1).text($num);
                        $second.children().first().text($province);
                        $second.children().eq(1).text($downtown);
                        $second.children().eq(2).text($row);
                        $second.children().last().text($site);
                        $(".masking").hide();
                    }
                }
            })
            

           
        }else{
            $id++;
            var $name = $("#name").children().val();
            var $number = $("#number").children().val();
            var $province = $("#province option:selected").text();
            var $downtown = $("#downtown option:selected").text();
            var $row = $("#row option:selected").text();
            var $site = $("#site").children().val();
            var $state = $("#inp").is(":checked");
            //ajax
            $.ajax({
                url:"./api/stepadd.php",
                type: "POST",
                data:{
                    "name": $name,
                    "phone": $number,
                    "province": $province,
                    "city": $downtown,
                    "area": $row,
                    "address": $site,
                    "state": $state?1:0,
                    "userId": 1,
                },
                dataType: "JSON",
                success: function(data){
                    console.log(data);
                    $id = data.id;
                    var $html = '<a href="javascript:void(0)" class="add-a fl" id="info' + $id + '" data-id="' + $id + '">' +
                        '<p class="clearfix">' +
                        '<span class="fl">' + $name + '</span>' +
                        '<span class="fr">' + $number + '</span>' +
                        '</p>' +
                        '<p class="m-t-10 f12">' +
                        '<span>' + $province + '</span>' + '&nbsp;' +
                        '<span>' + $downtown + '</span>' + '&nbsp;' +
                        '<span>' + $row + '</span>' +
                        '<br>' +
                        '<span>' + $site + '</span>' +
                        '</p>' +
                        '<p class="operate dn">' +
                        '<em id="revise">修改</em>' +
                        '<em id="del">删除</em>' +
                        '</p>' +
                        '</a>';

                    $("#address_list").prepend($html);
                    $("#address_list").not('.addnew').children().first().addClass("facus").nextAll().removeClass("facus");
                    site();
                }
            })
            $(".masking").hide();
            site();
            nameNew = $("#name").children().val();
            phoneNew = $("#number").children().val();
            $("#name").children().val("");
            $("#number").children().val("");
            $("#site").children().val("");
            $("#inp").attr("checked",false);
            $("#province").val(1);
            $("#downtown").val(1);
            $("#row").val(1);
        }
    })

    //查询收货地址
    function stepGet(){
        var $userId = 1;
        $.ajax({
            url: "./api/stepget.php",
            type: "GET",
            data: {
                "userId": $userId,
            },
            dataType: "JSON",
            success: function (data) {
                if(data.code == 200){
                    var $result = data.result;
                    console.log($result)
                    console.log(data)
                    for(var i = 0,length = $result.length;i < length;i++){
                        var $id = $result[i].Id;
                        var $name = $result[i].name;
                        var $number = $result[i].phone;
                        var $province = $result[i].province;
                        var $downtown = $result[i].city;
                        var $row = $result[i].area;
                        var $site = $result[i].address;
                        var $state = $result[i].state;


                        var $html = '<a href="javascript:void(0)" class="add-a fl" id="info' + $id + '" data-id="' + $id + '">' +
                            '<p class="clearfix">' +
                            '<span class="fl">' + $name + '</span>' +
                            '<span class="fr">' + $number + '</span>' +
                            '</p>' +
                            '<p class="m-t-10 f12">' +
                            '<span>' + $province + '</span>' + '&nbsp;' +
                            '<span>' + $downtown + '</span>' + '&nbsp;' +
                            '<span>' + $row + '</span>' +
                            '<br>' +
                            '<span>' + $site + '</span>' +
                            '</p>' +
                            '<p class="operate dn">' +
                            '<em id="revise">修改</em>' +
                            '<em id="del">删除</em>' +
                            '</p>' +
                            '</a>';
                        $("#address_list").prepend($html);
                    }
                    // $id = data.id;
                    
                    // $("#address_list").not('.addnew').children().first().addClass("facus").nextAll().removeClass("facus");
                    $("#address_list").children().first().addClass("facus");
                    site();
                    
                }else if(data.code == 404){

                }
            }
        })
    }
    // 删除收货地址
    $(document).on("click", "#del", function() {
        var _this = this;
        site()
        var $a = $(this).parent().parent()
        $.ajax({
            url:"./api/stepdelete.php",
            type:"POST",
            data:{
                "id": $a.data("id")
            },
            success:function(data){
                $(_this).parents("a").remove();
                // if(data.code == 200){
                //     $(_this).parents("a").remove();
                // }else{
                //     var msg = data.msg;
                //     alert(msg);
                // }
            }
        })
    })
    // 收货地址边框添加
    $("#address_list").on("click",".add-a",function(){
        $(this).parent().find(".add-a").removeClass("facus");
        $(this).addClass("facus");
    })

    // 新增收货地址
    $(document).on("click", ".btn-red-sml", function () {
        // var $name = $("#name").children().val();
        // var $number = $("#number").children().val();
        // var $province = $("#province option:selected").text();
        // var $downtown = $("#downtown option:selected").text();
        // var $row = $("#row option:selected").text();
        // var $site = $("#site").children().val();
        // var $html = '<a href="javascript:void(0)" class="add-a fl" id="info" data-id="'+ $id +'">' +
        //     '<p class="clearfix">' +
        //     '<span class="fl">' + $name + '</span>' +
        //     '<span class="fr">' + $number + '</span>' +
        //     '</p>' +
        //     '<p class="m-t-10 f12">' +
        //     '<span>' + $province + '</span>' + '&nbsp;' +
        //     '<span>' + $downtown + '</span>' + '&nbsp;' +
        //     '<span>' + $row + '</span>' +
        //     '<br>' +
        //     '<span>' + $site + '</span>' +
        //     '</p>' +
        //     '<p class="operate dn">' +
        //     '<em id="revise">修改</em>' +
        //     '<em id="del">删除</em>' +
        //     '</p>' +
        //     '</a>';
        // $id++;
        // $("#address_list").prepend($html);
        // $(".masking").hide();
        // site();
        // nameNew = $("#name").children().val();
        // phoneNew = $("#number").children().val();
        // $("#name").children().val("");
        // $("#number").children().val("");
        // $("#site").children().val("");


        // $("#province").children().removeAttr("selected").eq(1).attr("selected", "selected");
        // $("#downtown").children().removeAttr("selected").eq(1).attr("selected", "selected");
        // $("#row").children().removeAttr("selected").eq(1).attr("selected", "selected");

        // $("#address_list").not('.addnew').children().first().addClass("facus").nextAll().removeClass("facus");

    })


    //收货地址弹出框拖拽功能
    $(".site").on("mousedown",".move", function (e) {
        var parent = this.parentNode;
        move(parent, 270, e, 540, 500);
    })

    // 配送选择
    $(document).on("click", ".logistics a", function() {
            $(this).parent().find("a").removeClass("focus");
            $(this).addClass("focus");
            var $last = $(this).parent().children("a").first();
            var $leng = $("#address_list").children().length;
            // console.log($last.text())
            if ($last.hasClass("focus")) {
                $("#charge").hide();
            } else {
                $("#charge").show();
            }
            if (!(nameNew && phoneNew)) {
                alert("收货地址不完整")
            }
        })
        // ready();
        // function ready(){
        //     if(!(nameNew && phoneNew)){
        //         alert("收货地址不完整")
        //     }
        // }
    //支付方式
    $(document).on("click", ".pay-way a", function() {
        $(this).parent().find("a").removeClass("focus");
        $(this).addClass("focus");
    })

    //使用积分 代金卷 功能实现
    $("#order_option").find(".open-pop").each(function() {
        var $this = $(this)
        $this.children("a").on("click", function() {
            // $(this).next().slideToggle();
            var $icon = $(this).children("i")
            if ($icon.hasClass("icon-add-big")) {
                $icon.removeClass("icon-add-big").addClass("icon-sub-big");
                $(this).next().slideDown();
            } else {
                $icon.removeClass("icon-sub-big").addClass("icon-add-big");
                $(this).next().slideUp();
            }
        });
        $(this).find(".heads a").on("click", function() {
            var $this = $(this);
            var $heads = $this.parent(".heads");
            var $conts = $heads.next(".conts");
            $heads.children("a").removeClass("current").eq($this.index()).addClass("current");
            $conts.children().addClass("dn").eq($this.index()).removeClass("dn");
        });
    })

    // 使用积分 代金券
    $(document).on("keyup", "#coupon_code", function() {
        var $this = $(this);
        if ($this.val()) {
            $this.next("a").fadeIn(300);
        } else {
            $this.next("a").fadeOut(300);
        }
    })

    // 点击的图标变化 + -
    $(document).on("click", ".text", function() {
            // $(this).children("i")
            // console.log($(this).children("i"))
            var $bgr = $(this).children("i");
            var $others = $(this).next();
            if ($bgr.hasClass("icon-arrowD")) {
                $bgr.removeClass("icon-arrowD").addClass("icon-arrowU")
                $others.slideDown();
            } else {
                $bgr.removeClass("icon-arrowU").addClass("icon-arrowD")
                $others.slideUp();
            }
        })
    //发票 
    $(document).on("click", ".option", function() {
            console.log($(this).text())
            var $text = $(this).text();
            var $span = $(this).parent().prev().children("span");
            var $i = $(this).parent().prev().children("i");
            // console.log($(this).parent().prev().children("span").text())
            $span.text($text)
            $(this).parent().hide();
            $i.removeClass("icon-arrowU").addClass("icon-arrowD")
        })
    //提交验证
    $(document).on("click", "#submit", function() {
            if (!(nameNew && phoneNew)) {
                $(".error").show();
                $(".error").text("收货地址不完整");
            } else {
                $(".error").show();
                $(".error").text("你输入的代金券不存在");
            }
        })
   
    // 封装函数
    function site() {
        var $leng = $("#address_list").children().length;
        var $max = $(".logistics").children("a");
        if ($leng > 1) {
            $max.fadeIn();
        } // else{
        //     $max.fadeOut();
        // }
    }
    // 填写贺卡
    $(document).on("click", "#edit_card", function() {
            $(".gtgd").show();
        })
    // 关闭贺卡
    $(document).on("click", ".aui_close", function() {
        $(".gtgd").hide();
    })

    //祝福语模板
    var $count = 0;
    $(document).on("click", "#arrowRight", function() {
        $count++;
        console.log($count)
        if ($count == 5) {
            $count = 0;
        }
        $(".bress-link").animate({
            left: -528 * $count
        }, 300)
    })
    $(".bress-link a").on("click", function() {
        $(".bress-link a").removeClass("borde").eq($(this).index() - 1).addClass("borde");
        console.log(this)
        $(".greetings").text("六一儿童节祝福拥有六个一：一见钟情的爱人，一见如故的友人；生活里一片幸福，事业上一帆风顺；天天一脸笑容，年年一本万利。");
    })

    // 保存贺卡
    $(".btn-red").on("click", function() {
        $(".gtgd").hide();
        $(".icon-gift").show();
        var $user = $("#gift_to").val();
        $(".car-count").html("<span>已填写贺卡 ! 作为礼物送给亲爱的"+$user+"。<a href='javascript:void(0)' id='alter_card' class='m-l-10'>修改</a><a href='javascript:void(0)' id='delete_card' class='m-l-10'>删除</a>");
    })

    // 修改贺卡
    $(document).on("click", "#alter_card", function() {
            $(".gtgd").show();
        })
    // 删除贺卡
    $(document).on("click", "#delete_card", function() {
        $(".icon-gift").hide();
        var $count = $(".car-count").html("<a href='javascript:void(0' id='edit_card' class='count-a'><i class='icon-bgr count-i'></i>填写贺卡</a><span class='count-sp'>作为礼物送朋友？礼无忧提供免费的包装和贺卡。</span>");
        var $user = $("#gift_to").val();
        if (confirm("确认删除吗？")) {
            $(".icon-gift").hide();
            $("#gift_to").val("");
            $("#greetings").val("");
            $("#gift_from").val("");
        } else {
            $(".icon-gift").show();
            $(".car-count").html("<span>已填写贺卡 ! 作为礼物送给亲爱的"+$user+"。<a href='javascript:void(0)' id='alter_card' class='m-l-10'>修改</a><a href='javascript:void(0)' id='delete_card' class='m-l-10'>删除</a>");
        }
    })
    // 包装和贺卡拖拽功能
    $(".content").on("mousedown",".move", function (e) {
        var parent = this.parentNode;
        move(parent,340,e,730,568);
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
});