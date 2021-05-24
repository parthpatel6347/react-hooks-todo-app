import TodoApp from "./TodoApp";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import useToggleState from "./hooks/useToggleState";
import { CssBaseline } from "@material-ui/core";
import darkTheme from "./styles/darkTheme";
import lightTheme from "./styles/lightTheme";

function App() {
  const [isDark, toggleDark] = useToggleState(false);
  return (
    <ThemeProvider theme={createMuiTheme(isDark ? darkTheme : lightTheme)}>
      <CssBaseline />
      <TodoApp toggleDark={toggleDark} isDark={isDark} />
    </ThemeProvider>
  );
}

export default App;
