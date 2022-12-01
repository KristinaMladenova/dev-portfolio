import { Box, Text, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const AboutMe = () => {
  return (
    <Box
      className="element"
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        justifyContent: "space-between",
      }}
      borderBottom="1px solid blue"
    >
      <Grid
        className="grid"
        templateRows="repeat(8, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={3}
        top="0px;"
        height="300px"
      >
        <GridItem rowSpan={1} colSpan={2} />
        <GridItem rowSpan={1} colSpan={1}>
          <h1 className="h1">Kristina Mladenova</h1>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} textAlign="right">
          <h3 className="socials">i</h3>
          <h3 className="socials">f</h3>
          <h3 className="socials">li</h3> .
        </GridItem>
        <GridItem
          rowSpan={5}
          colSpan={2}
          w="100%"
          height="100%"
          overflowY="auto"
          paddingRight="10px"
        >
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni
            sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut eni sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut eni sunt in culpa
            qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut eni sunt in culpa
            qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut eni sunt in culpa
            qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut eni sunt in culpa
            qui officia deserunt mollit anim id est laborum.
          </Text>
        </GridItem>
        <GridItem rowSpan={1} colSpan={2}>
          <Text>
            <span className="outlined-title">#</span> . Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};
export default AboutMe;
