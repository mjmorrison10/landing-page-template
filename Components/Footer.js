import { Box } from "@mui/material";
import React from "react";

function Footer() {
  const footerStyles = {
    minHeight: 300,
    bgcolor: "darkBg.main",
    color: "darkBgPrimary.main",
  };

  
  return (
    <Box component="footer" sx={footerStyles}>
      footer
    </Box>
  );
}

export default Footer;
