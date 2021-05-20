import React, { useContext } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";

import useToggleState from "./hooks/useToggleState";

import TodoEditForm from "./TodoEditForm";

import { TodosContext } from "./contexts/todosContext";

function Todo({ task, completed, id }) {
  const { deleteTodo, toggleChecked } = useContext(TodosContext);
  const [isEditing, toggleIsEditing] = useToggleState(false);
  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <TodoEditForm id={id} task={task} toggleIsEditing={toggleIsEditing} />
      ) : (
        <>
          <Checkbox
            checked={completed}
            tabIndex={-1}
            onClick={() => toggleChecked(id)}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="Delete"
              onClick={toggleIsEditing}
            >
              <EditOutlinedIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="Edit"
              onClick={() => deleteTodo(id)}
            >
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default Todo;
