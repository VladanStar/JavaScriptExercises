var divs = document.getElementsByTagName('div');
for (var i=0; i<divs.length;i++){
    divs[i].addEventListener("click", logEvent, false);

}
function logEvents(){
    console.log(this.id)
}