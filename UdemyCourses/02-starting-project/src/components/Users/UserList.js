import React from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
      <Card className={classes.users}>
          <ul>
      {props.users.map((user) => (
         
              <li key={user.id}> {user.name} {user.age}</li>
     
      ))}

          </ul>
    </Card>
  );
};

export default UserList;
