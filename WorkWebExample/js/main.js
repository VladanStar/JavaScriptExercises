const searchStringElement = document.querySelector(".searchString");
const dgmPretragaElement = document.querySelector(".dgmPretraga");
const prikazElement = document.querySelector(".prikaz");

let film = [];
const setFilm = (list) => {
  film = [...list];
};

dgmPretragaElement.addEventListener("click", () => {
  fetch(
    `https://www.omdbapi.com/?apikey=a68ef358&s=${searchStringElement.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data.Search);
      //   film = data.Search;
      setFilm(data.Search);
      render();
    })
    .catch((error) => console.log(error));
});

const render = () => {
    prikazElement.innerHTML = '';
  film.forEach((element) => {
    prikazElement.innerHTML += `
            
            
            <div class="col">
            
            <div class="card" style="width: 18rem;">
            <img src="${element.Poster}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.Title}</h5>
                <p class="card-text">Tip: ${element.Type} Godina: ${element.Year}</p>
                <a href="#" class="btn btn-primary">Dodaj u korpu</a>
            </div>
            </div>
            </div>
            `;
  });
};
