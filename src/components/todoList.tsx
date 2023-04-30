import React, { FC } from "react";
import TodoItem from "./todoItem";
import { Todo } from "@/type/todo";

type TodoListProps = {
  todos: Todo[];
  updateTodo: (todoId: string, title: string) => void;
};

const TodoList: FC<TodoListProps> = ({ todos, updateTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.todoId}
          todo={todo}
          todoId={todo.todoId}
          updateTodo={updateTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
