import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/Appbar";
import ToolBar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { TodosProvider } from "./contexts/todosContext";

function TodoApp({ toggleDark, isDark }) {
  return (
    <div style={{ padding: 0, margin: 0, height: "100vh" }}>
      <AppBar position="static" style={{ height: "64px" }}>
        <ToolBar>
          <Typography color="inherit">Todo List</Typography>
          <Switch checked={isDark} onChange={toggleDark} />
        </ToolBar>
      </AppBar>
      <Grid container justify="center">
        <Grid item xs={11} md={8} lg={4}>
          <TodosProvider>
            <TodoForm />
            <TodoList />
          </TodosProvider>
        </Grid>
      </Grid>
    </div>
  );
}

export default TodoApp;
