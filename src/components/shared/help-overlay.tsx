import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import React from "react";

import { Box, Divider, Link, Text } from "@chakra-ui/react";

const HelpOverlay = () => {
  return (
    <Box className="body" width="100%" bg={"rgba(5, 84, 242, 0.5)"}>
      <Box
        className="card"
        style={{
          height: "auto",
          margin: "auto",
          padding: "30px",
          width: "70vh",
        }}
      >
        <h1 className="h1">Hi 👋</h1>
        <Text fontWeight="600" marginTop="1em">
          I learned HTML&CSS in the 6th grade because of a little chatroom
          builder website called{" "}
          <u>
            <b>Chatango</b>
          </u>
          , which is now more or less deprecated but that's how my love for
          webdev and uiux started.
        </Text>
        <Text fontWeight="600" marginTop="1em">
          When designing this portfolio website I wanted to capture the magic
          and whimsy I felt during that period by emulating the design trends in
          the early 2010's. (Yes, This most definitely includes the bubble
          cursor.) Feel free to look around, and don't be a stranger! Leave a
          message in the sidebar →
        </Text>
        <Text fontWeight="600" marginTop="1em">
          ☕️❤️️ Sent with love&coffee,<br></br>
          Linv
        </Text>
      </Box>
    </Box>
  );
};
export default HelpOverlay;
