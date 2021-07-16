import logo from "./logo.svg";
import InputForm from "./InputForm";
import "./App.css";
import TaskList from "./TaskList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <InputForm />

        <TaskList />
      </header>
    </div>
  );
}

export default App;
