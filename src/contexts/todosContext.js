import { createContext } from "react";
import todoReducer from "../reducers/todoReducer";
import { useLocalStorageReducer } from "../hooks/useLocalStorageReducer";
import { useDarkMode } from "../hooks/useDarkMode";

const initialTodos = [{ id: 1, task: "Brush Teeth", completed: false }];

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
