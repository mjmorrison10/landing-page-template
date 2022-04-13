import { Box, Typography } from "@mui/material";
import React from "react";

function TenthSection() {
  const content = {
    header01: `Together, we will`,
    headerSpan01: `double`,
    header02: `or`,
    headerSpan02: `triple`,
    header03: `the size and value of your business`,
  };

  const sectionContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "65vh",
    backgroundColor: "darkBg.main",

    color: "darkBgPrimary.light",
    position: "relative",
    zIndex: 9,

    mt: {xs: -20, md: -10},
    py: 15,
  };

  const headerStyles = {
    maxWidth: "28ch",
    textAlign: "center",
  };

  const spanStyles = {
    fontWeight: "bolder",
  };

  return (
    <Box sx={sectionContainer}>
      <Typography variant="h3" component="h2" sx={headerStyles}>
        {content.header01}{" "}
        <Box component="span" sx={spanStyles}>
          {content.headerSpan01}
        </Box>{" "}
        {content.header02}{" "}
        <Box component="span" sx={spanStyles}>
          {content.headerSpan02}
        </Box>{" "}
        {content.header03}{" "}
      </Typography>
    </Box>
  );
}

export default TenthSection;
