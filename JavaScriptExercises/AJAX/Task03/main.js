function run(){
    var xmlXttp = XMLHttpRequest();
    xmlXttp.onreadystatechange = function(){
if(xmlXttp.readyState == 4 && xmlXttp.status == 200){
data(xmlXttp);
}
    } 
    xmlXttp.open('GET','https://mysafeinfo.com/api/data?list=dinosaurs&format=json&case=default',true);
    xmlXttp.send();

    function data(dataJSON){
var allData = dataJSON.responseText;
    }
}