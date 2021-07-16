import { useState } from "react";
import logo from "./logo.svg";
import InputForm from "./InputForm";
import "./App.css";

function App() {
  const [taskList, setTaskList] = useState([]);

  function addToTaskList(value) {
    setTaskList((list) => [value, ...list]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <InputForm onSubmit={(value) => addToTaskList(value)} />

        {taskList.map((task) => (
          <p>{task}</p>
        ))}
      </header>
    </div>
  );
}

export default App;
