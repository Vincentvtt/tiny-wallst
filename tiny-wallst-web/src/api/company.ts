import http from "./http";
import { Company } from "../types/company";

export const getCompanies = (): Promise<Company[]> => {
  return http.get("/companies").then((res) => res.data);
};
