function loadJSON() {
    var data_file = "http://www.tutorialspoint.com/json/data.json";
    var http_request = new XMLHttpRequest();
    try {
        http_request = new XMLHttpRequest();

    }
    catch (e) {
        try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");

        }
        catch (e) {
            try {
                http_request = new ActiveXObject("Microsoft.XMLHTTP")
            }
            catch (e) {
                alert("Your Browser broke!");
                return false;
            }
        }
    }
    http_request.onreadystatechange = function () {
        if (http_request == 4) {
            var jsonObj = JSON.parse(http_request.responseText);
            document.getElementById("Name").innerHTML = jsonObj.name;
            document.getElementById("Country").innerHTML = jsonObj.country;

        }
    }
    http_request.open("GET", data_file, true);
    http_request.send();
}