import { DoubleArrow } from "@mui/icons-material";
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Grow,
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
} from "../../public/Settings/BaseSettings";
import { InView } from "react-intersection-observer";

function FifthSection() {
  const content = {
    section01: {
      area: { text: "section01text", image: "section01image" },
      heading: `free yourself from your business`,
      body: `It's easy to think you have to do everything in business, but ${companyName.full} has access to dozens of tools and strategies to help ease your workload and give you the freedom to focus on helping others achieve their fitness potential.`,
      image: `images/dinnerParty.jpg`,
    },

    section02: {
      area: { text: "section02text", image: "section02image" },
      heading: `Better Systems, Tools, and Network`,
      body: `${companyName.main} has access to a unique network and each week members share the systems and tools that they used to accomplish their goals. With over 15k very powerful members, we know how to help your business thrive in an online marketplace.`,
      image: `images/globalNetwork.jpg`,
    },

    section03: {
      area: { text: "section03text", image: "section03image" },
      heading: `High Converting Templates at Your Disposal`,
      body: `Over thousands of A/B testing, and years worth of our best work, we have the best templates and tools for creating high converting websites and generate leads. Focus on your passion and allow us to take your digital marketing to the next level!`,
      image: `images/computerWithPurpleBg.jpg`,
    },

    section04: {
      area: { text: "section04text", image: "section04image" },
      heading: `Focus on fitness above all else`,
      body: `We know that you love helping others achieve their full potential by coaching passionate individuals on their fitness journey. With ${companyName.main}, you can focus your attention on bringing value to your clients, while we handle your digital needs!`,
      image: `images/personalTrainer.jpg`,
    },

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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    py: { xs: 20, md: 10 },
  };

  const gridContainerStyles = (i) => {
    return {
      mb: 5,
      // display: "grid",
      // gridTemplateColumns: "1fr 1fr",
      // gridTemplateRows: "1fr",
      // gap: `0px 5%`,
      gridTemplateAreas: "image text",
    };
  };

  const contentContainerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    px: 1,
  };

  const imageContainerStyles = {};

  const headingTypoStyles = {
    textAlign: "center",
    color: "info.main",
    fontWeight: "bold",
    textTransform: "capitalize",
  };

  const imgStyles = {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: 2,
    boxShadow: "0px 0px 10px 4px hsl(180deg 85% 15% / 75%)",
  };

  const iconButtonBoxStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const arrowIconStyles = {
    transform: "rotate(90deg)",
  };

  return (
    <Box component="section" sx={sectionStyles} id="SystemsContent">
      <Container sx={containerStyles}>
        {/* <Grid container spacing={2} columnSpacing={10}> */}
        {Object.entries(content).map(([key, value], i) => {
          console.log(key, "-->", value.heading);
          const text = value.area.text;
          const image = value.area.image;

          if (key == "icons") return;
          return (
            <InView rootMargin="-15%" threshold={0.15}>
              {({ inView, ref, entry }) => (
                <div ref={ref} key={i}>
                  <Grid
                    container
                    direction={i % 2 == 0 ? "row" : "row-reverse"}
                    columnSpacing={10}
                    sx={gridContainerStyles(i)}
                  >
                    <Grow in={inView} style={{ transformOrigin: "0 0 0" }}>
                      <Grid item xs={12} md={6} sx={contentContainerStyles}>
                        <Typography
                          variant="h5"
                          component="h2"
                          gutterBottom
                          sx={headingTypoStyles}
                        >
                          {value.heading}
                        </Typography>
                        <Typography>{value.body}</Typography>
                      </Grid>
                    </Grow>

                    <Grow
                      in={inView}
                      style={{ transformOrigin: "0 0 0" }}
                      timeout={1000}
                    >
                      <Grid item xs={12} md={6} sx={imageContainerStyles}>
                        <Box
                          component="img"
                          src={value.image}
                          alt={value.heading}
                          sx={imgStyles}
                        ></Box>
                      </Grid>
                    </Grow>
                  </Grid>
                </div>
              )}
            </InView>
          );
        })}

        {/* <Grid item xs={12} md={6}>
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
          </Grid> */}
        {/* </Grid> */}

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
