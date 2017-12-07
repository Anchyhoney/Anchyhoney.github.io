;
(function($){
    $(".query-box").find("dl").each(function(ind, ele) {
        var width = 0,height = 28,$ele = $(ele);
		$ele.find(".link-list").find("a").each(function(index, element) {
            width += $(element).outerWidth(true);
        });
		var lines = Math.ceil(width/1020);	
		if(lines > 1){
			$ele.find(".more").on("click",function(){
				if($(this).hasClass("hidden")){
					
					$ele.find(".link-list").animate({height:lines*height+"px"},300);
					$(this).removeClass("hidden").find(".icon-arrowD").removeClass("icon-arrowD").addClass("icon-arrowU");
					var box_height = $(this).parents(".query-box").height();
					$(this).parents(".query-box").animate({
						height: box_height + 28 + "px",
					})
				}else{
					$ele.find(".link-list").animate({height:height+"px"},300);
					$(this).addClass("hidden").find(".icon-arrowU").removeClass("icon-arrowU").addClass("icon-arrowD");
					var boxHeight = $(this).parents(".query-box").height();
					$(this).parents(".query-box").animate({
						height: boxHeight - 28 + "px",
					})
				}
			});		
		}
	});
	
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
    });
    
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
	//分页
    $(".pages").on('click', ".item", function () {
        $(this).siblings().removeClass("current");
        $(this).addClass("current");
    })
    //上一页
    $('.pages').on('click','.prev',function(){
        var $first = $(this).next().index();
        var $cIndex = $('.current').index()
        if($cIndex > 1 && $cIndex <=6){
            $('.current').removeClass('current').prev().addClass('current');
        }
    })
    //下一页
    $('.pages').on('click','.next',function(){
        var $first = $(this).next().index();
        var $cIndex = $('.current').index()
        if($cIndex >= 1 && $cIndex <6){
            $('.current').removeClass('current').next().addClass('current');
        }
    })
}(jQuery))