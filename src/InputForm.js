import React from "react";
import { useTaskList } from "./redux/hooks";

function InputForm() {
  const { addTask } = useTaskList();
  const handleSubmit = (e = new React.FormEvent()) => {
    e.preventDefault();
    const [firstInputEl] = [...e.target.elements];

    addTask(firstInputEl.value);

    // Limpa valor do input
    firstInputEl.value = "";
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <input type="submit" value="Add" />
    </form>
  );
}

export default InputForm;
