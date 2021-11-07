import { Box, Container } from "@chakra-ui/layout";
import React from "react";
import CompanyTable from "../components/CompanyTable";
import { NavBar } from "../components/NavBar";

export default function NotFound() {
  return (
    <>
      <NavBar />
      <Container maxW="container.xl" vh={90}>
        <Box color="red" textAlign="center" mt={4}>Data could not be fetched, please ensure the server is running!</Box>
        <CompanyTable data={[]} />
      </Container>
    </>
  );
};
