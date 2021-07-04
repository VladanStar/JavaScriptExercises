function searchShows() {
    const getInputValue = document.querySelector('input').value;

    const newXHR = new XMLHttpRequest();
    newXHR.open('GET', 'http://api.tvmaze.com/search/shows?q=' + getInputValue);

    newXHR.onload = function () {
        data = JSON.parse(newXHR.responseText);

        //Removing old movies search result
        let removeRows = document.querySelector('.row');
        if (removeRows) {
            removeRows.remove();
        }
        //

        
        let moviesRow = document.createElement('div');
        moviesRow.className = 'row';

        let movieContainer = document.querySelector('.container');
        movieContainer.append(moviesRow);

        data.forEach(function (movie) {
            //Creating elements:
            let movieWrapper = document.createElement('div');
            movieWrapper.className = 'col-lg-4';

            let movieImg = document.createElement('img');
            movieImg.setAttribute('src', movie.show.image.original);

            let movieTitle = document.createElement('a');
            movieTitle.textContent = movie.show.name;
            movieTitle.setAttribute('href', 'info.html?id=' + movie.show.id);

            //Appending elements:
            moviesRow.append(movieWrapper);
            movieWrapper.append(movieImg);
            movieWrapper.append(movieTitle);
            console.log(data);
        });
    }
    newXHR.send();
};

const btn = document.querySelector('button');
btn.addEventListener('click', searchShows);

const input = document.querySelector('input');
input.addEventListener('change', searchShows);