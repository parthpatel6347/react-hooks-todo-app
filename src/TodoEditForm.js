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
      style={{ marginLeft: "1rem", width: "75%" }}
    >
      <TextField
        value={value}
        onChange={handleChange}
        variant="standard"
        margin="normal"
        fullWidth
        autoFocus
      />
    </form>
  );
}

export default TodoEditForm;
