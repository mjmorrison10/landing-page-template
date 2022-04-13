import "../styles/globals.css";
import "../styles/styles.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "../Components/Header";
import {
  createTheme,
  ThemeProvider,
  useTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { blue, blueGrey, grey, lightGreen, orange } from "@mui/material/colors";
import { Container } from "@mui/material";


let theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Share Tech Mono",
          letterSpacing: "0.05rem",
        },
      },
    },
  },

  // typography: {
  //   // fontFamily: ["Roboto", "Bangers", "Montserrat", "Share Tech Mono"].join(
  //   //   ", "
  //   // ),

  //   fontFamily: ["'Roboto", "Bangers", "Montserrat", "Share Tech Mono'"].join(
  //     "', '"
  //   ),

  //   primary: {
  //     fontFamily: "Bangers",
  //   },
  //   secondary: {
  //     fontFamily: "Montserrat",
  //   },
  //   accent: {
  //     fontFamily: "Share Tech Mono",
  //   },
  // },

  // backgroundColor: `hsla(239, 85%, 96%, .9)`,

  palette: {
    primary: {
      light: blueGrey[50],
      main: blueGrey[100],
      dark: blueGrey[200],
    },
    secondary: {
      light: orange[300],
      main: orange[500],
      dark: orange[700],
      contrastText: grey[50],
    },
    info: {
      light: `hsl(239, 85%, 61%)`,
      main: `hsl(239, 85%, 46%)`,
      dark: `hsl(239, 90%, 31%)`,
    },
    matrix: {
      light: lightGreen["A200"],
      main: lightGreen["A400"],
      dark: lightGreen["A700"],
      contrastText: grey[900],
    },

    // Dark Background Styles //

    darkBgPrimary: {
      light: `hsla(239, 85%, 96%, 1)`,
      main: `hsla(239, 85%, 91%, 1)`,
      dark: `hsla(239, 85%, 86%, 1)`,
      contrastText: "hsl(239, 85%, 6%)",
      comp: {
        light: `hsla(59, 85%, 96%, 1)`,
        main: `hsla(59, 85%, 91%, 1)`,
        dark: `hsla(59, 85%, 86%, 1)`,
      },
    },
    darkBgSecondary: {
      light: `hsla(180, 85%, 90%, 1)`,
      main: `hsla(180, 85%, 85%, 1)`,
      dark: `hsla(180, 85%, 80%, 1)`,
      comp: {
        light: `hsl(0, 85%, 90%)`,
        main: `hsl(0, 85%, 85%)`,
        dark: `hsl(0, 85%, 80%)`,
      },
    },
    darkBg: {
      light: `hsla(239, 85%, 17%, 1)`,
      main: `hsla(239, 85%, 12%, 1)`,
      dark: `hsla(239, 85%, 7%, 1)`,
      contrastText: `hsla(239, 85%, 85%, 1)`,
      opacity90: `hsla(239, 85%, 6%, 0.9)`,
      opacity50: `hsla(239, 85%, 6%, 0.5)`,
      secondary: `hsla(180, 85%, 15%, 1)`,
    },
    infoRev: {
      light: blue[50],
      main: blue[100],
      dark: blue[200],
      contrastText: "hsl(239, 85%, 6%)",
    },
  },
});

theme = responsiveFontSizes(theme);

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
