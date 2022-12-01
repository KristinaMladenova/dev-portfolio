import { Box, Text, Card, CardBody, Divider, Stack } from "@chakra-ui/react";
import React from "react";

const ProfileCard = () => {
  return (
    <Card className="card">
      <CardBody className="cardBody">
        <img
          src="https://joeschmoe.io/api/v1/jazebelle"
          width="100%"
          alt="This is me!~"
          style={{ borderRadius: "0", border: "1px solid blue" }}
        />

        <Stack direction="column" mt="2" spacing="2" width="100%">
          <Text>
            ↳ <h1 className="outlined-title"> lina</h1>
          </Text>

          <Divider />

          <p>
            "This is my nickname based on a childhood teddybear named Lino
            🧸️🎈"
          </p>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProfileCard;
