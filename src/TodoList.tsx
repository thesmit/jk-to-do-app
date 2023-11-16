import React from 'react';
import { Tab } from '@headlessui/react';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
    const todos = useSelector((state: RootState) => state.todos.todos);
    const today = new Date().toDateString();

    const filteredTodos = (tab = "all") => {
        switch (tab) {
            case "today":
                return todos.filter((todo) => new Date(todo.dueDate).toDateString() === today);
            case "upcoming":
                return todos.filter((todo) => new Date(todo.dueDate) > new Date());
            case "completed":
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    };

    return (
        <div className='w-full px-8 py-4 border'>
            <Tab.Group>
                <Tab.List className="flex space-x-1 max-w-2xl m-auto rounded-xl bg-black/80 bg-opacity-60 p-1 my-4">
                    <Tab
                        className={({ selected }) =>
                            `w-full rounded-lg py-2.5 text-sm leading-5 ring-white/60  focus:outline-none focus:ring-2 ${selected ? "bg-white font-bold text-blue-700 shadow" : "text-white hover:bg-white/[0.12] font-medium hover:text-white"
                            }`
                        }
                    >
                        All
                    </Tab>
                    <Tab
                        className={({ selected }) =>
                            `w-full rounded-lg py-2.5 text-sm leading-5 ring-white/60  focus:outline-none focus:ring-2 ${selected ? "bg-white font-bold text-blue-700 shadow" : "text-white hover:bg-white/[0.12] font-medium hover:text-white"
                            }`
                        }
                    >
                        Today
                    </Tab>
                    <Tab
                        className={({ selected }) =>
                            `w-full rounded-lg py-2.5 text-sm leading-5 ring-white/60  focus:outline-none focus:ring-2 ${selected ? "bg-white font-bold text-blue-700 shadow" : "text-white hover:bg-white/[0.12] font-medium hover:text-white"
                            }`
                        }
                    >
                        Upcoming
                    </Tab>
                    <Tab
                        className={({ selected }) =>
                            `w-full rounded-lg py-2.5 text-sm leading-5 ring-white/60  focus:outline-none focus:ring-2 ${selected ? "bg-white font-bold text-blue-700 shadow" : "text-white hover:bg-white/[0.12] font-medium hover:text-white"
                            }`
                        }
                    >
                        Completed
                    </Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>
                        <div className="mt-2">
                            {todos.length > 0 ? (
                                todos.map((todo) => (
                                    <TodoItem key={todo.id} todo={todo} />
                                ))) : (
                                <div className="flex justify-center items-center">
                                    <p className="text-xl text-gray-500">No todos found.</p>
                                </div>
                            )}
                        </div>
                    </Tab.Panel>
                    <Tab.Panel>
                        <div className="mt-2">
                            {filteredTodos("today").length > 0 ? (
                                filteredTodos("today").map((todo) => (
                                    <TodoItem key={todo.id} todo={todo} />
                                ))) : (
                                <div className="flex justify-center items-center">
                                    <p className="text-xl text-gray-500">No todos found for today.</p>
                                </div>
                            )}
                        </div>
                    </Tab.Panel>
                    <Tab.Panel>
                        <div className="mt-2">
                            {filteredTodos("upcoming").length > 0 ? (
                                filteredTodos("upcoming").map((todo) => (
                                    <TodoItem key={todo.id} todo={todo} />
                                ))) : (
                                <div className="flex justify-center items-center">
                                    <p className="text-xl text-gray-500">No upcoming todos found.</p>
                                </div>
                            )}
                        </div>
                    </Tab.Panel>
                    <Tab.Panel>
                        <div className="mt-2">
                            {filteredTodos("completed").length > 0 ? (
                                filteredTodos("completed").map((todo) => (
                                    <TodoItem key={todo.id} todo={todo} />
                                ))) : (
                                <div className="flex justify-center items-center">
                                    <p className="text-xl text-gray-500">No completed todos found.</p>
                                </div>
                            )}
                        </div>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>

        </div>
    );
};


export default TodoList;
