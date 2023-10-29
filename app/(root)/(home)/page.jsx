"use client";

import useTabStore from "@/libs/stores/useTab";
import { TabContext, TabPanel } from "@mui/lab";

export default function Home() {
  const tabValue = useTabStore((state) => state.tabValue);

  return (
    <div>
      <TabContext value={tabValue}>
        <TabPanel value="one">Item One</TabPanel>
        <TabPanel value="two">Item Two</TabPanel>
        <TabPanel value="three">Item Three</TabPanel>
      </TabContext>
    </div>
  );
}
