import { Box, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import HelpOverlay from "./help-overlay";

import { FaQuestion } from "react-icons/fa";
const Header = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <Box className="header" zIndex="100">
      <Box className="title" paddingTop="10px">
        <h2 className="h2">→ welcome to lina.dev</h2>
        <Box
          zIndex="3"
          style={{
            height: "auto",
            width: "auto",
            padding: "0px",
            paddingLeft: "15px",
          }}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          <IconButton
            size="s"
            color="#4b86fb"
            padding="5px"
            borderRadius="50%"
            aria-label="LinkedIn"
            icon={<FaQuestion />}
          />
        </Box>
        {isShown && <HelpOverlay zIndex="100"></HelpOverlay>}
      </Box>
    </Box>
  );
};
export default Header;
