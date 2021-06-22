$(document).ready(function(){
    $("input[name='username']").blur(function(){
        if($(this).val()==""){
        $(this).next().addClass('greska').text("Ovo polje je obavezno!");

    } else {
        $(this).next().removeClass('greska').text("");
    }
});

$("input[name='email']").blur(function(){
    if($(this).val()==""){
        if(!$(this).next('.greska'))
        $(this).next('.greska').remove();
    }
    
})
