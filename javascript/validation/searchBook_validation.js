<script> <!--

function validateForm() {
    isbn = document.getElementById('isbn');
    title = document.getElementById('title');
    author = document.getElementById('author');
    valid = true;
    
    if (isbn.value == "" && title.value == "" && author.value == "") {
        document.getElementById('isbnerror').innerHTML = "Please enter some information about the book";
        valid = false;
    }
    else {
        document.getElementById('isbnerror').innerHTML = "";
    }
    
    return valid;
    
}

-->
</script>
