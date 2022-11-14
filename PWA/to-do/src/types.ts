import { ChangeEvent, FormEvent } from "react";

export type ToDo = {
  id: string;
  task: string;
  isCompleted: boolean;
};

export type TaskProp = {
  task: ToDo;
  handleCheckTask: (id: string) => void;
  handleDeleteTask: (id: string) => void;
};

export type AddTaskProp = {
  task: string;
  handleChange: (e: ChangeEvent) => void;
  handleSubmitTask: (e: FormEvent) => void;
};
