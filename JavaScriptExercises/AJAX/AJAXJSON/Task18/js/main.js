var count =0;
$("#btnAjaxCall").click(function(){
    fetchDataAndDisplay();
});
 function fetchDataAndDisplay(){
     $.ajax({
        method:"GET",
         url:"./json/players.json"
      
     }).done(function(data){
var start = count >0 ? 5 * count : count;
var end= start + 5;
var str = "";

for(var i = start; i<end;i++){
    str += '<div class= "item-details">' +
    'User id = ' + data[i].id + '</br>'+
    'Name player is ' + data[i].name + '<br/>' + 
    'Position player is ' + data[i].position + '<br/>' + 
    'Country player is ' + data[i].country + '<br/>' + 
    'Age player is ' + data[i].age + '<br/>' + 
    '</div>';
}
if(start >= data.length-5 ){
    count =0;
    $(".display-data").append("List Traversed. Start Over");
    return;
}
count++;
$(".display-data").empty();
$(".display-data").append(str);
     })
 }