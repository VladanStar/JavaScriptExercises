const searchStringElement = document.querySelector(".searchString");
const dgmPretragaElement = document.querySelector(".dgmPretraga");
const prikazElement = document.querySelector(".prikaz");

dgmPretragaElement.addEventListener("click", () => {
  fetch(
    `https://www.omdbapi.com/?apikey=a68ef358&s=${searchStringElement.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data.Search);

      data.Search.forEach((element) => {
        prikazElement.innerHTML += `
            
            
            <div class="col">
            
            <div class="card" style="width: 18rem;">
            <img src="${element.Poster}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.Title}</h5>
                <p class="card-text">Tip: ${element.Type} Godina: ${element.Year}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
            `;
      });
    });
});
