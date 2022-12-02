import { Box } from "@chakra-ui/react";
import React from "react";
import Blog from "./blog";
import DesignProjects from "./design-projects";
import DevProjects from "./dev-projects";
import Uiux from "./uiux-projects";

const AllProjects = () => {
  return (
    <Box>
      <DesignProjects />
      <DevProjects />
      <Uiux />
      <Blog />
    </Box>
  );
};
export default AllProjects;
