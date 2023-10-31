"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import useTabStore from "@/libs/stores/useTab";

const tabStyle = {
  fontWeight: "500",
  textTransform: "capitalize",
  fontSize: "16px",
};

const tabItems = {
  1: {
    value: "one",
    label: "Home",
  },
  2: {
    value: "two",
    label: "Best Matches",
  },
  3: {
    value: "three",
    label: "Favourites",
  },
};

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
        {Object.keys(tabItems).map((key) => {
          const item = tabItems[key];
          return (
            <Tab
              key={item.value}
              value={item.value}
              label={item.label}
              sx={tabStyle}
            />
          );
        })}
      </Tabs>
    </Box>
  );
}
