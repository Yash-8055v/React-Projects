import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "basic todo",
      isCompleted: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
}); //* yaha todo context create kiya  aur useme default global values set kiye

export const TodoProvider = TodoContext.Provider; //* main file me todoContext.provider  likhne ki bajay yaha likh kar export kiya so main file me todoContextProvider name se use kar sakte hai

export const useTodo = () => {
  return useContext(TodoContext); //* main file ki jagah yahi useContext likha aur custom  Hook  bana kar export kiya so main file me direct useTodo name se use kar sakte hai
};
