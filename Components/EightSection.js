import { Box, Typography } from "@mui/material";
import React from "react";
import { companyName } from "../public/Settings/BaseSettings";

function EightSection() {
  const content = {
    header: `Six Reasons to Hire`,
    subheader: `${companyName.full}`,
    text: `Whether your goal is to get more clients, improve client retention, or generate more revenue from the clients you already have, ${companyName.main} is here to help!`,
  };

  const sectionStyles = {
    minHeight: "45vh",
    color: "darkBgPrimary.light",
    backgroundColor: "darkBg.main",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 4,
    alignItems: "center",
    position: 'relative',
    zIndex: 15,
    p: 1,
  };

  const header = {
    color: "darkBgPrimary.main",
  };
  const subheader = {
    color: "darkBgPrimary.comp.dark",
    textAlign: 'center',
  };
  const text = {
    color: "darkBgPrimary.light",
    maxWidth: "65ch",
    textAlign: "center",
  };

  return (
    <Box component="section" sx={sectionStyles} id="Six Motivations">
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
  );
}

export default EightSection;
