import { ChangeEvent, FormEvent } from "react";

export type Task = {
  id: string;
  name: string;
  isCompleted: boolean;
};

export type TaskProps = {
  task: Task;
  handleCheckTask: (id: string) => void;
  handleDeleteTask: (id: string) => void;
};

export type AddTaskProps = {
  task: string;
  handleChange: (e: ChangeEvent) => void;
  handleSubmitTask: (e: FormEvent) => void;
};
