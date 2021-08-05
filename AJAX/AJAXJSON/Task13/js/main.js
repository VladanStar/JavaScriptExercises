$(function(){
    $.ajax({
type:'GET',
url:'/api/orders',
success:function(data){
   
        $.each(data, function(i, order){

        });
    }

    });
});