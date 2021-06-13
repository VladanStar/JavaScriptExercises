$('button').eq(0).on('mouseover',function(){
    $('.box').removeClass('night').addClass('day');
})
$('button').eq(1).on('click',function(){
    $('.box').removeClass('day').addClass('night')
})