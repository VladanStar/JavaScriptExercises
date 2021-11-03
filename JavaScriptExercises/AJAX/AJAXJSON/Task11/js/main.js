$(document).ready(function () {
  window.onload = function () {
  
    function callback(val){
      console.log(val);
    }
    var fruits = ["banana","apple","pear"];
    fruits.forEach(callback);
    console.log("done")
  };

  $.get("data/tweets.json", function(data){
    console.log(data);
  });
  console.log("test");
});
