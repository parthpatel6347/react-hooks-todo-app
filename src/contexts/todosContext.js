import react, { createContext } from "react";
import useTodoState from "../hooks/useTodoState";

const initialTodos = [{ id: 1, task: "Brush Teeth", completed: false }];

export const TodosContext = createContext();

export function TodosProvider(props) {
  const todoData = useTodoState(initialTodos);
  return (
    <TodosContext.Provider value={todoData}>
      {props.children}
    </TodosContext.Provider>
  );
}
