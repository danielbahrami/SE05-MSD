import { TodoProps } from "../types";

export const Row = ({
  todo: { id, task, isCompleted },
  handleCheckTodo,
  handleDeleteTodo,
}: TodoProps) => {
  return (
    <div className="rounded-lg p-3 mt-4 bg-white flex justify-between">
      <div className="flex items-center">
        <input
          id={"task-name-" + id}
          type="checkbox"
          checked={isCompleted}
          onChange={() => handleCheckTodo(id)}
        />
        <label className="ml-2">{task}</label>
      </div>
      <div>
        <button
          className="bg-red-600 px-2 py-1 text-lg leading-5 rounded-full font-semibold text-white"
          onClick={() => handleDeleteTodo(id)}
        >
          X
        </button>
      </div>
    </div>
  );
};
