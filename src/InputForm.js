import React from "react";

function InputForm({ onSubmit = () => {} }) {
  const handleSubmit = (e = new React.FormEvent()) => {
    e.preventDefault();
    const [firstInputEl] = [...e.target.elements];

    // Chama submit handler do pai
    onSubmit(firstInputEl.value);

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
