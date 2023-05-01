import { Todo } from "@/type/todo";
import React, { FC, useState } from "react";

type TodoItemProps = {
  todoId: string;
  todo: Todo;
  updateTodo: (todoId: string, title: string) => void;
  deleteTodo: (todoId: string) => void;
};

const TodoItem: FC<TodoItemProps> = ({
  todoId,
  todo,
  updateTodo,
  deleteTodo,
}) => {
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
  };

  const handleUpdate = () => {
    updateTodo(todoId, newTitle);
  };

  const handleDelete = () => {
    deleteTodo(todoId);
  };

  return (
    <li>
      {/* <input type="checkbox" checked={todo.completed} onChange={handleToggle} /> */}
      タイトル 「{todo.title}」 id「{todo.todoId}」
      <br />
      <input
        type="text"
        value={newTitle}
        onChange={handleTitleChange}
        className="text-black"
      />
      <button onClick={handleUpdate} className="bg-green-500 text-white mr-4">
        更新
      </button>
      <button onClick={handleDelete} className="bg-red-500 text-white">
        削除
      </button>
      <p>---------</p>
    </li>
  );
};

export default TodoItem;
