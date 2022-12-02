import { Icon, Box, Text, Grid, GridItem, HStack, Tag } from "@chakra-ui/react";
import React from "react";
import Typewriter from "typewriter-effect";

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
        <GridItem rowSpan={2} colSpan={1}>
          <h1 className="h1" style={{ color: "#0554f2" }}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Kristina<br>Mladenova")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(30)
                  .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
            />
          </h1>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} colStart={2} />
        <GridItem rowSpan={1} colSpan={1} textAlign="right">
          <h3 className="socials">ig</h3>
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
          <HStack>
            <span className="h2">i value #</span>
            <Tag className="tag">graphic design</Tag>
            <Tag className="tag">dev</Tag>
            <Tag className="tag">uiux</Tag>
            <Tag className="tag">open source</Tag>
          </HStack>
        </GridItem>
      </Grid>
    </Box>
  );
};
export default AboutMe;
