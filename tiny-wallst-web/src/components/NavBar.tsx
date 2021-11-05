import { Box, Center, Img } from "@chakra-ui/react";
import React from "react";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <Box bg="#333333" color="white" p={8}>
      <Box textAlign="left" fontSize="1.25em">
        <Img float="left" src="/images/favicon.png" alt="simply wall street logo" mr={4}/>
        Tiny Wall Street
      </Box>
    </Box>
  );
};
