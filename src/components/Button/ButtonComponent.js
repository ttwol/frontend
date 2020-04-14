import React from "react";
import { Button, withStyles } from "@material-ui/core";

const ButtonComponent = props => <StyledButton {...props} />;

const StyledButton = withStyles({
  root: {
    textTransform: "initial",
    boxShadow: "none",
    marginRight: 10,
    padding: "4px 16px",
    borderRadius: 0,
    "&:last-child": { marginRight: 0 },
    "&:hover": { boxShadow: "none" },
    "&:focus": { boxShadow: "none" }
  }
})(Button);

export default ButtonComponent;
