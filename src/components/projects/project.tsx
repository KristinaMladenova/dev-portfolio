import {
  Box,
  Grid,
  GridItem,
  AccordionButton,
  Accordion,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Image,
} from "@chakra-ui/react";
import { ProjectType } from "../../types/project-type";
import React from "react";

const Project = ({
  type,
  title,
  content,
  imageUrl,
  media,
  link,
  caseStudy,
  takeaway,
  conclusion,
}: ProjectType) => {
  return (
    <>
      <Box
        className="card"
        w="100%"
        h="28.52%"
        padding="10px"
        marginBottom="30px"
        overflow="hidden"
      >
        <Grid
          h="100%"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={3}
        >
          <GridItem
            rowSpan={1}
            colSpan={2}
            rowStart={1}
            colStart={1}
            overflow="auto"
            padding="0px"
            textAlign="justify"
            paddingRight="10px"
            color="#4b86fb"
            minHeight="200px"
          >
            <h1 className="h1">{title}</h1>

            <br></br>
            <Badge className="badge" marginRight="10px">
              {type}
            </Badge>
            {content}
          </GridItem>

          <GridItem rowSpan={1} colSpan={2} rowStart={1} colStart={3}>
            <Box
              bg="#ffffff"
              border="1px solid #0554f2"
              backgroundImage={imageUrl}
              backgroundSize="cover"
              backgroundPosition="top center"
              h="100%"
              w="100%"
            >
              <Box
                backgroundImage="linear-gradient(transparent,transparent, #0554f2)"
                backgroundBlendMode="color"
                h="100%"
                w="100%"
              />
            </Box>
          </GridItem>
          <GridItem
            rowSpan={1}
            colSpan={2}
            rowStart={1}
            colStart={3}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <a href={link} target="_blank">
              <h1
                className="h1"
                style={{
                  textShadow:
                    "-1.5px -1.5px 0 #0554f2, 0 -1.5px 0 #0554f2, 1.5px -1.5px 0 #0554f2, 1.5px 0 0 #0554f2, 1.5px 1.5px 0 #0554f2, 0 1.5px 0 #0554f2, -1.5px 1.5px 0 #0554f2, -1.5px 0 0 #0554f2",
                  color: "#ffffff",
                }}
              >
                {title}
              </h1>
            </a>
          </GridItem>
        </Grid>
        <Accordion allowMultiple allowToggle className="accordion">
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Case Study
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {media.map((x) => {
                <Image src={x} />;
              })}
              {caseStudy}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Key Takeaways
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>{takeaway}</AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Conclusion
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>{conclusion}</AccordionPanel>
          </AccordionItem>
        </Accordion>{" "}
        {/* <GridItem rowSpan={1} colSpan={3} rowStart={5} colStart={1}>
            <a href={link}>
              <InsetButton>learn more</InsetButton>
            </a>
          </GridItem> */}
      </Box>
    </>
  );
};
export default Project;
