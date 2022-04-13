import { DoubleArrow } from "@mui/icons-material";
import { Box, Container, IconButton, Typography } from "@mui/material";
import React from "react";
import { clipPathBottom2, companyName } from "../public/Settings/BaseSettings";

function SixthSection() {
  const content = {
    text1a: `What can`,
    text1b: `${companyName.main}`,
    text1c: `do for you?`,
    text2: `Scale your business through digital marketing`,
    text3: `"I want to retain higher paying clients!"`,
  };
  const sectionStyles = {
    bgcolor: "darkBg.secondary",
    minHeight: "100vh",
    height: 500,
    // mt: -15,
    // pt: 15,
    clipPath: clipPathBottom2,
    zIndex: 9,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    pt: { xs: 20, sm: 20, md: 15 },
  };

  const containerStyles = {
    // py: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    color: "darkBgSecondary.main",
    flexGrow: 1,
  };

  const header = { textTransform: "uppercase" };
  const spanStyles = { color: "darkBgSecondary.comp.dark" };
  const subheader = {
    textTransform: "capitalize",
  };
  const quote = { textTransform: "uppercase" };

  const iconButtonBoxStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const arrowIconStyles = {
    transform: "rotate(90deg)",
  }; 

  return (
    <Box component="section" sx={sectionStyles} id="Digital Marketing">
      <Container sx={containerStyles}>
        <Typography component="h1" variant="h4" sx={header}>
          {content.text1a}{" "}
          <Box component="span" sx={spanStyles}>
            {content.text1b}
          </Box>{" "}
          {content.text1c}
        </Typography>
        <Typography component="h2" variant="h2" sx={subheader}>
          {content.text2}
        </Typography>
        <Typography component="div" variant="h5" sx={quote}>
          {content.text3}
        </Typography>
      </Container>

      <Box sx={iconButtonBoxStyles}>
        <IconButton sx={arrowIconStyles} href="#Digital Marketing Content">
          <DoubleArrow color={"darkBgSecondary"} />
          {/* <MorrisonDevOpsIcon color="blue" sx={iconRootStyles} /> */}
        </IconButton>
      </Box>
    </Box>
  );
}

export default SixthSection;
