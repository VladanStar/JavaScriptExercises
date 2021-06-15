class Movie {
    constructor(movieTitle, movieLength, movieGenre) {
        this.movieTitle = movieTitle;
        this.movieLength = movieLength;
        this.movieGenre = movieGenre;

    }

    genreAbb() {
        const firstIndex = 0;
        const lastIndex = this.movieGenre.length - 1;
        const abb = this.movieGenre.charAt(firstIndex) + this.movieGenre.charAt(lastIndex);
        return abb.toUpperCase();
    }

    getInfo() {
        return `${this.movieTitle}, ${this.movieLength}min, ${this.genreAbb()}`;
    };


}

class Program {
    constructor(date) {
        this.date = date;
        this.movies = [];
    }

getData() {
    return `${this.date}, TBA`;

};
};