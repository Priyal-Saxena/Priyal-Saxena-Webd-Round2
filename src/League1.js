import React from "react";
import { withRouter } from "react-router";
import L1fixtures from "./L1fixtures";
import L1teams from "./L1teams";
import L1players from "./L1players";
import Background from "./Background";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import "./styles.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(1),
    overflow: "auto",
    margin: `${theme.spacing(1)}px auto`,
  },
}));
const League1 = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Background />
      <main>
        <Paper className={classes.paper}>
          <img
            src="https://cdn.sportmonks.com/images/soccer/leagues/501.png"
            style={({ height: "30vh" }, { width: "30vh" })}
          ></img>
        </Paper>
        <Paper className={classes.paper}>
          <L1players />
        </Paper>
        <Paper className={classes.paper}>
          <L1teams />
        </Paper>
        <Paper className={classes.paper}>
          <L1fixtures />
        </Paper>
      </main>
    </Container>
  );
};

export default withRouter(League1);
