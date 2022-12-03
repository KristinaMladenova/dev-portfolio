import React from "react";
import { Box, Text, Grid, GridItem, Badge } from "@chakra-ui/react";
import { ProjectType } from "../../types/project-type";

const Project = ({ type, title, content, imageUrl }: ProjectType) => {
  return (
    <Box
      className="card"
      fontSize="13px"
      lineHeight="13px"
      w="100%"
      h="200px"
      padding="10px"
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
          colSpan={3}
          overflow="auto"
          padding="0px"
          textIndent="20px"
          textAlign="justify"
          paddingRight="10px"
        >
          <Badge>{type}</Badge>
          {content}
        </GridItem>

        <GridItem
          rowSpan={5}
          colSpan={2}
          rowStart={1}
          colStart={4}
          bg="white"
          border="1px solid blue"
        >
          <img src={imageUrl} />
        </GridItem>
        <GridItem
          rowSpan={1}
          colSpan={2}
          rowStart={5}
          colStart={4}
          textAlign="center"
        >
          <h1 className="h1">{title}</h1>
        </GridItem>
        <GridItem rowSpan={1} colSpan={3} rowStart={5} colStart={1}>
          <Text
            className="h2"
            style={{
              textAlign: "center",
              padding: "5px",
              zIndex: "0",
              fontSize: "13px",
              background: "blue",
              borderRadius: "0",
              color: "white",
              width: "100%",
            }}
          >
            learn more
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};
export default Project;
