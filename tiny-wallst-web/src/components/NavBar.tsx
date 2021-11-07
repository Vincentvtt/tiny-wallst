import { Box, Flex, Img } from "@chakra-ui/react";
import React from "react";

export const NavBar: React.FC = ({}) => {
  return (
    <Flex bg="#333333" color="white" p={8}>
      <Box textAlign="left" fontSize="1.25em">
        <Img
          float="left"
          src="/images/favicon.png"
          alt="simply wall street logo"
          mr={4}
        />
        Tiny Wall Street
      </Box>
    </Flex>
  );
};
