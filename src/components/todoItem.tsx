import { Todo } from "@/type/todo";
import React, { FC } from "react";

type TodoItemProps = {
  todo: Todo;
};

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const handleToggle = () => {
    // toggleTodo(todo.id);
  };

  return (
    <li>
      {/* <input type="checkbox" checked={todo.completed} onChange={handleToggle} /> */}
      <input type="checkbox" onChange={handleToggle} />
      <label>
        {todo.title} {todo.todoId}
      </label>
    </li>
  );
};

export default TodoItem;
