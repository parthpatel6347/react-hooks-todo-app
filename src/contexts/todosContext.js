import { createContext } from "react";
import todoReducer from "../reducers/todoReducer";
import { useLocalStorageReducer } from "../hooks/useLocalStorageReducer";
import { useDarkMode } from "../hooks/useDarkMode";

const initialTodos = [
  { id: 1, task: "Buy milk", completed: false },
  { id: 2, task: "Check e-mails", completed: false },
  { id: 3, task: "Set dentist appointment", completed: false },
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer(
    "todos",
    initialTodos,
    todoReducer
  );
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}

export const DarkModeContext = createContext();
export function DarkModeProvider(props) {
  const [isDark, toggleIsDark] = useDarkMode("isDark", false);
  return (
    <DarkModeContext.Provider value={{ isDark, toggleIsDark }}>
      {props.children}
    </DarkModeContext.Provider>
  );
}
