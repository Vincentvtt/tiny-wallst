import { Center, Flex } from "@chakra-ui/react";
import React from "react";

export const Footer: React.FC = ({}) => {
  return (
    <Flex justifyContent="center" bgColor="lightslategrey" p={8}>
      <Center color="white" fontSize="1em">
        © Vincent Tsai
      </Center>
    </Flex>
  );
};
