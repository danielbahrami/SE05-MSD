import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Task from "./Task";
import AddTask from "./AddTask";
import { data } from "../tasks";
import { ToDo } from "../types";

const Tasks = () => {
  const [tasks, setTasks] = useState<ToDo[]>(loadFromLocalStorage() ?? data);
  const [task, setTask] = useState<string>("");

  const handleAddTask = (task: ToDo) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    setTask("");
    saveToLocalStorage(updatedTasks);
  };

  const handleSubmitTask = (e: FormEvent) => {
    e.preventDefault();
    const todo = {
      id: uuidv4(),
      task: task,
      isCompleted: false,
    };
    task && handleAddTask(todo);
  };

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setTask(value);
    saveToLocalStorage(tasks);
  };

  const handleCheckTask = (id: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
    saveToLocalStorage(updatedTasks);
  };

  const handleDeleteTask = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    saveToLocalStorage(updatedTasks);
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
          handleSubmitTask={handleSubmitTask}
          handleChange={handleChange}
          task={task}
        />
        <div className="h-80 overflow-x-hidden overflow-y-auto">
          {tasks
            .map((task) => (
              <Task
                key={task.id}
                task={task}
                handleDeleteTask={handleDeleteTask}
                handleCheckTask={handleCheckTask}
              />
            ))
            .reverse()}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
