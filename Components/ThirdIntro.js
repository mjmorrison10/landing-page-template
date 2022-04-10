import { DoubleArrow } from "@mui/icons-material";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { clipPathBottom2, companyName } from "../public/Settings/BaseSettings";

function ThirdIntro() {
  const content = {
    heading01: `Landing Page or Sales Funnel Design and Development`,
    body01: `Tap into ${companyName.main}'s speciality for developing high converting landing pages in the Fitness Industry. We'll work hard to generate leads for your business by collecting their information to increase your email list. We know just what you need in order to market your coaching services or courses and attract higher-payingn clients! Give us the pleasure of helping your fitness business thrive!`,
    heading02: `Complete Website Development and Digital Marketing Package`,
    body02: `This is our premium, complete marketing service package! Our digital marketing strategy, along with our homepage and landing page development is perfect for any fitness professional who wants to focus entirely on their services! We'll write emails, market your business, and even add monthly updates to increase SEO and sales conversation rates.`,
    heading03: `Search Engine Optimization`,
    body03: `${companyName.main} uses state of the art tools to analyze your website and determine where and how your website can be improved upon! The higher you rank in searches, the more significant your sales conversion will be! We'll work every month to update your website with new up-to-date information.`,
    heading04: `Content Management Systems`,
    body04: `Trust your website in our hands, and we will develop a high converting website using WordPress (other CMS available). Easily set up your website in a day, while maintaining full control over how your website looks and additional upgrades. WordPress makes it easy to blog, and share your blog to other platforms. All without needing to contact your web master (${companyName.full}) `,
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
          <Grid item xs={6}>
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
          <Grid item xs={6}>
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
          <Grid item xs={6}>
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
          <Grid item xs={6}>
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

export default ThirdIntro;
