import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";

// App Bar With Responsive Menu
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import MorrisonDevOpsIcon from "./icons/MorrisonDevOpsIcon";
import { customColors } from "../public/Settings/BaseSettings";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import Link from "next/link";

// Hide App Bar on Scroll
function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

// App Bar With Responsive Menu

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const content = {
  logoImg: `/images/logo.png`,
  businessName: `Morrison DevOps`,
  businessOwner: `Michael Morrison`,
  logo: `logo`,
  pages: [
    "Get Started",
    "Services",
    "Systems",
    "Blog",
    "Digital Marketing",
    "Six Reasons",
    "Apply",
    // "My Work",
  ],
};

const appBarStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "darkBg.main",
};

const appBarCompStyles = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "blue",
};

const appBarCompToolbarStyles = {
  display: "flex",
  justifyContent: "space-between",
};

const menuItemStyles = {
  width: "100vw",
  backgroundColor: "darkBg.opacity90",
  color: "infoRev.light",
};

export default function Header(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dialogContentStyles = {
    display: "flex",
    gap: 1,
    flexDirection: "column",
    bgcolor: "darkBg.light",
  };

  const AppBarComp = () => {
    return (
      <Box
        color="infoRev.dark"
        sx={{
          width: "100%",
        }}
        // sx={appBarCompStyles}
      >
        <Toolbar disableGutters sx={appBarCompToolbarStyles}>
          {/* Business Name | Left Side */}
          {/* <Typography
            variant="h6"
            // noWrap
            component="div"
            sx={{ display: { xs: "none", md: "flex" }, flex: 1 }}
          >
            {content.businessName}
          </Typography> */}

          {/* Responsive Design */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              color="infoRev"
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleClickOpen}
            >
              <MenuIcon />
            </IconButton>

            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="Navigation Menu"
            >
              <DialogContent sx={dialogContentStyles}>
                {content.pages.map((page) => (
                  <Button
                    key={page}
                    color="darkBg"
                    variant="contained"
                    href={
                      page === "Blog"
                        ? "https://mjmorrison10.wordpress.com"
                        : `#${page}`
                    }
                    onClick={handleClose}
                  >
                    {page}
                  </Button>
                ))}
              </DialogContent>
            </Dialog>
          </Box>

          {/* Business Name | Responsive Design */}
          <Typography
            variant="h6"
            // noWrap
            component="div"
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            {content.businessName}
          </Typography>

          {/* Menu Items With Logo in Middle */}
          <Box
            sx={{
              // flexGrow: 1,
              display: { xs: "none", md: "flex" },
              // alignItems: "center",
              // justifyContent: "center",
              // gap: 0.5,
              // width: '100%',
              flex: 4,
            }}
          >
            {/* Left Menu Items */}
            <Box
              sx={{
                display: "flex",
                flex: 1,
                justifyContent: "flex-end",
                gap: 1,
                mr: 1,
              }}
            >
              {content.pages.map(
                (page, i) =>
                  i < content.pages.length / 2 && (
                    <Button
                      color="infoRev"
                      variant="outlined"
                      key={page}
                      size={"small"}
                      href={
                        page === "Blog"
                          ? "https://mjmorrison10.wordpress.com"
                          : `#${page}`
                      }
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, display: "block" }}
                    >
                      {page}
                    </Button>
                  )
              )}
            </Box>

            {/* Logo Image */}
            <Link href="https://mjmorrison.netlify.app/">
              <Box
                sx={{
                  height: 75,
                  width: 75,
                  borderRadius: "50%",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <MorrisonDevOpsIcon
                  sx={{ height: 75, width: 75 }}
                  color={customColors.icon.blue100}
                />
                {/* <Box
                component={"img"}
                src={content.logoImg}
                sx={{
                  height: "105%",
                  width: "105%",
                  objectPosition: "center",
                  objectFit: "contain",
                }}
              /> */}
              </Box>
            </Link>

            {/* Right Menu Items */}
            <Box
              sx={{
                display: "flex",
                flex: 1,
                justifyContent: "flex-start",
                gap: 1,
                ml: 1,
              }}
            >
              {content.pages.map(
                (page, i) =>
                  i >= content.pages.length / 2 && (
                    <Button
                      color="infoRev"
                      variant="outlined"
                      key={page}
                      href={
                        page === "Blog"
                          ? "https://mjmorrison10.wordpress.com"
                          : `#${page}`
                      }
                      onClick={handleCloseNavMenu}
                      size={"small"}
                      sx={{
                        my: 2,
                        display: "block",
                      }}
                    >
                      {page}
                    </Button>
                  )
              )}
            </Box>
          </Box>

          {/* Business Owner | Right Side */}
          {/* <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            <Typography>{content.businessOwner}</Typography>
          </Box> */}
        </Toolbar>
      </Box>
    );
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={appBarStyles}>
          <Container maxWidth="xl">
            <Toolbar sx={appBarCompToolbarStyles}>
              <AppBarComp />
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
