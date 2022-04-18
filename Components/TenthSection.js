import { Box, Typography } from "@mui/material";
import React from "react";

function TenthSection() {
  const content = {
    header01: `Together, we will`,
    headerSpan01: `double`,
    header02: `or`,
    headerSpan02: `triple`,
    header03: `the size and value of your business`,
    image01: `images/pool.jpg`,
  };

  const sectionContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "75vh",

    // backgroundColor: "darkBg.main",
    backgroundImage: `url(${content.image01})`,
    backgroundPosition: { xs: "center" },
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    boxShadow: `inset 0 0 0 1000px hsla(239, 85%, 12%, 0.9)`,

    color: "darkBgPrimary.light",
    position: "relative",
    zIndex: 9,
    mt: { xs: -10, md: -15 },
    pt: 10,

    // mt: {xs: -20, md: -10},
    // py: 15,
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
