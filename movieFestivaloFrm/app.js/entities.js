"use strict";

const titleInput = document.querySelector("#title");
const durationInput = document.querySelector("#duration");
const genreInput = document.querySelector("#genre");
const chooseMovieInput = document.querySelector("#choose-movie");
const chooseProgramInput = document.querySelector("#choose-program");
const dateInput = document.querySelector("#date");
const divMovieList = document.querySelector("#movie-list");

const createMovieValidDiv = document.querySelector(".first");
const totalLength = document.querySelector("#total-length");
const createMovieValidOutput = document.createElement("p")
createMovieValidDiv.appendChild(createMovieValidOutput);
const pLength = document.createElement("p");
const programValidationOutputDiv = document.querySelector(".second");
const programValidation = document.createElement("p")
programValidationOutputDiv.appendChild(programValidation);
const programInfo = document.querySelector("#program-info");

const programList = [];
const unsortedMoviesList = [];



function createMovie() {

    const liItem = document.createElement("li");


    const title = titleInput.value;
    const duration = parseInt(durationInput.value);
    const genre = genreInput.value;

    // Create Movie Validation
    if (!title || !duration || !genre) {

        createMovieValidOutput.textContent = "All fields required!";
        createMovieValidOutput.classList.add("validation");
        return;
    }

    createMovieValidOutput.textContent = "";

    // create Movie
    const createdMovie = new Movie(title, duration, genre);
    unsortedMoviesList.push(createdMovie);

    titleInput.value = "";
    durationInput.value = "";
    genreInput.value = "";

    // Make movie options
    const optionMovie = document.createElement("option");
    for (let i = 0; i < unsortedMoviesList.length; i++) {
        optionMovie.textContent = unsortedMoviesList[i].title;
        optionMovie.value = i;
        chooseMovieInput.appendChild(optionMovie);
    }

    let sumTotalLength = 0;
    unsortedMoviesList.forEach(function (movie) {
        sumTotalLength += movie.duration;

    })

    totalLength.appendChild(pLength);
    pLength.textContent = sumTotalLength;

    // Movie info

    liItem.textContent = createdMovie.getData();
    divMovieList.appendChild(liItem);
}



function createProgram() {
    const date = new Date(dateInput.value);

    if (!dateInput.value) {
        programValidation.textContent = "Please select date";
        programValidation.classList.add("validation");
        return;
    }



    if (date.getTime() < Date.now()) {
        programValidation.textContent = "Invalid date!";
        programValidation.classList.add("validation");
        return;
    }
    const hasProgramWithSameDate = programList.some(function (program) {
        return date.getTime() === program.date.getTime();
    })

    if (hasProgramWithSameDate) {
        programValidation.textContent = "Program for same date already exists";
        programValidation.classList.add("validation");
        return;
    }
    programValidation.textContent = "";


    // Create Program
    const myProgram = new Program(date);
    programList.push(myProgram);

    dateInput.value = "";

    // Make program options
    const optionProgram = document.createElement("option");

    for (let i = 0; i < programList.length; i++) {
        optionProgram.textContent = programList[i].date;
        optionProgram.value = i;
        chooseProgramInput.appendChild(optionProgram);
    }

    // make program info
    const programInfoLi = document.createElement("li");
    programInfoLi.textContent = myProgram.getInfo();
    programInfo.appendChild(programInfoLi);

}

function addMovie() {

    const chosenMovieIndex = chooseMovieInput.value;
    const chosenProgramIndex = chooseProgramInput.value;

    const chosenMovie = unsortedMoviesList[chosenMovieIndex];
    const chosenProgram = programList[chosenProgramIndex];
    const programListElements = document.querySelectorAll("#program-info li");
    const programSelectOptions = document.querySelectorAll("#choose-program option");


    const movie = unsortedMoviesList[chosenMovieIndex];
    const program = programList[chosenProgramIndex];
    const oldProgramData = program.getInfo();

    program.addMovie(movie);

    programListElements.forEach(function (li) {
        if (li.textContent === oldProgramData) {
            li.textContent = program.getInfo();
        }
    });

    programSelectOptions.forEach(function (option){
        if (option.textContent === oldProgramData) {
            option.textContent = program.getInfo();
        }
    });

}




const btnMovie = document.querySelector("#button-movie");
const btnProgram = document.querySelector("#button-program");
const btnAddMovie = document.querySelector("#add-movie-button");

btnMovie.addEventListener("click", createMovie);
btnProgram.addEventListener("click", createProgram);
btnAddMovie.addEventListener("click", addMovie);