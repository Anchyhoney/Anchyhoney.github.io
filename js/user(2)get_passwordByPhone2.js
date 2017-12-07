var ipt1 = document.getElementsByName('phone_num')[0];
var ipt2 =document.getElementsByName("confirm_password")[0];
var btn = document.getElementsByClassName('form-btn')[0];
btn.onclick =function(){
	if(ipt1.value!=ipt2.value){
		fn();
	}else{
		if (ipt1.value.length>=6 && ipt1.value.length<=12){
			window.location.href = "user(2)get_passwordByPhone3.html";
		}else{
			fni();
		}
	}
}

function fn() {
	$('.tsk').removeClass('dn');
	$('#lll').text("再次输入的密码不一致");
	t = setTimeout(function () {
		$('.tsk').addClass('dn');
	}, 1000)
}
function fni() {
	$('.tsk').removeClass('dn');
	$('#lll').text("请输入6-12位密码");
	t = setTimeout(function () {
		$('.tsk').addClass('dn');
	}, 1000)
}