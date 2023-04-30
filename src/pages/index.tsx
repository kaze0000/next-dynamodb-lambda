import AddTodo from "@/components/addTodo";
import TodoList from "@/components/todoList";
import { ErrorResponse } from "@/type/err";
import { Todo } from "@/type/todo";
import { FC, useEffect, useState } from "react";

type FetchTodosResponse = Todo[] | ErrorResponse;

const IndexPage: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodos().then((data) => setTodos(data));
  }, []);

  const fetchTodos = async () => {
    const res = await fetch("/api/todos");
    const data = await res.json();
    return data;
  };

  const addTodo = async (title: string) => {
    const res = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ title }),
      headers: { "Content-Type": "application/json" },
    });
    const newTodo = await res.json();
    setTodos([...todos, newTodo]);
  };

  const updateTodo = async (todoId: string, title: string) => {
    const res = await fetch(`/api/todos/${todoId}`, {
      method: "PUT",
      body: JSON.stringify({ title }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      setTodos(
        todos.map((todo) =>
          todo.todoId === todoId ? { ...todo, title } : todo
        )
      );
    } else {
      console.error("Error updating todo");
    }
  };

  return (
    <div className="h-screen">
      <h1>Todo App</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} />
    </div>
  );
};

export default IndexPage;
