import { AddTaskProp } from "../types";

export const AddTodo = ({
  handleSubmitTask,
  task,
  handleChange,
}: AddTaskProp) => {
  return (
    <form onSubmit={handleSubmitTask} className="flex">
      <input
        placeholder="New Task"
        className="h-10 px-3 bg-white w-full rounded-tl-lg rounded-bl-lg outline-none"
        id="add-todo"
        type="text"
        name="task"
        value={task}
        onChange={handleChange}
      />
      <button className="h-10 bg-green-600 px-5 rounded-tr-lg rounded-br-lg text-white text-2xl">
        +
      </button>
    </form>
  );
};
