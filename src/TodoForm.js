import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";
import Grow from "@material-ui/core/Grow";
import { makeStyles } from "@material-ui/core/styles";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";

import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./contexts/todosContext";
import useToggleState from "./hooks/useToggleState";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-end",
  },
  formContainer: {
    width: "100%",
    backdropFilter: " blur(10px)",
    transition: "all 0.5s",
    display: "flex",
    height: "64px",
  },
  textField: {
    flexGrow: "1",
    display: "flex",
  },
  addBtn: {
    margin: "1.5rem 0",
    height: "48px",
    width: "150px",
    borderRadius: "24px",
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

function TodoForm() {
  const classes = useStyles();
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState("");
  const [isAdding, toggleIsAdding] = useToggleState(false);

  return (
    <div className={classes.root}>
      {!isAdding ? (
        <Button
          variant="contained"
          color="primary"
          className={classes.addBtn}
          endIcon={<AddRoundedIcon />}
          onClick={toggleIsAdding}
          disableRipple
        >
          New Task
        </Button>
      ) : (
        <ClickAwayListener onClickAway={toggleIsAdding}>
          <Grow
            in={isAdding}
            timeout={300}
            style={{ transformOrigin: "right center" }}
          >
            <Paper
              className={classes.formContainer}
              style={{ margin: "1rem 0", padding: "0 1rem" }}
            >
              <form
                className={classes.textField}
                onSubmit={(e) => {
                  e.preventDefault();
                  dispatch({ type: "ADD", task: value });
                  reset();
                  toggleIsAdding();
                }}
              >
                <TextField
                  value={value}
                  onChange={handleChange}
                  label="Add new task"
                  variant="standard"
                  margin="dense"
                  required
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
                onClick={toggleIsAdding}
                className={classes.closeBtn}
                aria-label="cancel"
              >
                <ClearRoundedIcon />
              </IconButton>
            </Paper>
          </Grow>
        </ClickAwayListener>
      )}
    </div>
  );
}

export default TodoForm;
