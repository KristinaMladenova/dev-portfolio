import { Image, Text, Card, CardBody, Divider, Stack } from "@chakra-ui/react";
import React from "react";

const ProfileCard = () => {
  return (
    <Card className="card" w="20%">
      <CardBody color="blue" margin="auto">
        <Image
          src="src/assets/profile-picture.svg"
          h="100p%"
          w="100%"
          alt="This is me!~"
          style={{ borderRadius: "0", border: "1px solid blue" }}
        />

        <Stack direction="column" mt="2" spacing="2" width="100%" marginTop="0">
          <Text display="inline" w="100%">
            <Image
              src="./src/assets/arrowstroke.svg"
              alt="arrow pointing right"
              float="left"
            />

            <h1 className="outlined-title">lina</h1>
          </Text>

          <Divider alignSelf="center" />

          <Text
            w="100%"
            style={{
              textIndent: "0px",
              fontSize: "10px",
              lineHeight: "10px",
              fontWeight: "500",
              fontStyle: "italic",
            }}
          >
            This is my nickname based on a childhood teddybear named Lino 🧸️🎈
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProfileCard;
