import { DoubleArrow } from "@mui/icons-material";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import {
  clipPathBottom2,
  clipPathBottom3,
  clipPathBottom5,
  companyName,
} from "../public/Settings/BaseSettings";

function NinthSection() {
  const content = {
    heading01: `Want to grow your business?`,
    subheader01: `We make it quick and easy to get your website up, so you can focus on what you do best`,
    body01: `Get your web app done quickly and with a beautiful, modern design. You need a website that converts online leads to grow your client base. With our agency, that's exactly what we'll be able to do for you! Let us help you get more clients and spread good health practices worldwide!`,
    image01: `images/businessScale.jpg`,

    heading02: `We do all of the work for you so you can focus on what you love -- Fitness`,
    subheader02: `I'm right in the gym with you, so I know what your potential clients want.`,
    body02: `I will design a high-converting website to keep more paying clients and provide the best personal training to grow your business. Don't do all this work by yourself. I'll design a website that captures more leads, designs workouts for quicker results and offers personal training for better retention rates. It's all about your business success.`,
    image02: `images/gymEnjoyment.jpg`,

    heading03: `How to generate revenue, and set yourself apart from 80% of the competition with this simple trick!`,
    subheader03: `The more you give into the world, the more you receive.`,
    body03: `I know it sounds counterinteruitive, but this trick has been used by the upper echelon of society for centuries. The more value you bring into the world, the better it is for you, and we'll help you!`,
    image03: `images/happyHiking.jpg`,

    heading04: `We are selective in whom we work with.`,
    subheader04: `We believe the fastest way to success is by giving as much value as possible!`,
    body04: `If you feel you cannot afford our services, we may still be able to help you out! We'll help you bring in additional income.`,
    image04: `images/handshake.jpg`,

    heading05: `You deserve a better network. Join me and have access to a platform of entrepreneurs, and let us help you grow your business!`,
    subheader05: `All you need to do is set up a call with us and we'll tackle life's problems together!`,
    body05: `Want to learn what we can do for you? All you have to do is reach out, and we'll start a conversation at no cost to you. Let's get started!`,
    image05: `images/network.jpg`,

    heading06: `I believe in you. I know anything is possible and that you have the talent, connections, and drive to become whatever you want. Let's work together to find your path.`,
    subheader06: `Do you want to dominate the world but don't know where to start? I can help you make it happen. Let me help you avoid giving up on one of your most ambitious goals.`,
    body06: `I will help by crafting a high converting sales funnel page- that will lead your potential customers directly through to completing their purchase with no doubts or hesitation. I will create an aggressive digital marketing strategy- with a plan that we both agree on, so that no stone is left unturned when it comes to meeting objectives.`,
    image06: `images/boxing.jpg`,
  };

  const bgColor = "darkBgPrimary.main";

  const sectionStyles = {
    minHeight: "80vh",
    clipPath: clipPathBottom5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
    zIndex: 60,
    bgcolor: bgColor,
    px: { xs: 1, md: 0 },
  };

  const containerStyles = {
    // pb: "6.25%",
  };

  const gridContainerStyles = {
    display: "grid",
    gridTemplateColumns: { xs: "repeat(1, 1fr)", md: "repeat(2, 1fr)" },
    // gridTemplateRows: "repeat(4, 1fr)",
    gridTemplateAreas: {
      xs: ` "section01"
    "image01"
    "section02"
    "image02"
    "section03"
    "image03"
    "section04"
    "image04"
    "section05"
    "image05"
    "section06"
    "image06"`,
      md: `"section01 image01"
    "image02 section02"
    "section03 image03"
    "image04 section04"
    "section05 image05"
    "image06 section06"`,
    },
  };

  const contentStyles = (direction, area) => {
    return {
      gridArea: area,
      position: "relative",
      minHeight: 500,
      display: "flex",
      flexDirection: "column",
      textAlign: { xs: "center", md: "inherit" },
      alignItems: { xs: "center", md: "flex-start" },
      justifyContent: "center",
      px: { xs: 0, md: "10% !important" },

      "&::before": {
        content: '""',
        display: { xs: "none", md: "block" },
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

  const imageStyles = (area) => {
    return {
      gridArea: area,
      bgcolor: "blue",
      minHeight: 500,
    };
  };

  const headingTypoStyles = {
    // textAlign: "center",
    color: "info.dark",
    fontWeight: "bold",
    textTransform: "capitalize",
    maxWidth: "35ch",
  };

  const subHeadingTypoStyles = {
    textAlign: "center",
    color: "info.light",
    fontWeight: "bold",
    textTransform: "capitalize",
    maxWidth: "45ch",
  };

  const bodyStyles = {
    color: "darkBg.light",
    maxWidth: "65ch",
  };

  const imgStyles = {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    objectPosition: "center",
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
    color: "infoRev.dark",
    transform: "rotate(90deg)",
    // position: "absolute",
    // bottom: 5,
    // left: "50%",
  };

  // const gridItemContainerStyles = () => {
  //   return {
  //     direction: { md: "column" },
  //   };
  // };

  return (
    <Box component="section" sx={sectionStyles}>
      <Box sx={containerStyles}>
        <Grid container sx={gridContainerStyles}>
          <Grid item sx={contentStyles("right", "section01")}>
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
          <Grid item sx={imageStyles("image01")}>
            <Box
              component="img"
              src={content.image01}
              alt={content.heading01}
              sx={imgStyles}
            ></Box>
          </Grid>

          <Grid item sx={contentStyles("left", "section02")}>
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
          <Grid item sx={imageStyles("image02")}>
            <Box
              component="img"
              src={content.image02}
              alt={content.heading02}
              sx={imgStyles}
            ></Box>
          </Grid>

          <Grid item sx={contentStyles("right", "section03")}>
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
          <Grid item sx={imageStyles("image03")}>
            <Box
              component="img"
              src={content.image03}
              alt={content.heading03}
              sx={imgStyles}
            ></Box>
          </Grid>

          <Grid item sx={contentStyles("left", "section04")}>
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
          <Grid item sx={imageStyles("image04")}>
            <Box
              component="img"
              src={content.image04}
              alt={content.heading04}
              sx={imgStyles}
            ></Box>
          </Grid>

          <Grid item sx={contentStyles("right", "section05")}>
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
          <Grid item sx={imageStyles("image05")}>
            <Box
              component="img"
              src={content.image05}
              alt={content.heading05}
              sx={imgStyles}
            ></Box>
          </Grid>

          <Grid item sx={contentStyles("left", "section06")}>
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
          <Grid item sx={imageStyles("image06")}>
            <Box
              component="img"
              src={content.image06}
              alt={content.heading06}
              sx={imgStyles}
            ></Box>
          </Grid>
        </Grid>

        <Box sx={iconButtonBoxStyles}>
          <IconButton sx={arrowIconStyles} href="#Apply Content">
            <DoubleArrow />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default NinthSection;
