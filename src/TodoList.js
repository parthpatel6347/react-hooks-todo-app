import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

import Todo from "./Todo";
import { TodosContext } from "./contexts/todosContext";

const useStyles = makeStyles({
  root: {
    backdropFilter: " blur(10px)",
    transition: "all 0.5s",
  },
});

function TodoList() {
  const classes = useStyles();
  const todos = useContext(TodosContext);
  if (todos.length)
    return (
      <Paper className={classes.root} elevation={0}>
        <List>
          {todos.map((todo, i) => (
            <React.Fragment key={i}>
              <Todo {...todo} key={todo.id} />
              {i < todos.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    );
  return null;
}

export default TodoList;
