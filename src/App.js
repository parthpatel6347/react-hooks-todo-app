import TodoApp from "./TodoApp";

import { DarkModeProvider } from "./contexts/todosContext";

function App() {
  return (
    <DarkModeProvider>
      <TodoApp />
    </DarkModeProvider>
  );
}

export default App;
