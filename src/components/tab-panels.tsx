import React from "react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import ProjectList from "./projects/project-list";
import { ProjectsArray } from "./../projects-array";

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
          _active={{
            fontWeight: "bolder",
            border: "1px solid pink",
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
          <ProjectList projects={ProjectsArray} />
        </TabPanel>
        <TabPanel>
          <ProjectList
            projects={ProjectsArray.filter((p) => p.type === "design")}
          />
        </TabPanel>
        <TabPanel>
          <ProjectList
            projects={ProjectsArray.filter(
              (p) => p.type === "dev" || p.type === "dev, uiux"
            )}
          />
        </TabPanel>
        <TabPanel>
          <ProjectList
            projects={ProjectsArray.filter(
              (p) => p.type === "uiux" || p.type === "dev, uiux"
            )}
          />
        </TabPanel>
        <TabPanel>
          <ProjectList
            projects={ProjectsArray.filter((p) => p.type === "blog")}
          />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
export default Navbar;
