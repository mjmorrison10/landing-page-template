import { Box, Slide, Typography } from "@mui/material";
import React from "react";
import { companyName } from "../../public/Settings/BaseSettings";
import TestimonialsComp from "../testimonialsComp";
import { InView } from "react-intersection-observer";

function TwelvethSection() {
  const content = {
    header01: "What our clients are saying about",
    header02: `${companyName.full}`,
  };

  const sectionStyles = {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    flexDirection: "column",
    mt: 10,
  };

  const headerStyles = {};

  const spanStyles = {
    fontWeight: "bold",
    color: "info.dark",
  };

  return (
    <InView threshold={0.1} rootMargin={"-10%"}>
      {({ inView, ref, entry }) => (
        <Box ref={ref} sx={sectionStyles} id="My Work">
          <Slide in={inView} direction="right">
            <Typography variant="h2" component="h1" sx={headerStyles}>
              {content.header01}{" "}
              <Box sx={spanStyles} component="span">
                {content.header02}
              </Box>
            </Typography>
          </Slide>

          <TestimonialsComp />
        </Box>
      )}
    </InView>
  );
}

export default TwelvethSection;
