import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const App: React.FC = () => {
  return (
    <div className="container flex flex-col font-mono mx-auto mt-3">
      <header className="flex items-center justify-between h-16 px-4">
        <h1 className="text-2xl font-semibold">To-Do App</h1>
        <div className="relative">
          <svg
            className=" absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input className="flex h-10 w-full pl-8 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-stone-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500" placeholder="Search tasks..." type="search" />
        </div>
        <AddTodoForm />
      </header>
      <TodoList />
    </div>
  );
};

export default App;
