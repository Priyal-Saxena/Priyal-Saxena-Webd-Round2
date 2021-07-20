import React from "react";
import { withRouter } from "react-router";
import L2fixtures from "./L2fixtures";
import L2teams from "./L2teams";
import L2players from "./L2players";
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
const League2 = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Background />
      <main>
        <Paper className={classes.paper}>
          <img
            src="https://cdn.sportmonks.com/images/soccer/leagues/271.png"
            style={({ height: "30vh" }, { width: "30vh" })}
          ></img>
        </Paper>
        <Paper className={classes.paper}>
          <L2teams />
        </Paper>
        <Paper className={classes.paper}>
          <L2players />
        </Paper>

        <Paper className={classes.paper}>
          <L2fixtures />
        </Paper>
      </main>
    </Container>
  );
};

export default withRouter(League2);
