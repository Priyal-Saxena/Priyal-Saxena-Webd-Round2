import React from "react";
import League1 from "./League1";
import League2 from "./League2";
import LiveSores from "./LiveSores";
import Nav from "./Nav";
import Main from "./Main";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// import Background from "./Background";
// import Header from "./Header";
// import NewsFeed from "./NewsFeed";
import "./styles.css";

// import Container from "@material-ui/core/Container";
// import Paper from "@material-ui/core/Paper";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     display: "flex",
//     flexDirection: "column",
//     padding: theme.spacing(1),
//     overflow: "auto",
//     margin: `${theme.spacing(1)}px auto`,
//   },
// }));

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/League1" component={League1} />
          <Route exact path="/League2" component={League2} />
          <Route exact path="/LiveSores" component={LiveSores} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
