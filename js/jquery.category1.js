;
(function ($) {
    //筛选商品
    $(".filters a").on("click", function () {
        var $this = $(this),
            param = $(this).data("param");
        var value = 0;
        if ($this.html()) {
            $this.html("");
        } else {
            value = 1;
            $this.html("√");
        }
    })
    //第四列没有margin值
    $(".cat-list li").each(function (i, n) {
        if ((i + 1) % 4 == 0) {
            $(this).css({
                marginRight: 0
            })
        } else {
            $(this).css({
                marginRight: "20px"
            })
        }
    })

    // 可定制商品
    $(".cat-list li").each(function (ind, ele) {
        var $diybtn = $(ele).find(".can-diy"),
            $img = $(ele).find('.cont'),
            $dn = $(ele).find('.dn');
        $diybtn.unbind('click').click(function () {
            $diybtn.toggleClass('isdiy');
            $img.removeClass('cont-focus').toggleClass('c-focus')
            $dn.removeClass('diypic').toggleClass('c-diypic');
        })
        $diybtn.unbind('mouseenter').mouseenter(function () {
            $img.addClass('cont-focus');
            $dn.addClass('diypic');
        })
        $diybtn.unbind('mouseleaver').mouseleave(function () {
            $img.removeClass('cont-focus');
            $dn.removeClass('diypic');
        })
    });
    //分页
    $(".pages").on('click', ".item", function () {
        $(this).siblings().removeClass("current");
        $(this).addClass("current");
    })
    //上一页
    $('.pages').on('click','.prev',function(){
        var $first = $(this).next().index();
        var $cIndex = $('.current').index()
        if($cIndex > 1 && $cIndex <=5){
            $('.current').removeClass('current').prev().addClass('current');
        }
    })
    //下一页
    $('.pages').on('click','.next',function(){
        var $first = $(this).next().index();
        var $cIndex = $('.current').index()
        if($cIndex >= 1 && $cIndex <5){
            $('.current').removeClass('current').next().addClass('current');
        }
    })
    //查看更多
    $("#more").on('click', function () {
        $(this).hide();
        $(this).parents('.cat-article').css({
            height: "466px"
        });
        $(".festival").css({
            display: "block"
        });
    })
    //收起更多
    $("#up").on('click', function () {
        $(this).parents('.cat-article').css({
            height: "302px"
        });
        $(".festival").css({
            display: "none"
        })
        $("#more").show();
    })
}(jQuery));