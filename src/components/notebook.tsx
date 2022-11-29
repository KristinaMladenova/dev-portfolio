import { Box, Text } from "@chakra-ui/react";
import React from "react";
import ProfileCard from "./profile-card";

const Notebook = () => {
    
    return (<Box className='pagecontent'>
    <ProfileCard />

    <Box className='element' style={{ width: "68%", height: "250px", float: "right" }}
      borderBottom="1px solid blue">
      <h1 className='h1'>Kristina Mladenova</h1>

      <Box className='element' style={{ float: "right"}}>
        <h3 className='socials'>i</h3>
        <h3 className='socials'>f</h3>
        <h3 className='socials'>li</h3>
      </Box>

      <Text style={{paddingRight:"10px", height:"150px",}} overflowY="auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
      
      <Text style={{ textIndent: "10px", paddingTop:"10px" }}><span className='outlined-title'>#</span> .
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      </Text>
    </Box>
</Box>);
}

export default Notebook;