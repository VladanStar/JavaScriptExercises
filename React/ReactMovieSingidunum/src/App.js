import React from "react";
import './App.css';
import MovieList from './components/MovieList/MovieLIst';
import Nav from './components/Nav/Nav';
import {MovieProvider} from "./components/context/MovieContact/MovieContext"
import AddMovie from "./components/AddMovie/AddMovie";
function App() {
  return (
    <MovieProvider>

      <div className="App">
        <Nav/>
        <AddMovie/>
        <MovieList/>

      </div>
    </MovieProvider>
   
  );
}

export default App;
