var phone_num = document.getElementsByName('phone_num')[0];
var btn = document.getElementsByClassName('form-btn')[0];
var time = 40;
var ti = time;
 btn.onclick = function(){
 	var sj= checkMobile(phone_num.value);
 	if(sj){
 		$('.tsk_o').removeClass('dn_o');
			// $(function(){
	 	// 		ti--;
	 	// 		if(ti=0) {
	 	// 			window.location.href = "user(2)get_passwordByPhone1.html";
	 	// 		}
					
			// })
		fn();
 		t=setTimeout(function(){
 			$('.tsk_o').addClass('dn_o');
 		},2000)
 		
 	}else{
 		$('.tsk').removeClass('dn');
 		t=setTimeout(function(){
 			$('.tsk').addClass('dn');
 		},2000)
 	}
 }
 function  checkMobile(str) {
     var re = /^1\d{10}$/
     if (re.test(str)) {
         return true;
     } else {
        return false;
     }
 }
 var T;
 function fn(){
 	clearTimeout(T);
 	$('.s').text("验证码正在发往您的手机，请"+ti+"秒后再重试");
 	ti--;
 	T= setTimeout(function(){
 		fn();	
	 },1000)
	 if(ti==0){
		 window.location.href = "user(2)get_passwordByPhone1.html";
	 }
}
