import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2020")

  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  }
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onchangeFilter={filterChangeHandler} />
      {props.items.map(expense => {
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date} />
      })}

    </Card>
  );
};

export default Expenses;
