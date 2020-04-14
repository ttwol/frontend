import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { FormControl, FormHelperText, InputBase } from "@material-ui/core";

import InputLabel from "components/InputLabel";

const InputComponent = ({
  label,
  id,
  fullWidth,
  value,
  onChange,
  helper,
  type,
  disabled,
  required
}) => (
  <FormControl fullWidth={fullWidth} required={required}>
    <InputLabel shrink htmlFor={id}>
      {label}
    </InputLabel>
    <StyledInputBase
      id={id}
      value={value}
      name={id}
      onChange={onChange}
      disabled={disabled}
      type={type}
      aria-describedby={`${id}-text`}
    />
    {helper && <FormHelperText id={`${id}-text`}>{helper}</FormHelperText>}
  </FormControl>
);

const StyledInputBase = withStyles(theme => ({
  input: props => ({
    borderRadius: 0,
    position: "relative",
    backgroundColor: props.disabled
      ? theme.palette.grey[300]
      : theme.palette.common.white,
    border: "1px solid #cccccc",
    fontSize: 16,
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderColor: theme.palette.primary.main
    }
  })
}))(InputBase);

InputComponent.propTypes = {
  fullWidth: PropTypes.bool
};

InputComponent.defaultProps = {
  fullWidth: true
};

export default InputComponent;
