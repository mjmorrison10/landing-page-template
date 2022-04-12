import { DoubleArrow } from "@mui/icons-material";
import { Box, Container, IconButton, Typography } from "@mui/material";
import React from "react";
import {
  clipPathBottom,
  clipPathBottom2,
  companyName,
} from "../public/Settings/BaseSettings";

function SecondaryIntro() {
  const content = {
    title1: `What can`,
    titleSpan: companyName.full,
    title2: `do for you?`,
    heading: `Generate leads, high-converting sales funnel pages for customers and clients.`,
    quote: `"I want more customers."`,
  };

  const sectionStyles = {
    bgcolor: "darkBg.secondary",
    minHeight: "75vh",
    mt: -12,
    pt: '8%',
    clipPath: clipPathBottom2,
    zIndex: 19,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    justifyContent: "space-between",
  };

  const containerStyles = {
    pt: 8,
    pb: 14,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    color: "darkBgSecondary.main",
  };

  const titleStyles = {};
  const spanStyles = { color: "darkBgSecondary.comp.dark" };
  const headingStyles = {};
  const quoteStyles = {};

  const iconButtonBoxStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const arrowIconStyles = {
    transform: "rotate(90deg)",
  };

  return (
    <Box component="section" sx={sectionStyles}>
      <Container sx={containerStyles}>
        <Typography component="h1" variant="h3" sx={titleStyles}>
          {content.title1}{" "}
          <Box component="span" sx={spanStyles}>
            {content.titleSpan}
          </Box>{" "}
          {content.title2}
        </Typography>
        <Typography component="h2" variant="h2" sx={headingStyles}>
          {content.heading}
        </Typography>
        <Typography component="div" variant="h3" sx={quoteStyles}>
          {content.quote}
        </Typography>
      </Container>

      <Box sx={iconButtonBoxStyles}>
        <IconButton sx={arrowIconStyles}>
          <DoubleArrow color={"darkBgSecondary"} />
          {/* <MorrisonDevOpsIcon color="blue" sx={iconRootStyles} /> */}
        </IconButton>
      </Box>
    </Box>
  );
}

export default SecondaryIntro;
