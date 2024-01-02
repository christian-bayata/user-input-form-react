import React from "react";
import classes from "./InputForm.module.css";
import Card from "../UI/Card";

const InputList = (props) => {
  return (
    <ul>
      <Card className={classes["form-input-container"]}>
        {props.users.map((user) => (
          <li className={classes["form-input-list"]} key={user.id}>
            {`${user.uName} (${user.uAge} years old)`}
          </li>
        ))}
      </Card>
    </ul>
  );
};
export default InputList;
