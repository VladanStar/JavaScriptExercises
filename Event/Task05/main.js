var box = document.querySelector(".box");
var pageX = document.getElementById("x");
var pageY = document.getElementById("y");

function updateDisplay(event){
    pageX.innerText = event.pageX;
    pageY.innerText = event.pageY;

}
box.addEventListener("mouseover", updateDisplay);
box.addEventListener("mouseenter",updateDisplay);
box.addEventListener("mouseleave",updateDisplay);