// $('#btn').click(function(){
//     $('#box').slideToggle();
// })
var naslovi = $(".naslovi");
var podnaslovi = $(".podnaslovi");

naslovi.eq(0).parent().find(".podnaslovi").show();

naslovi.on("click", function () {
  podnaslovi.slideUp();
  $(this).parent().find(".podnaslovi").slideDown(700);
});
