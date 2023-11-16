import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "./store/todosSlice";
import { Todo } from "./store/types";

type Props = {
    todo: Todo;
};

const TodoItem: React.FC<Props> = ({ todo }) => {
    const dispatch = useDispatch();

    const handleDelete = (id: number) => {
        dispatch(deleteTodo(id));
    }

    function formatDate(dateString: string): string {
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }
    return (
        <div className="flex items-center justify-between p-4 bg-white rounded-lg border shadow-sm my-4">
            <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => dispatch(toggleTodo(todo.id))}
                    className="form-checkbox h-4 w-4 text-blue-600 mr-3"
                />
                <div className="flex flex-col">
                    <span className={`font-semibold ${todo.completed ? "text-gray-400 line-through" : "text-gray-800"}`}>
                        {todo.text}
                    </span>
                    <span className="text-gray-500 text-sm">{todo.description}</span>
                    <span className="text-gray-500 text-sm">Due: {formatDate(todo.dueDate)}</span>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                {/* add badge for priority */}
                <span className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ${todo.priority === "low" ? "bg-green-200 text-green-800" : todo.priority === "medium" ? "bg-yellow-200 text-yellow-800" : "bg-red-200 text-red-800"
                    }`}>
                    {todo.priority} priority
                </span>
                <button className="bg-red-500 transition-colors hover:bg-red-700 text-white font-bold py-2 px-2 rounded text-xs" onClick={() => handleDelete(todo.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
                </button>
            </div>
        </div>
    );
};


export default TodoItem;
