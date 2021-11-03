import React from "react";
const Player = ({ name, godine, pozicija }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{godine}</p>
      <p>{pozicija}</p>
    </div>
  );
};
export default Player;
