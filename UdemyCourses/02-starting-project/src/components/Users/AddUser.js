import React, {useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredUserAge, setEnteredUserAge] = useState('');

  
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUserName, enteredUserAge)
    if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      return;
    }
    if (+enteredUserAge < 1) {
      return;
    }
    props.onAddUser(enteredUserName, enteredUserAge)
    setEnteredUserName('');
    setEnteredUserAge('');
  };

  const usernameChangeHandler = event => {
    setEnteredUserName(event.target.value)
  }
  const userageChangeHandler = event => {
    setEnteredUserAge(event.target.value);
  }

  return (
    <div>
    <ErrorModal  title="Error" message="DUmmy error"/>
      <Card className={classes.input}> 
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input id="username" type="text" value={enteredUserName} onChange={usernameChangeHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={enteredUserAge} onChange={userageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
      </Card>
    </div>
  );
};

export default AddUser;
