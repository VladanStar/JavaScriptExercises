

const searchStringElement = document.querySelector('.searchString');
const dgmPretragaElement = document.querySelector('.dgmPretraga');
const prikazElement = document.querySelector('.prikaz');

dgmPretragaElement.addEventListener('click', ()=>{
    fetch(`https://www.omdbapi.com/?apikey=a68ef358&s=${searchStringElement.value}`)
    .then(res => res.json())
    .then((data)=>{
        console.log(data);
    })



})