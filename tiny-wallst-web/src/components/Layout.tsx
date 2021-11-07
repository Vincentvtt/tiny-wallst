import { Container } from "@chakra-ui/react";
import React from "react";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container maxW="container.xl" minHeight="87vh" overflowX={"auto"}>
        {children}
      </Container>
      <Footer />
    </>
  );
};
