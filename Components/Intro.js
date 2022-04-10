import { Box } from "@mui/system";
import React from "react";
import { purple } from "@mui/material/colors";
import {
  Button,
  Container,
  Icon,
  IconButton,
  Input,
  Skeleton,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import { clipPathBottom, customColors } from "../public/Settings/BaseSettings";
import MorrisonDevOpsIcon from "./MorrisonDevOpsIcon";
import { DoubleArrow } from "@mui/icons-material";
import GetStartedBtn from "./GetStartedBtn";

// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& .MuiFilledInput-root": {
//       background: "rgb(232, 241, 250)"
//     }
//   }
// }));

const content = {
  intro: `We help personal trainers grow their wealth while dramatically increasing their business`,
  header: `RECURRING REVENUE + PROFITS`,
  freeAccess1: `get free access to our`,
  freeAccessSpan: `complimentary training program`,
  freeAccess2: `to help promote your business.`,
  // freeAccess: `get free access to our email newsletter designed to help promote your business.`,
  // freeAccess: `GET FREE ACCESS TO THE 5-80-5 MULTIPLIER TOOL & TRAINING.`,
  subFreeAccess: `Use this tool to increase the value of your business, reduce your expenses, and increase your lead flow.`,
  // subFreeAccess: `Use this tool to 5x the value of your business, reduce your expense by 80% or more and increase your lead flow by up to 500%.`,
};

const sectionStyles = {
  color: "darkBgPrimary.light",
  backgroundColor: "darkBg.main",
  clipPath: clipPathBottom,
  // pb: "6%",
  pt: 15,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  zIndex: 20,
  position: "relative",
};

const containerStyles = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  // gap: 10,
  mb: 10,
};

const freeAccessStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 3,
  mt: 10,
  width: "100%",
  // maxWidth: "85ch",
};

// Typography Styles
const introTypoStyles = {
  color: "infoRev.light",
  textTransform: "capitalize",
};
const headerTypoStyles = {
  color: "infoRev.main",
  fontWeight: "bold",
  letterSpacing: 5,
  textTransform: "uppercase",
};
const freeAccessTypoStyles = {
  color: "infoRev.main",
  textTransform: "uppercase",
};
const freeAccessSpanStyles = {
  color: "secondary.main",
};
const complimentaryTrainingSpanStyle = {
  color: "blue",
};
const subFreeAccessTypoStyles = {
  color: "infoRev.light",
};

const formStyles = {
  display: "flex",
  gap: 1,
};

const textFieldStyles = (props) => {
  return {
    // border: "blue",
    // backgroundColor: 'blue',
    // color: 'secondary',
    flex: props ? props : 1,
    "& .MuiFilledInput-root": {
      bgcolor: "darkBgPrimary.main",
    },
  };
};

const SkeletonComp = (
  <Box sx={{ width: "100%" }}>
    <Skeleton
      animation={"wave"}
      sx={{ bgcolor: "secondary.light", height: 3 }}
    />
  </Box>
);

const morrisonDevOpsIconStyles = {
  height: 250,
  width: 250,
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

function Intro() {
  return (
    <Box sx={sectionStyles}>
      <Container maxWidth="lg" sx={containerStyles}>
        <MorrisonDevOpsIcon
          color={customColors.icon.blue200}
          sx={morrisonDevOpsIconStyles}
        />
        <Box>
          <Typography variant="h2" component="h1" sx={introTypoStyles}>
            {content.intro}
          </Typography>
          <Typography variant="h3" component="h2" sx={headerTypoStyles}>
            {content.header}
          </Typography>
        </Box>

        {/* <GetStartedBtn /> */}
        <Box sx={freeAccessStyles}>
          {SkeletonComp}
          <Typography variant="body1" sx={freeAccessTypoStyles}>
            {content.freeAccess1}{" "}
            <Box component="span" sx={freeAccessSpanStyles}>
              {content.freeAccessSpan}
            </Box>{" "}
            {content.freeAccess2}
          </Typography>
          <Typography variant="body2" sx={subFreeAccessTypoStyles}>
            {content.subFreeAccess}
          </Typography>

          <GetStartedBtn />

          {/* <Box component={"form"} sx={formStyles}>
            <TextField
              sx={textFieldStyles()}
              color="info"
              variant="filled"
              type="text"
              label="First Name"
              id="First Name"
              name="First Name"
              placeholder="First Name (Optional)"
              required
            />
            <TextField
              sx={textFieldStyles()}
              color="info"
              variant="filled"
              type="text"
              label="Last Name"
              id="Last Name"
              name="Last Name"
              placeholder="Last Name (Optional)"
              // defaultValue="Last Name"
              required
            />
            <TextField
              sx={textFieldStyles(2)}
              color="info"
              variant="filled"
              type="email"
              label="Email Address"
              id="Email Address"
              name="Email Address"
              placeholder="Please input your email address"
              // defaultValue="Email Address"
              required
            />
            <Button variant="contained" color="darkBgPrimary" sx={{ flex: 1 }}>
              Submit
            </Button>
          </Box> */}

          {SkeletonComp}
        </Box>
      </Container>

      <Box sx={iconButtonBoxStyles}>
        <IconButton sx={arrowIconStyles}>
          <DoubleArrow color={"infoRev"} />
          {/* <MorrisonDevOpsIcon color="blue" sx={iconRootStyles} /> */}
        </IconButton>
      </Box>
    </Box>
  );
}

export default Intro;
