import React, { useState } from "react";

type FormElement = React.FormEvent<HTMLFormElement>;

function App(): JSX.Element {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    console.log("enviando");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {" "}
        <input type="text" onChange={(e) => setNewTask(e.target.value)} />
        <button>Save</button>
      </form>
    </>
  );
}

export default App;
