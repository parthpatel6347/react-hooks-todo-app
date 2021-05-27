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
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import Divider from "@material-ui/core/Divider";

import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import { SortableElement, sortableHandle } from "react-sortable-hoc";

import useToggleState from "./hooks/useToggleState";

import TodoEditForm from "./TodoEditForm";

import { DispatchContext } from "./contexts/todosContext";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: "64px",
    "&:hover $icon": {
      opacity: 1,
    },
  },
  icon: {
    display: (props) => props.isSorting && "none",
    opacity: "0",
    transition: "color 0.5s",
  },
  checkbox: {
    transition: "all 0.5s",
  },
  dragHandle: {
    cursor: "grab",
  },
  text: {
    textDecoration: (props) => (props.completed ? "line-through" : "none"),
    textDecorationColor: "rgba(41,211,145,0.7) !important",
    textDecorationThickness: "35% !important",
  },
});

const Todo = SortableElement(({ id, completed, task, last, isSorting }) => {
  const classes = useStyles({ completed, isSorting });
  const dispatch = useContext(DispatchContext);
  const [isEditing, toggleIsEditing] = useToggleState(false);
  const DragHandle = sortableHandle(() => (
    <DragIndicatorIcon className={classes.dragHandle} />
  ));
  return (
    <div>
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
            <DragHandle />
            <Checkbox
              className={classes.checkbox}
              color="primary"
              checked={completed}
              tabIndex={-1}
              onClick={() => dispatch({ type: "TOGGLE", id: id })}
            />
            <ListItemText className={classes.text}>
              <Typography noWrap style={{ width: "80%" }}>
                {task}
              </Typography>
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="Edit"
                onClick={toggleIsEditing}
              >
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
      {!last ? null : <Divider />}
    </div>
  );
});

export default memo(Todo);
