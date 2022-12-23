import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import AboutMe from "./about-me";
import Navbar from "./tab-panels";
import ProfileCard from "./profile-card";
import { Grid, GridItem } from "@chakra-ui/react";

const Notebook = () => {
  return (
    <Box className="pagecontent" zIndex="4">
      <Box className="element" zIndex="3">
        <HStack spacing="15px" alignItems="end">
          <ProfileCard zIndex="0" />
          <AboutMe />
        </HStack>
      </Box>
      <Navbar />
    </Box>
  );
};

export default Notebook;
