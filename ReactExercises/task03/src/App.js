import React from "react";
import "./App.css";
import PlayersList from "./PlayersList/PlayersList";
import Nav from "./Nav/Nav";
import { PlayerProvider } from "./PlayerContext/PlayerContext";
import AddPlayer from "./AddPlayer/AddPlayer";

function App() {
  return (
    <PlayerProvider>
      <div className="App">
        <Nav />
        <AddPlayer/>
        <PlayersList />
      </div>
    </PlayerProvider>
  );
}

export default App;
