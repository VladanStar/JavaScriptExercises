import React from "react";
import { Post } from "../Posts/Post";
import "./Slides.css";

const Slides = () => {
  const slidesData = [
    {
      title: "● Use Create React App to create new project 001",
      description:
        "Before starting with code decompose UI and decide which components need to be created.",
    },
    {
      title: "● Use Create React App to create new project 002",
      description:
        "Before starting with code decompose UI and decide which components need to be created.",
    },
    {
      title: "● Use Create React App to create new projecte 003",
      description:
        "Before starting with code decompose UI and decide which components need to be created.",
    },
    {
      title: "● Use Create React App to create new project 004",
      description:
        "Before starting with code decompose UI and decide which components need to be created.",
    },
    {
      title: "● Use Create React App to create new project 005",
      description:
        "Before starting with code decompose UI and decide which components need to be created.",
    },
    {
      title: "● Use Create React App to create new project 006",
      description:
        "Before starting with code decompose UI and decide which components need to be created.",
    },
  ];

  return (
    <ul className=" Slides__list">
      {slidesData.map((item) => (
        <Post name={item.title} text={item.description} />
      ))}
    </ul>
  );
};

export { Slides };
