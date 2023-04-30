import React, { FC } from "react";
import TodoItem from "./todoItem";
import { Todo } from "@/type/todo";

type TodoListProps = {
  todos: Todo[];
};

const TodoList: FC<TodoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.todoId} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
