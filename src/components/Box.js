import { makeStyles } from "@material-ui/styles";
import { Children } from "react";

const useStyles = makeStyles({
  root: {
    background: "#eee",
    p: "4rem",
    borderRadius: "10px",
    boxShadow: "2px 2px 16px rgba(0, 0, 0, 0.16)",
    textAlign: "center",
  },
});

export default function Box({ children }) {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
}
