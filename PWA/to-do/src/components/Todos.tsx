import React, { FormEvent, ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Row } from "./Row";
import { AddTodo } from "./AddTodo";
import { data } from "../todos";
import { Todo } from "../types";

export const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>(data);
  const [task, setTask] = useState<string>("");

  const handleAddTodo = (todo: Todo) => {
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
    setTask("");
  };

  const handleSubmitTodo = (e: FormEvent) => {
    e.preventDefault();

    const todo = {
      id: uuidv4(),
      task: task,
      isCompleted: false,
    };
    task && handleAddTodo(todo);
  };

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setTask(value);
  };

  const handleCheckTodo = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-3 bg-zinc-900 rounded-lg space-y-8">
        <div className="flex justify-center">
          <h1 className="text-white text-2xl">To Do App</h1>
        </div>
        <AddTodo
          handleSubmitTodo={handleSubmitTodo}
          handleChange={handleChange}
          task={task}
        />
        <div className="h-80 overflow-x-hidden overflow-y-auto">
          {todos
            .map((todo) => (
              <Row
                key={todo.id}
                todo={todo}
                handleDeleteTodo={handleDeleteTodo}
                handleCheckTodo={handleCheckTodo}
              />
            ))
            .reverse()}
        </div>
      </div>
    </div>
  );
};
