import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredData,setEnteredData] = useState('');

    const amountChangeHandler = (event )=>{
        setEnteredAmount(event.target.value);
    }
    const dataChangeHandler = (event )=>{
        setEnteredData(event.target.value);
    }
    const titleChangeHandler = (event )=>{
        setEnteredTitle(event.target.value);
    }
    const submitHandler =(event)=>{
        event.preventDefault();
        const expenseDate = {
        
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredData)
        }
        console.log(expenseDate);
        props.onSaveExpenseData(expenseDate);
        setEnteredData("");
        setEnteredAmount("");
        setEnteredTitle("");

    }
  return (
    <form action="#" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date"  min="2019-03-01" max="2022-03-07" value={enteredData} onChange={dataChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
          <button type="submit">Add Expense</button></div>
    </form>
  );
};

export default ExpenseForm;
