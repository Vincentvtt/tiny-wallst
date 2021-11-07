import { Box } from "@chakra-ui/layout";
import React from "react";
import CompanyTable from "../components/CompanyTable";
import { Layout } from "../components/Layout";

export default function NotFound() {
  return (
    <Layout>
        <Box color="red" textAlign="center" mt={4}>
          Data could not be fetched, please ensure the server is running!
        </Box>
        <CompanyTable data={[]} />
    </Layout>
  );
}
