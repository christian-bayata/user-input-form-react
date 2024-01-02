import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./InputForm.module.css";
import Button from "../UI/Button";
import ErrorBox from "../UI/Error";

const InputForm = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [showErrorBox, setShowErrorBox] = useState();

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (userName.trim().length === 0 || age.trim().length === 0) {
      setShowErrorBox({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
    }

    if (+age < 0) {
      setShowErrorBox({
        title: "Invalid Input",
        message: "Please enter a valid age (> 0).",
      });
    }

    props.onAddInput(userName, age);
    setUserName("");
    setAge("");
  };

  const exitErrorHandler = () => {
    setShowErrorBox(null);
  };

  return (
    <div>
      {showErrorBox && <ErrorBox title={showErrorBox.title} message={showErrorBox.message} onExitError={exitErrorHandler} />}

      <Card className={classes["form-input-container"]}>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" value={userName} onChange={userNameChangeHandler} />
          <label htmlFor="username"> Age (Years)</label>
          <input id="username" value={age} onChange={ageChangeHandler} />
          <Button type="submit" onClick={onSubmitHandler}>
            Add User
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default InputForm;
