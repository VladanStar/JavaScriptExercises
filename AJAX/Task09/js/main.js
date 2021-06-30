var select = document.querySelector("select");
var body = document.querySelector("body");
var div = document.querySelector("div");

select.onchange = function (){
    if(select.value){
        var request1 = new XMLHttpRequest();
        request1.open("GET","https://dog.ceo/api/breeds/" + select.value + "/images/random");
        request1.send();

        request1.onload = function(){
            var data = JSON.parse(request1.responseText);
            var img  = document.createElement("img");
            img.removeAttribute("src");
            img.setAttribute("src", data.message);
            div.innerHTML = " ";
            div.appendChild(img);
            body.appendChild(div);
        }
    }
}