import {
  Image,
  Box,
  Text,
  Grid,
  GridItem,
  Badge,
  Button,
  Link,
} from "@chakra-ui/react";
import { ProjectType } from "../../types/project-type";
import InsetButton from "../shared/insetButton";
import React from "react";

const Project = ({ type, title, content, imageUrl, readMore }: ProjectType) => {
  return (
    <>
      <Box
        className="card"
        lineHeight="15px"
        w="100%"
        h="28.52%"
        padding="10px"
        marginBottom="30px"
        overflow="hidden"
      >
        <Grid
          h="100%"
          templateRows="repeat(5, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={3}
        >
          <GridItem
            rowSpan={4}
            colSpan={4}
            overflow="auto"
            padding="0px"
            textAlign="justify"
            paddingRight="10px"
          >
            <h1 class="h1">{title}</h1>
            <br></br>
            {content}
          </GridItem>

          <GridItem
            rowSpan={5}
            colSpan={1}
            rowStart={1}
            colStart={5}
            bg="white"
            border="1px solid blue"
            backgroundImage={imageUrl}
            backgroundSize="cover"
            backgroundPosition="center center"
          >
            <Box
              backgroundImage="linear-gradient(transparent,transparent, blue)"
              backgroundBlendMode="color"
              h="100%"
              w="100%"
            />
          </GridItem>
          <GridItem
            rowSpan={1}
            colSpan={2}
            rowStart={5}
            colStart={5}
            textAlign="center"
          >
            <h1
              className="h1"
              style={{
                textShadow:
                  "-1.5px -1.5px 0 blue, 0 -1.5px 0 blue, 1.5px -1.5px 0 blue, 1.5px 0 0 blue, 1.5px 1.5px 0 blue, 0 1.5px 0 blue, -1.5px 1.5px 0 blue, -1.5px 0 0 blue",
                color: "white",
              }}
            >
              {title}
            </h1>
          </GridItem>
          <GridItem rowSpan={1} colSpan={3} rowStart={5} colStart={1}>
            <a href={readMore}>
              <InsetButton>learn more</InsetButton>
            </a>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};
export default Project;
