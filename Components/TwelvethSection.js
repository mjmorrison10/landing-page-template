import { Box, Typography } from "@mui/material";
import React from "react";
import { companyName } from "../public/Settings/BaseSettings";
import TestimonialsComp from "./testimonialsComp";

function TwelvethSection() {
  const content = {
    header01: "What our clients are saying about",
    header02: `${companyName.full}`,
  };
 
  const sectionStyles = {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    flexDirection: "column",
    mt: 10,

  };

  const headerStyles = {};

  const spanStyles = {
      fontWeight: 'bold',
      color: 'info.dark'
  };

  return (
    <Box sx={sectionStyles} id="My Work">
      <Typography variant="h2" component="h1" sx={headerStyles}>
        {content.header01}{" "}
        <Box sx={spanStyles} component="span">
          {content.header02}
        </Box>
      </Typography>

      <TestimonialsComp />
    </Box>
  );
}

export default TwelvethSection;
