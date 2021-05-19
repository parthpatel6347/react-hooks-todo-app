import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import Todo from "./Todo";

function TodoList({ todos, deleteTodo, toggleChecked, editTodo }) {
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <>
            <Todo
              task={todo.task}
              completed={todo.completed}
              id={todo.id}
              key={todo.id}
              deleteTodo={deleteTodo}
              toggleChecked={toggleChecked}
              editTodo={editTodo}
            />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
