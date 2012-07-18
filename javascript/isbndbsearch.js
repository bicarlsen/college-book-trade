<script>
<!--

function searchisbndb(index, value) {
    url = "http://isbndb.com/api/books.xml?"
    key = "LI4AFSM8"
    url += "access_key=" + key +"&index1=" + index + "&value1=" + value
document.getElementById('temp').innerHTML=encodeURI(url)
    request = new ajaxRequest()
    request.open("GET", "./searchbook.php?url="+url, true)

    request.onreadystatechange = function() {
        alert(this.readyState + "  " + this.status + "  " + this.statusText )
        if (this.readyState == 4) {
            if (this.status == 200) {
                if (this.responseText != null) {
                    document.getElementById('temp').innerHTML = this.responseText
                }
                else {
                    alert("Ajax Error: No Data Received")
                }
            }               
            else {
                alert("Ajax Error: " + this.status)
            }
        }
    }

    request.send(null)
}


function ajaxRequest() {
    try {
        var request = new XMLHttpRequest()
    }
    catch(e1) {
        try {
            request = new ActiveXObject("Msxml2.XMLHTTP")
        }
        catch(e2) {
            try {
                request = new ActiveXObject("Microsoft.XMLHTTP")
            }
            catch(e3) {
                request = false
            }
        }
    }
    return request
}
-->
</script>


