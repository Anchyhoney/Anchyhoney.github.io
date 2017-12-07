;(function($){
    var backTop = document.getElementById("backTop");    

    window.onscroll = function(){
		var doc = document.body.scrollTop?document.body:document.documentElement;
        var scrollTop = doc.scrollTop || window.pageYOffset;
        if(scrollTop>0){
            $("#backTop").parents(".backTop").fadeIn();
        }else{
            $("#backTop").parents(".backTop").fadeOut();
        }
    }
    
    backTop.onclick = function(){
		_backTop();
	}

	function _backTop(num){
		var doc = document.body.scrollTop?document.body:document.documentElement;
		var scrollTop = doc.scrollTop;
		// doc.scrollTop = 0;
		var num = num || 10;
		doc.scrollTop = scrollTop-scrollTop/num;
		if(scrollTop<=0){
			return;
		}
		setTimeout(function(){
			_backTop(num)
		},16)
	}
}(jQuery));