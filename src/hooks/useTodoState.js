import { v4 as uuidv4 } from "uuid";
import useLocalStorageState from "./useLocalStorageState";

export default (initialTodos) => {
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);
  return {
    todos,
    addTodo: (newTodo) => {
      setTodos([...todos, { id: uuidv4(), task: newTodo, completed: false }]);
    },
    deleteTodo: (id) => {
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
    },
    toggleChecked: (id) => {
      const newTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(newTodos);
    },
    editTodo: (id, newTask) => {
      const newTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, task: newTask } : todo
      );
      setTodos(newTodos);
    },
  };
};
