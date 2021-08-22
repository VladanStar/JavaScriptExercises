import React, { useState, useContext } from "react";
import Player from "../Player/Player"
import { PlayerContext } from "../PlayerContext/PlayerContext";

const PlayersList = () => {
const [players, setPlayaers] =useContext(PlayerContext)

  return (
    <div>
      {players.map(player => (
        <Player
          name={player.name}
          godine={player.godine}
          pozicija={player.pozicija}
        />
      ))}
    </div>
  );
};
export default PlayersList;
