import React, {useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card"

const ExpenseItem = (props) => {

  useState();

  let title = props.title;


  const clickHandler = ()=>{
 
    title = "Vladan is Great";
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{title}</h2>

        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
