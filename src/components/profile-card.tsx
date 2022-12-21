import {
  Image,
  Text,
  Card,
  CardBody,
  Divider,
  Stack,
  Box,
  Button,
} from "@chakra-ui/react";
import React from "react";
import InsetButton from "./shared/insetButton";

const ProfileCard = () => {
  return (
    <Card className="card" w="20%">
      <CardBody color="#0554f2" margin="auto">
        <Image
          src="src/assets/profile-picture.svg"
          h="100p%"
          w="100%"
          alt="This is me!~"
          style={{ borderRadius: "0", border: "1px solid #0554f2" }}
        />

        <Stack direction="column" mt="2" spacing="2" width="100%" marginTop="0">
          <Text display="inline" w="100%">
            <Image
              src="./src/assets/arrowstroke.svg"
              h="15px"
              alt="arrow pointing right"
              float="left"
            />
            <h1
              className="outlined-title"
              style={{ fontSize: "20px", lineHeight: "20px" }}
            >
              lina
            </h1>
          </Text>

          <Text
            w="100%"
            style={{
              textIndent: "0px",
              fontSize: "13px",
              lineHeight: "14px",
              fontWeight: "500",
              fontStyle: "italic",
            }}
          >
            This is my nickname based on a childhood teddybear named Lino 🧸️🎈
            <Box
              style={{
                marginTop: "5px",
                background: "#0554f2",
                color: "#ffffff",
                padding: "5px",
                textAlign: "center",
              }}
            >
              Download CV
            </Box>
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProfileCard;
