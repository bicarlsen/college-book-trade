function validateForm() {
    var uname = document.getElementById('uname');
    var pword = document.getElementById('pword');
    var valid = true;
    
	clearFormErrors();
	
    if (uname.value == "") {
        document.getElementById('uname-error').innerHTML = "Username Required";
        valid = false;
    }
    else {
        document.getElementById('uname-error').innerHTML = "";
    }
    
    if (pword.value == "") {
        document.getElementById('pword-error').innerHTML = "Password Required";
        valid = false;
    }   
    else {
        document.getElementById('pword-error').innerHTML = "";
    }
    
    return valid;
}

function credentialError(status) {
	var credErr = document.getElementById('credential-error')

	if (status == 0) { // credentials did not match
		credErr.innerHTML = "Invalid Username/Password combination";
	}
	else if  (staus == -1) { // an error occurred
		credErr.innerHTML = "A server error occurred.  Please contact a site administrator";
	}
	else {  // unknown error
		credErr.innerHTML = "An unknown error occurred.  Please contact you site administrator.";
	}
}



