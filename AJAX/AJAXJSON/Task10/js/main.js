$(document).ready(function () {
  window.onload = function () {
    var http = new XMLHttpRequest();

    http.onreadystatechange = function () {
    if(http.readyState == 4 && http.status == 200){
       // console.log(JSON.parse(http.response));
    }
    };
    http.open("GET", "data/tweets.json", true);
    http.send();
   // console.log("test");
   $.get("data/tweets.json", function(data){
       console.log(data);
   })
   console.log("test");
  };
});
