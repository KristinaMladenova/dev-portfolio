import React from "react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import ProjectList from "./projects/project-list";
import { ProjectsArray } from "./../projects-array";

const Navbar = () => {
  return (
    <Tabs variant="unstyled" marginTop="30px" defaultIndex={0}>
      <TabList>
        <Tab
          className="contentFilter"
          _selected={{
            backgroundImage: "url(./src/assets/straight-arrow.svg)",
            backgroundPosition: "center left",
            backgroundRepeat: "no-repeat",
            backgroundSize: "15px",
            paddingLeft: "50px",
            borderRadius: "0",
            color: "#0554f2",
            fontWeight: "600",
            textDecorationLine: "underline",
          }}
        >
          all
        </Tab>
        <Tab
          className="contentFilter"
          _selected={{
            backgroundImage: "url(./src/assets/straight-arrow.svg)",
            backgroundPosition: "center left",
            backgroundRepeat: "no-repeat",
            backgroundSize: "15px",
            paddingLeft: "50px",
            borderRadius: "0",
            color: "#0554f2",
            fontWeight: "600",
            textDecorationLine: "underline",
          }}
        >
          graphic design
        </Tab>
        <Tab
          className="contentFilter"
          _selected={{
            backgroundImage: "url(./src/assets/straight-arrow.svg)",
            backgroundPosition: "center left",
            backgroundRepeat: "no-repeat",
            backgroundSize: "15px",
            paddingLeft: "50px",
            borderRadius: "0",
            color: "#0554f2",
            fontWeight: "600",
            textDecorationLine: "underline",
          }}
        >
          dev
        </Tab>
        <Tab
          className="contentFilter"
          _selected={{
            backgroundImage: "url(./src/assets/straight-arrow.svg)",
            backgroundPosition: "center left",
            backgroundRepeat: "no-repeat",
            backgroundSize: "15px",
            paddingLeft: "50px",
            border: " 0px",
            borderRadius: "0",
            color: "#0554f2",
            fontWeight: "600",
            textDecorationLine: "underline",
          }}
        >
          uiux
        </Tab>
        <Tab
          isDisabled
          _selected={{
            backgroundImage: "url(./src/assets/straight-arrow.svg)",
            backgroundPosition: "center left",
            backgroundRepeat: "no-repeat",
            backgroundSize: "15px",
            paddingLeft: "50px",
            border: " 0px",
            borderRadius: "0",
            color: "#0554f2",
            fontWeight: "600",
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
