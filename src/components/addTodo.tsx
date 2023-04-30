import React, { FC, useState } from "react";

type AddTodoProps = {
  addTodo: (text: string) => void;
};

const AddTodo: FC<AddTodoProps> = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text.trim());
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter new todo"
        value={text}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
