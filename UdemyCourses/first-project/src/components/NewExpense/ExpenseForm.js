import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {

    const titleChangeHandler = (event )=>{
        console.log(event.target.value);
    }
  return (
    <form action="#">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text"  onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date"  min="2019-03-01" max="2022-03-07"/>
        </div>
      </div>
      <div className="new-expense__actions">
          <button type="submit">Add Expense</button></div>
    </form>
  );
};

export default ExpenseForm;
