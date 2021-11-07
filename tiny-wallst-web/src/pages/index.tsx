import React from "react";
import http from "../api/http";
import CompanyTable from "../components/CompanyTable";
import { Layout } from "../components/Layout";
import Company from "../types/company";

interface AppProps {
  companies: Company[];
}

const Home = ({ companies }: AppProps) => {
  const data = React.useMemo(() => companies, [companies]);
  return (
    <Layout>
      <CompanyTable data={data} />
    </Layout>
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
    console.error(err);
    return {
      notFound: true,
    };
  }
}

export default Home;
