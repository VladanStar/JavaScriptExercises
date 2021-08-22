import React, { useState, createContext } from "react";
import PlayersList from "../PlayersList/PlayersList";
import Nav from "../Nav/Nav";

export const PlayerContext = createContext();

export const PlayerProvider = (props) => {
  const [players, setPlayers] = useState([
    {
      name: "Stajic Ranko",
      godine: 19,
      pozicija: "golman",
    },
    {
      name: "Nikolic Zoran",
      godine: 18,
      pozicija: "desni bek",
    },
    {
      name: "Ikanovic Dragan",
      godine: 18,
      pozicija: "levi bek",
    },
    {
      name: "Josevski Ivica",
      godine: 21,
      pozicija: "desni half",
    },
    {
      name: "Tomcic Cedomir",
      godine: 22,
      pozicija: "centarhalf",
    },
    {
      name: "Jovkovic Boris",
      godine: 24,
      pozicija: "levi half",
    },
    {
      name: "Misic Aleksandar",
      godine: 20,
      pozicija: "desno krilo",
    },
    {
      name: "Cveticanin Luka",
      godine: 18,
      pozicija: "centralni vezni",
    },
    {
      name: "Arsenic Marko",
      godine: 17,
      pozicija: "centarfor",
    },
    {
      name: "Bacanin Mateja",
      godine: 19,
      pozicija: "ofanzivni vezni",
    },
    {
      name: "Motika Nemanja",
      godine: 19,
      pozicija: "napad",
    },
  ]);
  return (
    <PlayerContext.Provider value={"hello"}>
       {props.children} 
    </PlayerContext.Provider>
  );
};
