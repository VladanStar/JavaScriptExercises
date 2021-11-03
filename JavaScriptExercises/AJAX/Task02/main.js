$(document).ready(function () {
    $.ajax({
      url: "https://mysafeinfo.com/api/data?list=nobelwinners&format=json&case=default",
      type: "GET",
      dataType: "json"
    })
    
    .done(function (result) {
  //   result.forEach(function(e, i) {
       var allData = JSON.parse(result.responseText);
       console.log(allData)
         
   //  });
    });
  });