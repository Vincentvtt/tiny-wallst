import { getAllCompaniesWithPriceAndScore } from "../controllers/company-controller";

export interface Routes {
  path: string;
  method: string;
  action: Function;
}

export const CompanyRoutes: Routes[] = [
  {
    path: "/companies",
    method: "get",
    action: getAllCompaniesWithPriceAndScore,
  },
];

export default CompanyRoutes;
