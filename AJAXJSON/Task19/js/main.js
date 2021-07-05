$(document).ready(function(){
    $('#search').keyup(function(){
        $('#result').html('');
        var searchField = $('#search').val();
        var expression = new RegExp(searchField,"i");
        $.getJSON('./json/players.json',function(data){
            $.each(data, function(key, value){
                if(value.name.search(expression) !=-1 || value.location.search(expression) !=-1)
                {
                    $('#result').append('<li class = "list-group-item"><img src =""' 
                    +value.image + 'height ="40px" width ="40px" class = "img-thumbnail"/> '+value.name+'<span class="text-muted"' + value.country+'</span></li>');
                }
            });
        });

    });
});