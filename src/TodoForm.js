import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./contexts/todosContext";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backdropFilter: " blur(10px)",
    transition: "all 0.5s",
  },
});

function TodoForm() {
  const classes = useStyles();
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState("");
  return (
    <Paper
      className={classes.root}
      style={{ margin: "1rem 0", padding: "0 1rem" }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "ADD", task: value });
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          label="Add new task"
          variant="standard"
          margin="normal"
          fullWidth
          required
        />
      </form>
    </Paper>
  );
}

export default TodoForm;
