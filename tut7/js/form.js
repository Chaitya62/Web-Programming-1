
let validation = (function(){

	var userName;
	var password;
	var cpassword;
	var email;
	var submit;
	var message;
	var messageArea;

	var cacheDOM = function(){
		userName = document.getElementById('username');
		password = document.getElementById('password');
		cpassword = document.getElementById('cpassword');
		email = document.getElementById('email');
		submit = document.getElementById('submit');
		messageArea = document.getElementById('message');
	}

	var checkValidations = function(){
		var pValue = password.value;
		var cpValue = cpassword.value;
		var eValue = email.value;
		var userValue = userName.value;
		var flag = true;
		var cp = checkPassword(pValue,cpValue);
		if(cp === -1){
			message["password"] = "Password did not match";
			flag = false;
		}
		else if(cp === 0){
			message["password"] = "Password must contain 8 or more characters";
			flag = false;
		}
		if(!checkEmail(eValue)){
			message["email"] = "Email no valid";
			flag = false;
		}
		if(!checkUsername(userValue)){
			message["user"] = "Username should not be empty";
			flag = false;
		}
		if(flag){
			return true;
		}
		else{
			InsertMessage();
		}

	}

	var checkPassword = function(p1,p2){
		if(p2 !== p1) return -1;
		var pattern = /^[A-Za-z0-9_]{8,}$/
		var result  = pattern.test(p1);
		if(result) return 1;
		else return 0;
	}

	var checkUsername = function(val){
		if(val === '') return false;
		return true;
	}

	var checkEmail = function(val){
		var pattern = /^([A-Za-z]){1,}([A-Za-z0-9|_])*@([A-Za-z|_]){1,}\.[A-Za-z]{2,}$/;
		var result = pattern.test(val);
		return result;
	}

	var addEventHandler = function(){
		submit.addEventListener('click',checkValidations);
	}

	var init = function(){
		message = {};
		cacheDOM();
	}



})();