import { getAllCompaniesWithPriceAndScore } from "../controllers/company-controller";

export const CompanyRoutes = [
  {
    path: "/companies",
    method: "get",
    action: getAllCompaniesWithPriceAndScore,
  },
];

export default CompanyRoutes;
