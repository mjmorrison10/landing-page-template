import { DoubleArrow } from "@mui/icons-material";
import { Box, Container, IconButton, Typography, Zoom } from "@mui/material";
import React from "react";
import {
  clipPathBottom,
  clipPathBottom2,
  clipPathBottom3,
  companyName,
} from "../../public/Settings/BaseSettings";
import { InView } from "react-intersection-observer";

function SecondaryIntro() {
  const content = {
    title1: `What can`,
    titleSpan: companyName.full,
    title2: `do for you?`,
    heading: `Generate leads, and develop a high-converting sales funnel page to retain clients.`,
    quote: `"I want more clients."`,
    image01: `images/conversation.jpg`,
  };

  const sectionStyles = {
    // bgcolor: "darkBg.secondary",

    backgroundImage: `url(${content.image01})`,
    backgroundPosition: "center",
    // backgroundPosition: { xs: "75% 50%", sm: "center" },
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    boxShadow: `inset 0 0 0 1000px hsla(180, 85%, 15%, 0.85)`,

    // minHeight: "75vh",
    mt: -17,
    pt: 25,
    // pt: "8%",
    clipPath: clipPathBottom2,

    zIndex: 19,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 10,
  };

  const containerStyles = {
    // pt: 8,
    // pb: 14,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    color: "darkBgSecondary.main",
    transition: "350ms all ease",
  };

  const titleStyles = {};
  const spanStyles = { color: "darkBgSecondary.comp.dark" };
  const headingStyles = {};
  const quoteStyles = {};

  const iconButtonBoxStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const arrowIconStyles = {
    transform: "rotate(90deg)",
  };

  return (
    <Box component="section" sx={sectionStyles} id="Services">
      <InView threshold={0.85}>
        {({ inView, ref, entry }) => (
          <Container ref={ref} sx={containerStyles}>
            <Zoom in={inView}>
              <div>
                <Typography component="h1" variant="h3" sx={titleStyles}>
                  {content.title1}{" "}
                  <Box component="span" sx={spanStyles}>
                    {content.titleSpan}
                  </Box>{" "}
                  {content.title2}
                </Typography>
                <Typography component="h2" variant="h2" sx={headingStyles}>
                  {content.heading}
                </Typography>
                <Typography component="div" variant="h3" sx={quoteStyles}>
                  {content.quote}
                </Typography>
              </div>
            </Zoom>
          </Container>
        )}
      </InView>

      <Box sx={iconButtonBoxStyles}>
        <IconButton sx={arrowIconStyles} href="#ServiceContent">
          <DoubleArrow color={"darkBgSecondary"} />
          {/* <MorrisonDevOpsIcon color="blue" sx={iconRootStyles} /> */}
        </IconButton>
      </Box>
    </Box>
  );
}

export default SecondaryIntro;
