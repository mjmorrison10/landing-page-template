import { DoubleArrow } from "@mui/icons-material";
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Slide,
  Typography,
} from "@mui/material";
import React, { useCallback, useRef } from "react";
import {
  clipPathBottom2,
  clipPathBottom3,
  clipPathBottom5,
  companyName,
} from "../../public/Settings/BaseSettings";
import LazyLoad from "react-lazyload";
// import { useInView } from "react-intersection-observer";
import { InView } from "react-intersection-observer";

function NinthSection() {
  const content = {
    section01: {
      area: { section: "section01", image: "image01" },
      heading: `Professional Web Development`,
      subheader: `Specifically for Health and Fitness Coaches!`,
      body: `Your website is the first thing people see when they visit your business. You have seconds to make an impact, and you need to make sure that your website showcases your brand and converts visitors into clients.`,
      body1: `We help you create a website quickly and efficiently so that you can focus on growing your business. We'll help you get a landing page done with React, state-of-the-art technology for web development.`,
      body2: `And that's not all. With our quick websites, you'll get better SEO, decrease bounce off of potential clients, increase conversion rates, improve brand credibility, and be better for the environment all in one go!`,
      body3: `Our responsive design will look great on any screen, so your clients can access your smartphone. Most people visit websites on their phones, so having a responsive design is a priority—and we've got you covered there!`,
      body4: `We'll also work with you to create excellent call-to-action buttons and multiple layers of engagement to increase client retention.`,
      // heading: `Want to grow your business?`,
      // subheader: `We make it quick and easy to get your website up, so you can focus on what you do best`,
      // body: `Get your web app done quickly and with a beautiful, modern design. You need a website that converts online leads to grow your client base. With our agency, that's exactly what we'll be able to do for you! Let us help you get more clients and spread good health practices worldwide!`,
      image: `images/laptopBg2.jpg`,
    },

    section02: {
      area: { section: "section02", image: "image02" },
      heading: `Looking to take your fitness business to the next level?`,
      subheader: `${companyName.main} is here with a plan!`,
      body: `We have a plan to scale your fitness business, increase your revenue, and help as many people get the healthy lifestyle they deserve.`,
      body1: `We'll start by creating an irresistible lead magnet by giving potential clients free value through PDFs and videos and position you as an expert. Then we'll sell them on your meal and nutrition plan. Next, we'll get them excited about your innovative workout plans. Finally, we'll finish it off with a complete 1-on-1 coaching program and retain them monthly. This is how we scale your fitness business into 6+ figures.`,
      body2: `Our proven system has helped dozens of fitness professionals become 6-figure earners in less than 12 months. And now, it's time for us to help you do the same!`,
      body3: `We also know how hard it is to scale your business without a strong online presence. That's why we're here`,
      // heading: `We do all of the work for you so you can focus on what you love -- Fitness`,
      // subheader: `I'm right in the gym with you, so I know what your potential clients want.`,
      // body: `I will design a high-converting website to keep more paying clients and provide the best personal training to grow your business. Don't do all this work by yourself. I'll design a website that captures more leads, designs workouts for quicker results and offers personal training for better retention rates. It's all about your business success.`,
      image: `images/gymEnjoyment.jpg`,
    },
    section03: {
      area: { section: "section03", image: "image03" },
      heading: `We can make your dreams come true.`,
      subheader: `Want to spend more time with your family and friends? Explore the world? Help more clients?`,
      body: `We take care of the heavy lifting so you can focus on what really matters. No matter what obstacles get in your way, our network of highly successful individuals have already been through the struggles you'll be facing and knows exactly how to overcome each problem.`,
      body1: `We're problem-solvers. That's one of the main attributes of being a web developer: we have the skills to solve problems in the quickest time possible. We'll use that skillset to solve any potential problems down the road and discover ways to win against our competition.`,
      body2: `We're all about financial freedom—and we know that helping others achieve financial freedom is the best way for us to achieve it ourselves. The upper echelons of society do business where all parties involved benefit, and we can accomplish our goals together.`,
      body3: `So if you're ready for financial freedom, or just want to spend more time with your family—${companyName.full} can help!`,
      // heading: `How to generate revenue, and set yourself apart from 80% of the competition with this simple trick!`,
      // subheader: `The more you give into the world, the more you receive.`,
      // body: `I know it sounds counterinteruitive, but this trick has been used by the upper echelon of society for centuries. The more value you bring into the world, the better it is for you, and we'll help you!`,
      image: `images/happyHiking.jpg`,
    },
    section04: {
      area: { section: "section04", image: "image04" },
      heading: `Do you want to be rich, famous, and on top of the world?`,
      subheader: `You want to make six figures in your industry. We want to help you do that.`,
      body: `Do you want to be rich, famous, and on top of the world? We do too. That's why we're not going to sit around waiting for someone to hand us a gold-plated key to success. Instead, we're working our butts off and getting there ourselves!`,
      body1: `When it comes to life coaching or fitness coaching, we believe the quickest way to success is by giving as much value as possible in the 21st century. The principle is using free value as a lead magnet, attracting people to your brand, and scaling that into a huge business. And we can help you get there too.`,
      body2: `Our staff at ${companyName.full} are pretty selective with whom we work because we don't need hundreds of clients to scale into six figures—we need a handful of people who are willing to work hard and get there together. So if I'm sending you this offer, I see potential in you and our ability to scale together.`,
      body3: `It's a long road ahead of us, but eventually, we'll be on top of the world—and you can be with us!`,
      // heading: `We are selective in whom we work with.`,
      // subheader: `We believe the fastest way to success is by giving as much value as possible!`,
      // body: `If you feel you cannot afford our services, we may still be able to help you out! We'll help you bring in additional income.`,
      image: `images/businessHandShake2.jpg`,
    },
    section05: {
      area: { section: "section05", image: "image05" },
      heading: `Your network is your net worth`,
      subheader: `${companyName.main} is connected to a robust, highly successful network`,
      body: `Do you have an excellent idea for a business but don't know where to start? Do you need help with your current company?`,
      body1: `You're in the right place. We're part of a unique, robust network of highly successful individuals. We're learning the secrets to business by imploring the methods and techniques taught by people already making over 10k each month. Everybody in our network is making money one way or another, and by working with us, you'll benefit from our network indirectly.`,
      body2: `They say your network is your net worth. Do you personally know any millionaires? If not, then what are you waiting for? Hire us, and we can work together, along with our network, to be in the top 10% of businesses worldwide.`,
      // heading: `You deserve a better network. Join me and have access to a platform of entrepreneurs, and let us help you grow your business!`,
      // subheader: `All you need to do is set up a call with us and we'll tackle life's problems together!`,
      // body: `Want to learn what we can do for you? All you have to do is reach out, and we'll start a conversation at no cost to you. Let's get started!`,
      image: `images/network.jpg`,
    },
    section06: {
      area: { section: "section06", image: "image06" },
      heading: `I believe in you.`,
      subheader: `I know anything is possible and that you have the talent, connections, and drive to become whatever you want.`,
      body: `Let's work together to find your path.`,
      body1: `Do you want to dominate the world but don't know where to start? I can help you make it happen. Let me help you avoid giving up on one of your most ambitious goals.`,
      body2: `I will help by crafting a high converting sales funnel page- that will lead your potential customers directly through to completing their purchase with no doubts or hesitation. I will create an aggressive digital marketing strategy- with a plan that we both agree on, so that no stone is left unturned when it comes to meeting objectives.`,
      image: `images/boxing.jpg`,
    },
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
      xs: ` "${content.section01.area.section}"
    "${content.section01.area.image}"
    "${content.section02.area.section}"
    "${content.section02.area.image}"
    "${content.section03.area.section}"
    "${content.section03.area.image}"
    "${content.section04.area.section}"
    "${content.section04.area.image}"
    "${content.section05.area.section}"
    "${content.section05.area.image}"
    "${content.section06.area.section}"
    "${content.section06.area.image}"`,
      md: `"${content.section01.area.section} ${content.section01.area.image}"
    "${content.section02.area.image} ${content.section02.area.section}"
    "${content.section03.area.section} ${content.section03.area.image}"
    "${content.section04.area.image} ${content.section04.area.section}"
    "${content.section05.area.section} ${content.section05.area.image}"
    "${content.section06.area.image} ${content.section06.area.section}"`,
      //   md: `"${content.section01.area.section} ${content.section01.area.image}"
      // "${content.section02.area.image} ${content.section02.area.section}"
      // "${content.section03.area.section} ${content.section03.area.image}"
      // "${content.section04.area.image} ${content.section04.area.section}"
      // "${content.section05.area.section} ${content.section05.area.image}"
      // "${content.section06.area.image} ${content.section06.area.section}"`,
    },
  };

  const contentStyles = (direction, area) => {
    return {
      gridArea: area,
      position: "relative",
      minHeight: { xs: 200, md: 500 },
      display: "flex",
      flexDirection: "column",
      textAlign: { xs: "center", md: "inherit" },
      alignItems: { xs: "center", md: "flex-start" },
      justifyContent: "center",
      px: { xs: 0, md: "10% !important" },
      py: { xs: 2, md: "auto" },

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
      minHeight: { xs: 200, md: 500 },
      placeItems: "center",
    };
  };

  const headingGroupStyles = {
    display: "flex",
    flexDirection: "column",
    placeItems: "center",
  };

  const headingTypoStyles = {
    // textAlign: "center",
    color: "info.dark",
    fontWeight: "bold",
    textTransform: "capitalize",
    maxWidth: "35ch",
    textAlign: "center",
  };

  const subHeadingTypoStyles = {
    // textAlign: "center",
    color: "info.light",
    fontWeight: "bold",
    textTransform: "capitalize",
    maxWidth: "45ch",
    textAlign: "center",
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

  return (
    <Box component="section" sx={sectionStyles}>
      <Box sx={containerStyles}>
        <Grid container sx={gridContainerStyles}>
          {Object.entries(content).map(([key, value], i) => {
            if (key == "icons") return;
            return (
              <>
                <InView threshold={0.5}>
                  {({ inView, ref, entry }) => (
                    <Grid
                      ref={ref}
                      item
                      sx={contentStyles(
                        i % 2 ? "left" : "right",
                        value.area.section
                      )}
                    >
                      <Slide in={inView} direction={i % 2 ? "left" : "right"}>
                        <Box>
                          <Box sx={headingGroupStyles}>
                            <Typography
                              variant="h5"
                              component="h2"
                              gutterBottom
                              sx={headingTypoStyles}
                            >
                              {value.heading}
                            </Typography>
                            <Typography
                              variant="h6"
                              component="h3"
                              gutterBottom
                              sx={subHeadingTypoStyles}
                            >
                              {value.subheader}
                            </Typography>
                          </Box>

                          <Typography
                            gutterBottom={value.body1 ? true : false}
                            sx={bodyStyles}
                          >
                            {value.body}
                          </Typography>
                          {value.body1 && (
                            <Typography
                              gutterBottom={value.body2 ? true : false}
                              sx={bodyStyles}
                            >
                              {value.body1}
                            </Typography>
                          )}

                          {value.body2 && (
                            <Typography
                              gutterBottom={value.body3 ? true : false}
                              sx={bodyStyles}
                            >
                              {value.body2}
                            </Typography>
                          )}

                          {value.body3 && (
                            <Typography
                              gutterBottom={value.body4 ? true : false}
                              sx={bodyStyles}
                            >
                              {value.body3}
                            </Typography>
                          )}

                          {value.body4 && (
                            <Typography
                              gutterBottom={value.body5 ? true : false}
                              sx={bodyStyles}
                            >
                              {value.body4}
                            </Typography>
                          )}

                          {value.body5 && (
                            <Typography
                              gutterBottom={value.body6 ? true : false}
                              sx={bodyStyles}
                            >
                              {value.body5}
                            </Typography>
                          )}
                          
                        </Box>
                      </Slide>
                    </Grid>
                  )}
                </InView>

                <InView threshold={0.5}>
                  {({ inView, ref, entry }) => (
                    <Grid ref={ref} item sx={imageStyles(value.area.image)}>
                      <Slide in={inView} direction={i % 2 ? "left" : "right"}>
                        <Box
                          component="img"
                          src={value.image}
                          alt={value.heading}
                          sx={imgStyles}
                        ></Box>
                      </Slide>
                    </Grid>
                  )}
                </InView>
              </>
            );
          })}
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
