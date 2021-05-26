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
import bgDark from "./styles/imgs/bgDark.png";
import { DarkModeContext } from "./contexts/todosContext";

const useStyles = makeStyles({
  root: {
    padding: 0,
    margin: 0,
    height: "100vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
    overflowY: "auto",
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
});

function TodoApp() {
  const { isDark, toggleIsDark } = useContext(DarkModeContext);
  const classes = useStyles();
  return (
    <ThemeProvider theme={createMuiTheme(isDark ? darkTheme : lightTheme)}>
      <CssBaseline />
      <div
        className={classes.root}
        style={{
          backgroundImage: `url(${isDark ? bgDark : bgLight})`,
        }}
      >
        <AppBar
          className={classes.appBar}
          color="secondary"
          position="sticky"
          style={{ height: "64px" }}
        >
          <ToolBar className={classes.toolBar}>
            <Typography color="inherit" variant="h5" className={classes.title}>
              <AssignmentTurnedInIcon color="primary" />
              Todo List
            </Typography>
            <div>
              <Grid
                component="label"
                container
                alignItems="center"
                spacing={0.5}
              >
                <Grid item>
                  <WbSunnyOutlinedIcon fontSize="small" />
                </Grid>
                <Grid item>
                  <Switch
                    color="primary"
                    checked={isDark}
                    onChange={toggleIsDark}
                  />
                </Grid>
                <Grid item>
                  <Brightness2OutlinedIcon fontSize="small" />
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
