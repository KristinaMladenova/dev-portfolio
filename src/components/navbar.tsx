import React, { useState } from "react";
import {
  Box,
  Link,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Uiux from "./projects/uiux-projects";
import AllProjects from "./projects/all-projects";
import DesignProjects from "./projects/design-projects";
import DevProjects from "./projects/dev-projects";
import Blog from "./projects/blog";

const Navbar = () => {
  return (
    <Tabs variant="unstyled" defaultIndex={0}>
      <TabList>
        <Tab
          _selected={{
            fontWeight: "bolder",
            borderBottom: "1px solid blue",
            borderRadius: "0",
          }}
          _hover={{
            fontWeight: "bolder",
            borderBottom: "1px solid blue",
            borderRadius: "0",
          }}
        >
          all
        </Tab>
        <Tab
          _selected={{
            fontWeight: "bolder",
            borderBottom: "1px solid blue",
            borderRadius: "0",
          }}
          _hover={{
            fontWeight: "bolder",
            borderBottom: "1px solid blue",
            borderRadius: "0",
          }}
        >
          graphic design
        </Tab>
        <Tab
          _selected={{
            fontWeight: "bolder",
            borderBottom: "1px solid blue",
            borderRadius: "0",
          }}
          _hover={{
            fontWeight: "bolder",
            borderBottom: "1px solid blue",
            borderRadius: "0",
          }}
        >
          dev
        </Tab>
        <Tab
          _selected={{
            fontWeight: "bolder",
            borderBottom: "1px solid blue",
            borderRadius: "0",
          }}
          _hover={{
            fontWeight: "bolder",
            borderBottom: "1px solid blue",
            borderRadius: "0",
          }}
        >
          uiux
        </Tab>
        <Tab
          _selected={{
            fontWeight: "bolder",
            borderBottom: "1px solid blue",
            borderRadius: "0",
          }}
          _hover={{
            fontWeight: "bolder",
            borderBottom: "1px solid blue",
            borderRadius: "0",
          }}
        >
          blog ᴺᴱᵂ
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <AllProjects />
        </TabPanel>
        <TabPanel>
          <DesignProjects />
        </TabPanel>
        <TabPanel>
          <DevProjects />
        </TabPanel>
        <TabPanel>
          <Uiux />
        </TabPanel>
        <TabPanel>
          <Blog />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
export default Navbar;
