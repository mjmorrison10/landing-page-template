import { DoubleArrow } from "@mui/icons-material";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import {
  clipPathBottom2,
  clipPathBottom3,
  companyName,
} from "../public/Settings/BaseSettings";

function NinthSection() {
  const content = {
    heading01: `grow your passive income`,
    subheader01: `subheader`,
    body01: `body`,

    heading02: `Heading2`,
    subheader02: `subheader`,
    body02: `body`,

    heading03: `Heading3`,
    subheader03: `subheader`,
    body03: `body`,

    heading04: `Heading4`,
    subheader04: `subheader`,
    body04: `body`,

    heading05: `Heading5`,
    subheader05: `subheader`,
    body05: `body`,

    heading06: `Heading6`,
    subheader06: `subheader`,
    body06: `body`,
  };

  const bgColor = "darkBgPrimary.main";

  const sectionStyles = {
    minHeight: "80vh",
    clipPath: clipPathBottom3,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
    zIndex: 10,
    bgcolor: bgColor,

  };

  const containerStyles = {
    // pb: "6.25%",
  };

  const contentStyles = (direction) => {
    return {
      position: "relative",
      minHeight: 500,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      px: {xs: 0, md: "10% !important"},

      "&::before": {
        content: '""',
        display: {xs: "none", md: "block"},
        position: "absolute",
        bgcolor: bgColor,

        width: "5%",
        height: "100%",
        clipPath:
          direction === "right"
            ? `polygon(0 0, 0% 100%, 100% 50%)`
            : "polygon(0 45%, 100% 100%, 100% 0)",

        top: 0,
        right: direction === "right" ? "-5%" : null,
        left: direction === "left" ? "-4.91%" : null,
      },
    };
  };

  const imageStyles = {
    bgcolor: "blue",
  };

  const headingTypoStyles = {
    textAlign: "center",
    color: "info.dark",
    fontWeight: "bold",
    textTransform: "capitalize",
  };

  const subHeadingTypoStyles = {
    textAlign: "center",
    color: "info.light",
    fontWeight: "bold",
    textTransform: "capitalize",
  };

  const bodyStyles = {
    color: "darkBg.light",
  };

  const iconButtonBoxStyles = {
    position: "absolute",
    bottom: 1,
    left: "50%",
    transform: `translate(-50%, -0%)`,

    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
  };

  const arrowIconStyles = {
    // bgcolor: 'blue',
    color: "darkBg.light",
    transform: "rotate(90deg)",
    // position: "absolute",
    // bottom: 5,
    // left: "50%",
  };

  return (
    <Box component="section" sx={sectionStyles}>
      <Box sx={containerStyles}>
        <Grid container spacing={2}>

          
          <Grid item xs={12} md={6} sx={contentStyles("right")}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={headingTypoStyles}
            >
              {content.heading01}
            </Typography>

            <div>
              <Typography
                variant="h6"
                component="h3"
                gutterBottom
                sx={subHeadingTypoStyles}
              >
                {content.subheader01}
              </Typography>
            </div>

            <Typography sx={bodyStyles}>{content.body01}</Typography>

          </Grid>

          <Grid item xs={12} md={6} sx={imageStyles}>
            Image
          </Grid>

          <Grid item xs={12} md={6} sx={imageStyles}>
            Image
          </Grid>
          <Grid item xs={12} md={6} sx={contentStyles("left")}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={headingTypoStyles}
            >
              {content.heading02}
            </Typography>
            <div>
              <Typography
                variant="h6"
                component="h3"
                gutterBottom
                sx={subHeadingTypoStyles}
              >
                {content.subheader02}
              </Typography>
            </div>
            <Typography sx={bodyStyles}>{content.body02}</Typography>
          </Grid>

          <Grid item xs={12} md={6} sx={contentStyles("right")}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={headingTypoStyles}
            >
              {content.heading03}
            </Typography>
            <div>
              <Typography
                variant="h6"
                component="h3"
                gutterBottom
                sx={subHeadingTypoStyles}
              >
                {content.subheader03}
              </Typography>
            </div>
            <Typography sx={bodyStyles}>{content.body03}</Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={imageStyles}>
            Image
          </Grid>

          <Grid item xs={12} md={6} sx={imageStyles}>
            Image
          </Grid>
          <Grid item xs={12} md={6} sx={contentStyles("left")}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={headingTypoStyles}
            >
              {content.heading04}
              <div>
                <Typography
                  variant="h6"
                  component="h3"
                  gutterBottom
                  sx={subHeadingTypoStyles}
                >
                  {content.subheader04}
                </Typography>
              </div>
            </Typography>
            <Typography sx={bodyStyles}>{content.body04}</Typography>
          </Grid>

          <Grid item xs={12} md={6} sx={contentStyles("right")}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={headingTypoStyles}
            >
              {content.heading05}
            </Typography>
            <div>
              <Typography
                variant="h6"
                component="h3"
                gutterBottom
                sx={subHeadingTypoStyles}
              >
                {content.subheader05}
              </Typography>
            </div>
            <Typography sx={bodyStyles}>{content.body05}</Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={imageStyles}>
            Image
          </Grid>

          <Grid item xs={12} md={6} sx={imageStyles}>
            Image
          </Grid>
          <Grid item xs={12} md={6} sx={contentStyles("left")}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={headingTypoStyles}
            >
              {content.heading06}
            </Typography>
            <div>
              <Typography
                variant="h6"
                component="h3"
                gutterBottom
                sx={subHeadingTypoStyles}
              >
                {content.subheader06}
              </Typography>
            </div>
            <Typography sx={bodyStyles}>{content.body06}</Typography>
          </Grid>

        </Grid>

        <Box sx={iconButtonBoxStyles}>
          <IconButton sx={arrowIconStyles}>
            <DoubleArrow />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default NinthSection;
