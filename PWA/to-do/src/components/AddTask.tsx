import { AddTaskProp } from "../types";

const AddTask = ({ handleSubmitTask, task, handleChange }: AddTaskProp) => {
  return (
    <form onSubmit={handleSubmitTask} className="flex">
      <input
        placeholder="New Task"
        className="h-10 px-3 bg-white w-full rounded-tl-lg rounded-bl-lg outline-none"
        type="text"
        value={task}
        onChange={handleChange}
      />
      <button className="h-10 bg-green-600 px-5 rounded-tr-lg rounded-br-lg text-white text-2xl">
        +
      </button>
    </form>
  );
};

export default AddTask;
