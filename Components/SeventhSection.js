import { DoubleArrow } from "@mui/icons-material";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { clipPathBottom2, companyName } from "../public/Settings/BaseSettings";

function SeventhSection() {
  const content = {
    heading01: `Build an Email List`,
    body01: `${companyName.full} has access to modern, state of the art tools to build your email list. Focus on bringing free value to your potential clients, and they'll return the favor! We'll create daily writings for your clients so you can focus on helping your paying clients.`,

    heading02: `Advertising and Marketing`,
    body02: `With our private network of powerful individuals, ${companyName.main} will help scale your business through our top of the line digital marketing strategies. Our network has access to millionaires who specialize in digital marketing, and will thrive to make your business succeed.`,

    heading03: `High Converting Websites`,
    body03: `Over thousands of testing and years of experience, we know exactly how to develop a high converting website that will last years to come. We'll continue improving your website each month so you can focus on your clients' needs and bringing value into the world.`,

    heading04: `Increase your value`,
    body04: `Using our proprietary copywriting strategies, we can turn your valuable fitness information and transform them into an excellent copy which attracts clients to subscribe to your newsletter and coaching services.`,
  };

  const sectionStyles = {
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
    zIndex: 18,
    bgcolor: "white",
  };

  const containerStyles = {
    pt: "8%",
  };

  const headingTypoStyles = {
    textAlign: "center",
    color: "info.main",
    fontWeight: "bold",
    textTransform: "capitalize",
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
        <Grid container spacing={2}>
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

export default SeventhSection;
