import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.primary.main
  },
  card: {
    padding: 20,
    width: 400,
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  img: { width: 250, height: "auto", textAlign: "center", marginBottom: 20 },
  form: { display: "flex", justifyContent: "center", flexDirection: "column" }
}));
