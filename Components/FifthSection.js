import { DoubleArrow } from "@mui/icons-material";
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import {
  clipPathBottom2,
  clipPathBottom3,
  clipPathBottom4,
  clipPathBottom4a,
  companyName,
} from "../public/Settings/BaseSettings";
import LazyLoad from "react-lazyload";

function FifthSection() {
  const content = {
    heading01: `free yourself from your business`,
    body01: `It's easy to think you have to do everything in business, but ${companyName.full} has access to dozens of tools and strategies to help ease your workload and give you the freedom to focus on helping others achieve their fitness potential.`,
    image01: `images/dinnerParty.jpg`,

    heading02: `Better Systems, Tools, and Network`,
    body02: `${companyName.main} has access to a unique network and each week members share the systems and tools that they used to accomplish their goals. With over 15k very powerful members, we know how to help your business thrive in an online marketplace.`,
    image02: `images/globalNetwork.jpg`,

    heading03: `High Converting Templates at Your Disposal`,
    body03: `Over thousands of A/B testing, and years worth of our best work, we have the best templates and tools for creating high converting websites and generate leads. Focus on your passion and allow us to take your digital marketing to the next level!`,
    image03: `images/computerWithPurpleBg.jpg`,

    heading04: `Focus on fitness above all else`,
    body04: `We know that you love helping others achieve their full potential by coaching passionate individuals on their fitness journey. With ${companyName.main}, you can focus your attention on bringing value to your clients, while we handle your digital needs!`,
    image04: `images/personalTrainer.jpg`,

    // heading05: ``,
    // body05: ``,
    // image05: ``,
  };

  const sectionStyles = {
    clipPath: clipPathBottom4a,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    position: "relative",
    zIndex: 18,
    bgcolor: "white",
    gap: 10,
    mb: -20,
  };

  const containerStyles = {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    py: { xs: 20, md: 10 },
  };

  const headingTypoStyles = {
    textAlign: "center",
    color: "info.main",
    fontWeight: "bold",
    textTransform: "capitalize",
  };

  const contentContainerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const imageContainerStyles = {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 250,
  };

  const imgStyles = {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    objectPosition: "center",
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
    <Box component="section" sx={sectionStyles} id="SystemsContent">
      <Container sx={containerStyles}>
        <Grid container spacing={2} columnSpacing={10}>
          <Grid item xs={12} md={6} sx={contentContainerStyles}>
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
            <Box sx={imageContainerStyles}>
              <LazyLoad
                height={"100%"}
                offset={-200}
                once={true}
                placeholder={<CircularProgress />}
              >
                <Box
                  component="img"
                  src={content.image01}
                  alt={content.heading01}
                  sx={imgStyles}
                ></Box>
              </LazyLoad>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={imageContainerStyles}>
              <LazyLoad
                height={"100%"}
                offset={-200}
                once={true}
                placeholder={<CircularProgress />}
              >
                <Box
                  component="img"
                  src={content.image02}
                  alt={content.heading02}
                  sx={imgStyles}
                ></Box>
              </LazyLoad>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={contentContainerStyles}>
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

          <Grid item xs={12} md={6} sx={contentContainerStyles}>
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
            <Box sx={imageContainerStyles}>
              <LazyLoad
                height={"100%"}
                offset={-200}
                once={true}
                placeholder={<CircularProgress />}
              >
                <Box
                  component="img"
                  src={content.image03}
                  alt={content.heading03}
                  sx={imgStyles}
                ></Box>
              </LazyLoad>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={imageContainerStyles}>
              <LazyLoad
                height={"100%"}
                offset={-200}
                once={true}
                placeholder={<CircularProgress />}
              >
                <Box
                  component="img"
                  src={content.image04}
                  alt={content.heading04}
                  sx={imgStyles}
                ></Box>
              </LazyLoad>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={contentContainerStyles}>
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
        <IconButton sx={arrowIconStyles} href="#Digital Marketing">
          <DoubleArrow color={"info"} />
          {/* <MorrisonDevOpsIcon color="blue" sx={iconRootStyles} /> */}
        </IconButton>
      </Box>
    </Box>
  );
}

export default FifthSection;
