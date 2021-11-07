import { Container } from "@chakra-ui/react";
import React from "react";
import http from "../api/http";
import CompanyTable from "../components/CompanyTable";
import { NavBar } from "../components/NavBar";
import { HomeProps } from "../types/home-props";

const Home = ({ companies }: HomeProps) => {
  const data = React.useMemo(() => companies, [companies]);
  return (
    <>
      <NavBar />
      <Container maxW="container.xl" vh={90} overflowX={"auto"}>
        <CompanyTable data={data} />
      </Container>
    </>
  );
};

export async function getStaticProps() {
  try {
    const res = await http.get("/companies");
    const companies = await res.data;

    return {
      props: {
        companies,
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
}

export default Home;
