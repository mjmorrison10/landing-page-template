import { Box, Button, Container } from "@mui/material";
import React from "react";
import SignUp from "./EmailForm/signUp";
import NewsletterForm from "./NewsletterForm";
import { NewsletterSubscribe } from "./NewsletterSubscribe";

function Footer() {
  const footerStyles = {
    minHeight: 300,
    py: 5,
    bgcolor: "darkBg.main",
    color: "darkBgPrimary.main",
  };

  return (
    <Box component="footer" sx={footerStyles}>
      {/* <NewsletterSubscribe /> */}
      <Container>
        <SignUp />
        <Button href={"https://www.jeremyscottfitness.com/"}>JS Fitness</Button>
      </Container>
    </Box>
  );
}

export default Footer;
