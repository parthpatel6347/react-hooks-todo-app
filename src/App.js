import TodoApp from "./TodoApp";
import { ThemeProvider, createMuiTheme, CssBaseline } from "@material-ui/core";
import useToggleState from "./hooks/useToggleState";

function App() {
  const [isDark, toggleDark] = useToggleState(false);

  const theme = createMuiTheme({
    palette: {
      type: isDark ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TodoApp toggleDark={toggleDark} isDark={isDark} />
    </ThemeProvider>
  );
}

export default App;
