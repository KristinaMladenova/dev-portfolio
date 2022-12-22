import { Box, Text, Grid, GridItem, HStack, Link } from "@chakra-ui/react";
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
        overflow: "hidden",
        justifyContent: "space-between",
        backgroundColor: "#ebf2fe",
      }}
      borderBottom="1px solid #0554f2"
    >
      <Grid
        className="grid"
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={0}
        maxH="25vh"
        margin="auto"
      >
        <GridItem rowSpan={1} colSpan={2}>
          <h1
            className="h1"
            style={{
              fontSize: "35px",
              color: "#0554f2",
            }}
          >
            Kristina Mladenova
          </h1>
        </GridItem>
        <GridItem
          h="20px"
          rowSpan={1}
          colSpan={1}
          textAlign="right"
          
        >
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
        <GridItem
          rowSpan={3}
          colSpan={3}
          w="100%"
          paddingTop="10px"
          overflowY="hidden"
        >
          <Text
            overflowY="auto"
            overflowX="hidden"
            h="100%"
            paddingRight="10px"
          >
            Designing intuitive user experiences is my passion! With 4 years of
            experience in design and a strong foundation in UI and development,
            I am confident in my ability to create designs that not only look
            great, but also deliver results. Whether it's a marketing project or
            a large-scale software application, I have the skills and
            willingness to tackle any design challenge. User research,
            prototyping, and implementation are just a few of the tools in my
            design toolkit. Let's work together to create something amazing!{" "}
            <br></br>
            <Text
              style={{
                textDecoration: "underline",
                fontWeight: "bold",
                fontSize: "10px",
                lineHeight: "10px",
              }}
            >
              → ! This website is under construction, currently optimised for
              Desktop & Chrome based browsers.
            </Text>
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
