"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const MuiProvider = ({ children }) => {
  const customTheme = createTheme({
    palette: {
      primary: {
        main: "#000000",
      },
      secondary: {
        main: "#bcbcbc",
      },
    },
  });
  return <ThemeProvider theme={customTheme}>{children}</ThemeProvider>;
};

export default MuiProvider;
