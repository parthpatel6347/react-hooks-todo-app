import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";

import { makeStyles } from "@material-ui/core/styles";

import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./contexts/todosContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
  },
  textField: {
    flexGrow: "1",
    display: "flex",
  },
  closeBtn: {
    height: "50px",
    width: "50px",
    alignSelf: "center",
    [theme.breakpoints.down("xs")]: {
      height: "40px",
      width: "40px",
    },
  },
}));

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
        <IconButton
          type="submit"
          className={classes.closeBtn}
          aria-label="cancel"
        >
          <CheckRoundedIcon />
        </IconButton>
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
