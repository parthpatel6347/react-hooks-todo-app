import React from "react";
import TextField from "@material-ui/core/TextField";

import useInputState from "./hooks/useInputState";

function TodoEditForm({ id, task, editTodo, toggleIsEditing }) {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleIsEditing();
      }}
    >
      <TextField
        value={value}
        onChange={handleChange}
        variant="standard"
        margin="normal"
        fullWidth
      />
    </form>
  );
}

export default TodoEditForm;
