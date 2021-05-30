import React, { useContext, useState } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import { TodosContext } from "./contexts/todosContext";
import { DispatchContext } from "./contexts/todosContext";

import SortableList from "./SortableList";

const useStyles = makeStyles((theme) => ({
  root: {
    backdropFilter: " blur(10px)",
    transition: "all 0.5s",
  },
  sort: {
    background: theme.palette.background.paper,
    borderRadius: "15px",
    boxShadow: "-3px 6px 5px -5px rgba(0,0,0,0.2)",
  },
}));

function TodoList() {
  const classes = useStyles();
  const todos = useContext(TodosContext);
  const dispatch = useContext(DispatchContext);
  const [isSorting, setIsSorting] = useState(false);

  const sortStart = () => {
    setIsSorting(true);
  };

  const sortEnd = () => {
    setIsSorting(false);
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    dispatch({
      type: "ARRANGE",
      oldIndex: oldIndex,
      newIndex: newIndex,
    });
    sortEnd();
    console.log("sortend");
  };

  if (todos.length)
    return (
      <Paper className={classes.root} elevation={0}>
        <SortableList
          onSortStart={sortStart}
          helperClass={classes.sort}
          axis="y"
          lockAxis="y"
          useDragHandle
          transitionDuration={500}
          onSortEnd={onSortEnd}
          distance={10}
          isSorting={isSorting}
        />
      </Paper>
    );
  return null;
}

export default TodoList;
