$(function() {

    $("#username_error_message").hide();
	$("#password_error_message").hide();

    var error_username = false;
	var error_password = false;
	var valid_username = "DTbingo";
	var valid_password = "bingo1234";

	$("#user").html(valid_username)

    $("#username").focusout(function() {

		check_username();
		
	});

	$("#password").focusout(function() {

		check_password();
		
	});

    function check_username() {
	
		var username = $("#username").val();
		
		if(username != valid_username) {
			$("#username_error_message").html("Username does not exist.");
			$("#username_error_message").show();
			error_username = true;
		} else {
			$("#username_error_message").hide();
		}
	
	}

    function check_password() {
	
		var password = $("#password").val();
		
		if(password != valid_password) {
			$("#password_error_message").html("Incorrect password.");
			$("#password_error_message").show();
			error_password = true;
		} else {
			$("#password_error_message").hide();
		}
	
	}

    $("#login").submit(function() {
											
		check_username();
		check_password();
		
		if(error_username == false && error_password == false) {
			return true;
		}
		else {
			return false;	
		}

	});


});