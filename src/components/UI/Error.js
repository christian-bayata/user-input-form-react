import React from "react";
import classes from "./Error.module.css";
import Card from "./Card";
import Button from "./Button";

const ErrorBox = (props) => {
  return (
    <div>
      <div className={classes.backdrop} />
      <Card className={classes["error-modal"]}>
        <header>
          <h2 className={classes["error-modal-header-text"]}>{props.title}</h2>
        </header>
        <section>{props.message}</section>
        <footer>
          <Button onClick={props.onExitError}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};
export default ErrorBox;
