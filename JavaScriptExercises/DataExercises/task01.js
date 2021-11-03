(function main() {
  String.prototype.prettyPrint = function () {
    console.log("-----------");
    console.log(this.toString());
    console.log("-----------");
  };

  Array.prototype.first = function () {
    return this[0];
  };

  /*Array.prototype.push = function () {
        this[this.length] = elem
        return this;
    }
*/

  function Genre(name) {
    this.name = name;
  }

  Genre.prototype.getData = function () {
    return (this.name[0] + this.name[this.name.length - 1]).toUpperCase();
  };

  function Movie(genre, name, length) {
    this.genre = genre;
    this.name = name;
    this.length = length;
  }

  Movie.prototype.getData = function () {
    return this.name + " " + this.length + " " + this.genre.getData();
  };

  function Program(date) {
    this.date = date;
    this.listOfMovies = [];
    this.numberOfMovies = 0;
    this.durationOfProgram = 0;
  }

  Program.prototype.getData = function () {
    var output = String(this.date) + this.durationOfProgram + "min \n";
    for (var i in this.listOfMovies) {
      output += this.listOfMovies[i].getData() + "\n";
    }
    return output;
  };

  Program.prototype.addMovie = function (movie) {
    this.listOfMovies.push(movie);
    this.numberOfMovies++;
    this.durationOfProgram += parseInt(movie.length);
  };

  function Festival(name) {
    this.name = name;
    this.listOfPrograms = [];
    this.numberOfMovies = 0;
    this.addProgram = function (program) {
      this.listOfPrograms.push(program);
      this.numberOfMovies += program.numberOfMovies;
    };
  }

  Festival.prototype.getData = function () {
    var output =
      this.name + " festival has " + this.numberOfMovies + " movie titles \n";
    for (var i in this.listOfPrograms) {
      output += this.listOfPrograms[i].getData();
    }
    return output;
  };

  var action = new Genre("Action");
  var drama = new Genre("Drama");
  var comedy = new Genre("Comedy");

  var spiderMan = new Movie(action, "Spider Man", "133min");
  var homeAlone = new Movie(comedy, "HomeAlone", "120min");
  var transporter = new Movie(action, "Transporter", "150min");

  var sampleProgram = new Program(new Date());

  for (var i = 0; i < 10; i++) {
    sampleProgram.addMovie(spiderMan);
  }
  /* console.log(sampleProgram.getData()); */

  var sampleFestival = new Festival("SpiderManFest");

  for (var i = 0; i < 10; i++) {
    sampleFestival.addProgram(sampleProgram);
  }
  // console.log(sampleFestival.getData());
  transporter.name.prettyPrint();
  console.log(sampleFestival.listOfPrograms.first());
})();
