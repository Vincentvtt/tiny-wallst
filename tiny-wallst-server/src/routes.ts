import { getAllCompanies } from "./controllers/company";

export const Routes = [
  {
    path: "/companies",
    method: "get",
    action: getAllCompanies,
  },
];

export default Routes;
