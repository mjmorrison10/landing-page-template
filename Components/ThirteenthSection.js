import {
  Email,
  Facebook,
  GitHub,
  Instagram,
  Twitter,
} from "@mui/icons-material";
import { Box, ButtonGroup, IconButton, Typography } from "@mui/material";
import React from "react";
import { companyName } from "../public/Settings/BaseSettings";

function ThirteenthSection() {
  const content = {
    header01: `Connect with ${companyName.main} on Social Media!`,
    instagram: `https://www.instagram.com/morrisondevops/`,
    facebook: `https://www.facebook.com/MorrisonDevOps`,
    github: `https://github.com/mjmorrison10`,
    twitter: `https://twitter.com/MorrisonDevOps`,
    email: `morrisondevops@gmail.com`,
  };

  const sectionStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    py: 10,
  };

  const headerStyles = {
    textAlign: "center",
    fontWeight: "bold",
    color: "darkBg.light",
    maxWidth: "30ch",
  };

  const btnGroupStyles = {};

  const iconBtnStyles = (icon) => {
    let color;

    if (icon === "ig") color = "red";
    if (icon === "fb") color = "info.dark";
    if (icon === "twit") color = "cyan";
    if (icon === "email") color = "darkBg.light";
    return {
      color: color,
    };
  };

  return (
    <Box sx={sectionStyles}>
      <Typography variant="h2" sx={headerStyles}>
        {content.header01}
      </Typography>

      <ButtonGroup sx={btnGroupStyles}>
        <IconButton href={content.instagram} sx={iconBtnStyles("ig")}>
          <Instagram />
        </IconButton>
        <IconButton href={content.facebook} sx={iconBtnStyles("fb")}>
          <Facebook />
        </IconButton>
        <IconButton href={content.github} sx={iconBtnStyles("gh")}>
          <GitHub />
        </IconButton>
        <IconButton href={content.twitter} sx={iconBtnStyles("twit")}>
          <Twitter />
        </IconButton>
        <IconButton href={content.email} sx={iconBtnStyles("email")}>
          <Email />
        </IconButton>
      </ButtonGroup>
    </Box>
  );
}

export default ThirteenthSection;
