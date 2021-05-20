import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import useInputState from "./hooks/useInputState";
import { TodosContext } from "./contexts/todosContext";

function TodoForm() {
  const { addTodo } = useContext(TodosContext);
  const [value, handleChange, reset] = useInputState("");

  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
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
