import { Box, Text } from "@chakra-ui/react";
import React from "react";
import AboutMe from "./about-me";
import Navbar from "./navbar";
import Project from "./shared/project";
import ProfileCard from "./profile-card";
import { Grid, GridItem } from "@chakra-ui/react";

const Notebook = () => {
  return (
    <Box className="pagecontent">
      <Box className="element" width="100%">
        <Grid
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={4}
          width="100%"
          top="0px;"
        >
          <GridItem rowSpan={1} colSpan={1}>
            <ProfileCard zIndex="2" />
          </GridItem>
          <GridItem rowSpan={1} colSpan={2}>
            <AboutMe />
          </GridItem>
        </Grid>
      </Box>

      <Navbar />
    </Box>
  );
};

export default Notebook;
