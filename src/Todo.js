import React, { useContext, memo } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";

import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import useToggleState from "./hooks/useToggleState";

import TodoEditForm from "./TodoEditForm";

import { DispatchContext } from "./contexts/todosContext";

const useStyles = makeStyles({
  root: {
    height: "64px",
  },
  icon: {
    transition: "all 0.5s",
  },
  text: {
    textDecoration: (props) => (props.completed ? "line-through" : "none"),
    textDecorationColor: "rgba(41,211,145,0.7) !important",
    textDecorationThickness: "35% !important",
  },
});

function Todo({ id, completed, task }) {
  const classes = useStyles({ completed });
  const dispatch = useContext(DispatchContext);
  const [isEditing, toggleIsEditing] = useToggleState(false);
  return (
    <ListItem className={classes.root}>
      {isEditing ? (
        <ClickAwayListener onClickAway={toggleIsEditing}>
          <Fade in={isEditing} timeout={500}>
            <div style={{ width: "100%" }}>
              <TodoEditForm
                id={id}
                task={task}
                toggleIsEditing={toggleIsEditing}
              />
            </div>
          </Fade>
        </ClickAwayListener>
      ) : (
        <>
          <Checkbox
            className={classes.icon}
            color="primary"
            checked={completed}
            tabIndex={-1}
            onClick={() => dispatch({ type: "TOGGLE", id: id })}
          />
          <ListItemText className={classes.text}>{task}</ListItemText>
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="Edit" onClick={toggleIsEditing}>
              <EditOutlinedIcon className={classes.icon} />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="Delete"
              onClick={() => dispatch({ type: "REMOVE", id: id })}
            >
              <DeleteOutlineOutlinedIcon className={classes.icon} />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default memo(Todo);
