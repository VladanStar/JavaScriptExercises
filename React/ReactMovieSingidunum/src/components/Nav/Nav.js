import React, {useContext} from "react";
import { MovieContext } from "../context/MovieContact/MovieContext";

const Nav =()=>{

    const [movies, setMovies] = useContext(MovieContext)
    return(
        <div className="nav">
            <h3>Vladan Cupric</h3>
            <p>Movies in List: {movies.length}</p>
        </div>
    )
}
export default Nav;