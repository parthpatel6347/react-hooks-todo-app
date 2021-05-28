import React, { useContext } from "react";
import { SortableContainer } from "react-sortable-hoc";
import List from "@material-ui/core/List";
import { TodosContext } from "./contexts/todosContext";
import Todo from "./Todo";

const SortableList = SortableContainer(({ isSorting }) => {
  const todos = useContext(TodosContext);
  return (
    <List style={{ padding: 0 }}>
      {todos.map((todo, i) => (
        <Todo
          {...todo}
          key={todo.id}
          index={i}
          last={i < todos.length - 1}
          isSorting={isSorting}
        />
      ))}
    </List>
  );
});

export default SortableList;
