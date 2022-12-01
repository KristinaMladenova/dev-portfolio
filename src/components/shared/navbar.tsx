import React from "react";
import { Box, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box color="white" width="100%" h="auto" bg="blue">
      <Link>→ all</Link>
      <Link>graphic design</Link>
      <Link>dev</Link>
      <Link>uiux</Link>
    </Box>
  );
};
export default Navbar;
