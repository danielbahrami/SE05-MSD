import { FormEvent, ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Task from "./Task";
import AddTask from "./AddTask";
import { data } from "../tasks";
import { ToDo } from "../types";

const Tasks = () => {
  const [todos, setTodos] = useState<ToDo[]>(loadFromLocalStorage() ?? data);
  const [task, setTask] = useState<string>("");

  const handleAddTodo = (todo: ToDo) => {
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

  function saveToLocalStorage(state: ToDo[]) {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("state", serializedState);
    } catch (e) {
      console.log(e);
    }
  }

  function loadFromLocalStorage() {
    try {
      const serializedState = localStorage.getItem("state");
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (e) {
      console.log(e);
      return undefined;
    }
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-3 bg-zinc-900 rounded-lg space-y-8">
        <div className="flex justify-center">
          <h1 className="text-white text-2xl">To-Do App</h1>
        </div>
        <AddTask
          handleSubmitTask={handleSubmitTodo}
          handleChange={handleChange}
          task={task}
        />
        <div className="h-80 overflow-x-hidden overflow-y-auto">
          {todos
            .map((todo) => (
              <Task
                key={todo.id}
                task={todo}
                handleDeleteTask={handleDeleteTodo}
                handleCheckTask={handleCheckTodo}
              />
            ))
            .reverse()}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
