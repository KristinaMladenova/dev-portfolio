import {
  Icon,
  Box,
  Text,
  Grid,
  GridItem,
  HStack,
  Tag,
  Link,
  IconButton,
  SimpleGrid,
  AbsoluteCenter,
} from "@chakra-ui/react";
import React from "react";

import {
  TiSocialLinkedin,
  TiSocialInstagramCircular,
  TiSocialGithub,
} from "react-icons/ti";
import { SiBehance } from "react-icons/si";
const AboutMe = () => {
  return (
    <Box
      className="element"
      style={{
        height: "95%",
        overflow: "hidden",
        justifyContent: "space-between",
      }}
      borderBottom="1px solid blue"
    >
      <Grid
        className="grid"
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={0}
        height="200px"
        margin="auto"
      >
        <GridItem rowSpan={1} h="20px" colSpan={2}>
          <h1 className="h1" style={{ fontSize: "20px", color: "#0554f2" }}>
            Kristina Mladenova
          </h1>
        </GridItem>
        <GridItem h="20px" rowSpan={1} colSpan={1} textAlign="right">
          <Link href="https://github.com/KristinaMladenova" isExternal>
            <TiSocialGithub className="socials" />
          </Link>
          <Link href="https://www.linkedin.com/in/kmladenova/" isExternal>
            <TiSocialLinkedin className="socials" />
          </Link>
          <Link
            display="none"
            href="https://www.linkedin.com/in/kmladenova/"
            isExternal
          >
            <SiBehance className="socials" />
          </Link>
          <Link href="https://www.instagram.com/gg.linv/" isExternal>
            <TiSocialInstagramCircular className="socials" />
          </Link>{" "}
        </GridItem>
        <GridItem rowSpan={3} colSpan={3} w="100%" overflowY="hidden">
          <Text overflowY="scroll" h="100%" paddingRight="10px">
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
        <GridItem
          rowSpan={1}
          colSpan={3}
          textAlign="justify"
          verticalAlign="middle"
          margin="auto"
          h="20px"
          w="100%"
          padding="p"
        >
          <HStack h="100$" w="100%">
            <Box
              as="span"
              className="outlined-title"
              w="auto"
              style={{
                fontSize: "20px",
                verticalAlign: "middle",
                textAlign: "left",
              }}
            >
              #
            </Box>
            <Box as="span" w="100%" className="tag">
              minimalism, accesibilty, clean code, usablility, open source, good
              design principles
            </Box>
          </HStack>

          {/* <Tag className="tag">minimalism</Tag>
          <Tag className="tag">accesibilty</Tag>
          <Tag className="tag">clean code</Tag>
          <Tag className="tag">usablility</Tag>
          <Tag className="tag">open source</Tag> */}
        </GridItem>
      </Grid>
    </Box>
  );
};
export default AboutMe;
