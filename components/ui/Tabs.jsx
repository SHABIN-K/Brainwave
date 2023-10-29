"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import useTabStore from "@/libs/stores/useTab";

export default function TabsPanel() {
  const { setState, tabValue } = useTabStore();

  const handleChange = (event, newValue) => {
    setState({ tabValue: newValue });
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={tabValue}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Home" sx={{ fontWeight: "bold" }} />
        <Tab value="two" label="Best Matches" sx={{ fontWeight: "bold" }} />
        <Tab value="three" label="Favourites" sx={{ fontWeight: "bold" }} />
      </Tabs>
    </Box>
  );
}
