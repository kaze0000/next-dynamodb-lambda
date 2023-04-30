import AddTodo from "@/components/addTodo";
import TodoList from "@/components/todoList";
import { ErrorResponse } from "@/type/err";
import { Todo } from "@/type/todo";
import { FC, useEffect, useState } from "react";

type FetchTodosResponse = Todo[] | ErrorResponse;

const IndexPage: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Fetch todos from API and update the state
  useEffect(() => {
    // fetchTodos() is a function to call your API route
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

  return (
    <div>
      <h1>Todo App</h1>
      <AddTodo addTodo={addTodo} />
      {/* <TodoList todos={todos} toggleTodo={toggleTodo} /> */}
      <TodoList todos={todos} />
    </div>
  );
};

export default IndexPage;
