
import React, {useState, createContext }  from "react";
import MovieList from "../../MovieList/MovieLIst";
import Nav from "../../Nav/Nav";

// eksportujemo samo promenjivu
// sve neophodne podatke

export const MovieContext = createContext();
export const MovieProvider = (props)=>{

      // promenljiva koja cuva podatke
      const [movies, setMovies] = useState([
        {
            name:"Inception",
            price:'105$',
            id:13
        },
        {
            name:"Lion",
            price:'105$',
            id:14
        },
        {
            name:"The Lord of The Ring",
            price:'305$',
            id:12
        },
        {
            name:"The Gentlemen",
            price:'135$',
            id:11
        },
        {
            name:"Ring",
            price:'119$',
            id:15
        }

    ]);

    return(

<MovieContext.Provider value={[movies, setMovies]}>
     {props.children} 
</MovieContext.Provider>
    );
}