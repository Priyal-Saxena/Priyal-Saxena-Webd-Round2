import React from "react";
import Scramble from "react-scramble";
// Import Material-UI
import DashboardIcon from "@material-ui/icons/Dashboard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  h1: {
    color: "white",
  },
});

export default function Header() {
  const classes = useStyles();
  return (
    <h1 className={classes.h1}>
      <DashboardIcon />
      <Scramble
        autoStart
        text="Football Dashboard!"
        steps={[
          {
            roll: 10,
            action: "+",
            type: "all",
          },
          {
            action: "-",
            type: "forward",
          },
        ]}
      />
    </h1>
  );
}
