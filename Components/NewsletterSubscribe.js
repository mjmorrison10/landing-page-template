import { Box } from "@mui/material";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { mailChimpFormActionURL } from "../public/Settings/BaseSettings";

// const NewsletterSubscribe = () => {

//     const MAILCHIMP_URL = mailChimpFormActionURL

//     return (
//       <MailchimpSubscribe
//         url={ MAILCHIMP_URL }
//         render={ ( props ) => {
//           const { subscribe, status, message } = props || {};
//           return (
//             <NewsletterForm
//               status={ status }
//               message={ message }
//               onValidated={ formData => subscribe( formData ) }
//             />
//           );
//         } }
//       />
//     );
//   };

//   export default NewsletterSubscribe;

const url = mailChimpFormActionURL;

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url} />;

const defaultStyles = {
  display: "flex",
  flexDirection: "column",
  gap: 10,
  bgcolor: "blue",
  width: "100vw",
};

// use the render prop and your custom form
export const NewsletterSubscribe = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <Box sx={defaultStyles}>
        <SimpleForm onSubmitted={(formData) => subscribe(formData)} />
        {status === "sending" && (
          <div style={{ color: "blue" }}>sending...</div>
        )}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div style={{ color: "green" }}>Subscribed !</div>
        )}
      </Box>
    )}
  />
);
