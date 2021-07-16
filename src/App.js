import { useState } from "react";
import logo from "./logo.svg";
import InputForm from "./InputForm";
import "./App.css";
import TaskList from "./TaskList";

function App() {
  const [taskList, setTaskList] = useState([]);

  function addToTaskList(value) {
    const newItem = { isStroke: false, value };
    setTaskList((list) => [newItem, ...list]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <InputForm onSubmit={(value) => addToTaskList(value)} />

        <TaskList setTaskList={setTaskList} taskList={taskList} />
      </header>
    </div>
  );
}

export default App;
