
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


	var insertMessage = function(flag){
		
		messageArea.innerHTML = "";	

		if(flag){
	
			messageArea.innerHTML = "";
		}
		else{
			var ul = document.createElement('ul');
			
			var keys = Object.keys(message);
			keys.forEach(function(key){
				var li = document.createElement('li');
				li.innerHTML = key + " : "+ message[key]+ "\n";
				ul.appendChild(li);
			});
			messageArea.appendChild(ul);
			
		}

		return;
	}

	var checkValidations = function(event){
		console.log(message);
		event.preventDefault();
		message = {};
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
			message["password"] = "password must contain 8 or more characters";
			flag = false;
		}
		if(!checkEmail(eValue)){
			message["email"] = "email not valid";
			flag = false;
		}
		if(!checkUsername(userValue)){
			message["username"] = "username cannot be empty";
			flag = false;
		}
		insertMessage(flag);
		if(flag){ 
			alert('Success!');
			username.value = '';
			password.value = '';
			cpassword.value = '';
			email.value = '';
		
		}
		return flag;

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
		addEventHandler();
	}


	return {
		init: init,

	}

})();


validation.init();