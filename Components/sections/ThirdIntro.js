import { DoubleArrow } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
  Zoom,
} from "@mui/material";
import React from "react";
import {
  clipPathBottom2,
  clipPathBottom3,
  clipPathBottom4,
  companyName,
} from "../../public/Settings/BaseSettings";
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

function ThirdIntro({ view }) {
  const content = {
    one: {
      heading: `Landing Page or Sales Funnel Design and Development`,
      body: `Tap into ${companyName.main}'s specialty for developing high converting landing pages in the Fitness Industry. We'll work hard to generate leads for your business by writing sales pages to entice potential clients into signing up for your email list. We know what you need to market your coaching services or courses and attract higher-paying clients! Please give us the pleasure of helping your fitness business thrive!`,
      icon: <FirstIcon color="purple" sx={{ height: 100, width: 100 }} />,
    },

    two: {
      heading: `Complete Website Development and Digital Marketing Package`,
      body: `This offer is our premium, complete marketing service package! Our digital marketing strategy and our homepage and landing page development are perfect for any fitness professional who wants to focus entirely on their services! We'll write emails, market your business, and even add monthly updates to increase SEO and sales conversation rates.`,
      icon: <FitnessIcon02 color="purple" sx={{ height: 100, width: 100 }} />,
    },
    three: {
      heading: `Search Engine Optimization`,
      body: `${companyName.main} MorrisonDevOps uses state-of-the-art tools to analyze your website and determine where and how your website will improve! The higher you rank in searches, the more effective your sales conversion will be! We'll work every month to update your website with new up-to-date information.`,
      icon: <ThirdIcon color="purple" sx={{ height: 100, width: 100 }} />,
    },
    four: {
      heading: `Content Management Systems`,
      body: `Trust your website in our hands, and we will develop a high converting website using WordPress (other CMS available). Easily set up your website in a day while maintaining complete control over how your website looks and additional upgrades. WordPress makes it easy to blog and share your blog to other platforms without contacting your webmaster. (${companyName.full}) `,
      icon: <FourthIcon color="purple" sx={{ height: 100, width: 100 }} />,
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
    },
  };

  const sectionStyles = {
    // minHeight: "80vh",
    clipPath: clipPathBottom4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    position: "relative",
    zIndex: 18,
    gap: 10,
    pt: 10,
    bgcolor: "white",
  };

  const containerStyles = {
    // py: 10,
  };

  const headingTypoStyles = {
    color: "info.main",
    fontWeight: "bold",
    textTransform: "capitalize",
    display: "flex",
    alignItems: "center",
    gap: 1,
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
    <Box component="section" sx={sectionStyles} id="ServiceContent">
      <Container sx={containerStyles}>
        <Grid container spacing={2}>
          {Object.entries(content).map(([key, value], i) => {
            // console.log(key, "-->", value.heading);
            if (key == "icons") return;
            return (
              <Zoom in={view} key={key} style={{ transitionDelay: `${i * 500}ms` }}>
                <Grid item xs={12} md={6}>
                  <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    sx={headingTypoStyles}
                  >
                    {value.icon}
                    {value.heading}
                  </Typography>
                  <Typography>{value.body}</Typography>
                </Grid>
              </Zoom>
            );
          })}
        </Grid>
      </Container>

      <Box sx={iconButtonBoxStyles}>
        <IconButton sx={arrowIconStyles} href="#Systems">
          <DoubleArrow color={"info"} />
          {/* <MorrisonDevOpsIcon color="blue" sx={iconRootStyles} /> */}
        </IconButton>
      </Box>
    </Box>
  );
}

export default ThirdIntro;