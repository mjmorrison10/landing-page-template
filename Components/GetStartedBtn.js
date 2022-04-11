import { PriorityHighOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";


function GetStartedBtn(
  props
  // { label = "Get Started Now!", clr = "secondary" }
) {
  const label = props.label ? props.label : "Get Started Now!";
  const clr = props.clr ? props.clr : "secondary";

  return (
    <Button
      {...props}
      variant="contained"
      color={clr}
      startIcon={<PriorityHighOutlined />}
      href="https://docs.google.com/forms/d/e/1FAIpQLSdQaPXLg0daDpEd3QO88JRBJcrquMVQm-G4PIqcd1ehhPj6Bg/viewform?usp=sf_link"
    >
      {label}
    </Button>
  );
}

export default GetStartedBtn;
