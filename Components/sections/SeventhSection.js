import { DoubleArrow } from "@mui/icons-material";
import {
  Box,
  Container,
  Fade,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import {
  clipPathBottom2,
  companyName,
} from "../../public/Settings/BaseSettings";
import { InView } from "react-intersection-observer";
import FirstIcon from "../icons/FirstIcon";
import SecondIcon from "../icons/SecondIcon";
import ThirdIcon from "../icons/ThirdIcon";
import FourthIcon from "../icons/FourthIcon";
import FifthIcon from "../icons/FifthIcon";
import SixthIcon from "../icons/SixthIcon";
import SeventhIcon from "../icons/SeventhIcon";
import EighthIcon from "../icons/EighthIcon";
import NinthIcon from "../icons/NinthIcon";
import TenthIcon from "../icons/TenthIcon";
import FitnessIcon01 from "../icons/FitnessIcon01";
import FitnessIcon02 from "../icons/FitnessIcon02";
import FitnessIcon03 from "../icons/FitnessIcon03";

function SeventhSection() {
  const content = {
    section01: {
      heading: `Build an Email List`,
      body: `If your list is already growing, it's time to take things up a notch. Morrison Development Operations has the tools—and the talent—to build the email list of your dreams.`,
      body1: `We'll create high-converting copies for your emails to send out every single day, focusing on bringing free value to your potential clients, and they'll return the favor by signing up for your 1-on-1 coaching program!`,
      // body: `${companyName.full} has access to modern, state of the art tools to build your email list. Focus on bringing free value to your potential clients, and they'll return the favor! We'll create daily writings for your clients so you can focus on helping your paying clients.`,
      icon: <FifthIcon color="purple" sx={{ height: 100, width: 100 }} />,
    },

    section02: {
      heading: `Advertising and Marketing`,
      // body: `With our private network of powerful individuals, ${companyName.main} will help scale your business through our top of the line digital marketing strategies. Our network has access to millionaires who specialize in digital marketing, and will thrive to make your business succeed.`,
      body: `Morrison DevOps will help scale your business through our top-of-the-line digital marketing strategies with our private network of influential individuals. Our network has access to millionaires specializing in digital marketing and has helped thousands of businesses scale into 6, 7, 8, or even 9-figure businesses. Leverage our network, and discover how we can help advertise your business.`,
      icon: <FitnessIcon01 color="purple" sx={{ height: 100, width: 100 }} />,
    },

    section03: {
      heading: `High Converting Landing Page`,
      body: `When you invest in a landing page website from us, you'll immediately get 5 consulting sessions with a professional who will work closely with you to understand what your business is about, the goals you have and create a strategy for boosting sales. We take all of the worry about your online marketing so you can focus on what matters most, your clients. With us, we'll handle all technical aspects of your site and help bring all of your dreams to reality.`,
      // body: `Over thousands of testing and years of experience, we know exactly how to develop a high converting website that will last years to come. We'll continue improving your website each month so you can focus on your clients' needs and bringing value into the world.`,
      icon: <FitnessIcon03 color="purple" sx={{ height: 100, width: 100 }} />,
    },

    section04: {
      heading: `Transform your information into attractive copies`,
      body: `Have you created outstanding fitness articles and health reports that you want to publish in a newsletter? Then it is time that your fitness information be transformed into an excellent copy that attracts your valuable audience. Our copywriting strategies are specifically designed to help you capture your audience's attention and drive sales conversions.`,
      // body: `Using our proprietary copywriting strategies, we can turn your valuable fitness information and transform them into an excellent copy which attracts clients to subscribe to your newsletter and coaching services.`,
      icon: <TenthIcon color="purple" sx={{ height: 100, width: 100 }} />,
    },

    icons: {
      icon01: <FirstIcon color="purple" sx={{ height: 100, width: 100 }} />,
      icon02: <SecondIcon color="purple" sx={{ height: 100, width: 100 }} />,
      icon03: <ThirdIcon color="purple" sx={{ height: 100, width: 100 }} />,
      icon04: <FourthIcon color="purple" sx={{ height: 100, width: 100 }} />,
      icon05: <FifthIcon color="purple" sx={{ height: 100, width: 100 }} />,
      icon06: <SixthIcon color="purple" sx={{ height: 100, width: 100 }} />,
      icon07: <SeventhIcon color="purple" sx={{ height: 100, width: 100 }} />,
      icon08: <EighthIcon color="purple" sx={{ height: 100, width: 100 }} />,
      icon09: <NinthIcon color="purple" sx={{ height: 100, width: 100 }} />,
      icon10: <TenthIcon color="purple" sx={{ height: 100, width: 100 }} />,
      fitness01: (
        <FitnessIcon01 color="purple" sx={{ height: 100, width: 100 }} />
      ),
      fitness02: (
        <FitnessIcon02 color="purple" sx={{ height: 100, width: 100 }} />
      ),
      fitness03: (
        <FitnessIcon03 color="purple" sx={{ height: 100, width: 100 }} />
      ),
    },
  };

  const sectionStyles = {
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 10,
    position: "relative",
    zIndex: 18,
    bgcolor: "white",
  };

  const containerStyles = {
    pt: "8%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  };

  const headingTypoStyles = {
    textAlign: "center",
    color: "info.main",
    fontWeight: "bold",
    textTransform: "capitalize",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
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
    <Box component="section" sx={sectionStyles} id="Digital Marketing Content">
      <Container sx={containerStyles}>
        <Grid container spacing={2}>
        
          {Object.entries(content).map(([key, value], i) => {
            if (key == "icons") return;

            console.log(key, "-->", value.heading);

            return (
              <InView rootMargin="-20%" threshold={0.2}>
                {({ inView, ref, entry }) => (
                  <Fade in={inView} timeout={i % 2 ? 1000 : 0}>
                    <Grid ref={ref} item xs={12} md={6}>
                      <Typography
                        variant="h5"
                        component="h2"
                        gutterBottom
                        sx={headingTypoStyles}
                      >
                        {value.icon}
                        {value.heading}
                      </Typography>
                      <Typography gutterBottom={value.body1 ? true : false}>
                        {value.body}
                      </Typography>
                      {value.body1 && <Typography>{value.body1}</Typography>}
                    </Grid>
                  </Fade>
                )}
              </InView>
            );
          })}

          {/* <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={headingTypoStyles}
            >
              {content.fitness01}

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
              {content.fitness03}
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
              {content.icon10}
              {content.heading04}
            </Typography>
            <Typography>{content.body04}</Typography>
          </Grid> */}
        </Grid>
      </Container>

      <Box sx={iconButtonBoxStyles}>
        <IconButton sx={arrowIconStyles} href="#Six Motivations">
          <DoubleArrow color={"info"} />
          {/* <MorrisonDevOpsIcon color="blue" sx={iconRootStyles} /> */}
        </IconButton>
      </Box>
    </Box>
  );
}

export default SeventhSection;
