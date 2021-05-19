import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/Appbar";
import ToolBar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

import useTodoState from "./hooks/useTodoState";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function TodoApp() {
  const initialTodos = [{ id: 1, task: "Brush Teeth", completed: false }];

  const { todos, addTodo, deleteTodo, toggleChecked, editTodo } =
    useTodoState(initialTodos);

  return (
    <Paper style={{ padding: 0, margin: 0, height: "100vh" }} elevation={0}>
      <AppBar position="static" style={{ height: "64px" }}>
        <ToolBar>
          <Typography color="inherit">Todo List</Typography>
        </ToolBar>
      </AppBar>
      <Grid container justify="center">
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            toggleChecked={toggleChecked}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
