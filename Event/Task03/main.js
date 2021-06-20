function openPresent(event) {
  var image = event.currentTarget;
  image.removeEventListener('click', openPresent);
  var giftOutside = document.querySelector('#gift-outside');
  var giftInside = document.querySelector('#gift-inside');
  giftOutside.classList.add('hidden');
  giftInside.classList.remove('hidden');
}
var image = document.querySelector('#gift-outside img');
image.addEventListener('click', openPresent);
