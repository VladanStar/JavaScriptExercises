$(document).ready(function(){
    var prvi = $('#prvi').text();
    alert(prvi);
    $('#prvi').text("<h2>Ovo je novi tekst</h2>");
    $("drugi").html("<h2>Ovo je novi tekst</h2>");
});