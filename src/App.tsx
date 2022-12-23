import "./App.scss";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Notebook from "./components/notebook";
import Header from "./components/shared/header";
import Footer from "./components/shared/footer";
import HelpOverlay from "./components/shared/help-overlay";

function App() {
  return (
    <ChakraProvider>
      <Box className="body">
        <Box className="main">
          <Header zIndex="2" id="totop" />

          <Notebook zIndex="0" />

          <Footer />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
