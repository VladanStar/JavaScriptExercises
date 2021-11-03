import React, { useContext } from "react";
import { PlayerContext } from "../PlayerContext/PlayerContext";

const Nav = () => {

    const[players, setPlayers] =useContext(PlayerContext);
  return (
    <div className="nav">
      <h2>FC UNIVERZITET</h2>
      <h4>Players in PlayersList: {players.length} </h4>
    </div>
  );
};

export default Nav;
