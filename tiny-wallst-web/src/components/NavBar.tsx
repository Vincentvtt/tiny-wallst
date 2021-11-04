import { Box, Center } from "@chakra-ui/react";
import React from "react";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <Box bg="tan" p={8}>
      <Center>Tiny Wall Street</Center>
    </Box>
  );
};
