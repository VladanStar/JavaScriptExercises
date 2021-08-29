import React,{useContext, useState} from "react";
import { MovieContext } from "../context/MovieContact/MovieContext";

const AddMovie=()=>{
    const[name, setName]=useState('');
    const[price, setPrice] = useState('');

    const updateName =(e)=>{
        setName(e.target.value);
    }
    const updatePrice =(e)=>{
        setPrice(e.target.value)
    }

    const[movies, setMovie] = useContext(MovieContext);

    const addMovie =(e)=>{
       e.preventDefault();
        // dodavanje filmova

        setMovie(prevMovies =>[...prevMovies,{name:name,price:price}])

    }

    return (
        <form onSubmit={addMovie}>
            <input type="text" name= "name" value={name} onChange={updateName}/>
            <input type="text" name="price" value={price} onChange={updatePrice}/>
            <button>Submit</button>
        </form>
    )
}
export default AddMovie;