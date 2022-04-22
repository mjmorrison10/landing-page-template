import { Box, Typography } from "@mui/material";
import React from "react";

function SignUp() {
  const content = {
    header: `Subscribe to our Newsletter!`,
  };

  const formContainerStyles = {
    display: "flex",
    // bgcolor: "blue",
    position: "relative",
    // textAlign: "left",
    // padding: "10px 0 10px 3%",
  };

  const formInnerContainerStyles = {
    width: "100%",
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
    gridTemplateAreas: {
      xs: `
    "title"
    "email"
    "first"
    "last"
    "phone"
    "birthday"
    `,

      md: `
    "title title"
    "email email"
    "first last"
    "phone birthday"
    `,
    },
    gap: 1,
    // flexDirection: "column",
    p: 2,
  };

  const fieldGroup = (area) => {
    return {
      display: "flex",
      flexDirection: "column",
      clear: "left",
      position: "relative",
      width: "100%",
      paddingBottom: 2,
      minHeight: "50px",
      gridArea: area,
    };
  };

  const fieldGroupInputStyles = {
    display: "block",
    width: "100%",
    padding: "8px 0",
    textIndent: "2%",
    bgcolor: "darkBg.opacity50",
    color: "darkBg.contrastText",
  };

  const birthdayFieldGroupContainerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: { xs: "center", md: "flex-start" },
  };

  const mmddStyles = {};

  const birthdayFieldGroupInputStyles = {
    width: 30,
    height: 30,
    padding: "2px",
    textIndent: "2%",
    bgcolor: "darkBg.opacity50",
    color: "darkBg.contrastText",
  };

  const FieldGroupLabelStyles = {
    display: "block",
    marginBottom: "3px",
  };

  const asteriskStyle = {
    color: "#e85c41",
    fontSize: "150%",
    fontWeight: "normal",
    position: "relative",
    top: "5px",
  };

  const indicatesRequiredStyle = {
    textAlign: "right",
    fontSize: "11px",
    marginRight: "4%",
  };

  return (
    <Box
      component="form"
      sx={formContainerStyles}
      action="https://app.us14.list-manage.com/subscribe/post?u=9a8433dc709968b7f8d20e055&id=c48846442f"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate"
      target="_blank"
      noValidate
    >
      <Box sx={formInnerContainerStyles} id="mc_embed_signup_scroll">
        {/* Title */}
        <Box sx={fieldGroup("title")}>
          <Typography variant="h2">{content.header}</Typography>
          <Typography sx={indicatesRequiredStyle}>
            <Box component="span" sx={asteriskStyle}>
              *
            </Box>{" "}
            indicates required
          </Typography>
        </Box>

        {/* Email */}
        <Box sx={fieldGroup("email")}>
          <Typography
            component="label"
            sx={FieldGroupLabelStyles}
            htmlFor="mce-EMAIL"
          >
            Email Address
            <Box component="span" sx={asteriskStyle}>
              *
            </Box>
          </Typography>

          <Box
            component="input"
            sx={fieldGroupInputStyles}
            type="email"
            // defaultValue
            name="EMAIL"
            className="required email"
            id="mce-EMAIL"
          />
        </Box>

        {/* First Name */}
        <Box sx={fieldGroup("first")}>
          <Typography
            component="label"
            sx={FieldGroupLabelStyles}
            htmlFor="mce-FNAME"
          >
            First Name
          </Typography>
          <Box
            component="input"
            sx={fieldGroupInputStyles}
            type="text"
            // defaultValue
            name="FNAME"
            className
            id="mce-FNAME"
          />
        </Box>

        {/* Last Name */}
        <Box sx={fieldGroup("last")}>
          <Typography
            component="label"
            sx={FieldGroupLabelStyles}
            htmlFor="mce-LNAME"
          >
            Last Name
          </Typography>
          <Box
            component="input"
            sx={fieldGroupInputStyles}
            type="text"
            // defaultValue
            name="LNAME"
            className
            id="mce-LNAME"
          />
        </Box>

        {/* Phone Number */}
        <Box sx={fieldGroup("phone")}>
          <Typography
            component="label"
            sx={FieldGroupLabelStyles}
            htmlFor="mce-PHONE"
          >
            Phone Number
          </Typography>
          <Box
            component="input"
            sx={fieldGroupInputStyles}
            type="text"
            name="PHONE"
            className
            // defaultValue
            id="mce-PHONE"
          />
        </Box>

        {/* Birthday */}
        <Box sx={fieldGroup("birthday")}>
          <Box
            component="label"
            sx={FieldGroupLabelStyles}
            htmlFor="mce-BIRTHDAY-month"
          >
            Birthday
          </Box>

          <Box sx={birthdayFieldGroupContainerStyles} className="datefield">
            <Box
              sx={birthdayFieldGroupInputStyles}
              component="input"
              className="birthday "
              type="text"
              pattern="[0-9]*"
              //   defaultValue
              placeholder="MM"
              size={2}
              maxLength={2}
              name="BIRTHDAY[month]"
              id="mce-BIRTHDAY-month"
            />
            /
            <Box
              sx={birthdayFieldGroupInputStyles}
              component="input"
              className="birthday "
              type="text"
              pattern="[0-9]*"
              //   defaultValue
              placeholder="DD"
              size={2}
              maxLength={2}
              name="BIRTHDAY[day]"
              id="mce-BIRTHDAY-day"
            />
            <Box component="span" className="small-meta nowrap" sx={mmddStyles}>
              ( mm / dd )
            </Box>
          </Box>
        </Box>

        <div id="mce-responses" className="clear foot">
          <div
            className="response"
            id="mce-error-response"
            style={{ display: "none" }}
          />
          <div
            className="response"
            id="mce-success-response"
            style={{ display: "none" }}
          />
        </div>
        {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
        <div
          style={{ position: "absolute", left: "-5000px" }}
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_9a8433dc709968b7f8d20e055_c48846442f"
            tabIndex={-1}
            // defaultValue
          />
        </div>
        <div className="optionalParent">
          <div className="clear foot">
            <input
              type="submit"
              //   defaultValue="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            />
            {/* <p className="brandingLogo">
                  <a
                    href="http://eepurl.com/hZCpqb"
                    title="Mailchimp - email marketing made easy and fun"
                  >
                    <img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" />
                  </a>
                </p> */}
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default SignUp;
