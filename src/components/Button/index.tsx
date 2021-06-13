import React from "react";
import { Button as MuiButton } from "@material-ui/core";
import "./index.scss";

const Button: React.FC = () => {
  return <MuiButton color="primary" variant="contained">Button</MuiButton>;
};

export default Button;
