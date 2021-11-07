import { Context } from "koa";
import {
  CompanyWithPriceAndVolatility,
  getAllCompaniesWithPriceAndVolatility,
} from "../services/company-service";

export async function getCompanies(context: Context): Promise<CompanyWithPriceAndVolatility[]> {
  return (context.body = await getAllCompaniesWithPriceAndVolatility());
}
