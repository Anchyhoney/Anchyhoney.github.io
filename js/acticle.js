;(function($){
	$(function(){
		$("#list").slideDown(600);
		$("#list").on("click","a",function(){
			$("#list").slideUp(16).slideDown(600);
		})
		$(".list").on("click","li",function(index,value){
			// alert($(".alt").text());
			$("li").removeClass('items').eq($(this).index()).addClass('items')
			$(".user-right>div").removeClass('item').eq($(this).index()).addClass("item");
			console.log($(this).text())
			var a = $(this).text()
			$(".alt").text(a)
			// $(".list").slideDown($("li"))
		})
	});

}(jQuery));




