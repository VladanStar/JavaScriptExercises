import React, {useState, useContext} from "react";
import Movie from "../Movie/Movie";
import { MovieContext } from "../context/MovieContact/MovieContext";

const MovieList= ()=>{
    const [movies, setMovies]  = useContext(MovieContext);

  
    return(
// da bi ih prikazali na ekranu potrebno je da izmapiramo objekte
<div>
  {movies.map(movie=>(
        <Movie name={movie.name} price ={movie.price} id= {movie.id}/>
    ))}
</div>
    );
}
export default MovieList;
 