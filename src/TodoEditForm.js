import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";
import { makeStyles } from "@material-ui/core/styles";

import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./contexts/todosContext";

const useStyles = makeStyles({
  root: {
    display: "flex",
    width: "100%",
  },
  textField: {
    flexGrow: "1",
  },
  closeBtn: {
    height: "50px",
    width: "50px",
    alignSelf: "center",
  },
});

function TodoEditForm({ id, task, toggleIsEditing }) {
  const classes = useStyles();

  const dispatch = useContext(DispatchContext);

  const [value, handleChange, reset] = useInputState(task);

  return (
    <div className={classes.root}>
      <form
        className={classes.textField}
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "EDIT", newTask: value, id: id });
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
      <IconButton
        onClick={toggleIsEditing}
        className={classes.closeBtn}
        aria-label="cancel"
      >
        <ClearRoundedIcon />
      </IconButton>
    </div>
  );
}

export default TodoEditForm;
