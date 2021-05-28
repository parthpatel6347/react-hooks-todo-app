import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/Appbar";
import ToolBar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import WbSunnyOutlinedIcon from "@material-ui/icons/WbSunnyOutlined";
import Brightness2OutlinedIcon from "@material-ui/icons/Brightness2Outlined";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import darkTheme from "./styles/darkTheme";
import lightTheme from "./styles/lightTheme";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { TodosProvider } from "./contexts/todosContext";
import bgLight from "./styles/imgs/bgLight.png";
import { DarkModeContext } from "./contexts/todosContext";

const useStyles = makeStyles((theme) => ({
  background: {
    position: "fixed",
    left: 0,
    right: 0,
    padding: 0,
    margin: 0,
    zIndex: 0,
    backgroundImage: `url(${bgLight})`,
    filter: (props) => (props.isDark ? "brightness(60%)" : "brightness(100%)"),
    backgroundPosition: "center",
    backgroundSize: "cover",
    overflowY: "auto",
    transition: "all 0.5s",
    height: "100vh",
  },
  root: {
    zIndex: "1",
    padding: 0,
    margin: 0,
    transition: "all 0.5s",
    paddingBottom: "2rem",
  },
  appBar: {
    backdropFilter: " blur(5px)",
    transition: "all 0.5s",
  },
  toolBar: {
    alignSelf: "center",
    width: "70%",
    justifyContent: "space-between",
    transition: "all 0.2s",
  },
  title: {
    display: "flex",
    alignItems: "center",
  },
}));

function TodoApp() {
  const { isDark, toggleIsDark } = useContext(DarkModeContext);
  const classes = useStyles({ isDark });
  return (
    <ThemeProvider theme={createMuiTheme(isDark ? darkTheme : lightTheme)}>
      <CssBaseline />
      <div className={classes.background}></div>
      <div className={classes.root}>
        <AppBar
          className={classes.appBar}
          color="secondary"
          position="sticky"
          style={{ height: "64px" }}
        >
          <ToolBar className={classes.toolBar}>
            <Typography color="inherit" variant="h5" className={classes.title}>
              <AssignmentTurnedInIcon color="primary" />
              TodoListtttt
            </Typography>
            <div>
              <Grid
                component="label"
                container
                alignItems="center"
                spacing={0.5}
              >
                <Grid item>
                  <span className="material-icons-outlined">light_mode</span>
                </Grid>
                <Grid item>
                  <Switch
                    disableRipple
                    color="primary"
                    checked={isDark}
                    onChange={toggleIsDark}
                  />
                </Grid>
                <Grid item>
                  <span className="material-icons-outlined">dark_mode</span>
                </Grid>
              </Grid>
            </div>
          </ToolBar>
        </AppBar>
        <Grid container justify="center">
          <Grid item xs={11} md={8} lg={4}>
            <TodosProvider>
              <TodoForm />
              <TodoList />
            </TodosProvider>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default TodoApp;
