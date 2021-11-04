import { Container } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import http from "../api/http";
import { Company } from "../types/company";

const Index = () => {
  const [companies, setCompanies] = useState([] as Company[]);

  useEffect(() => {
    http.get("/companies").then((res) => {
      setCompanies(res.data);
    });
  }, []);

  console.log(companies);
  return (
    <Container height="100vh">
      {companies.length > 0
        ? companies.map((company) => {
            return <li key={company.id}>{company.name}</li>;
          })
        : null}
    </Container>
  );
};

export default Index;
