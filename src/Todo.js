import React, { useContext, memo } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";

import ClickAwayListener from "react-click-away-listener";

import useToggleState from "./hooks/useToggleState";

import TodoEditForm from "./TodoEditForm";

import { DispatchContext } from "./contexts/todosContext";

function Todo({ task, completed, id }) {
  const dispatch = useContext(DispatchContext);
  const [isEditing, toggleIsEditing] = useToggleState(false);
  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <ClickAwayListener onClickAway={toggleIsEditing}>
          <TodoEditForm id={id} task={task} toggleIsEditing={toggleIsEditing} />
        </ClickAwayListener>
      ) : (
        <>
          <Checkbox
            checked={completed}
            tabIndex={-1}
            onClick={() => dispatch({ type: "TOGGLE", id: id })}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="Edit" onClick={toggleIsEditing}>
              <EditOutlinedIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="Delete"
              onClick={() => dispatch({ type: "REMOVE", id: id })}
            >
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default memo(Todo);
