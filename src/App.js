import React, { useState } from "react";
import "./App.css";
import InputForm from "./components/UserDetails/InputForm";
import InputList from "./components/UserDetails/InputList";

function App() {
  const [userInput, setUserInput] = useState([]);
  const [showList, setShowList] = useState(false);

  const addInputHandler = (userName, age) => {
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setShowList(false);
      return;
    }
    setUserInput((prevInput) => {
      setShowList(true);
      return [...prevInput, { uName: userName, uAge: age, id: Math.random().toString() }];
    });
  };

  return (
    <div>
      <section className="form-input-container">
        <InputForm onAddInput={addInputHandler} />
      </section>
      {showList ? <InputList users={userInput} /> : null}
    </div>
  );
}

export default App;
