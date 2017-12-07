$(function(){
	$('.tree').on('click',function(){
		$_this=$(this);
		$(this).next().slideDown(300);
		$(this).parent().siblings().find('ul').slideUp(300);
		var $close = $(this).children();
 		if ($close.hasClass('icon-bgr')) {
 			$close.removeClass('icon-bgr').addClass('icon-help');
			$_this.parent().siblings().find('i').removeClass('icon-help').addClass('icon-bgr');
 		}
 	});
 	$(".help-child li").each(function(index){
 		this.setAttribute("index",index);
 	})
 	$('.help-child').find('a').on('click',function(){
 		$(".sj").text($(this).text())
 		var $index = $(this).parent()[0].getAttribute("index");
 		$(this).parent().parent().find("a").removeClass('bg-d28850');
 		$(this).addClass("bg-d28850");
 		$(this).parent().parent().slideUp(300).slideDown(300);
 		console.log($('.user-account').children());
 		$('.user-account>div').removeClass('active').eq($index).addClass('active');
 	})
})
