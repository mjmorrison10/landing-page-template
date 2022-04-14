import { Box } from "@mui/material";
import React from "react";
import SignUp from "./EmailForm/signUp";
import NewsletterForm from "./NewsletterForm";
import { NewsletterSubscribe } from "./NewsletterSubscribe";

function Footer() {
  const footerStyles = {
    minHeight: 300,
    bgcolor: "darkBg.main",
    color: "darkBgPrimary.main",
  };

  return (
    <Box component="footer" sx={footerStyles}>
      {/* <NewsletterSubscribe /> */}
      <SignUp />
    </Box>
  );
}

export default Footer;
