import React from "react";
const Player = ({ name, godine, pozicija }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{pozicija}</p>
      <p>{godine}</p>
    </div>
  );
};
export default Player;
