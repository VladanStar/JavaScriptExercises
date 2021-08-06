jQuery(document).ready(function($){
    $.ajax({
        url:'https://mysafeinfo.com/api/data?list=dinosaurs&format=xml&case=default&token=aeLijXmQiYp5heckqoY8QmsCwIYa5Exb',
        type:'GET',
        dataType:'xml'
    })
    .done(function(result){
       var allData = $(result).find('d');
      allData.each(function(index,el){
          $('#wrapp').append('<p><a href="'+ $(this).attr('Url')+ '">' + $(this).attr('Name') + '</a></p>')
      })
    })

});