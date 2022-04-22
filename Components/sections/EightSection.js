import { Box, Slide, Typography } from "@mui/material";
import React from "react";
import { companyName } from "../../public/Settings/BaseSettings";

function EightSection({ view }) {
  const content = {
    header: `Six Reasons to Hire`,
    subheader: `${companyName.full}`,
    text: `Whether your goal is to get more clients, improve client retention, or generate more revenue from the clients you already have, ${companyName.main} is here to help!`,
    image01: `images/blueRedBoxer.jpg`,
  };

  const sectionStyles = {
    minHeight: "45vh",
    color: "darkBgPrimary.light",
    // backgroundColor: "darkBg.main",

    backgroundImage: `url(${content.image01})`,
    backgroundPosition: "50% 30%",
    // backgroundPosition: { xs: "75% 50%", sm: "center" },
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    boxShadow: `inset 0 0 0 1000px hsla(239, 85%, 12%, 0.75)`,

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 4,
    alignItems: "center",
    position: "relative",
    zIndex: 15,
    p: 1,
  };

  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: 'center',
  };

  const header = {
    color: "darkBgPrimary.main",
    textAlign: 'center',
  };
  const subheader = {
    color: "darkBgPrimary.comp.dark",
    textAlign: "center",
  };
  const text = {
    color: "darkBgPrimary.light",
    maxWidth: "65ch",
    textAlign: "center",
  };

  return (
    <Box component="section" sx={sectionStyles} id="Six Motivations">
      <Slide direction="right" in={view}>
        <Box sx={containerStyles}>
          <Typography variant="h3" component="h2" sx={header}>
            {content.header}
          </Typography>
          <Typography variant="h3" component="h3" sx={subheader}>
            {content.subheader}
          </Typography>
          <Typography variant="h6" component="h3" sx={text}>
            {content.text}
          </Typography>
        </Box>
      </Slide>
    </Box>
  );
}

export default EightSection;
