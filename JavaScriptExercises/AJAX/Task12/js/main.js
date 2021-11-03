var btn1 = document.getElementById('btn');
var mainUl = document.getElementById('mainUL');
var text = '';


   btn1.addEventListener('click',function(){
    var xmlXttp = new XMLHttpRequest();
    xmlXttp.onreadystatechange = function(){
         if(xmlXttp.readyState == 4 && xmlXttp.status == 200){
             data(xmlXttp);
         }
    }
    xmlXttp.open('GET','https://mysafeinfo.com/api/data?list=englishmonarchs&format=json&case=default&token=aeLijXmQiYp5heckqoY8QmsCwIYa5Exb', true);
    xmlXttp.send();

   });
   function data(dataJSON){
       var allData = JSON.parse(dataJSON.responseText);
       allData.forEach(function(e,i) {
           text += "<li>" + e.Name+ " reign: "+ e.Reign+ "</li>"
       });
       mainUl.innerHTML = text;
      
   }

