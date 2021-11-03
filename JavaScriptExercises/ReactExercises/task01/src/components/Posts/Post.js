import React from "react";
import "./Post.css";

const Post = (props) => {
  return (
    <li className="Post__listItem">
      <h3 className="Post__headline">{props.name}</h3>
      <p className="Post__info">{props.text}</p>
    </li>
  );
};

export { Post };
