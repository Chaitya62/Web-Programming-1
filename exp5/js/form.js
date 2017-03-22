function validation(){
	var nameReg = /^[a-zA-Z ]+$/;
	var passwordReg = /^[a-zA-Z0-9_\$]{8,}$/
	var emailReg = /^[a-zA-Z0-9]+@[a-zA-Z]{4,}.[a-zA-Z]{2,}$/

	var name = $('#username').val();
	var email = $('#email').val();
	var password = $('#password').val();
	var cpassword = $('#cpassword').val();
	var message = '';
	var messageContainer = $('#message');

	var flag =false;
	if(!nameReg.test(name)){
		message +="Pleae Enter Valid name \n";
		flag = true;
	}
	if(password !== cpassword){
		message+= "Both password do not match \n";
		flag = true;
	}
	if(!passwordReg.test(password)){
		message += "Please enter a valid password with more than 8 characters \n";
		flag = true;
	}
	if(!emailReg.test(email)){
		message+= "Please enter a valid email";
		flag = true;	
	}

	if(flag) messageContainer.text(message);
	else {messageContainer.text('No errors');}
	



}

$(document).ready(function(){
	$('#submit').click(function(){
		validation();
	});
});