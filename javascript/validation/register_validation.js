<script>
<!--
function checkUsername() {
    
}

function validateForm() {
    fname = document.getElementById('fname');
    lname = document.getElementById('lname');
    address = document.getElementById('address');
    city = document.getElementById('city');
    state = document.getElementById('state');
    zip = document.getElementById('zip');
    uname = document.getElementById('uname');
    pword = document.getElementById('pword');
    pwordConf = document.getElementById('pwordConf');
    valid = true;

    if (fname.value == "") {   
        document.getElementById('fnameerror').innerHTML = "Required Field";
        valid = false;
    }
    else {
        document.getElementById('fnameerror').innerHTML = "";
    }
    
    if (lname.value == "") {   
        document.getElementById('lnameerror').innerHTML = "Required Field";
        valid = false;
    }
    else {
        document.getElementById('lnameerror').innerHTML = "";
    }
    
    if (email.value == "") {   
        document.getElementById('emailerror').innerHTML = "Required Field";
        valid = false;
    }
    else {
        document.getElementById('lnameerror').innerHTML = "";
    }
    
    if (address.value == "") {   
        document.getElementById('addresserror').innerHTML = "Required Field";
        valid = false;

    }
    else {
        document.getElementById('addresserror').innerHTML = "";
    }
    
    if (city.value == "") {   
        document.getElementById('cityerror').innerHTML = "Required Field";
        valid = false;
    }
    else {
        document.getElementById('cityerror').innerHTML = "";
    }
    
    if (state.value == "") {
        document.getElementById('stateerror').innerHTML = "Required Field";
        valid = false;
    }
    else {
        document.getElementById('stateerror').innerHTML = "";
    }
    
    if (zip.value == "") {
        document.getElementById('ziperror').innerHTML = "Required Field";
        valid = false;
    }
    else {
        document.getElementById('stateerror').innerHTML = "";
    }
    
    if (uname.value == "") {   
        document.getElementById('unameerror').innerHTML = "Required Field";
        valid = false;
    }
    else {
        document.getElementById('unameerror').innerHTML = "";
    }
    
    if (pword.value == "") {   
        document.getElementById('pworderror').innerHTML = "Required Field";
        valid = false;
    }
    else {
        document.getElementById('pworderror').innerHTML = "";
    }
    
    if (pwordConf.value == "") {   
        document.getElementById('pwordConferror').innerHTML = "Required Field";
        valid = false;
    } 
    else if (pword.value != pwordConf.value) {   
        document.getElementById('pwordConferror').innerHTML = "Passwords do not match";
        valid = false;
    }
    else {
        document.getElementById('pwordConferror').innerHTML = "";
    }
   
   return valid;

}
-->
</script>