import React from "react";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";

const InputLabelComponent = props => <StyledInputLabel {...props} />;

const StyledInputLabel = withStyles({
  root: {
    position: "relative",
    marginBottom: 8
  },
  asterisk: { color: "red", fontWeight: 900 }
})(InputLabel);

export default InputLabelComponent;
