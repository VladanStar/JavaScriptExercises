import React from "react";
import "./App.css";
import PlayersList from "./PlayersList/PlayersList";
import Nav from "./Nav/Nav";
import { PlayerProvider } from "./PlayerContext/PlayerContext";

function App() {
  return (
    <PlayerProvider>
      <div className="App">
        <Nav />
        <PlayersList />
      </div>
    </PlayerProvider>
  );
}

export default App;
