var username = document.getElementsByName('username')[0];
var password = document.getElementsByName('password')[0];
var btn = document.getElementsByClassName('btn')[0];
	btn.onclick= function(){
		var sj= checkMobile(username.value);
		var yx= checkEmail(username.value);
		if(password.value=="" || username.value==""){
			return false;
		}
		if(sj || yx){
			alert(1);
			return true;
		}else{
			window.location.href = "user(4)loginerror.html";
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
function checkEmail(str){
    var re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
    if (re.test(str)) {
        return true;
    } else {
       return false;
    }
}