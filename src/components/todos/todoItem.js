import { deleteTodo, updateTodo } from "../../store/slices/todosSlice";
import { useDispatch } from "react-redux";

export default function TodoItem({ item }) {
  const dispatch = useDispatch();
  const todoDeletHandler = () => {
    dispatch(deleteTodo(item.id));
  };
  const toggleDoneTodoHandle = () => dispatch(updateTodo({ id: item.id }));
  return (
    <>
      <div className="flex mb-4 items-center">
        <p
          className={`mr-auto  ${
            item.done ? "line-through text-green-600" : "text-gray-700"
          }`}
        >
          {item.text}
        </p>
        {item.done ? (
          <button
            onClick={toggleDoneTodoHandle}
            className="p-1 px-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-600 border-green-600 hover:bg-green-600"
          >
            Done
          </button>
        ) : (
          <button
            onClick={toggleDoneTodoHandle}
            className="p-1 px-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-400 border-gray-400 hover:bg-gray-400"
          >
            Not Done
          </button>
        )}
        <button
          onClick={todoDeletHandler}
          className="p-1 px-2 ml-2 border-2 rounded text-red-600 border-red-600 hover:text-white hover:bg-red-600"
        >
          Remove
        </button>
      </div>
    </>
  );
}
