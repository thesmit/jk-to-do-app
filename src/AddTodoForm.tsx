import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todosSlice";

const AddTodoForm: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [text, setText] = useState("");
    const [priority, setPriority] = useState<"low" | "medium" | "high">("medium");
    const [dueDate, setDueDate] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!text.trim()) return;
        dispatch(addTodo({ text, description, priority, dueDate }));
        setText("");
        setPriority("medium");
        setDueDate("");
        setDescription("");
        setIsOpen(false);
    };

    const closeModal = () => {
        setIsOpen(false);
        setText("");
        setPriority("medium");
        setDueDate("");
        setDescription("");
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="bg-blue-500 hover:bg-blue-700 transition-colors text-white font-bold py-2 px-4 rounded"
            >
                Add Todo
            </button>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative font-mono z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                                    <div className="bg-white px-4 border-b pt-5 pb-4 sm:p-6 sm:pb-4">
                                        <Dialog.Title as="h3" className="text-lg font-bold leading-6 text-gray-900">
                                            Add a new todo
                                        </Dialog.Title>
                                    </div>
                                    <form onSubmit={handleSubmit} className="p-6">
                                        <div className="mb-4">
                                            <label htmlFor="text" className="block text-gray-700 font-semibold mb-2">
                                                Todo Text
                                            </label>
                                            <input
                                                type="text"
                                                id="text"
                                                className="py-3 border px-4 block w-full transition-colors border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                                                value={text}
                                                onChange={(e) => setText(e.target.value)}
                                                placeholder="Add a new todo"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="priority" className="block text-gray-700 font-semibold mb-2">
                                                Priority
                                            </label>
                                            <select
                                                id="priority"
                                                className="py-3 border px-4 block w-full transition-colors border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                                                value={priority}
                                                onChange={(e) => setPriority(e.target.value as "low" | "medium" | "high")}
                                            >
                                                <option value="low">Low</option>
                                                <option value="medium">Medium</option>
                                                <option value="high">High</option>
                                            </select>
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="dueDate" className="block text-gray-700 font-semibold mb-2">
                                                Due Date
                                            </label>
                                            <input
                                                type="date"
                                                id="dueDate"
                                                className="py-3 border px-4 block w-full transition-colors border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                                                value={dueDate}
                                                onChange={(e) => setDueDate(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">
                                                Description
                                            </label>
                                            <textarea
                                                id="description"
                                                className="py-3 border px-4 block w-full transition-colors border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                                placeholder="Add a description"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="bg-gradient-to-r from-green-500 to-green-700 transition-all hover:from-green-700 hover:to-green-900 text-white font-bold py-2 px-4 rounded mt-4"
                                        >
                                            Add Todo
                                        </button>

                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default AddTodoForm;
