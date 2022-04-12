import { DoubleArrow } from "@mui/icons-material";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { clipPathBottom2, companyName } from "../public/Settings/BaseSettings";

function FifthSection() {
  const content = {
    heading01: `free yourself from your business`,
    body01: `It's easy to think you have to do everything in business, but ${companyName.full} has access to dozens of tools and strategies to help ease your workload and give you the freedom to focus on helping others achieve their fitness potential.`,
    image01: ``,

    heading02: `Better Systems, Tools, and Network`,
    body02: `${companyName.main} has access to a unique network and each week members share the systems and tools that they used to accomplish their goals. With over 15k very powerful members, we know how to help your business thrive in an online marketplace.`,
    image02: ``,

    heading03: `High Converting Templates at Your Disposal`,
    body03: `Over thousands of A/B testing, and years worth of our best work, we have the best templates and tools for creating high converting websites and generate leads. Focus on your passion and allow us to take your digital marketing to the next level!`,
    image03: ``,

    heading04: `Focus on fitness above all else`,
    body04: `We know that you love helping others achieve their full potential by coaching passionate individuals on their fitness journey. With ${companyName.main}, you can focus your attention on bringing value to your clients, while we handle your digital needs!`,
    image04: ``,

    // heading05: ``,
    // body05: ``,
    // image05: ``,
  };

  const sectionStyles = {
    minHeight: "80vh",
    clipPath: clipPathBottom2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
    zIndex: 18,
    bgcolor: "white",
  };

  const containerStyles = {
    py: "8%",
  };

  const headingTypoStyles = {
    textAlign: "center",
    color: "info.main",
    fontWeight: "bold",
    textTransform: 'capitalize',
  };

  const imageStyles = {
    bgcolor: "blue",
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const iconButtonBoxStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const arrowIconStyles = {
    // bgcolor: 'blue',
    transform: "rotate(90deg)",
    // position: "absolute",
    // bottom: 5,
    // left: "50%",
  };

  return (
    <Box component="section" sx={sectionStyles}>
      <Container sx={containerStyles}>
        <Grid container spacing={2} columnSpacing={10}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={headingTypoStyles}
            >
              {content.heading01}
            </Typography>
            <Typography>{content.body01}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={imageStyles}>image</Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={imageStyles}>image</Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={headingTypoStyles}
            >
              {content.heading02}
            </Typography>
            <Typography>{content.body02}</Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={headingTypoStyles}
            >
              {content.heading03}
            </Typography>
            <Typography>{content.body03}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={imageStyles}>image</Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={imageStyles}>image</Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={headingTypoStyles}
            >
              {content.heading04}
            </Typography>
            <Typography>{content.body04}</Typography>
          </Grid>
        </Grid>

        {/* <Typography sx={headingTypoStyles}>{content.heading01}</Typography>
          <Typography>{content.body01}</Typography>
          <Typography sx={headingTypoStyles}>{content.heading02}</Typography>
          <Typography>{content.body02}</Typography>
          <Typography sx={headingTypoStyles}>{content.heading03}</Typography>
          <Typography>{content.body03}</Typography>
          <Typography sx={headingTypoStyles}>{content.heading04}</Typography>
          <Typography>{content.body04}</Typography> */}
      </Container>

      <Box sx={iconButtonBoxStyles}>
        <IconButton sx={arrowIconStyles}>
          <DoubleArrow color={"info"} />
          {/* <MorrisonDevOpsIcon color="blue" sx={iconRootStyles} /> */}
        </IconButton>
      </Box>
    </Box>
  );
}

export default FifthSection;
