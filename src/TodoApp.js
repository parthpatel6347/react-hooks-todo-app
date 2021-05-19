import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/Appbar";
import ToolBar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

import { v4 as uuidv4 } from "uuid";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function TodoApp() {
  const seed = [
    { id: 1, task: "clean", completed: false },
    { id: 2, task: "wash", completed: true },
    { id: 3, task: "sleep", completed: false },
  ];
  const [todos, setTodos] = useState(seed);

  const addTodo = (newTodo) => {
    setTodos([...todos, { id: uuidv4(), task: newTodo, completed: false }]);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const toggleChecked = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const editTodo = (id, newTask) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task: newTask } : todo
    );
    setTodos(newTodos);
  };

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
