import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { createTheme,ThemeProvider } from "@mui/material/styles";





export default function ColorTabs() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
  

  return (
    <ThemeProvider theme={customTheme}>
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Home" />
        <Tab value="two" label="Best Matches" />
        <Tab value="three" label="Favourites" />
      </Tabs>
    </Box>
    </ThemeProvider>
  );
}
