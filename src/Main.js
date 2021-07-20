import React from "react";
import { withRouter } from "react-router";
// Import Components
import Background from "./Background";
import Header from "./Header";
import "./styles.css";
// Import Material-UI
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Particle from "react-particles-js";
import particlesConfig from "./particlesConfig.json";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(1),
    overflow: "auto",
    margin: `${theme.spacing(1)}px auto`,
  },
}));

const Main = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Header />
      <Particle params={particlesConfig} className="App-particles__container" />
      <Background />
    </Container>
  );
};

export default withRouter(Main);
