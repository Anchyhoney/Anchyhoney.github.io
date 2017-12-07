var input = document.getElementsByName('phone_num')[0];
var btn = document.getElementsByClassName('form-btn')[0];

btn.onclick = function(){
	if (input.value.length==4) {
		var yz = istrue(input.value);
		if(yz){
			window.location.href = "user(2)get_passwordByPhone2.html"
		}else{
			fn();
		}

	}else{
		fn();
	}
}
 function istrue(str){ 
 var reg=/^(([a-z]+[0-9]+)|([0-9]+[a-z]+))[a-z0-9]*$/i; 
 return reg.test(str); 
 } 
 function fn(){
	 $('.tsk').removeClass('dn');
			t = setTimeout(function () {
				$('.tsk').addClass('dn');
			}, 1000)
 }