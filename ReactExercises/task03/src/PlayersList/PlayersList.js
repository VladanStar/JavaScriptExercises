import React, { useState, useContext } from "react";
import Player from "../Player/Player";
import { PlayerContext } from "../PlayerContext/PlayerContext";

const PlayersList = () => {
  const value = useContext(PlayerContext);

  return (
    <div>
      <h1>{value}</h1>
      {/* {players.map(player=>(
               <Player  name={player.name} godine ={player.godine} pozicija = {player.pozicija}/>
            ))} */}
    </div>
  );
};
export default PlayersList;
