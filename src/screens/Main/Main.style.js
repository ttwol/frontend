import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.background,
    minHeight: "100%"
  },
  navBar: {
    width: "100%",
    padding: "0px 16px",
    boxSizing: "border-box"
  },
  logo: { height: 50 },
  userImage: { width: 50, height: 50, borderRadius: "100%" }
}));
