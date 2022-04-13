import { DoubleArrow } from "@mui/icons-material";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import {
  clipPathBottom,
  clipPathBottom2,
  clipPathBottom3,
  companyName,
} from "../public/Settings/BaseSettings";
import GetStartedBtn from "./GetStartedBtn";
import SkeletonComp from "./SkeletonComp";

function EleventhSection() {
  const content = {
    header01a: `imagine, instantly feeling like you can focus on improving your client's life`,
    header02a: `That's where ${companyName.main} comes in`,
    header03a: `We know exactly how to attract fitness clients!!`,
    btn01a: `Let's work together`,
    image01: `images/businessPeople.jpg`,

    header01b: `I care about your success! We will work together and dominate the world!`,
    header02b: `Give us a try for free.`,
    header03b: `We'll work directly with you to retain a client. If successful, all we ask is a testimonial!`,
    btn01b: `Join the experience`,
    image02: `images/businessHandShake.jpg`,

    header01c: `Apply today`,
    header02c: `Fill out the form below to figure out if we're a good fit!`,
    btn02c: `Start application`,
    image03: `images/cloudSkies.jpg`,
  };

  const sectionStyles = {
    display: "flex",
    // alignItems: "center",
    justifyContent: "center",
    minHeight: "50vh",

    color: "darkBgPrimary.light",
    backgroundColor: "darkBg.main",
    position: "relative",
    zIndex: 9,

    bgcolor: "purple",
    mt: -10,
    pb: 8,
    // pt: 15,

    clipPath: clipPathBottom,
  };

  const topSectionStyles = {
    color: "darkBgPrimary.light",
    display: "flex",
    width: "100%",
    clipPath: clipPathBottom,
  };

  let firstBoxStyles = {
    minHeight: "50vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 1,
    textAlign: "center",
    backgroundImage: `url(${content.image01})`,
    backgroundPosition: "1% 1%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    boxShadow: `inset 0 0 0 1000px rgba(0,0,0,.5)`,
    py: 1,
  };

  let secondBoxStyles = {
    minHeight: "50vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 1,
    textAlign: "center",
    backgroundImage: `url(${content.image02})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    boxShadow: `inset 0 0 0 1000px rgba(0,0,0,.6)`,
    py: 1,
  };
  let thirdBoxStyles = {
    minHeight: "60vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 2,
    textAlign: "center",
    backgroundImage: `url(${content.image03})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    py: 1,
    pb: 5,
  };

  const header01 = {
    maxWidth: "35ch",
    textTransform: "capitalize",
  };
  const header02 = {
    textTransform: "uppercase",
  };
  const header03 = {};
  const btn01 = {
    width: "80%",
    fontWeight: 900,
    letterSpacing: 2,
  };
  const btn02 = {};

  const skeletonBoxStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 1,
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
    // <Box sx={sectionStyles}>
    // {/* <Box sx={containerStyles}> */}
    <Grid container sx={topSectionStyles} id="Apply Content">
      <Grid item xs={12} md={6} sx={firstBoxStyles}>
        <Typography variant="h4" component="h2" sx={header01}>
          {content.header01a}
        </Typography>

        <Box {...skeletonBoxStyles}>
          <SkeletonComp height={6} width="80%" />
          <Typography variant="h4" component="h3" sx={header02}>
            {content.header02a}
          </Typography>
          <SkeletonComp height={6} width="80%" />
        </Box>

        <Typography variant="h6" component="p" sx={header03}>
          {content.header03a}
        </Typography>
        <GetStartedBtn label={content.btn01a} sx={btn01} />
      </Grid>

      <Grid item xs={12} md={6} sx={secondBoxStyles}>
        <Box {...skeletonBoxStyles}>
          <SkeletonComp height={8} width="80%" />
          <Typography variant="h4" component="h2" sx={header01}>
            {content.header01b}
          </Typography>
          <SkeletonComp height={8} width="80%" />
        </Box>

        <Typography variant="h4" component="h3" sx={header02}>
          {content.header02b}
        </Typography>
        <Typography variant="h6" component="p" sx={header03}>
          {content.header03b}
        </Typography>
        <GetStartedBtn label={content.btn01b} sx={btn01} />
      </Grid>

      <Grid item xs={12} sx={thirdBoxStyles} id="Apply">
        <Typography variant="h2" component="h2" sx={header01}>
          {content.header01c}
        </Typography>
        <Typography variant="h3" component="h3" sx={header03}>
          {content.header02c}
        </Typography>
        <GetStartedBtn label={content.btn01c} sx={btn02} />
      </Grid>
    </Grid>
    // {/* </Box> */}

    // {/* <Box sx={iconButtonBoxStyles}>
    //   <IconButton sx={arrowIconStyles}>
    //     <DoubleArrow />
    //   </IconButton>
    // </Box> */}
    // </Box>
  );
}

export default EleventhSection;
