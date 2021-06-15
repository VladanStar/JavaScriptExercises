const allMovies = [];
const allPrograms = [];

document.querySelector('#create-movie').addEventListener('click', createMovie);
document.querySelector("#create-program").addEventListener('click', createProgram);
document.querySelector("#addmovietop").addEventListener('click', addMovie);

function createMovie() {
    let movieTitleInput = document.querySelector('#title').value;
    const movieTitle = movieTitleInput.value;

    let movieLengthInput = document.querySelector('#length').value;
    const movieLength = movieLengthInput.value;

    const movieGenreSelect = document.querySelector('#genre-select');
    const movieGenreIndex = movieGenreSelect.selectedIndex;
    let movieGenre = movieGenreSelect.options[movieGenreIndex].value;

    const error = {
        OK: 'OK',
        INSERT_TITLE: 'Please insert the title!',
        INSERT_LENGTH: 'Please check the movie length',
        SELECT_GENRE: 'Please select the movie genre',
    }

    function validation(movieTitleInput, movieLengthInput, movieGenre) {
        const mLength = parseInt(movieLengthInput);

        if (movieTitleInput == '') {
            return error.INSERT_TITLE;
        } else {
            if (isNaN(mLength) || mLength <= 0) {
                return error.INSERT_LENGTH;
            } else {
                if (movieGenre == '-') {
                    return error.SELECT_GENRE;
                }
            }
        }
        return error.OK;
    }


    const errorStatus = validation(movieTitleInput, movieLengthInput, movieGenre);
    if (errorStatus !== error.OK) {
        document.querySelector('#error').innerHTML = `<p>${errorStatus}</p>`;
    }


    const movie = new Movie(movieTitleInput, movieLengthInput, movieGenre);

    allMovies.push(movie);

    movieTitleInput = document.querySelector("#title").value = "";
    movieLengthInput = document.querySelector("#length").value = null;
    movieGenre = document.querySelector("#genre-select").value = "-";


    const listItem = document.createElement('li');
    const liText = document.createTextNode(movie.getInfo());
    listItem.appendChild(liText);
    const listOfM = document.querySelector("#movie-list");
    listOfM.appendChild(listItem);
    const movieOption = document.createElement('option');
    const movieOptionContent = document.createTextNode(movie.getInfo());
    movieOption.appendChild(movieOptionContent);
    const optOfMovies = document.querySelector("#movie-select");
    optOfMovies.appendChild(movieOption);

    let allMoviesLength = 0;

    for (let i = 0; i < allMovies.length; i++) {
        allMoviesLength += parseInt(allMovies[i].movieLength);
        const totaLL = document.querySelector('#all-movie-length');
        totaLL.textContent = allMoviesLength;
        document.querySelector('#all-movie-length').innerHTML = `${allMoviesLength} min`;


    }
}




function createProgram() {
    var dateProgram = document.querySelector("#date");
    const date = dateProgram.value;

    const program1 = new Program(date);
    allPrograms.push(program1);
    var dateProgram = document.querySelector("#date").value = "";
    const liItem1 = document.createElement('li');
    const liTxt1 = document.createTextNode(program1.getData());
    liItem1.appendChild(liTxt1);
    const listOfP = document.querySelector("#program-list");
    listOfP.appendChild(liItem1);


    const optItem1 = document.createElement('option');
    const optTxt1 = document.createTextNode(program1.getData());
    optItem1.appendChild(optTxt1);
    const listOfP1 = document.querySelector("#fin-program");
    listOfP1.appendChild(optItem1);

}




function addMovie() {

    const sm = document.querySelector('#movie-select');
    const om = sm.selectedIndex;

    const sp = document.querySelector('#fin-program');
    const op = sp.selectedIndex;

    const dateOfProgram = allPrograms[op - 1].date;

    allPrograms[op - 1].movies.push(allMovies[om - 1]);

    const nOfMovies = allPrograms[op - 1].movies.length;

    let totalLP = 0;
    for (let i = 0; i < nOfMovies; i++) {
        const n = parseInt(allPrograms[op - 1].movies[i].movieLength);
        totalLP += n;
    }


    const fin = `#program-list li:nth-child(${op})`;
    const final = document.querySelector(fin);
    final.innerHTML = `${dateOfProgram}, ${nOfMovies} movies, duration: ${totalLP}min`;

}