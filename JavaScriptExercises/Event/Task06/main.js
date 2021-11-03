var form = document.querySelector('#test_form');
var inputTxt = document.getElementById("txt");
form.addEventListener('submit', function(event){
    alert('text: ' + inputTxt.value);
})