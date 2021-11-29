import React from "react";
import { Button as MaterialUIButton } from "@mui/material";

const Button = () => {
  return (
    <MaterialUIButton
      variant="contained"
      color="primary"
      onClick={() => alert("Clicou!")}
    >
      Hello World
    </MaterialUIButton>
  );
};

export default Button;
