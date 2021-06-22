$(document).ready(function () {
  $("#kategorije> li >ul").hide().click( function(e){
      e.stopPropagation();
  });

  $('#kategorije >li').toggle(
      function(){
          $(this).find('ul').slideDown(700);
      }, function(){
          $(this).find('ul').slideUp(700);
      }
  );
});
