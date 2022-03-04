import React from 'react';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div className="App">
      
      <h1>Lets go started</h1>
      <h2>This is also visible!</h2>
      <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem />

    </div>
  );
}

export default App;
