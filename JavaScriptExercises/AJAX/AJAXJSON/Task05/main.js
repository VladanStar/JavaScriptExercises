$(document).ready(function(){

    var ajaxRequest = new XMLHttpRequest();
    ajaxRequest.onreadystatechange = function(){
        console.log("Ready state changed!");
        //more on this in a second
    }
    ajaxRequest.open("GET", "https://happycoding.io/tutorials/javascript/example-ajax-files/text-welcome.txt", true);
    ajaxRequest.send();
    ajaxRequest.onreadystatechange = function(){
        if(ajaxRequest.readyState == 1){
            console.log("Established server connection.");
        }
        else if(ajaxRequest.readyState == 2){
            console.log("Request received by server.");
        }
        else if(ajaxRequest.readyState == 3){
            console.log("Processing request.");
        }
        else if(ajaxRequest.readyState == 4){
            console.log("Done loading!");
        }
        else{
            console.log("Something went wrong. :(");
        }
    }
});