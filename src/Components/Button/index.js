import { hot } from "react-hot-loader";
import React from "react";

import { Button as MuiButton } from "@mui/material";

const Button = () => {
  return (
    <MuiButton
      variant="contained"
      color="primary"
      onClick={() => alert("Clicou!")}
    >
      Hello World
    </MuiButton>
  );
};

export default hot(module)(Button);
