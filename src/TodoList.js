import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import Todo from "./Todo";

function TodoList({ todos, deleteTodo, toggleChecked, editTodo }) {
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <React.Fragment key={i}>
              <Todo
                {...todo}
                key={todo.id}
                deleteTodo={deleteTodo}
                toggleChecked={toggleChecked}
                editTodo={editTodo}
              />
              {i < todos.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    );
  return null;
}

export default TodoList;
