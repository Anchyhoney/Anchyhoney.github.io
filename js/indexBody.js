;(function($){
    var count = 0;
    // var t = null;
    $("#banner img:first").css('display','block').addClass('active');

    //生成指示器
    $('#banner img').each(function(index){
        $li = index==0?'<li class="current"></li>':'<li/>';
        $('#banner .dot').append($li);
    });

    //给指示器绑定事件
    $("#banner .dot li").on("mouseenter",dotEvent);
    function dotEvent(){
        count = $(this).index();
        changePage(this,dotEvent);
    }

    // t = setTimeout(function(){
    //     count++;
    //     if(count == $("#banner img").length){
    //         count = 0;
    //     }
    //     changePage(this,nextPage);
    // },1000);

    //下一页
    // $("#next").on("click",nextPage);
    // function nextPage(){
    //     count++;
    //     if(count == $("img").length){
    //         count = 0;
    //     }
    //     changePage(this,nextPage);
    // }

    //上一页
    // $("#prev").on("click",prevPage);
    // function prevPage(){
    //     count--;
    //     if(count < 0){
    //         count = $("img").length - 1;
    //     }
    //     changePage(this,prevPage);
    // }

    function changePage(obj,event){
        // clearTimeout(t);
        $(obj).off("click");
        $('#banner .dot li').removeClass('current').eq(count).addClass('current');
        $("#banner img").css('display','block').hide().filter(".active").show().removeClass('active');
        $("#banner img").eq(count).addClass('active').fadeIn(1000,function(){
            // $(obj).on("click",event);
            // t = setTimeout(function(){
            //     if($(obj).is(".current")){
            //         obj = "#next";
            //     }
            //     $(obj).click();
            // },1000)
        })
    }
}(jQuery));