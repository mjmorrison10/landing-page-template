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
      // heading: `free yourself from your business`,
      heading: `Do you ever feel like you're doing everything in business?`,
      body: `Often, it feels like we're expected to do it all. And, let's be honest: there's a lot of that stuff in the fitness business.`,
      body1: `Fitness professionals work hard to keep their clients healthy and happy, but that can leave little energy left over for maintaining your own business running.`,
      body2: `And that's where we come in. At ${companyName.main}, we give you access to dozens of tools and strategies that will help you grow your business and make your health a priority while giving you time to focus on what matters most: helping others achieve their own fitness goals.`,
      // body: `We get it. It can be overwhelming to take on everything from operations to finance to marketing and more, especially when your true passion is helping others build their fitness and health potential. But how can you do that at the same time?`,
      // body1: `At ${companyName.full}, we can channel all of your efforts into building a thriving business that lets you stay focused on what matters most: your clients. We have a wide range of tools and strategies to make your life easier so you can free up brainpower for the things that matter most—your customers, your family, and your own health.`,
      // body: `It's easy to think you have to do everything in business, but ${companyName.full} has access to dozens of tools and strategies to help ease your workload and give you the freedom to focus on helping others achieve their fitness potential.`,
      image: `images/dinnerParty.jpg`,
    },

    section02: {
      area: { text: "section02text", image: "section02image" },
      heading: `Better Systems, Tools, and Network`,
      // body: `${companyName.main} has access to a unique network and each week members share the systems and tools that they used to accomplish their goals. With over 15k very powerful members, we know how to help your business thrive in an online marketplace.`,
      body: `${companyName.main} is powered by the belief that good businesses should have access to a network of experts who can help them thrive in an online marketplace. We've spent years cultivating a network of over 15k active members, each with their own unique set of experience and expertise. Every week, our members share the systems and tools they used to accomplish their goals. So we know how to leverage the expertise of our community to help your business succeed.`,
      body1: `We utilize state-of-the-art technologies such as React framework, which allows us to develop hyper-fast websites for you.`,
      image: `images/globalNetwork.jpg`,
    },

    section03: {
      area: { text: "section03text", image: "section03image" },
      heading: `High Converting Templates at Your Disposal`,
      body: `We provide A/B testing-proven landing page templates and tools. Focus on your passion, reach a wider audience, and convert those visitors into happy customers! Our templates have helped thousands of entrepreneurs worldwide take their first (or next) step towards digital marketing success. Let us help you reach the next level.`,
      // body: `Over thousands of A/B testing, and years worth of our best work, we have the best templates and tools for creating high converting websites and generate leads. Focus on your passion and allow us to take your digital marketing to the next level!`,
      image: `images/computerWithPurpleBg.jpg`,
    },

    section04: {
      area: { text: "section04text", image: "section04image" },
      heading: `Focus on fitness above all else`,
      body: ` Morrison DevOps offers one-stop online marketing solutions for personal trainers, gyms and fitness studios. Our unique service helps you do more — build stronger relationships with your local customers and build a stronger brand for yourself. We are here to ensure that your business thrives!`,
      // body: `We know that you love helping others achieve their full potential by coaching passionate individuals on their fitness journey. With ${companyName.main}, you can focus your attention on bringing value to your clients, while we handle your digital needs!`,
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

  const imageContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };

  const headingTypoStyles = {
    textAlign: "center",
    color: "info.main",
    fontWeight: "bold",
    textTransform: "capitalize",
  };

  const bodyStyles = {
    maxWidth: "65ch",
    textAlign: "center",
  };

  const imgStyles = {
    height: "100%",
    width: "100%",
    maxWidth: "65ch",
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
                    rowSpacing={5}
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
                        <Typography gutterBottom sx={bodyStyles}>
                          {value.body}
                        </Typography>

                        {value.body1 && (
                          <Typography variant="subtitle2" gutterBottom sx={bodyStyles}>
                            {value.body1}
                          </Typography>
                        )}
                        {value.body2 && (
                          <Typography gutterBottom sx={bodyStyles}>
                            {value.body2}
                          </Typography>
                        )}
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
