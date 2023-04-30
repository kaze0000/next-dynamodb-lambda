import { Todo } from "@/type/todo";
import React, { FC, useState } from "react";

type TodoItemProps = {
  todoId: string;
  todo: Todo;
  updateTodo: (todoId: string, title: string) => void;
};

const TodoItem: FC<TodoItemProps> = ({ todoId, todo, updateTodo }) => {
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
  };

  const handleUpdate = () => {
    updateTodo(todoId, newTitle);
  };

  return (
    <li>
      {/* <input type="checkbox" checked={todo.completed} onChange={handleToggle} /> */}
      タイトル 「{todo.title}」 id「{todo.todoId}」
      <br />
      <input type="text" value={todo.title} onChange={handleTitleChange} />
      <button onClick={handleUpdate}>更新</button>
      <p>---------</p>
    </li>
  );
};

export default TodoItem;
