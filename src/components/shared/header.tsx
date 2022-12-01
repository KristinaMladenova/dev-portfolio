import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import HelpOverlay from "./help-overlay";

const Header = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <Box className="header">
      <Box className="title">
        <h2 className="h2">→ welcome to lina.dev</h2>
        <Box
          zIndex="3"
          style={{
            height: "auto",
            width: "auto",
            padding: "0px",
            paddingLeft: "15px",
            paddingRight: "15px",
          }}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          transition="0.8s linear"
        >
          <h2 className="help">?</h2>
        </Box>
        {isShown && <HelpOverlay zIndex="4"></HelpOverlay>}
      </Box>
    </Box>
  );
};
export default Header;
